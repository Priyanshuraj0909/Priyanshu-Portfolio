import { JourneyTimeline } from "@/components/journey/journey-timeline";
import { journey } from "@/content/journey";
import { ProjectVault } from "@/components/projects/project-vault";
import { Dossier } from "@/features/dossier";
import { Reveal } from "@/features/motion";
import { Capabilities } from "@/features/capabilities";
import { MotionPreferences } from "@/features/motion";
import { Neural } from "@/features/neural";
import { LinkButton } from "@/components/ui/link-button";
import { Boot } from "@/features/boot";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SectionHeading } from "@/components/layout/section-heading";
import { navigation } from "@/content/navigation";
import { profile } from "@/content/profile";

function RouteFocus() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (hash) document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
      else { window.scrollTo(0, 0); document.getElementById("main")?.focus({ preventScroll: true }); }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return null;
}
function Home() { return <><Boot /><Header /><main id="main" className="page-container" tabIndex={-1}><section id="core" className="intro-section" aria-labelledby="intro-title"><SectionHeading number="01" label="About" detail="Portfolio / Priyanshu Raj" /><div className="intro-grid"><div className="intro-copy"><p className="eyebrow">{profile.title}</p><h1 id="intro-title" className="display-name">Priyanshu<span className="name-line">Raj</span></h1><p className="body-copy">{profile.biography}</p><div className="intro-actions"><LinkButton href="#vault">Explore projects</LinkButton><LinkButton href="#contact" variant="text">Contact</LinkButton><LinkButton href={profile.github} variant="text">GitHub</LinkButton></div></div><Neural /></div><div className="section-rail"><span>B.Tech Computer Science & Engineering</span><span>Bennett University</span></div><Capabilities /></section>{navigation.slice(1).map(n => <section key={n.id} id={n.id} className="portfolio-section"><SectionHeading number={n.number} label={n.label} title={n.id === "vault" ? "Project Vault" : n.label} />{n.id === "vault" && <Reveal><ProjectVault /></Reveal>}{n.id === "logs" && <Reveal><JourneyTimeline entries={journey} /></Reveal>}</section>)}</main><Footer /></>; }
function NotFound() { return <main id="main" className="page-container dossier" tabIndex={-1}><h1 className="section-title">Signal not found.</h1><Link to="/">Return to portfolio</Link></main>; }
export function App() { return <MotionPreferences><BrowserRouter><div className="site-atmosphere" aria-hidden="true" /><a className="skip-link" href="#main">Skip to content</a><RouteFocus /><Routes><Route path="/" element={<Home />} /><Route path="/systems/:slug" element={<Dossier />} /><Route path="*" element={<NotFound />} /></Routes></BrowserRouter></MotionPreferences>; }
