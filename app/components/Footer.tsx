"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/resume") return null;

  return (
    <footer className="site-footer section-shell">
      <Link href="/" className="footer-wordmark">abhishek<span aria-hidden="true">*</span></Link>
      <p>© {new Date().getFullYear()} Abhishek Yadav</p>
      <div className="footer-links"><a href="https://github.com/opx0" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/abhishekyadav7" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><Link href="/#about">Back to top ↑</Link></div>
    </footer>
  );
}
