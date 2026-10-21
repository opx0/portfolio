"use client";

import { useState } from "react";

interface CareerEntry {
  id: string;
  name: string;
  role: string;
  period: string;
  location: string;
  type: "education" | "work";
  tech: string[];
  achievements: string[];
  links?: { label: string; url: string }[];
}

const careerData: CareerEntry[] = [
  {
    id: "codeflix",
    name: "Codeflix Labs",
    role: "Full Stack Developer Intern — Repomind",
    period: "Mar 2026 – Aug 2026",
    location: "Remote",
    type: "work",
    tech: ["TypeScript", "Next.js", "PostgreSQL", "Prisma", "Inngest", "Docker", "GitHub Actions"],
    achievements: [
      "Built and deployed a coursework platform with student, faculty and admin workflows; faculty approve AI-suggested marks.",
      "Used PostgreSQL serializable transactions to prevent competing assignments from overbooking topics.",
      "Moved AI grading and repository synchronization into background jobs with concurrency and rate controls.",
      "Worked on automated tests, deployment checks, database backups and rollback handling.",
    ],
    links: [{ label: "Product", url: "https://repomind.codeflixlabs.com" }],
  },
  {
    id: "lpu",
    name: "Lovely Professional University",
    role: "B.Tech — Computer Science & Engineering",
    period: "Aug 2023 – Jul 2027 (expected)",
    location: "Phagwara, Punjab, India",
    type: "education",
    tech: ["Python", "TypeScript", "JavaScript", "SQL", "React", "Node.js", "PostgreSQL"],
    achievements: [
      "CGPA: 7.35.",
      "Top 10 of 150+ teams at the ByteBash Hackathon at LPU, October 2023.",
      "Built Levelhead and Ground Truth; see featured work for code and project details.",
      "Available for full-time employment under the university's work arrangement.",
    ],
    links: [{ label: "GitHub", url: "https://github.com/opx0" }],
  },
];

export default function CareerSection() {
  const [activeId, setActiveId] = useState(careerData[0].id);
  const activeEntry = careerData.find((e) => e.id === activeId)!;

  return (
    <section>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="mono-label mb-5">04 / Experience &amp; education</p>
          <h2 className="display-heading">Always building.</h2>
        </div>
      </div>

      {/* Interactive Layout */}
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6">
        {/* Left sidebar — Timeline */}
        <div className="flex flex-col">
          {careerData.map((entry) => (
            <button
              key={entry.id}
              onClick={() => setActiveId(entry.id)}
              aria-pressed={activeId === entry.id}
              aria-controls="career-detail"
              className={`timeline-item text-left ${
                activeId === entry.id ? "active" : ""
              }`}
            >
              {entry.name}
            </button>
          ))}
        </div>

        {/* Right — Detail view */}
        <div id="career-detail" className="card" aria-live="polite" aria-atomic="true">
          {/* Institution header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-medium text-[var(--text-primary)]">
                {activeEntry.name}
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                {activeEntry.role}
              </p>
            </div>
            {activeEntry.type === "education" && (
              <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-[0.6875rem] font-medium">
                Education
              </span>
            )}
            {activeEntry.type === "work" && (
              <span className="px-2.5 py-1 rounded-full bg-green-50 text-green-700 text-[0.6875rem] font-medium">
                Work
              </span>
            )}
          </div>

          {/* Period + Location */}
          <p className="text-xs text-[var(--text-muted)] mb-5">
            {activeEntry.period} • {activeEntry.location}
          </p>

          {/* Tech stack */}
          <div className="mb-5">
            <p className="mono-label mb-3">TECHNOLOGIES &amp; TOOLS</p>
            <div className="flex flex-wrap gap-2">
              {activeEntry.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md bg-[var(--bg)] text-[0.6875rem] font-medium text-[var(--text-secondary)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <ul className="space-y-2.5">
            {activeEntry.achievements.map((a, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-[var(--text-secondary)] leading-relaxed"
              >
                <span className="text-[var(--text-muted)] mt-1 shrink-0">
                  •
                </span>
                {a}
              </li>
            ))}
          </ul>

          {/* Links */}
          {activeEntry.links && activeEntry.links.length > 0 && (
            <div className="flex gap-3 mt-5 pt-4 border-t border-[var(--border)]">
              {activeEntry.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link text-xs"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
      <noscript>
        {careerData.slice(1).map((entry) => (
          <article key={entry.id} className="card mt-6">
            <h3 className="text-lg font-medium">{entry.name}</h3>
            <p className="text-sm text-(--text-secondary) mt-2">{entry.role}</p>
            <p className="text-xs text-(--text-muted) mt-2">{entry.period} · {entry.location}</p>
            <ul className="list-disc pl-5 mt-4 space-y-2 text-sm text-(--text-secondary)">
              {entry.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}
            </ul>
          </article>
        ))}
      </noscript>
    </section>
  );
}
