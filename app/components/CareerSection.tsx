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
    id: "lpu",
    name: "Lovely Professional University",
    role: "B.Tech — Computer Science & Engineering",
    period: "2021 – 2025",
    location: "Punjab, India",
    type: "education",
    tech: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Go",
      "Python",
      "Docker",
      "PostgreSQL",
      "Linux",
    ],
    achievements: [
      "Built AI Tutor — a full-stack AI-powered course generation platform with streaming, deployed on Vercel",
      "Developed dev-cli in Go — a developer productivity CLI tool with 1★ on GitHub",
      "Created BudgetBuddy — a full-stack finance tracking app with Next.js backend",
      "Won Petbyte BYTEBASH Hackathon — built a complete web application",
      "Maintained dotfiles repository (1★) — deep Arch Linux & Hyprland system customization",
      "Built r2sync — Cloudflare R2 sync utility in TypeScript",
      "Active open-source contributor with 24 public repositories",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/opx0" },
    ],
  },
];

export default function CareerSection() {
  const [activeId, setActiveId] = useState(careerData[0].id);
  const activeEntry = careerData.find((e) => e.id === activeId)!;

  return (
    <section className="mb-24 animate-fade-in-up animate-delay-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="mono-label mb-1">SO FAR</p>
          <h2 className="text-2xl font-light tracking-tight">Career</h2>
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
              className={`timeline-item text-left ${
                activeId === entry.id ? "active" : ""
              }`}
            >
              {entry.name}
            </button>
          ))}
        </div>

        {/* Right — Detail view */}
        <div className="card">
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
    </section>
  );
}
