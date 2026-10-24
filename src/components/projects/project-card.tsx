import { LinkButton } from "@/components/ui/link-button";
import type { Project } from "@/lib/types";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <article id={`project-${project.slug}`} className="project-card" aria-labelledby={`${project.slug}-title`}>
    <div className="project-meta eyebrow"><span>Project / {String(index + 1).padStart(2, "0")}</span><span>{project.category}</span></div>
    <h3 id={`${project.slug}-title`}>{project.name}</h3>
    <p className="body-copy">{project.description}</p>
    <ol className="project-pipeline" aria-label={`${project.name} workflow`}>{project.pipeline.map(step => <li key={step}>{step}</li>)}</ol>
    <ul className="project-tags" aria-label="Technologies">{project.technologies.map(technology => <li key={technology}>{technology}</li>)}</ul>
    <div className="intro-actions"><LinkButton href={`/systems/${project.slug}`} aria-label={`Open dossier: ${project.name}`}>Open dossier</LinkButton>{project.demo && <LinkButton href={project.demo} variant="text" aria-label={`Live demo: ${project.name}`}>Live demo</LinkButton>}</div>
  </article>;
}
