import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("navigation follows document order and career selection works", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  const nav = page.getByRole("navigation", { name: "Portfolio sections" });
  await expect(nav.getByRole("link")).toHaveText(["Projects", "Skills", "Career", "Contact"]);
  const positions = await page.locator("#projects, #stack, #career, #contact").evaluateAll(
    (elements) => elements.map((element) => element.id),
  );
  expect(positions).toEqual(["projects", "stack", "career", "contact"]);
  await nav.getByRole("link", { name: "Career", exact: true }).click();
  await expect(page).toHaveURL(/#career$/);
  const education = page.getByRole("button", { name: "Lovely Professional University" });
  await education.click();
  await expect(education).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator("#career-detail")).toContainText("CGPA: 7.35.");
  await page.getByRole("button", { name: "Codeflix Labs" }).click();
  await expect(page.locator("#career-detail")).toContainText("Full Stack Developer Intern");
  expect(errors).toEqual([]);
});

test("keyboard skip link moves focus to main content", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("main")).toBeFocused();
});

test("case studies have distinct metadata, evidence, and a return path", async ({ page }) => {
  for (const [slug, name] of [["repomind", "Repomind"], ["groundtruth", "Ground Truth"], ["closer", "Levelhead"], ["agent-visa", "Agent Visa"]]) {
    await page.goto("/");
    await page.getByRole("link", { name: `Read ${name} case study` }).click();
    await expect(page).toHaveURL(new RegExp(`/work/${slug}$`));
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(name);
    await expect(page.getByRole("heading", { name: "Evidence and limits" })).toBeVisible();
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `https://www.opxz.dev/work/${slug}`);
    await page.getByRole("link", { name: "Back to projects" }).click();
    await expect(page).toHaveURL(/\/#projects$/);
  }
  const missing = await page.goto("/work/not-a-project");
  expect(missing?.status()).toBe(404);
});

test("resume can be downloaded and visitors can return", async ({ page, request }) => {
  await page.goto("/resume");
  await expect(page.getByRole("link", { name: "Open PDF", exact: true })).toHaveAttribute("href", "/resume.pdf");
  await expect(page.locator("iframe")).toHaveAttribute("title", "Abhishek Yadav resume PDF");
  const downloaded = page.waitForEvent("download");
  await page.getByRole("link", { name: "Download PDF" }).click();
  expect((await downloaded).suggestedFilename()).toBe("resume.pdf");
  const pdf = await request.get("/resume.pdf");
  expect(pdf.headers()["content-type"]).toContain("application/pdf");
  expect((await pdf.body()).subarray(0, 5).toString()).toBe("%PDF-");
  await expect(page.locator('meta[property="og:url"]')).toHaveAttribute("content", "https://www.opxz.dev/resume");
  await page.getByRole("link", { name: "Back to portfolio" }).click();
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Engineer");
});

test("content is visible without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 375, height: 812 } });
  const page = await context.newPage();
  await page.goto("/");
  for (const selector of ["#about", "#projects", "#contact"]) {
    await expect(page.locator(selector)).toBeVisible();
  }
  const reveals = page.locator(".scroll-reveal");
  expect(await reveals.count()).toBeGreaterThan(0);
  for (const reveal of await reveals.all()) {
    await expect(reveal).toHaveCSS("opacity", "1");
  }
  const education = page.getByRole("heading", { name: "Lovely Professional University" }).locator("..");
  await expect(education).toBeVisible();
  await expect(education).toContainText("CGPA: 7.35.");
  await context.close();
});

test("reduced motion disables reveals and pulse animations", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator(".scroll-reveal").first()).toHaveCSS("animation-name", "none");
  await expect(page.locator(".status-dot")).toHaveCSS("animation-name", "none");
  await expect(page.locator("html")).toHaveCSS("scroll-behavior", "auto");
});

test("pages fit a narrow viewport and have no automated WCAG AA violations", async ({ page }, testInfo) => {
  test.setTimeout(90_000);
  if (testInfo.project.name === "mobile") await page.setViewportSize({ width: 320, height: 740 });
  for (const path of ["/", "/resume", "/work/repomind", "/work/groundtruth", "/work/closer", "/work/agent-visa", "/not-a-page"]) {
    await page.goto(path);
    const dimensions = await page.evaluate(() => ({ width: document.documentElement.clientWidth, scroll: document.documentElement.scrollWidth }));
    expect(dimensions.scroll).toBeLessThanOrEqual(dimensions.width);
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).disableRules(["frame-tested"]).analyze();
    expect(results.violations).toEqual([]);
    await page.screenshot({ path: testInfo.outputPath(`${path.replaceAll("/", "_") || "home"}.png`), fullPage: true });
  }
});

