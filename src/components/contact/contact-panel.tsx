import { LinkButton } from "@/components/ui/link-button";
import type { Profile } from "@/lib/types";

export function ContactPanel({ profile }: { profile: Profile }) {
  return <div className="contact-panel">
    <p className="body-copy">Explore my work and connect through the links below.</p>
    {profile.location && <p className="eyebrow">{profile.location}</p>}
    <div className="contact-links">
      {profile.email && <LinkButton href={`mailto:${profile.email}`}>Email me</LinkButton>}
      <LinkButton href={profile.github} variant="text">GitHub</LinkButton>
      {profile.linkedin && <LinkButton href={profile.linkedin} variant="text">LinkedIn</LinkButton>}
      {profile.resume && <LinkButton href={profile.resume} variant="text">View resume</LinkButton>}
    </div>
  </div>;
}
