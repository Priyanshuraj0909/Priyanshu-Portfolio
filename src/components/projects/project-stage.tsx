/* eslint-disable @next/next/no-img-element -- Shared Vite component uses optimized static WebP assets. */
"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useMotionPreferences } from "@/features/motion";
import type { Project } from "@/lib/types";
import { ProjectArt } from "./project-art";

type StageProject = Pick<Project, "slug" | "name" | "category" | "screenshot" | "screenshotCaption">;
export function ProjectStage({ projects }: { projects: readonly StageProject[] }) {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const { paused } = useMotionPreferences();
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      let index = 0;
      projects.forEach((project, position) => {
        const card = document.getElementById(`project-${project.slug}`);
        if (card && card.getBoundingClientRect().top <= 160) index = position;
      });
      setActive(index);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", schedule);
    };
  }, [projects]);
  return <aside className="project-sticky" aria-label="Project index">
    <div className="project-stage" aria-hidden="true"><span className="eyebrow">Systems / Visual studies</span><motion.div key={projects[active].slug} initial={paused || reduced ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: paused || reduced ? 0 : .35 }}>{projects[active].screenshot ? <img className="project-stage-image" src={projects[active].screenshot!} alt="" width={800} height={560} loading="lazy" /> : <ProjectArt index={active} />}</motion.div><span className="eyebrow">{String(active + 1).padStart(2, "0")} / {projects[active].name}</span></div>
    <nav className="project-index" aria-label="Select a project">{projects.map((project, index) => <a key={project.slug} href={`#project-${project.slug}`} aria-label={`${String(index + 1).padStart(2, "0")} ${project.name}`} aria-current={index === active ? "location" : undefined}>{String(index + 1).padStart(2, "0")}</a>)}</nav>
  </aside>;
}
