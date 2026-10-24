import { useParams, Link } from "react-router-dom";
import { projects } from "@/content/projects";
import { profile } from "@/content/profile";
import { LinkButton } from "@/components/ui/link-button";
import { ProjectArt } from "@/components/projects/project-art";
export function Dossier() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  if (!project) return <main id="main" tabIndex={-1} className="page-container dossier"><h1 className="section-title">Project not found.</h1><Link to="/#vault">Return to vault</Link></main>;
  const index = projects.indexOf(project);
  return <>
    <div className="site-atmosphere" aria-hidden="true" />
    <main id="main" tabIndex={-1} className="page-container dossier">
      <nav aria-label="Dossier navigation"><LinkButton href={`/#project-${project.slug}`} variant="text">Return to vault</LinkButton></nav>
      <header className="dossier-header"><p className="eyebrow">Details / {String(index + 1).padStart(2, "0")} · {project.category}</p><h1>{project.name}</h1><p className="body-copy">{project.description}</p><div className="intro-actions"><LinkButton href={project.repository}>Source code</LinkButton>{project.demo && <LinkButton href={project.demo} variant="text">Live demo</LinkButton>}</div></header>
      <figure className="dossier-figure">{project.screenshot ? <img src={project.screenshot} alt={`${project.name} application interface`} width={project.screenshotWidth ?? 1440} height={project.screenshotHeight ?? 1000} loading="lazy" decoding="async" /> : <ProjectArt index={index} />}<figcaption>{project.screenshotCaption ?? "System study · abstract illustration, not an application screenshot."}</figcaption></figure>
      <div className="dossier-grid"><section aria-labelledby="overview-title"><h2 id="overview-title" className="eyebrow">Project overview</h2><p className="body-copy">{project.overview}</p><h2 className="eyebrow">Implemented features</h2><ul className="dossier-list">{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul></section><section aria-labelledby="infrastructure-title"><h2 id="infrastructure-title" className="eyebrow">Infrastructure</h2><ul className="project-tags">{project.technologies.map(technology => <li key={technology}>{technology}</li>)}</ul><h2 className="eyebrow">Workflow</h2><ol className="dossier-list">{project.pipeline.map(step => <li key={step}>{step}</li>)}</ol></section></div>
      <section className="dossier-section" aria-labelledby="constraints-title"><h2 id="constraints-title" className="eyebrow">Constraints and current limits</h2><ul className="dossier-list">{project.constraints.map(constraint => <li key={constraint}>{constraint}</li>)}</ul></section>
      <section className="dossier-section" aria-labelledby="sources-title"><h2 id="sources-title" className="eyebrow">Source record</h2><p className="body-copy">Code inspected on <time dateTime={project.evidence.verifiedOn}>{project.evidence.verifiedOn}</time>. Hosted workflows were not independently verified beyond the checks described above.</p><ul className="source-list">{project.evidence.paths.map(path => <li key={path}><a href={`${project.repository}/blob/${project.evidence.commit}/${path}`}>{path}</a></li>)}</ul></section>
      <footer className="dossier-footer"><LinkButton href={`/#project-${project.slug}`} variant="text">Return to vault</LinkButton><p className="eyebrow">{profile.name} / Project dossier</p></footer>
    </main>
  </>;
}
