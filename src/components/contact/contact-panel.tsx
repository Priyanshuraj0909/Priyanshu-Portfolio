import { ArrowUpRight } from "lucide-react";
import type { Profile } from "@/lib/types";

export function ContactPanel({ profile }: { profile: Profile }) {
  const links = [
    { label: "GitHub", href: profile.github },
    ...(profile.linkedin ? [{ label: "LinkedIn", href: profile.linkedin }] : []),
    ...(profile.resume ? [{ label: "Résumé", href: profile.resume }] : []),
  ];

  return <div className="contact-panel">
    <div className="contact-grid">
      <div className="contact-intro">
        <p className="eyebrow">Connect</p>
        <p className="contact-invitation">Let&apos;s build something thoughtful, useful, and technically ambitious.</p>
        {profile.email && <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>}
        {profile.location && <div className="contact-location"><p className="eyebrow">Location</p><p>{profile.location}</p></div>}
      </div>
      <nav className="contact-social" aria-label="Social profiles">
        <p className="eyebrow">Social</p>
        {links.map(link => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
          <span>{link.label}</span><ArrowUpRight size={20} strokeWidth={1.4} aria-hidden="true" />
        </a>)}
      </nav>
      <div className="contact-credit">
        <p>Designed and developed<br />by <span>{profile.name}</span></p>
        <p className="contact-copyright">© {new Date().getFullYear()}</p>
      </div>
    </div>
  </div>;
}
