"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const sections = [
  { id: "projects", label: "Projects" },
  { id: "stack", label: "Skills" },
  { id: "career", label: "Career" },
  { id: "contact", label: "Contact" },
];

export default function HeadingNav() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (pathname !== "/" || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: 0 }
    );

    const sectionEls = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];
    sectionEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  if (pathname === "/resume") return null;

  const currentSection = pathname === "/"
    ? activeSection
    : pathname.startsWith("/work/") ? "projects" : "";

  return (
    <header className="site-header">
      <Link href="/" className="site-wordmark" aria-label="Abhishek Yadav home">abhishek<span aria-hidden="true">*</span></Link>
      <nav className="heading-nav" aria-label="Portfolio sections">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`${pathname === "/" ? "" : "/"}#${section.id}`}
            aria-current={currentSection === section.id ? "location" : undefined}
            className={`heading-nav-link ${
              currentSection === section.id ? "active" : ""
            }`}
          >
            {section.label}
          </a>
        ))}
      </nav>
      <Link href="/resume" className="header-resume">Resume <span aria-hidden="true">↗</span></Link>
    </header>
  );
}
