import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../data/projects";
import ProjectVisual from "../../components/ProjectVisual";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) notFound();
  return {
    title: project.name,
    description: project.description,
    alternates: { canonical: `/work/${slug}` },
    openGraph: {
      title: `${project.name} — Abhishek Yadav`,
      description: project.description,
      url: `/work/${slug}`,
      type: "article",
    },
  };
}

export default async function CaseStudy({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) notFound();

  return (
    <article className="case-study section-shell">
      <Link href="/#projects" className="social-link mb-10">Back to projects</Link>
      <p className="mono-label mb-4">{project.role}</p>
      <h1 className="case-study-title">{project.name}</h1>
      <p className="case-study-lead mb-6">{project.description}</p>
      <ul aria-label="Technologies" className="flex flex-wrap gap-2 mb-12">
        {project.tech.map((tech) => (
          <li key={tech} className="rounded-full border border-(--border) px-3 py-1 text-sm">{tech}</li>
        ))}
      </ul>
      <ProjectVisual project={project} />
      <div className="case-study-sections">
        <section className="case-study-section">
          <h2 className="text-2xl mb-4">The problem</h2>
          <p className="text-(--text-secondary) leading-relaxed">{project.problem}</p>
        </section>
        <section className="case-study-section">
          <h2 className="text-2xl mb-4">Implementation decisions</h2>
          <ul className="list-disc pl-5 space-y-3 text-(--text-secondary) leading-relaxed">
            {project.decisions.map((decision) => <li key={decision}>{decision}</li>)}
          </ul>
        </section>
        <section className="case-study-section">
          <h2 className="text-2xl mb-4">Evidence and limits</h2>
          <div>
            <p className="text-(--text-secondary) leading-relaxed mb-6">{project.evidence}</p>
            <div className="flex flex-wrap gap-4">
              {project.links.map((link) => (
                <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  {link.label} ↗
                </a>
              ))}
            </div>
          </div>
        </section>
        <div className="case-study-cta">
          <a href="mailto:akyv2.5@gmail.com" className="btn-primary">Discuss this work ↗</a>
          <Link href="/#projects" className="text-link">Explore the other projects ↗</Link>
        </div>
      </div>
    </article>
  );
}
