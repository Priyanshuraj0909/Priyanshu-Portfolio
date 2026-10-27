import { lazy, useState, useCallback, useEffect, useRef } from "react";
import { LayoutGroup } from "motion/react";
import { BrandMark } from "@/components/brand/brand-mark";
import { Boot, shouldIntroduce } from "./boot";
import { Deferred } from "./deferred";
import { ProjectGallery } from "./project-gallery";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JourneyTimeline } from "@/components/journey/journey-timeline";
const PortfolioTerminal = lazy(() => import("@/components/terminal/portfolio-terminal").then(m => ({default:m.PortfolioTerminal})));
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { journey } from "@/content/journey";
import { certificates } from "@/content/certificates";
import { terminalCommands } from "@/content/terminal";
import { Neural } from "./neural";
import { Capabilities } from "./capabilities";
const Certificates = lazy(() => import("./certificates").then(m => ({default:m.Certificates})));

export function Home() {
  const [phase, setPhase] = useState<"loading" | "revealing" | "ready">(() => shouldIntroduce() ? "loading" : "ready");
  const introducing = phase !== "ready";
  const focusAfterIntro = useRef(introducing);
  useEffect(() => {
    if (phase === "ready" && focusAfterIntro.current) {
      focusAfterIntro.current = false;
      document.getElementById("main")?.focus({ preventScroll: true });
    }
  }, [phase]);
  const reveal = useCallback(() => setPhase("revealing"), []);
  const [sceneReady, setSceneReady] = useState(false);
  const ready = useCallback(() => setSceneReady(true), []);
  const enter = useCallback(() => setPhase("ready"), []);
  return <LayoutGroup id="portfolio-identity"><Neural onReady={ready} entering={phase === "loading"} controlsLocked={introducing} />{introducing && <Boot ready={sceneReady} revealing={phase === "revealing"} onReveal={reveal} onComplete={enter} />}<div className={phase === "loading" ? 'portfolio-shell is-entering' : 'portfolio-shell'} data-phase={phase} inert={introducing || undefined}><Header showMark={phase !== "loading"} /><main id="main" tabIndex={-1}>
    <section id="core" className="studio-hero" aria-labelledby="intro-title">
      <div className="hero-kicker"><span>PRIYANSHU RAJ / DEVELOPER</span><span>INTELLIGENCE, WITH INTENTION.</span></div>
      <div className="hero-layout"><div className="hero-type"><p className="eyebrow">AI / ML ENGINEER & FULL-STACK DEVELOPER</p><h1 id="intro-title">PRIYANSHU<span>RAJ<span className="hero-dot">.</span></span></h1></div><div className="hero-object" aria-label="Learning sphere: a faceted core with orbiting data rings"><div className="object-label"><BrandMark /><span>THE LEARNING SPHERE<br /><small>Move, scroll, explore.</small></span></div></div><div className="hero-side"><p>I build intelligence<br />into the everyday.</p><p className="hero-description">From machine-learning experiments to the interfaces that make them useful.</p><a className="studio-button" href="#vault">Explore my work <ArrowDown size={18} aria-hidden="true" /></a></div></div>
      <div className="hero-bottom"><span>Computer Science & Engineering<br />Bennett University</span><span>Thoughtfully built.<br />Always evolving.</span><a href="#vault" aria-label="Scroll to selected work"><ArrowDown aria-hidden="true" size={24} /></a></div>
    </section>
    <section id="vault" className="work-section studio-section" aria-labelledby="work-title"><div className="editorial-heading"><p className="eyebrow">01 / SELECTED WORK</p><h2 id="work-title">Ideas made <em>real.</em></h2><p>A collection of experiments, practical tools,<br />and questions answered through code.</p></div>
      <ProjectGallery />
      <a className="text-link" href={profile.github}>More on GitHub <ArrowUpRight size={18} aria-hidden="true" /></a>
    </section>
    <section id="about" className="about-section studio-section" aria-labelledby="about-title"><div className="about-intro"><p className="eyebrow">02 / THE PERSON BEHIND THE CODE</p><div><h2 id="about-title">A curious mind.<br />A builder’s <em>instinct.</em></h2><p className="about-bio">{profile.biography}</p><p className="body-copy">From the first question to the working application, my projects explore how data, models, and interfaces can come together.</p><a className="text-link" href={profile.github}>Follow what I’m building <ArrowUpRight size={18} aria-hidden="true" /></a></div></div><Capabilities /><div id="logs" className="learning"><div className="editorial-heading"><p className="eyebrow">THE JOURNEY SO FAR</p><h3>Learning by doing.</h3></div><JourneyTimeline entries={journey} /></div></section>
    <section id="live" className="studio-section archive-section" aria-labelledby="certificates-title"><div className="editorial-heading"><p className="eyebrow">03 / CONTINUOUS LEARNING</p><h2 id="certificates-title">Notes of <em>progress.</em></h2><p>24 certificates. One ongoing curiosity.</p></div><Deferred label="certificate archive"><Certificates /></Deferred></section>
    <section id="terminal" className="studio-section playground" aria-labelledby="terminal-title"><div><p className="eyebrow">A LITTLE SOMETHING TO EXPLORE</p><h2 id="terminal-title">Prefer the<br /><em>command line?</em></h2><p>Get to know my work, one command at a time.<br />Start with <code>help</code>.</p></div><Deferred label="interactive terminal"><PortfolioTerminal context={{ profile, projects, journey, certificates, commands: terminalCommands }} /></Deferred></section>
    <section id="contact" className="studio-section studio-contact" aria-labelledby="contact-title"><p className="eyebrow">04 / LET’S CONNECT</p><h2 id="contact-title">Good things start<br />with a <em>conversation.</em></h2><div className="contact-bottom"><p>Have a question, an interesting idea,<br />or just want to say hello?</p><div><a href={profile.github}>GitHub <ArrowUpRight aria-hidden="true" /></a>{profile.linkedin && <a href={profile.linkedin}>LinkedIn <ArrowUpRight aria-hidden="true" /></a>}</div></div></section>
    </main><Footer /></div></LayoutGroup>;
}
