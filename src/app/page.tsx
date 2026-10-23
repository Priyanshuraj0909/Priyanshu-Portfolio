import { JourneyTimeline } from "@/components/journey/journey-timeline";
import { CertificateArchive } from "@/components/certificates/certificate-archive";
import { journey } from "@/content/journey";
import { certificates } from "@/content/certificates";
import { ProjectVault } from "@/components/projects/project-vault";
import { NeuralCore } from "@/components/hero/neural-core";
import { BootSequence } from "@/components/hero/boot-sequence";
import { profile } from "@/content/profile";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SectionHeading } from "@/components/layout/section-heading";
import { LinkButton } from "@/components/ui/link-button";

export default function Home() {
  return (
    <>
      <div className="site-atmosphere" aria-hidden="true" />
      <Header />
      <BootSequence />
      <main id="main" className="page-container" tabIndex={-1}>
        <section id="core" className="intro-section" aria-labelledby="intro-title">
          <SectionHeading number="01" label="About" detail="Portfolio / In development" />
          <div className="intro-grid">
            <div className="intro-copy">
              <p className="eyebrow">{profile.title}</p>
              <h1 id="intro-title" className="display-name" aria-label={profile.name}>
                {profile.name.split(" ").map((part, index) => <span className="name-line" key={`${part}-${index}`} aria-hidden="true"><span>{part}</span></span>)}
              </h1>
              <p className="body-copy">Exploring artificial intelligence, machine learning, and the software that brings ideas to life.</p>
              <div className="intro-actions">
                <LinkButton href="#vault">Explore projects</LinkButton>
                <LinkButton href="#contact" variant="text">Get in touch</LinkButton>
              </div>
            </div>
            <NeuralCore />
          </div>
          <aside className="hero-interests" aria-label="Areas of interest"><p className="eyebrow">Areas of interest</p><ul>{profile.interests.map(interest => <li key={interest}>{interest}</li>)}</ul></aside>
          <div className="section-rail"><span>Artificial intelligence · Machine learning · Development</span><span>01 / 06</span></div>
        </section>

        <section id="vault" className="portfolio-section" aria-labelledby="projects-title">
          <SectionHeading number="02" label="Projects" title="Project Vault" headingId="projects-title" detail="Selected work" />
          <ProjectVault />
        </section>
        <section id="logs" className="portfolio-section" aria-labelledby="journey-title">
          <SectionHeading number="03" label="Journey" title="Journey" headingId="journey-title" detail="Operations ledger" />
          <JourneyTimeline entries={journey} />
        </section>
        <section id="live" className="portfolio-section" aria-labelledby="certificates-title">
          <SectionHeading number="04" label="Certs" title="Certificates" headingId="certificates-title" detail="Archive" />
          <CertificateArchive entries={certificates} />
        </section>
        <section id="terminal" className="portfolio-section" aria-labelledby="terminal-title">
          <SectionHeading number="05" label="Terminal" title="Query the Operator" headingId="terminal-title" />
          <p className="empty-state">The interactive terminal will be available in a later development phase.</p>
        </section>
        <section id="contact" className="portfolio-section contact-section" aria-labelledby="contact-title">
          <SectionHeading number="06" label="Node: Contact" />
          <h2 id="contact-title" className="contact-name">{profile.name}</h2>
          <div className="contact-row"><span className="eyebrow">Social</span><LinkButton href={profile.github} variant="text">GitHub</LinkButton></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