test("case studies and missing pages retain navigation", async ({ page }) => {
  await page.goto("/work/agent-visa");
  await page.getByRole("navigation", { name: "Portfolio sections" }).getByRole("link", { name: "Skills" }).click();
  await expect(page).toHaveURL(/\/#stack$/);
  const response = await page.goto("/not-a-page");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Not here.");
  await page.getByRole("link", { name: "Explore the projects" }).click();
  await expect(page).toHaveURL(/\/#projects$/);
});

test("layout fits tablet, wide screens and enlarged text", async ({ page }, testInfo) => {
  test.setTimeout(90_000);
  test.skip(testInfo.project.name !== "desktop", "Viewport sweep runs once in desktop Chromium");
  for (const width of [375, 760, 768, 1024, 1440, 1920, 2560]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto("/");
    const dimensions = await page.evaluate(() => ({ width: document.documentElement.clientWidth, scroll: document.documentElement.scrollWidth }));
    expect(dimensions.scroll, `page overflow at ${width}px`).toBeLessThanOrEqual(dimensions.width);
    await page.screenshot({ path: testInfo.outputPath(`home-${width}.png`) });
  }
  await page.setViewportSize({ width: 1024, height: 768 });
  await page.goto("/");
  await page.evaluate(() => { document.documentElement.style.fontSize = "200%"; });
  const dimensions = await page.evaluate(() => ({ width: document.documentElement.clientWidth, scroll: document.documentElement.scrollWidth }));
  expect(dimensions.scroll).toBeLessThanOrEqual(dimensions.width);
  await expect(page.getByRole("link", { name: "Read Repomind case study" })).toBeVisible();
});

test("social preview, sitemap and host redirect are served", async ({ page, request }) => {
  await page.goto("/");
  const image = await page.locator('meta[property="og:image"]').getAttribute("content");
  expect(image).toBeTruthy();
  const response = await request.get(new URL(image!).pathname);
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("image/png");
  const body = await response.body();
  expect(body.readUInt32BE(16)).toBe(1200);
  expect(body.readUInt32BE(20)).toBe(630);
  const sitemap = await request.get("/sitemap.xml");
  expect(await sitemap.text()).toContain("https://www.opxz.dev/work/closer");
  expect(await sitemap.text()).toContain("https://www.opxz.dev/work/agent-visa");
  const redirect = await request.get("/", { headers: { Host: "resume.opxz.dev" }, maxRedirects: 0 });
  expect(redirect.status()).toBe(308);
  expect(redirect.headers().location).toBe("https://www.opxz.dev/resume");
});

test("project previews load and distinguish screenshots from illustrations", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".work-project")).toHaveCount(4);
  for (const image of await page.locator(".project-image").all()) {
    await image.scrollIntoViewIfNeeded();
    await expect(image).toBeVisible();
    await expect.poll(() => image.evaluate((element: HTMLImageElement) => element.complete && element.naturalWidth > 0)).toBe(true);
  }
  const levelhead = page.locator(".work-project").filter({ has: page.getByRole("heading", { name: "Levelhead", exact: true }) });
  await expect(levelhead).toContainText("System illustration / Not a product screenshot");
  await expect(levelhead.getByRole("link", { name: "GitHub" })).toHaveAttribute("href", "https://github.com/opx0/CLOSURE");
  await expect(page.getByRole("link", { name: "Read the PR and current status" })).toHaveAttribute("href", "https://github.com/kmesh-net/kmesh/pull/1938");
  await page.goto("/work/closer");
  await expect(page.locator(".case-study-sections")).toContainText("benchmark has not been run");
  await page.goto("/work/agent-visa");
  await expect(page.locator(".case-study-sections")).toContainText("standing in for a gated external memory API");
});

test("project navigation works by keyboard and respects reduced motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const preview = page.getByRole("link", { name: "Read Repomind case study" });
  await preview.focus();
  await expect(preview).toBeFocused();
  await expect(preview).toHaveCSS("outline-style", "solid");
  await expect(preview.locator("img")).toHaveCSS("transform", "none");
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/\/work\/repomind$/);
});
