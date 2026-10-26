import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { projects } from "@/content/projects";
import { useMotionPreferences } from "./motion";
export function ProjectGallery() {
 const [selected,setSelected]=useState(0);
 const {paused,reduced}=useMotionPreferences();
 const project=projects[selected];
 return <div className="project-explorer"><div className="project-selector" aria-label="Choose a project">{projects.map((p,i)=><div id={`project-${p.slug}`} className="project-choice" key={p.slug}><button onClick={()=>setSelected(i)} aria-pressed={selected===i} aria-controls="project-preview"><span className="eyebrow">0{i+1}</span><span>{p.name}<small>{p.category}</small></span><ArrowUpRight size={20} aria-hidden="true" /></button><Link to={`/systems/${p.slug}`} className="project-detail-link">Read {p.name} study ↗</Link></div>)}</div><div className="project-preview" id="project-preview"><AnimatePresence mode="wait" initial={false}><motion.article key={project.slug} initial={{opacity:0,y:paused||reduced?0:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:paused||reduced?0:-8}} transition={{duration:paused||reduced?0:.2}}><Link to={`/systems/${project.slug}`} className="preview-image"><img src={project.screenshot ?? ''} alt={`${project.name} application interface`} width={1440} height={1000} loading="lazy" decoding="async" /><span>Explore project <ArrowUpRight size={18} aria-hidden="true" /></span></Link><div className="preview-caption" aria-live="polite"><h3>{project.name}</h3><p>{project.description}</p><ul className="project-tags">{project.technologies.map(t=><li key={t}>{t}</li>)}</ul></div></motion.article></AnimatePresence><div className="gallery-controls"><button onClick={()=>setSelected((selected+projects.length-1)%projects.length)} aria-label="Previous project">←</button><span>{String(selected+1).padStart(2,'0')} / 05</span><button onClick={()=>setSelected((selected+1)%projects.length)} aria-label="Next project">→</button></div></div></div>;
}
