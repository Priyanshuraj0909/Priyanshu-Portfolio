import type { Profile, Project, JourneyEntry, Certificate } from "./types.ts";

export interface TerminalLine { text: string; href?: string }
export interface TerminalResult { clear: boolean; lines: TerminalLine[] }
export interface TerminalContext {
  profile: Profile;
  certificates?: readonly Certificate[];
  projects: readonly Project[];
  journey: readonly JourneyEntry[];
  commands: readonly { name: string; description: string }[];
}

/** Local portfolio lookup only. Input is never executed or interpreted as HTML. */
export function runCommand(input: string, context: TerminalContext): TerminalResult {
  const command = input.trim().replace(/\s+/g, " ").toLowerCase();
  const { profile, projects, journey, commands } = context;
  const result = (...lines: TerminalLine[]): TerminalResult => ({ clear: false, lines });
  const text = (value: string) => ({ text: value });
  const link = (label: string, href: string | null) => href ? { text: label, href } : text(`${label} has not been provided yet.`);
  if (!command) return result();
  switch (command) {
    case "clear": return { clear: true, lines: [] };
    case "help": return result(...commands.map(c => text(`${c.name.padEnd(12)} ${c.description}`)));
    case "whoami": return result(text(`${profile.name} · ${profile.title}`));
    case "about": return result(text(profile.name), text(profile.biography ?? `Exploring ${profile.interests.join(", ")}.`));
    case "skills": return result(text(`Technologies used in inspected projects: ${[...new Set(projects.flatMap(p => [...p.technologies]))].join(", ")}`), text(`Areas of interest: ${profile.interests.join(", ")}`));
    case "projects": return result(...projects.map(p => ({ text: `${p.name} — ${p.description}`, href: `/systems/${p.slug}` })));
    case "experience":
    case "education": {
      const entries = journey.filter(e => e.confirmedOn && e.category === (command === "education" ? "education" : "experience"));
      return result(...(entries.length ? entries.map(e => text(`${e.startDate}–${e.ongoing ? "Present" : e.endDate ?? e.startDate}: ${e.title} · ${e.organization}${e.expectedEndDate ? ` (expected completion: ${e.expectedEndDate})` : ""}`)) : [text(command === "education" ? "No education records have been supplied yet." : "No professional experience records have been supplied yet.")]));
    }
    case "certificates": return result({ text: `Browse ${context.certificates?.length ?? "the"} original certificates`, href: "#live" });
    case "github": return result(link("GitHub", profile.github));
    case "linkedin": return result(link("LinkedIn", profile.linkedin));
    case "resume": return result(link("Resume", profile.resume));
    case "contact": return result(link("GitHub", profile.github), ...(profile.email ? [{ text: profile.email, href: `mailto:${profile.email}` }] : [text("Email has not been provided yet.")]), ...(profile.linkedin ? [link("LinkedIn", profile.linkedin)] : []));
    default: return result(text(`Unknown command: ${input.trim().slice(0, 200)}. Type help to see available commands.`));
  }
}
