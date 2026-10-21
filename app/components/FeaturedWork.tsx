import Link from "next/link";
import { additionalWork, projects } from "../data/projects";
import ProjectVisual from "./ProjectVisual";
import ScrollReveal from "./ScrollReveal";

export default function FeaturedWork() {
  return (
    <>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ScrollReveal key={project.slug}>
            <article className="work-project">
              <Link href={`/work/${project.slug}`} className="project-visual-link" aria-label={`Read ${project.name} case study`}>
                <ProjectVisual project={project} />
                <span className="project-open" aria-hidden="true">↗</span>
              </Link>
              <div className="project-caption">
                <p className="mono-label">0{index + 1} / {project.category}</p>
                <h3><Link href={`/work/${project.slug}`}>{project.name}</Link></h3>
                <p className="project-summary">{project.summary}</p>
                <p className="project-role">{project.role}</p>
                <ul className="project-tech" aria-label={`${project.name} technologies`}>{project.tech.map((tech) => <li key={tech}>{tech}</li>)}</ul>
                <div className="project-links"><Link href={`/work/${project.slug}`} className="text-link">Case study ↗</Link>{project.links.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="text-link">{link.label} ↗</a>)}</div>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
      <div className="additional-work">
        <p className="mono-label">More things I&apos;ve been working on</p>
        {additionalWork.map((work) => (
          <ScrollReveal key={work.url}>
            <article className="additional-work-row"><div><p className="mono-label">{work.category}</p><h3>{work.name}</h3></div><p>{work.description}</p><a href={work.url} target="_blank" rel="noopener noreferrer" className="text-link">{work.label} ↗</a></article>
          </ScrollReveal>
        ))}
      </div>
    </>
  );
}
