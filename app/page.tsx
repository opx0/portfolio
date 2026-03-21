import Image from "next/image";
import CareerSection from "./components/CareerSection";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 pt-24 pb-16">
      {/* ═══════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════ */}
      <section id="about" className="mb-24 scroll-mt-20">
        <ScrollReveal>
          {/* Status badge + Resume */}
          <div className="flex items-center gap-3 mb-8">
            <div className="status-badge">
              <span className="status-dot" />
              Available for Hire
            </div>
            {process.env.NEXT_PUBLIC_RESUME_URL && (
              <a
                href={process.env.NEXT_PUBLIC_RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !py-1.5 !px-4 !text-xs"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Resume
              </a>
            )}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          {/* Avatar + Name badge */}
          <div className="flex items-center gap-3 mb-6">
            <Image
              src="https://avatars.githubusercontent.com/u/104018804?v=4"
              alt="Abhishek Yadav"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <p className="text-sm font-medium text-[var(--text-primary)]">
                Abhishek Yadav
              </p>
              <p className="text-xs text-[var(--text-muted)] uppercase tracking-wide">
                India
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl font-light leading-[1.1] tracking-tight mb-8">
            FullStack
            <br />
            Engineer
            <br />
            <span className="text-[var(--text-muted)]">&amp;</span>{" "}
            <span className="serif-italic font-light">Systems</span> Dev.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          {/* Intro paragraph */}
          <p className="max-w-md text-[var(--text-secondary)] text-base leading-relaxed mb-8">
            I stand at the intersection of frontend and backend engineering.
            Crafting performant, scalable applications with React &amp; Node.js on the
            frontend, and Go &amp; TypeScript on the backend — bringing ideas to life
            with clean, efficient code.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          {/* Social links */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/opx0"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Twitter
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* ═══════════════════════════════════════════
          THE APPROACH SECTION
      ═══════════════════════════════════════════ */}
      <section id="approach" className="mb-24 scroll-mt-20">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {/* Left — Quote */}
            <div>
              <p className="mono-label mb-6">THE APPROACH</p>
              <blockquote className="text-2xl md:text-[1.7rem] leading-snug font-light serif-italic text-[var(--text-primary)]">
                I bridge the gap between design and code. My workflow is hybrid by
                nature — switching seamlessly between the terminal and VS Code to
                ensure the architecture matches the vision.
              </blockquote>
            </div>

            {/* Right — Pillars */}
            <div className="flex flex-col gap-8 pt-2">
              <div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-2">
                  Architecture-First
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  It&apos;s not just about how it looks, but how it works. System
                  design, scalability, and performance are first-class citizens in
                  my development process.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-2">
                  Human-Centric
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Technology should feel invisible. I focus on clean interfaces,
                  intuitive interactions, and organic motion that guide the user
                  naturally.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ═══════════════════════════════════════════
          STACK SECTION
      ═══════════════════════════════════════════ */}
      <section id="stack" className="mb-24 scroll-mt-20">
        <ScrollReveal>
          <p className="mono-label mb-2">TECHNOLOGIES</p>
          <h2 className="text-2xl font-light tracking-tight mb-8">Stack</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ScrollReveal delay={0}>
            <div className="card">
              <p className="mono-label mb-4">FRONTEND</p>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Tailwind CSS"].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-lg bg-[var(--bg)] text-xs font-medium text-[var(--text-secondary)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="card">
              <p className="mono-label mb-4">BACKEND</p>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Go", "Python", "PostgreSQL"].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-lg bg-[var(--bg)] text-xs font-medium text-[var(--text-secondary)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="card">
              <p className="mono-label mb-4">TOOLING</p>
              <div className="flex flex-wrap gap-2">
                {["Docker", "Linux", "Git", "Neovim"].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-lg bg-[var(--bg)] text-xs font-medium text-[var(--text-secondary)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <ScrollReveal delay={0}>
            <div className="w-10 h-10 rounded-xl bg-[var(--bg-card)] flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-[var(--text-secondary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-2">
              Full-Stack Engineering
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              End-to-end development from database to UI. Built projects like{" "}
              <span className="font-medium text-[var(--text-primary)]">AI Tutor</span> and{" "}
              <span className="font-medium text-[var(--text-primary)]">BudgetBuddy</span> — complete platforms with real users.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="w-10 h-10 rounded-xl bg-[var(--bg-card)] flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-[var(--text-secondary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-2">
              DevOps &amp; Tooling
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Docker, Linux systems, and CLI tools. Built{" "}
              <span className="font-medium text-[var(--text-primary)]">dev-cli</span> in Go — a developer productivity suite. Deep Arch Linux and Hyprland customization.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="w-10 h-10 rounded-xl bg-[var(--bg-card)] flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-[var(--text-secondary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-2">
              Performance
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Core Web Vitals optimization, efficient state management, and server-side rendering. Every millisecond counts in delivering a premium user experience.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CAREER & EDUCATION SECTION
      ═══════════════════════════════════════════ */}
      <div id="career" className="scroll-mt-20">
        <ScrollReveal>
          <CareerSection />
        </ScrollReveal>
      </div>

      {/* ═══════════════════════════════════════════
          FEATURED PROJECTS SECTION
      ═══════════════════════════════════════════ */}
      <section id="projects" className="mb-24 scroll-mt-20">
        <ScrollReveal>
          <p className="mono-label mb-2">FEATURED WORK</p>
          <h2 className="text-2xl font-light tracking-tight mb-8">Projects</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* AI Tutor */}
          <ScrollReveal delay={0}>
            <div className="project-card">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)]">AI Tutor</h3>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                AI-powered course generation platform with streaming, interactive lessons, and a teaching assistant.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {["TypeScript", "Next.js", "AI"].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-md bg-[var(--bg)] text-[0.625rem] font-medium text-[var(--text-muted)]">{t}</span>
                ))}
              </div>
              <div className="flex gap-3">
                <a href="https://ai-tutor-sepia.vercel.app" target="_blank" rel="noopener noreferrer" className="social-link text-xs">Live ↗</a>
                <a href="https://github.com/opx0/ai-tutor" target="_blank" rel="noopener noreferrer" className="social-link text-xs">GitHub ↗</a>
              </div>
            </div>
          </ScrollReveal>

          {/* dev-cli */}
          <ScrollReveal delay={100}>
            <div className="project-card">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="4 17 10 11 4 5" />
                    <line x1="12" y1="19" x2="20" y2="19" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)]">dev-cli</h3>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                Developer productivity CLI built in Go. Project scaffolding, workflow automation, and system utilities.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {["Go", "CLI", "DevTools"].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-md bg-[var(--bg)] text-[0.625rem] font-medium text-[var(--text-muted)]">{t}</span>
                ))}
              </div>
              <div className="flex gap-3">
                <a href="https://github.com/opx0/dev-cli" target="_blank" rel="noopener noreferrer" className="social-link text-xs">GitHub ↗</a>
              </div>
            </div>
          </ScrollReveal>

          {/* Market Research */}
          <ScrollReveal delay={200}>
            <div className="project-card">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)]">Market Research</h3>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                AI-powered market analysis tool for competitive research, trend analysis, and strategic insights.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {["TypeScript", "Next.js", "AI"].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-md bg-[var(--bg)] text-[0.625rem] font-medium text-[var(--text-muted)]">{t}</span>
                ))}
              </div>
              <div className="flex gap-3">
                <a href="https://market-research-zeta.vercel.app" target="_blank" rel="noopener noreferrer" className="social-link text-xs">Live ↗</a>
                <a href="https://github.com/opx0/market-research-assistent" target="_blank" rel="noopener noreferrer" className="social-link text-xs">GitHub ↗</a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          GITHUB ACTIVITY SECTION
      ═══════════════════════════════════════════ */}
      <ScrollReveal>
        <section className="mb-24">
          <p className="mono-label mb-2">CONSISTENCY</p>
          <h2 className="text-2xl font-light tracking-tight mb-6">GitHub Activity</h2>
          <div className="github-graph card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://ghchart.rshah.org/111827/opx0"
              alt="Abhishek's GitHub contribution graph"
              loading="lazy"
            />
          </div>
          <div className="flex items-center gap-4 mt-4">
            <a href="https://github.com/opx0" target="_blank" rel="noopener noreferrer" className="social-link text-xs">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              24 public repos • @opx0 ↗
            </a>
          </div>
        </section>
      </ScrollReveal>

      {/* ═══════════════════════════════════════════
          CTA SECTION
      ═══════════════════════════════════════════ */}
      <ScrollReveal>
        <section id="contact" className="text-center py-16 scroll-mt-20">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8">
            Let&apos;s build something.
          </h2>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a href="mailto:abhishek@opx0.dev" className="btn-primary">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 7l-10 7L2 7" />
              </svg>
              Email Me
            </a>
            <a href="https://github.com/opx0" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
