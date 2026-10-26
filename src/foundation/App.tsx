import { BrowserRouter, Route, Routes, Link, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect, useRef } from "react";
import { MotionPreferences } from "@/features/motion";
import { Home } from "@/features/home";
const Dossier = lazy(() => import("@/features/dossier").then(m => ({default:m.Dossier})));
import { projects } from "@/content/projects";
import { profile } from "@/content/profile";

function RouteFocus() {
  const { pathname, hash } = useLocation();
  const previousPath = useRef(pathname);
  useEffect(() => {
    const changed = previousPath.current !== pathname;
    previousPath.current = pathname;
    const project = projects.find(p => pathname === `/systems/${p.slug}`);
    document.title = project ? `${project.name} | ${profile.name}` : pathname === "/" ? `${profile.name} | AI/ML & Full-Stack Developer` : `Page not found | ${profile.name}`;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute("content", project?.description ?? profile.biography ?? "Priyanshu Raj developer portfolio");
    const frame = requestAnimationFrame(() => {
      if (hash) {
        try { document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView(); } catch { /* Malformed hashes do not interrupt navigation. */ }
      } else { window.scrollTo(0, 0); if (changed) document.getElementById("main")?.focus({ preventScroll: true }); }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return null;
}
function NotFound() { return <main id="main" className="page-container dossier" tabIndex={-1}><h1 className="section-title">Signal not found.</h1><Link to="/">Return to portfolio</Link></main>; }
export function App() {
  return <MotionPreferences><BrowserRouter><div className="site-atmosphere" aria-hidden="true" /><a className="skip-link" href="#main">Skip to content</a><RouteFocus /><Suspense fallback={<main id="main" className="page-container dossier" tabIndex={-1}><p role="status">Loading project…</p></main>}><Routes><Route path="/" element={<Home />} /><Route path="/systems/:slug" element={<Dossier />} /><Route path="*" element={<NotFound />} /></Routes></Suspense></BrowserRouter></MotionPreferences>;
}
