"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const sections = [
  { id: "stack", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "career", label: "Career" },
  { id: "contact", label: "Contact" },
];

export default function HeadingNav() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

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

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  if (pathname !== "/") return null;

  return (
    <nav
      className={`heading-nav ${isVisible ? "is-visible" : ""}`}
      aria-label="Portfolio sections"
    >
      <div className="heading-nav-inner">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            aria-current={activeSection === section.id ? "location" : undefined}
            className={`heading-nav-link ${
              activeSection === section.id ? "active" : ""
            }`}
          >
            {section.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
