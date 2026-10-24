import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SectionHeading } from "@/components/layout/section-heading";
import { LinkButton } from "@/components/ui/link-button";
import { ProjectVault } from "@/components/projects/project-vault";
import { JourneyTimeline } from "@/components/journey/journey-timeline";
import { PortfolioTerminal } from "@/components/terminal/portfolio-terminal";
import { ContactPanel } from "@/components/contact/contact-panel";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { journey } from "@/content/journey";
import { certificates } from "@/content/certificates";
import { terminalCommands } from "@/content/terminal";
import { Boot } from "./boot";
import { Neural } from "./neural";
import { Reveal } from "./motion";
import { Capabilities } from "./capabilities";
import { Certificates } from "./certificates";

export function Home() {
  return <>
    <Boot /><Header />
    <main id="main" className="page-container" tabIndex={-1}>
      <section id="core" className="intro-section" aria-labelledby="intro-title">
        <SectionHeading number="01" label="About" detail="Portfolio / Priyanshu Raj" />
        <div className="intro-grid">
          <div className="intro-copy"><p className="eyebrow">{profile.title}</p><h1 id="intro-title" className="display-name">Priyanshu<span className="name-line">Raj</span></h1><p className="body-copy">{profile.biography}</p><div className="intro-actions"><LinkButton href="#vault">Explore projects</LinkButton><LinkButton href="#contact" variant="text">Contact</LinkButton><LinkButton href={profile.github} variant="text">GitHub</LinkButton></div></div>
          <Neural />
        </div>
        <div className="section-rail"><span>B.Tech Computer Science & Engineering</span><span>Bennett University</span></div>
        <Capabilities />
      </section>
      <section id="vault" className="portfolio-section" aria-labelledby="projects-title"><SectionHeading number="02" label="Projects" title="Project Vault" headingId="projects-title" detail="Selected work" /><Reveal><ProjectVault /></Reveal></section>
      <section id="logs" className="portfolio-section" aria-labelledby="journey-title"><SectionHeading number="03" label="Journey" title="Journey" headingId="journey-title" detail="Operations ledger" /><Reveal><JourneyTimeline entries={journey} /></Reveal></section>
      <section id="live" className="portfolio-section" aria-labelledby="certificates-title"><SectionHeading number="04" label="Certs" title="Certificates" headingId="certificates-title" detail="24 original records" /><Reveal><Certificates /></Reveal></section>
      <section id="terminal" className="portfolio-section" aria-labelledby="terminal-title"><SectionHeading number="05" label="Terminal" title="Query the Operator" headingId="terminal-title" detail="Interactive · Type help" /><Reveal><PortfolioTerminal context={{ profile, projects, journey, certificates, commands: terminalCommands }} /></Reveal></section>
      <section id="contact" className="portfolio-section contact-section" aria-labelledby="contact-title"><SectionHeading number="06" label="Node: Contact" /><Reveal><h2 id="contact-title" className="contact-name">{profile.name}</h2><ContactPanel profile={profile} /></Reveal></section>
    </main>
    <Footer />
  </>;
}
