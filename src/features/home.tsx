import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowDown, Asterisk } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JourneyTimeline } from "@/components/journey/journey-timeline";
import { PortfolioTerminal } from "@/components/terminal/portfolio-terminal";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { journey } from "@/content/journey";
import { certificates } from "@/content/certificates";
import { terminalCommands } from "@/content/terminal";
import { Neural } from "./neural";
import { Reveal } from "./motion";
import { Capabilities } from "./capabilities";
import { Certificates } from "./certificates";

export function Home() {
  return <><Header /><main id="main" tabIndex={-1}>
    <section id="core" className="studio-hero" aria-labelledby="intro-title">
      <div className="hero-kicker"><span>PRIYANSHU RAJ / DEVELOPER</span><span>INTELLIGENCE, WITH INTENTION.</span></div>
      <div className="hero-layout"><div className="hero-type"><p className="eyebrow">AI / ML & FULL-STACK DEVELOPMENT</p><h1 id="intro-title">Curiosity.<br />Code.<br /><span>Possibility.</span></h1><p className="hero-description">I’m Priyanshu. I turn curious questions into intelligent applications and useful digital experiences.</p><a className="studio-button" href="#vault">Explore my work <ArrowDown size={18} aria-hidden="true" /></a></div><div className="hero-object"><Neural /><div className="object-label"><Asterisk size={25} aria-hidden="true" /><span>THE SHAPE OF AN IDEA<br /><small>An interactive study in motion</small></span></div></div></div>
      <div className="hero-bottom"><span>Computer Science & Engineering<br />Bennett University</span><span>Thoughtfully built.<br />Always evolving.</span><a href="#vault" aria-label="Scroll to selected work"><ArrowDown aria-hidden="true" size={24} /></a></div>
    </section>
    <section id="vault" className="work-section studio-section" aria-labelledby="work-title"><div className="editorial-heading"><p className="eyebrow">01 / SELECTED WORK</p><h2 id="work-title">Ideas made <em>real.</em></h2><p>A collection of experiments, practical tools,<br />and questions answered through code.</p></div>
      <div className="work-grid">{projects.map((project,index)=><Reveal key={project.slug}><article id={`project-${project.slug}`} className={`work-card work-${index}`}><Link to={`/systems/${project.slug}`} className="work-image" aria-label={`Explore ${project.name}`}><div className="work-image-top"><span>0{index+1} / {project.category}</span><ArrowUpRight aria-hidden="true" /></div><img src={project.screenshot ?? ""} alt={`${project.name} application interface`} width={project.screenshotWidth ?? 1440} height={project.screenshotHeight ?? 1000} loading="lazy" /><span className="project-open">Explore project <ArrowUpRight size={16} aria-hidden="true" /></span></Link><div className="work-caption"><h3><Link to={`/systems/${project.slug}`}>{project.name}</Link></h3><span>{project.technologies.slice(0,3).join(" / ")}</span></div><p>{project.description}</p></article></Reveal>)}</div>
      <a className="text-link" href={profile.github}>More on GitHub <ArrowUpRight size={18} aria-hidden="true" /></a>
    </section>
    <section id="about" className="about-section studio-section" aria-labelledby="about-title"><div className="about-intro"><p className="eyebrow">02 / THE PERSON BEHIND THE CODE</p><div><h2 id="about-title">A curious mind.<br />A builder’s <em>instinct.</em></h2><p className="about-bio">{profile.biography}</p><p className="body-copy">From the first question to the working application, my projects explore how data, models, and interfaces can come together.</p><a className="text-link" href={profile.github}>Follow what I’m building <ArrowUpRight size={18} aria-hidden="true" /></a></div></div><Capabilities /><div id="logs" className="learning"><div className="editorial-heading"><p className="eyebrow">THE JOURNEY SO FAR</p><h3>Learning by doing.</h3></div><JourneyTimeline entries={journey} /></div></section>
    <section id="live" className="studio-section archive-section" aria-labelledby="certificates-title"><div className="editorial-heading"><p className="eyebrow">03 / CONTINUOUS LEARNING</p><h2 id="certificates-title">Notes of <em>progress.</em></h2><p>24 certificates. One ongoing curiosity.</p></div><Certificates /></section>
    <section id="terminal" className="studio-section playground" aria-labelledby="terminal-title"><div><p className="eyebrow">A LITTLE SOMETHING TO EXPLORE</p><h2 id="terminal-title">Prefer the<br /><em>command line?</em></h2><p>Get to know my work, one command at a time.<br />Start with <code>help</code>.</p></div><PortfolioTerminal context={{ profile, projects, journey, certificates, commands: terminalCommands }} /></section>
    <section id="contact" className="studio-section studio-contact" aria-labelledby="contact-title"><p className="eyebrow">04 / LET’S CONNECT</p><h2 id="contact-title">Good things start<br />with a <em>conversation.</em></h2><div className="contact-bottom"><p>Have a question, an interesting idea,<br />or just want to say hello?</p><div><a href={profile.github}>GitHub <ArrowUpRight aria-hidden="true" /></a>{profile.linkedin && <a href={profile.linkedin}>LinkedIn <ArrowUpRight aria-hidden="true" /></a>}</div></div></section>
    </main><Footer /></>;
}
