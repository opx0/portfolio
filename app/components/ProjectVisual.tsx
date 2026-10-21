import Image from "next/image";
import type { Project } from "../data/projects";

export default function ProjectVisual({ project }: { project: Project }) {
  return (
    <figure className={`project-visual visual-${project.slug}`}>
      {project.image ? (
        <>
          <div className="project-image-frame">
            <Image src={project.image.src} alt={project.image.alt} width={project.image.width} height={project.image.height} sizes="(max-width: 760px) 92vw, (max-width: 1440px) 44vw, 640px" className="project-image" />
          </div>
          <figcaption>{project.image.caption}</figcaption>
        </>
      ) : (
        <>
          <div className="system-illustration">
            <div className="illustration-top"><span>Levelhead / The interview loop</span><span aria-hidden="true">↗</span></div>
            <p className="illustration-wordmark">Ask.<br /><span className="serif-italic">Inspect.</span><br />Replay.</p>
            <ol className="illustration-flow"><li>Plan a question</li><li>Cite the answer</li><li>Replay the events</li></ol>
          </div>
          <figcaption>System illustration / Not a product screenshot</figcaption>
        </>
      )}
    </figure>
  );
}
