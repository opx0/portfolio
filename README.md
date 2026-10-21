# opxz.dev

Personal portfolio and resume distribution site built with Next.js, TypeScript, and Tailwind CSS.

## Development

```bash
bun install
bun dev
```

Production checks:

```bash
bun run lint
bun run build
bun run test:resume
```

Resume script tests require Python 3, Git, and the `file` command. They run in temporary directories and do not change the published PDF.

## Browser checks

Run `bunx playwright install chromium firefox` once, then `bun run test:e2e`.
Playwright builds the production application and starts an isolated server on port 3187.
Stop any other process using that port before testing. Desktop/mobile Chromium and desktop Firefox tests
cover navigation, case studies, keyboard focus, reduced motion, no-JavaScript content,
PDF downloads, metadata, automated WCAG A/AA checks, 404 recovery, tablet/wide layouts,
and enlarged text. PDF viewer internals are excluded
from the accessibility scan. Native PDF rendering and real-device Safari behavior still
need manual checks.

Run `bunx playwright show-report` to inspect the report. Screenshots are saved under
`test-results/`; both reports and screenshots are ignored by Git.

## Portfolio content

`app/data/projects.ts` owns project summaries, case-study content, and external links.
The home-page cards and `/work/[slug]` pages use the same records. New entries are included
in the sitemap. Keep evidence limits explicit and do not add unmeasured outcome claims.
`app/opengraph-image.tsx` generates the shared 1200 × 630 social-preview image.

### Design and content direction

- Cloudstudio-inspired pale blue/black, Freshman-inspired large typography and spacing.
  These are selected screenshot references, not a claim to have reviewed either entire site.
- Visible section links (no full-screen menu), normal scrolling, subtle project hover/reveal
  motion, reduced-motion support, and a one-column mobile project layout. No sound or games.
- Selected work: Repomind, Ground Truth, Levelhead and Agent Visa. Speech delivery is labelled
  experimental; kmesh is a contribution, not an original product or merged PR.
- Levelhead is the product name in the public `opx0/CLOSURE` README. `/work/closer` remains
  the stable case-study URL. Its unrun benchmark remains explicit.

Project content was reviewed against public GitHub material on **21 October 2026**:
[Levelhead README](https://github.com/opx0/CLOSURE),
[question policy](https://github.com/opx0/CLOSURE/blob/1726697475de20f09144dbb59487b14ae5eee4d7/packages/core/src/policy/select.ts),
[event replay](https://github.com/opx0/CLOSURE/blob/1726697475de20f09144dbb59487b14ae5eee4d7/packages/core/src/events/replay.ts),
[Ground Truth](https://github.com/opx0/groundtruth) and its provenance kernel,
[Agent Visa](https://github.com/opx0/agent-visa) and its authorization policy,
[speech delivery](https://github.com/opx0/speech-delivery-flaw-detector), and
[kmesh PR #1938](https://github.com/kmesh-net/kmesh/pull/1938) (open, unmerged at review).
This was a source/documentation review, not a rerun of those projects' tests or benchmarks.
Repomind's existing internship claims were retained; its client source remains private.

`public/projects/` holds compressed screenshots: Repomind and Ground Truth public homepages
captured on 21 October 2026, and Agent Visa's `docs/console.png` from its public repository.
Levelhead uses an explicitly labelled system illustration, not a fabricated product screenshot.
Replacing preview images should also update their captions and case-study evidence limits.
`resume/resume.tex` contains the refreshed resume source, based on the existing Overleaf snapshot.
It preserves Arial, A4 geometry, section order and education details while aligning project names
and evidence limits with the site. It removes stale voice/benchmark and exact test-count claims.

## Resume workflow

The resume has two permanent public interfaces:

- `https://opxz.dev/resume` — stable sharing URL (redirects to `www`)
- `https://opxz.dev/resume.pdf` — direct PDF file
- `https://resume.opxz.dev` — memorable alias that redirects to the canonical page

The deployment currently redirects the apex domain to `www.opxz.dev`; metadata and the sitemap
use that final canonical host to avoid indexing redirect URLs. The resume subdomain additionally
requires a Vercel domain attachment and a matching DNS record. It was NXDOMAIN when checked on
21 October 2026; an application redirect alone does not make the alias reachable.

The deployed site contains one resume artifact at `public/resume.pdf`. Resume history belongs in Git, not in versioned filenames.

Compile `resume/resume.tex` in Overleaf with XeLaTeX (Arial required), then replace the deployed artifact with:

```bash
./scripts/update-resume.sh ~/Downloads/resume.pdf
```

An installed Tectonic engine can also compile the same source locally into a temporary directory.
Inspect the rendered PDF, confirm it is one A4 page with working links, and check its extracted text
before running the replacement script. Never commit compiler output or licensed font files.

The script checks the PDF file signature, copies it to a temporary file beside the destination, checks the staged signature, and atomically renames it to `public/resume.pdf`. Signature checks are not a full PDF integrity check. Identical content is a no-op. Failed copies preserve the previous PDF. It then displays the resulting Git status and diff summary. Normal exits and catchable signals remove temporary files. An uncatchable kill can leave a hidden `.resume.*` staging file, but retries use a new file and do not depend on it. Concurrent successful updates use last-rename-wins semantics. Review and publish it explicitly:

```bash
git add public/resume.pdf
git commit -m "Update resume"
git push
```

Vercel deploys the portfolio and resume together from this repository. Attach both `opxz.dev` and `resume.opxz.dev` to the same Vercel project; the application permanently redirects the resume subdomain to the canonical page. There is intentionally no LaTeX compilation or automatic commit pipeline.
