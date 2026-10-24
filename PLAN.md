# Implementation roadmap and architecture

## Audit boundary
The existing Vite foundation and preserved Next.js app are compatible starting points. No reset, UI redesign, dependency changes or source migration is needed in Phase 1. Only documentation/evidence changes are made. The audit replaces the prior eight-phase roadmap with the owner's ten phases; snapshots preserve its history.

## Existing structure
| Area | Current role | Later treatment |
| --- | --- | --- |
| index.html, src/main.tsx, src/foundation | Active Vite identity smoke page, isolated CSS | Extend after Phase 2 approval |
| vite.config.mts, tsconfig.vite.json | React/Tailwind plugins, @ alias, strict Vite scope | Preserve; expand scope as features migrate |
| src/app | Next.js homepage, four dossier routes, fonts/styles | Keep working until migrated |
| src/components | Legacy navigation/boot/Canvas/vault/journey/certificates/terminal/contact | Audit and reuse original framework-neutral code by phase |
| src/content, src/lib | Approved typed records, validation, terminal dispatch | Extend schemas separately from rendering |
| public/projects | Three source-backed screenshot assets | Add only genuine new screenshots |
| public/certificates | 24 original single-page PDFs | Preview/search/filter layer in Phase 8 |
| tests, scripts | Ten behavior tests and content validator | Extend for meaningful feature behavior |
| docs/history | Earlier approved plans | Historical, not current authorization |

## Dependencies
Installed: React/DOM 19.3.1, Vite 8.3.5, TypeScript 5.9.3, Tailwind 4.3.3, Three 0.186.1, R3F 9.8.2, Motion 12.43.0, Lucide 0.468.0; Vite React/Tailwind plugins and Three types. Next 16.4.2 and its lint tooling remain for legacy compatibility. Drei and React Router are not installed. Add Router in Phase 2 for the planned dossiers; add minimal Drei helpers in Phase 4 only when needed. Avoid extra scene/postprocessing libraries unless measured need emerges. Keep installed major compatibility and Node 24 target; audit host is Node 26.10.0.

## Recommended architecture after approval
Use a React application shell with reusable semantic sections, layout controls and typed content. Keep the reference's six top-level destinations: About (#core), Projects (#vault), Journey (#logs), Certificates (#live), Terminal (#terminal), Contact (#contact). Boot is a transient interface; the six capability modules live below the hero inside About, avoiding an unrequested new top-level navigation item.

Create src/features for boot, neural scene, capabilities, project vault/dossiers, journey, certificates and terminal. Keep existing src/components usable for shared primitives. Expand Vite typecheck scope as modules are migrated; do not prematurely import Next-only modules. Use React Router for /systems/:slug and define Vercel SPA rewrites before relying on deep links. Maintain native hash/back behavior, titles and focus restoration.

Lazy-load the Three/R3F scene with static original fallback, low mobile particle/connection count, capped DPR, reduced motion, manual pause, offscreen/hidden suspension and disposal. Animation must not gate content. Use Motion for approved reveals with reduced-motion equivalents. Three and Motion remain unloaded on the current foundation page.

Certificates: retain original PDFs and typed record precision; derive original preview images locally from PDFs, not AI. Accessible search + category filter + newest-first ordering, result count/empty state and independent PDF/verified-issuer actions. Public originals total about 11 MiB; do not preload all PDFs. Keep printed issuer URLs distinct from live-verified destinations.

Terminal: adapt the retained pure parser to the ten requested names including certificates, prompt priyanshu@nexus:~$, safe text/native links, history/draft restoration and bounded output. No shell execution, backend or runtime GitHub requests.

## Content milestones
Latest approved biography/subtitle are in CONTENT_AUDIT.md for later migration. Four original dossiers have pinned source evidence; newly inspected Medical Cost App must receive its own typed entry, genuine screenshot and verified demo before Phase 6 publication. StudySync remains pending. Six capability modules list code-supported technologies with project attribution, not proficiency ratings. Do not publish CGPA, work history, achievements, location or contact values without evidence/confirmation.

## Sequence and release
Follow the ten phases in PHASES.md. Final SEO/Open Graph, route refresh, optimized WebGL/assets, accessibility/performance and authorized Vercel deployment belong to Phase 10. Maintain noindex until release readiness. Phase approval precedes its Git commit; approval for the next phase must be explicit. No deployment or remote push is authorized by this audit.
