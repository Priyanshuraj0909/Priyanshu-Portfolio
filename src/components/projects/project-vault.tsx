import { projects } from "@/content/projects";
import { ProjectCard } from "./project-card";
import { ProjectStage } from "./project-stage";

export function ProjectVault() {
  return <div className="project-layout"><ProjectStage projects={projects.map(({ slug, name, category, screenshot, screenshotCaption }) => ({ slug, name, category, screenshot, screenshotCaption }))} /><div className="project-cards">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div></div>;
}
