import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Abhishek Yadav, Software Engineer.",
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    title: "Resume — Abhishek Yadav",
    description: "Resume of Abhishek Yadav, Software Engineer.",
    url: "/resume",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ResumePage() {
  return (
    <div className="fixed inset-0 z-100 flex flex-col bg-(--bg)">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-(--border) px-4 py-3">
        <Link href="/" className="social-link">Back to portfolio</Link>
        <h1 className="text-sm">Abhishek Yadav&apos;s resume</h1>
        <div className="flex items-center gap-4">
          <a href="/resume.pdf" className="social-link">Open PDF</a>
          <a href="/resume.pdf" download className="btn-primary">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download PDF
          </a>
        </div>
      </header>
      <p className="px-4 py-2 text-xs text-(--text-secondary)">
        If the preview is blank, use Open PDF or Download PDF above.
      </p>
      <iframe
        src="/resume.pdf#view=FitH&navpanes=0"
        title="Abhishek Yadav resume PDF"
        className="block min-h-0 w-full flex-1 border-0"
      />
    </div>
  );
}
