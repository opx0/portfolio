"use client";

import Link from "next/link";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#approach", label: "Approach" },
  { href: "#stack", label: "Stack" },
  { href: "#career", label: "Career" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-0.5 rounded-full border border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-xl px-1.5 py-1 shadow-sm">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="nav-pill"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
