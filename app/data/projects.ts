export interface Project {
  slug: string;
  name: string;
  category: string;
  role: string;
  summary: string;
  description: string;
  problem: string;
  decisions: string[];
  evidence: string;
  tech: string[];
  image: { src: string; alt: string; width: number; height: number; caption: string } | null;
  links: { label: string; url: string }[];
}

export const projects: Project[] = [
  {
    slug: "repomind",
    name: "Repomind",
    category: "Coursework platform / Internship",
    role: "Full Stack Developer Intern at Codeflix Labs",
    summary: "Coursework workflows with AI assistance and faculty control.",
    problem: "Coursework involves students, faculty, and administrators. Topic assignment and AI-assisted grading need explicit controls.",
    decisions: [
      "Use PostgreSQL serializable transactions to prevent competing assignments from overbooking topics.",
      "Run AI grading and repository synchronization in background jobs with concurrency and rate controls.",
      "Keep faculty approval between AI-suggested marks and final grading.",
    ],
    evidence: "The product homepage is public and was captured on 21 October 2026. The client repository is private, so source code is not shared here. My internship also included automated tests, deployment checks, backups, and rollback handling; those checks were not rerun for this portfolio update.",
    description: "Internship work: a coursework platform with student, faculty and administrator workflows, PostgreSQL transaction handling and background AI grading. Faculty approve suggested marks. The client repository is private.",
    tech: ["Next.js", "PostgreSQL", "Inngest"],
    image: { src: "/projects/repomind.webp", alt: "Repomind's public homepage introducing its connected coursework platform", width: 1440, height: 1000, caption: "Public homepage / Captured 21 Oct 2026" },
    links: [{ label: "Product", url: "https://repomind.codeflixlabs.com" }],
  },
  {
    slug: "groundtruth",
    name: "Ground Truth",
    category: "Public records / Personal project",
    role: "Personal project",
    summary: "One address. Six environmental sources. An inspectable record.",
    problem: "Environmental records sit across independent federal systems. Readers need to see which records support an address report and know when a source failed.",
    decisions: [
      "Query independent sources in parallel so one failure does not block the report.",
      "Carry field-level provenance, retrieval URLs and response hashes alongside reported values.",
      "Use source-backed templates and show source failures instead of inventing a combined home-safety score.",
    ],
    evidence: "The public README and provenance kernel were reviewed on 21 October 2026; the live homepage was also captured. This does not verify every agency response or rerun the application's tests. The report is not a safety verdict, and no coverage or latency benchmark is claimed here.",
    description: "Environmental public-record reporting for a US address. Independent sources load in parallel; report values link to agency records and raw fields. Failed sources remain visible rather than blocking the whole report.",
    tech: ["TypeScript", "Next.js", "Cloud Run"],
    image: { src: "/projects/groundtruth.webp", alt: "Ground Truth's green homepage with its environmental address search", width: 1440, height: 1000, caption: "Live homepage / Captured 21 Oct 2026" },
    links: [
      { label: "Live", url: "https://ground-truth-946486142611.us-central1.run.app" },
      { label: "GitHub", url: "https://github.com/opx0/groundtruth" },
    ],
  },
  {
    // Keep the existing URL working while updating the displayed product name.
    slug: "closer",
    name: "Levelhead",
    category: "Interview practice / In development",
    role: "Personal project · Previously listed as CLOSER",
    summary: "Interview practice with code-controlled questions and cited feedback.",
    problem: "An interview mentor needs to connect practice to actual answers and project code, while making its findings reviewable rather than presenting an unvalidated readiness score.",
    decisions: [
      "Separate the generative interview conductor from the evaluator; select question actions in application code.",
      "Attach findings to quoted answer spans and allow the evaluator to abstain when evidence is insufficient.",
      "Record plans, questions, answers and findings as append-only events, with replay rebuilding the session view.",
    ],
    evidence: "The public repository is now opx0/CLOSURE; its README names the product Levelhead. The README, question-selection policy and event-replay implementation were reviewed on 21 October 2026. The benchmark has not been run and the labelled dataset is empty according to that README. Evaluator accuracy and role validity are not established. The visual here is a system illustration, not a product screenshot.",
    description: "A technical-interview mentor connecting practice to answers and project evidence. Application code controls question selection, findings cite answer spans, and append-only events support replay. Evaluator accuracy has not been benchmarked.",
    tech: ["TypeScript", "Fastify", "PostgreSQL"],
    image: null,
    links: [{ label: "GitHub", url: "https://github.com/opx0/CLOSURE" }],
  },
  {
    slug: "agent-visa",
    name: "Agent Visa",
    category: "Agent permissions / Personal project",
    role: "Personal project",
    summary: "Scoped access for agents. Approval and revocation for people.",
    problem: "An agent asking for personal context needs a narrow permission, a time limit and a way for the holder to revoke access—including delegated access.",
    decisions: [
      "Keep authorization decisions in pure policy functions, separate from the server, console and database.",
      "Restrict a delegated visa to a subset of its parent's fields and lifetime, with no further delegation.",
      "Return proof rather than raw values for attested fields, and write receipts alongside the effects they record.",
    ],
    evidence: "The public README and authorization policy were reviewed on 21 October 2026. The console screenshot comes from the repository, not a newly verified live deployment. The passport store is SQLite standing in for a gated external memory API; full external integration and verified agent identity are not claimed. The project's tests were not rerun here.",
    description: "An MCP permission server and holder console for scoped context access, approval, receipts and cascading revocation. Delegated visas cannot exceed their parent. SQLite stands in for the gated external memory API.",
    tech: ["Python", "MCP", "SQLite"],
    image: { src: "/projects/agent-visa.webp", alt: "Agent Visa's repository screenshot showing grants, delegated visas, receipts and revocation controls", width: 1280, height: 1000, caption: "Console screenshot / From the project repository" },
    links: [{ label: "GitHub", url: "https://github.com/opx0/agent-visa" }],
  },
];

export const additionalWork = [
  {
    category: "Experimental / Audio analysis",
    name: "Speech delivery detector",
    description: "Compares a recording with a reference delivery and surfaces timestamped acoustic differences. A React dashboard makes the findings inspectable; recorded recall and natural-reader false positives still fail their targets.",
    url: "https://github.com/opx0/speech-delivery-flaw-detector",
    label: "Explore the implementation",
  },
  {
    category: "Open source / Go & eBPF",
    name: "Under the hood of kmesh",
    description: "Proposed a fix for cluster-ID allocation in kernel-native mode, with the root cause, tests and verification limits documented. PR #1938 was still open and unmerged when checked on 21 October 2026.",
    url: "https://github.com/kmesh-net/kmesh/pull/1938",
    label: "Read the PR and current status",
  },
];
