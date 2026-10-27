# Implementation roadmap and architecture

## Audit boundary
The existing Vite foundation and preserved Next.js app are compatible starting points. The Phase 1 audit made only documentation/evidence changes. The owner then authorized all remaining implementation, now completed locally as recorded in PHASES.md. The audit replaces the prior eight-phase roadmap with the owner's ten phases; snapshots preserve its history.

## Current structure
| Area | Current role | Maintenance |
| --- | --- | --- |
| index.html, src/main.tsx, src/foundation | Active redesigned Vite portfolio, router and styles | Preserve current production implementation |
| vite.config.mts, tsconfig.vite.json | React/Tailwind plugins, @ alias, strict Vite scope | Preserve; expand scope as features migrate |
| src/app | Preserved Next.js homepage, five dossier routes, fonts/styles | Keep legacy scripts working |
| src/components | Legacy navigation/boot/Canvas/vault/journey/certificates/terminal/contact | Audit and reuse original framework-neutral code by phase |
| src/content, src/lib | Approved typed records, validation, terminal dispatch | Extend schemas separately from rendering |
| public/projects | Five source-backed project screenshot assets | Add only genuine new screenshots |
| public/certificates | 24 original single-page PDFs | Preview/search/filter layer in Phase 8 |
| tests, scripts | 13 behavior tests, content and deployment validators | Run relevant checks after changes |
| docs/history | Earlier approved plans | Historical, not current authorization |

## Dependencies
Installed: React/DOM 19.3.1, Vite 8.3.5, TypeScript 5.9.3, Tailwind 4.3.3, Three 0.186.1, R3F 9.8.2, Motion 12.43.0, Lucide 0.468.0; Vite React/Tailwind plugins and Three types. Next 16.4.2 and its lint tooling remain for legacy compatibility. Drei and React Router were installed for original neural line helpers and dossier routes during the authorized implementation. Avoid extra scene/postprocessing libraries unless measured need emerges. Keep installed major compatibility and Node 24 target; audit host is Node 26.10.0.

## Implemented architecture
Use a React application shell with reusable semantic sections, layout controls and typed content. The current redesign uses Home (#core), Work (#vault), About (#about, including Journey #logs), Archive (#live), Terminal (#terminal) and Contact (#contact). Boot is a transient interface; the six capability modules live below the hero inside About, avoiding an unrequested new top-level navigation item.

Create src/features for boot, neural scene, capabilities, project vault/dossiers, journey, certificates and terminal. Keep existing src/components usable for shared primitives. Expand Vite typecheck scope as modules are migrated; do not prematurely import Next-only modules. Use React Router for /systems/:slug and define Vercel SPA rewrites before relying on deep links. Maintain native hash/back behavior, titles and focus restoration.

Lazy-load the Three/R3F scene with static original fallback, low mobile particle/connection count, capped DPR, reduced motion, manual pause, offscreen/hidden suspension and disposal. Animation must not gate content. Use Motion for approved reveals with reduced-motion equivalents. Three remains behind a lazy scene import; Motion powers the current cinematic introduction and transitions.

Certificates: retain original PDFs and typed record precision; derive original preview images locally from PDFs, not AI. Accessible search + category filter + newest-first ordering, result count/empty state and independent PDF/verified-issuer actions. Public originals total about 11 MiB; do not preload all PDFs. Keep printed issuer URLs distinct from live-verified destinations.

Terminal: adapt the retained pure parser to the ten requested names including certificates, prompt priyanshu@nexus:~$, safe text/native links, history/draft restoration and bounded output. No shell execution, backend or runtime GitHub requests.

## Content milestones
Latest approved biography/subtitle are in CONTENT_AUDIT.md for later migration. Four original dossiers have pinned source evidence; newly inspected Medical Cost App must receive its own typed entry, genuine screenshot and verified demo before Phase 6 publication. StudySync remains pending. Six capability modules list code-supported technologies with project attribution, not proficiency ratings. Do not publish CGPA, work history, achievements, location or contact values without evidence/confirmation.

## Sequence and release
Follow the ten phases in PHASES.md. Final SEO/Open Graph, route refresh, optimized WebGL/assets, accessibility/performance and authorized Vercel deployment belong to Phase 10. The subsequent autonomy approval supersedes the original audit-only phase gates and authorizes implementation, commits and publication. The public build uses the owner-confirmed origin; explicitly empty PORTFOLIO_SITE_URL retains noindex for private previews.


Implementation status — 2026-10-24: the owner approved autonomous completion, superseding the Phase 1 audit-only scope. Phases 2–9 are implemented and locally committed. The proposed architecture is now active, with src/features, routed five-project dossiers, shared graph fallback, certificate previews/search/filtering and terminal/contact. Phase 10 adds static content/metadata, original social assets, Vercel route configuration and completed local QA. The owner later confirmed the live deployment; see the current release status below.


Release status — 2026-10-27: The owner confirmed the live portfolio at `https://priyanshu-portfolio-pi-ruby.vercel.app/#about` on 2026-10-27. The public origin is `https://priyanshu-portfolio-pi-ruby.vercel.app` and the source repository is `https://github.com/Priyanshuraj0909/Priyanshu-Portfolio`. HTTPS homepage delivery was verified. The release build now defaults to this confirmed origin for canonical URLs, sitemap and absolute social metadata; `PORTFOLIO_SITE_URL` can override it, and an explicitly empty value retains noindex for private previews. Vercel successfully deployed commit f3b43a8; live checks confirmed indexing, canonical/social URLs, robots.txt and the six-page sitemap on 2026-10-27. See QA_REPORT.md and DEPLOYMENT.md for executed checks and remaining limits.
