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
      <main id="main" className="page-container" tabIndex={-1}>
        <section id="core" className="intro-section" aria-labelledby="intro-title">
          <SectionHeading number="01" label="About" detail="Portfolio / In development" />
          <div className="intro-grid">
            <div className="intro-copy">
              <p className="eyebrow">{profile.title}</p>
              <h1 id="intro-title" className="display-name" aria-label={profile.name}>
                {profile.name.split(" ").map((part, index) => <span className="name-line" key={`${part}-${index}`} aria-hidden="true"><span>{part}</span></span>)}
              </h1>
              <p className="body-copy">This portfolio is under development. Projects and personal records will be added after verification.</p>
              <div className="intro-actions">
                <LinkButton href={profile.github}>Explore GitHub</LinkButton>
                <LinkButton href="#vault" variant="text">Projects</LinkButton>
              </div>
            </div>
            <aside className="interest-panel" aria-labelledby="interests-title">
              <p id="interests-title" className="eyebrow">Areas of interest</p>
              <ol className="interest-list">
                {profile.interests.map((interest, index) => (
                  <li key={interest}><span className="item-index" aria-hidden="true">0{index + 1}</span><span>{interest}</span></li>
                ))}
              </ol>
            </aside>
          </div>
          <div className="section-rail"><span>Artificial intelligence · Machine learning · Development</span><span>01 / 06</span></div>
        </section>

        <section id="vault" className="portfolio-section" aria-labelledby="projects-title">
          <SectionHeading number="02" label="Projects" title="Project Vault" headingId="projects-title" detail="Selected work" />
          <div className="surface-panel"><p className="eyebrow">Project records</p><p className="body-copy">Verified project details and dossiers will be added here.</p><LinkButton href={profile.github} variant="text">Browse repositories</LinkButton></div>
        </section>
        <section id="logs" className="portfolio-section" aria-labelledby="journey-title">
          <SectionHeading number="03" label="Journey" title="Journey" headingId="journey-title" detail="Operations ledger" />
          <p className="empty-state">Education, experience and leadership records are awaiting confirmed details.</p>
        </section>
        <section id="live" className="portfolio-section" aria-labelledby="certificates-title">
          <SectionHeading number="04" label="Certs" title="Certificates" headingId="certificates-title" detail="Archive" />
          <p className="empty-state">Certificates will appear with their original PDFs or verification links once supplied.</p>
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
