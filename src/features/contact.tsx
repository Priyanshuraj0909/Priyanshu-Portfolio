import { ArrowUpRight } from "lucide-react";
import { profile } from "@/content/profile";
import type { Profile } from "@/lib/types";

function ContactDetails({ person }: { person: Profile }) {
  return <div className="contact-details">
    <div className="contact-info">
      <p className="contact-label">{person.email ? 'Email' : 'Get in touch'}</p>
      {person.email
        ? <a className="contact-address" href={`mailto:${person.email}`}>{person.email}</a>
        : <p className="contact-invitation">Have a question, an interesting idea,<br />or just want to say hello?</p>}
      <p className="contact-label contact-time-label">Time zone</p>
      <p className="contact-time">IST · UTC+5:30</p>
    </div>
    <div className="contact-social">
      <p className="contact-label">Find me online</p>
      <ul>
        <li><a href={person.github}>GitHub <ArrowUpRight aria-hidden="true" /></a></li>
        {person.linkedin && <li><a href={person.linkedin}>LinkedIn <ArrowUpRight aria-hidden="true" /></a></li>}
        {person.resume && <li><a href={person.resume}>Resume <ArrowUpRight aria-hidden="true" /></a></li>}
      </ul>
    </div>
    <div className="contact-signoff">
      <p>Built with curiosity<br /> &amp; code.</p>
      <span>{person.name}</span>
      <p className="contact-copyright">© {new Date().getFullYear()}</p>
    </div>
  </div>;
}

export function Contact() {
  return <section id="contact" className="studio-section studio-contact contact-finale" aria-labelledby="contact-title">
    <div className="contact-dot-globe" aria-hidden="true" />
    <p className="contact-eyebrow"><span>04 / CONTACT</span><span className="contact-eyebrow-rule" aria-hidden="true" />LET’S CONNECT</p>
    <h2 id="contact-title" className="contact-name">PRIYANSHU RAJ<span>.</span></h2>
    <ContactDetails person={profile} />
  </section>;
}
