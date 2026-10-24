import { ArrowUpRight } from "lucide-react";
import { profile } from "@/content/profile";

/** Phase 1 smoke screen. Reference design and feature migration begin after approval. */
export function App() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="foundation-header"><span>PR / PORTFOLIO</span><span>Phase 01 · Foundation</span></header>
    <main id="main" tabIndex={-1} className="foundation-main">
      <p className="eyebrow">B.Tech CSE · Bennett University</p>
      <h1>{profile.name}</h1>
      <p className="focus-copy">AI/ML, full-stack development, and software engineering.</p>
      <a className="github-link" href={profile.github}>Explore GitHub <ArrowUpRight size={18} aria-hidden="true" /></a>
      <aside className="foundation-status" aria-label="Development status">
        <h2>Foundation ready.</h2>
        <p>React, TypeScript, Vite and Tailwind CSS are configured. The reference design, neural core and portfolio sections follow in separately approved phases.</p>
      </aside>
    </main>
    <footer className="foundation-footer">Priyanshu Raj · Portfolio in development</footer>
  </>;
}
