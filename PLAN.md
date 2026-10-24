# Architecture plan — Vite rebuild

## Decision and migration boundary
The latest owner request explicitly chooses Vite and Three.js/R3F, replacing the earlier Next.js/Canvas-first preference. Preserve the working Next.js app and evidence; create an independently runnable Vite foundation in the same repository. Phase 1 does not port the finished sections. Default npm scripts run Vite; `dev:legacy`, `build:legacy`, `typecheck:legacy` preserve the prior app. Retained Next dependencies and ESLint configuration are a temporary migration cost. Remove them only after all framework-dependent source is ported and checked in a later approved phase.

## Active source layout
- index.html: language, viewport, title, description, noindex, mount point, no-JS notice.
- src/main.tsx: React StrictMode entry and CSS import.
- src/foundation/App.tsx: minimal identity/education/GitHub smoke screen, not the final design.
- src/foundation/styles.css: isolated foundation styling and Tailwind import.
- src/content: typed profile, projects, journey, certificates, navigation and terminal metadata.
- src/lib: types and pure content/terminal behavior, retained for later reuse.
- src/components: retained reusable components to audit/port in their assigned phases.
- src/app: retained Next.js routes, fonts and global styles, not imported by Vite.
- public: original verified project assets/certificates, preserved without reinterpretation.
- vite.config.mts / tsconfig.vite.json: explicit React/Tailwind plugins, @ alias, strict separate compile scope; inherited legacy root tsconfig remains untouched.
- docs/history/nextjs: original planning snapshots.

## Final experience (later phases)
Preserve reference order: About, Projects, Journey, Certificates, Terminal, Contact. Use a dark futuristic design with original code/assets, responsive navigation, neural interaction, project dossiers, chronological journey, certificate PDFs, safe terminal and available contact actions. Inspect rendered reference states before implementing each feature; record discrepancies and practical tradeoffs. Never import reference personal claims or assets.

## Rendering and interaction
Vite builds a static client React app into dist. Keep pure content separate from rendering. Native hashes preserve section navigation; plan client routing plus Vercel SPA rewrites for dossier deep links in Phase 4, before enabling their URLs. Lazy-load the neural scene and use R3F only within its feature boundary. Do not ship GPU code on the Phase 1 page. Supply WebGL/reduced-motion fallback, motion pause and observer-based lifecycle controls. Motion is reserved for later approved animation work. Avoid new dependencies without demonstrated need.

## Content and publication
The latest owner list requests StudySync AI, CINEMATCH AI, CartPilot, Mock Interview and Fakeddit. Existing repository evidence covers four; StudySync AI remains pending a repository URL. No new technical descriptions are published in Phase 1. Keep unavailable personal fields null; no fabricated experience/metrics. Preserve certificate issue/completion precision and original PDFs. Final hosting target is Vercel, separately authorized in Phase 8; noindex remains enabled until ready.

## Phase gates
Each phase has explicit acceptance/test criteria in PHASES.md. Run npm run lint, npm run typecheck, npm run build and meaningful behavior tests. Check desktop/mobile/browser behavior when relevant, and report only executed checks. Commit each completed phase locally; wait for approval before advancing.


Tooling references checked on 2026-10-24: [Vite guide](https://vite.dev/guide/) and [R3F installation](https://r3f.docs.pmnd.rs/getting-started/installation). R3F documents the React 19/Fiber 9 pairing; installed versions follow that pairing.
