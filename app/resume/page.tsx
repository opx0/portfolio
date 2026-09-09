import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Abhisek Yadav, Software Engineer.",
  alternates: {
    canonical: "/resume",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ResumePage() {
  return (
    <div className="fixed inset-0 z-100 bg-[#111318]">
      <a
        href="/resume.pdf"
        download
        className="btn-primary absolute top-4 right-4 z-10 shadow-lg"
      >
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

      <iframe
        src="/resume.pdf#view=FitH&navpanes=0"
        title="Abhisek Yadav resume PDF"
        className="block h-full w-full border-0"
      />
    </div>
  );
}
