import Image from "next/image";
import Link from "next/link";
import CareerSection from "./components/CareerSection";
import FeaturedWork from "./components/FeaturedWork";
import ScrollReveal from "./components/ScrollReveal";

const toolkit = [
  { name: "Frontend", tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { name: "Backend", tools: ["Node.js", "PostgreSQL", "Python", "Go"] },
  { name: "Workflow", tools: ["Docker", "Linux", "Git", "Neovim"] },
];

export default function Home() {
  return (
    <div className="portfolio-home">
      <section id="about" className="hero section-shell">
        <ScrollReveal>
          <div className="hero-topline">
            <p className="mono-label">Abhishek Yadav / Full-stack &amp; systems</p>
            <span className="status-badge"><span className="status-dot" /> Available for hire</span>
          </div>
          <div className="hero-heading-wrap">
            <h1 className="hero-title">Full-stack<br />Engineer<span className="hero-period">.</span></h1>
            <span className="hero-asterisk" aria-hidden="true">✳</span>
            <p className="hero-note serif-italic">Thoughtful interfaces.<br />Solid foundations.</p>
          </div>
          <div className="hero-bottom">
            <div className="hero-actions">
              <a href="#projects" className="btn-primary">Explore my work <span aria-hidden="true">↘</span></a>
              <Link href="/resume" className="text-link">View resume ↗</Link>
            </div>
            <div className="hero-intro">
              <Image src="/profile.png" alt="Abhishek Yadav" width={48} height={48} className="hero-avatar" priority />
              <p>I build full-stack and backend applications, from the first interaction to the background job. Based in India. Working with TypeScript, React, Node.js and PostgreSQL.</p>
            </div>
          </div>
        </ScrollReveal>
        <div className="hero-baseline mono-label"><span>Interfaces / APIs / Background workflows</span><a href="#projects">A little further down ↓</a></div>
      </section>

      <section id="projects" className="work-section section-shell">
        <ScrollReveal>
          <div className="section-eyebrow"><p className="mono-label">01 / Selected work</p><span className="mono-label">A closer look at the build</span></div>
          <div className="section-heading-row"><h2 className="display-heading">Less talk.<br />More <span className="underlined-word">built.</span></h2><p className="editorial-copy">Coursework, public records, interview practice and agent permissions. Different problems. Deliberate decisions.</p></div>
        </ScrollReveal>
        <FeaturedWork />
      </section>

      <section id="approach" className="approach-section section-shell">
        <ScrollReveal>
          <p className="mono-label">02 / The approach</p>
          <div className="approach-grid">
            <h2 className="display-heading">Good software.<br /><span className="serif-italic">Not a black box.</span></h2>
            <div className="approach-copy">
              <p className="editorial-copy">I build around the decisions people need to make. Clear workflows, traceable data, and failures users can understand.</p>
              <div className="principle"><span className="mono-label">01 — Make the workflow hold up</span><h3>Reliability is part of the interface.</h3><p>Repomind uses transactions to prevent topic overbooking. Background jobs handle grading and synchronization; faculty keep control of final marks.</p></div>
              <div className="principle"><span className="mono-label">02 — Leave a trail</span><h3>Evidence people can inspect.</h3><p>Ground Truth connects report values to source records. Levelhead records sessions as events, without claiming that its evaluator has been validated.</p></div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section id="stack" className="stack-section section-shell">
        <ScrollReveal>
          <div className="section-eyebrow"><p className="mono-label">03 / The toolkit</p><span className="serif-italic toolkit-note">Right tool. Real problem.</span></div>
          <h2 className="display-heading">Across the stack.</h2>
          <div className="toolkit-grid">{toolkit.map((group, index) => (
            <div className="toolkit-group" key={group.name}><p className="mono-label">0{index + 1} / {group.name}</p><ul>{group.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul></div>
          ))}</div>
        </ScrollReveal>
      </section>

      <div id="career" className="career-section section-shell">
        <ScrollReveal><CareerSection /></ScrollReveal>
        <p className="career-note">B.Tech expected July 2027. Available for full-time employment under my university&apos;s work arrangement.</p>
      </div>

      <section id="contact" className="contact-section section-shell">
        <ScrollReveal>
          <p className="mono-label">05 / Start a conversation</p>
          <h2>Let&apos;s build<br /><span className="serif-italic">something.</span><span className="contact-arrow" aria-hidden="true">↗</span></h2>
          <div className="contact-bottom"><p className="editorial-copy">An interesting problem.<br />A full-time role. A good conversation.</p><a href="mailto:akyv2.5@gmail.com" className="contact-email">akyv2.5@gmail.com <span aria-hidden="true">↗</span></a></div>
        </ScrollReveal>
      </section>
    </div>
  );
}
