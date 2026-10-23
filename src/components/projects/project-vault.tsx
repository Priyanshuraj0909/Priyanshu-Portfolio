import { projects } from "@/content/projects";
import { ProjectCard } from "./project-card";
import { ProjectStage } from "./project-stage";

export function ProjectVault() {
  return <div className="project-layout"><ProjectStage projects={projects.map(({ slug, name, category }) => ({ slug, name, category }))} /><div className="project-cards">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div></div>;
}
