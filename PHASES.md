# Implementation phases

## Planning checkpoint
- [x] Inspect workspace: empty directory, no existing code or Git repository.
- [x] Create six required development documents before application features.
- [x] Retrieve reference HTML/CSS and document source-observed evidence.
- [x] Locate four genuine project repositories and inspect README descriptions.
- [x] Complete rendered desktop/mobile design-system inspection (Phase 2).
- [ ] Complete feature-specific interactive reference analysis in later phases.
- [x] Resolve Phase 2 screenshot gaps with installed Chrome and temporary Playwright tooling.

## 1. Foundation and setup — complete; Phase 2 approved
- [x] Initialize Git and Next.js App Router with strict TypeScript.
- [x] Configure Tailwind CSS, Motion for React, Lucide React, ESLint, scripts and lockfile.
- [x] Establish metadata, semantic shell, content types and nullable personal fields.
- [x] Run lint, typecheck and production build; document manual localhost smoke.
- [x] Update documents and prepare completed Phase 1 commit.
- [x] Obtain explicit approval for Phase 2.

## 2. Design system — complete; Phase 3 approved
- [x] Apply verified palette, font families, spacing, borders, focus and depth labels.
- [x] Build responsive header, shared controls and shell.
- [x] Verify against desktop/mobile evidence and report checks.
- [x] Prepare completed Phase 2 commit with updated documentation.
- [x] Obtain approval for Phase 3 (user: “continue working”, 2026-10-23).

## 3. Hero and neural visualization — complete; Phase 4 approval pending
- [x] Approved identity/interests, boot/skip and CTAs; unprovided biography/skills stay unset.
- [x] Canvas interaction, motion pause, reduced-motion fallback and capped mobile rendering.
- [x] Verify keyboard/resize and inspect lifecycle cleanup; report and commit.
- [ ] Obtain Phase 4 approval.

## 4. Project Vault — awaiting Phase 3 approval
- [ ] Verify repository source/dependencies/features, exact demo links and screenshots.
- [ ] Reusable cards, matching selection behavior, accessible dossier routes.
- [ ] Check deep links/back behavior and actual destinations; report and commit; obtain Phase 5 approval.

## 5. Journey and certificates — awaiting Phase 4 approval
- [ ] Typed chronological records using confirmed personal information.
- [ ] Accessible certificate archive with actual working PDF/verification URLs.
- [ ] Honest missing-data states; report checks and commit; obtain Phase 6 approval.

## 6. Interactive terminal and contact — awaiting Phase 5 approval
- [ ] All twelve requested commands, unknown-command handling and clear.
- [ ] Keyboard input, safe output and available actual contact/resume links.
- [ ] Targeted command checks and link checks; report and commit; obtain Phase 7 approval.

## 7. Animations, responsiveness, accessibility — awaiting Phase 6 approval
- [ ] Compare rendered desktop/mobile states with reference captures.
- [ ] Motion, focus, contrast, touch, scroll and canvas performance audit.
- [ ] Resolve observed defects; report checks and commit; obtain Phase 8 approval.

## 8. Testing, GitHub and deployment — awaiting Phase 7 approval
- [ ] Clean install, lint, typecheck, build and targeted functional checks.
- [ ] Final evidence/content/link review; remove unpublished placeholders.
- [ ] Complete README, Git history and user-authorized GitHub remote workflow.
- [ ] Deploy to Vercel with appropriate account/project authorization.
- [ ] Verify deployed routes/links and record URL and verification limits.

## Phase 1 verification — 2026-10-21
- `npm install`: completed with committed lockfile.
- `npm run lint`: passed after naming the PostCSS configuration export.
- `npm run typecheck`: passed.
- `npm run build`: passed; homepage statically prerendered using webpack.
- Production HTTP smoke: passed at 127.0.0.1:3000; confirmed title, main landmark, skip link, GitHub URL and noindex. Server stopped after verification.
- `npm audit --omit=dev`: zero vulnerabilities. Full audit: five high-severity findings through the ESLint/fast-glob/micromatch/braces chain; suggested downgrade is incompatible with this scaffold and was not applied. ESLint 9 also reports upstream end of support. Revisit compatible lint tooling updates before release.
- Browser rendering, mobile behavior and interactive QA have not been verified.

Manual verification: use Node 24 (`nvm use`), run `npm ci`, `npm run dev`, visit http://localhost:3000, verify Priyanshu Raj heading/GitHub link and use Tab to reveal Skip to content. This is a foundation screen, not the final reference design.

Changed foundation files: package.json, package-lock.json, .gitignore, .nvmrc, tsconfig.json, next-env.d.ts, next.config.ts, postcss.config.mjs, eslint.config.mjs; src/app/{layout.tsx,page.tsx,globals.css}; src/lib/types.ts; src/content/{profile.ts,projects.ts,journey.ts,certificates.ts}; public/.gitkeep. Updated all six planning documents for the scope and status. No remote, push or deployment performed.

## Phase 2 report — 2026-10-21

Implemented: reference-scoped palette and typography; licensed self-hosted Space Grotesk/JetBrains Mono/Oxanium fonts; responsive 1520px shell and spacing; fixed glass header with six native anchors, scroll-aware active state and horizontal mobile navigation; fine borders, static atmosphere/grain, two-tone name, shared depth/section headings, link variants and footer. All six section shells exist; existing GitHub action, typed data, noindex metadata, skip link and content-integrity boundaries are retained. No later-phase interactive feature is implemented.

Changed files:
- src/app/globals.css, src/app/layout.tsx, src/app/page.tsx
- src/app/fonts/{SpaceGrotesk,JetBrainsMono,Oxanium}.ttf and corresponding *-LICENSE.txt
- src/components/layout/{header,footer,section-heading}.tsx
- src/components/ui/link-button.tsx
- src/content/navigation.ts
- AGENTS.md, ORCHESTRATOR.md, PLAN.md, PHASES.md, REFERENCE_ANALYSIS.md, README.md

Checks:
- `npm run lint`: passed, zero warnings.
- `npm run typecheck`: passed.
- `npm run build`: passed; static homepage generation successful.
- Production browser HTTP: 200 at /.
- Headless Chrome: no horizontal document overflow at 1440, 1050, 768, 760, 390 and 320px; header heights match 82px desktop / 72px mobile; all six anchor targets exist; local fonts load; no page errors.
- Keyboard skip link focuses main; all section anchors, active location markers and fixed-header offsets pass. About at document top is checked against its visible depth label rather than the section's zero top coordinate.
- Mobile direct links, keyboard access to horizontally scrolled nav items, reduced-motion CSS, smooth scrolling and browser back: passed.
- `npm audit --omit=dev`: passed, zero findings. Full `npm audit`: exit 1 with the same five high-severity development-only findings recorded in Phase 1. Dependency inputs were unchanged; no forced downgrade was applied.

Limitations: comparison covers the Phase 2 design system, not later feature equivalence. Boot, neural animation, project interactions, timeline data, certificates and terminal remain for their assigned phases. Screenshots are temporary QA artifacts under /tmp, not committed product assets. Runtime target remains Node 24; this host's checks ran with Node 26.10.0. No remote, push or deployment was performed.

Manual verification:
1. Run `npm run dev` and open http://localhost:3000.
2. Check desktop glass header, two-tone name, mono labels, subtle grain, six section headings and GitHub action.
3. Resize to 390px/320px; ensure page width fits and navigation can scroll horizontally to Contact.
4. Use Tab/Enter for skip link and section links; verify headings clear the fixed header and active underline follows the section. Try direct /#vault and browser Back.
5. Enable reduced motion and confirm smooth scrolling/hover transitions stop.

Stop here. Phase 3 requires user approval.


## Phase 3 report — 2026-10-23

Authorized by the user's “continue working” at the completed Phase 2 checkpoint. Implemented server-rendered identity/interests and project/contact anchors, a non-blocking skippable initialization status, and decorative Canvas neural sphere with pointer orbit and scroll-dependent rotation. Biography and skills remain unset; introductory wording summarizes approved interests without asserting proficiency. No new dependencies.

Canvas uses 52 nodes below 400px canvas width / 88 otherwise and caps device pixel ratio at 1.5. IntersectionObserver, document visibility and reduced-motion changes govern animation; listeners, observers and frame requests are cleaned up. Pause is keyboard accessible and stored locally with storage-denial handling. Caption supplies a text equivalent. Boot skips reduced motion, direct hashes, prior session visits, restored navigation, scroll, hidden documents and saved pause; it never blocks the page.

Changed: src/app/page.tsx, src/app/globals.css, src/components/hero/{boot-sequence,neural-core}.tsx, AGENTS.md, PHASES.md, PLAN.md, ORCHESTRATOR.md, README.md, REFERENCE_ANALYSIS.md.

Checks: npm run lint, npm run typecheck and npm run build passed. Production Chrome checks passed for Skip boot remaining dismissed, keyboard pause/resume, pause persistence after reload, no document overflow at 1440/768/390/320px, pixel ratio cap, unchanged canvas pixels under reduced motion, and no page errors. Initial browser attempt ran during server restart and returned connection refused; rerun against the ready production server passed. Lifecycle teardown/offscreen stopping were code-reviewed, not instrumented or benchmarked. Temporary QA script: /tmp/priyanshu-phase2-qa/phase3.cjs. No remote or deployment.

Reference limitation: uses existing documented boot/neural hints and palette; exact reference animation/topology and timing were not independently established. This original Canvas implementation does not claim exact interaction fidelity. Boot is deliberately non-blocking and lasts approximately two seconds.

Manual verification: run npm run dev, open localhost:3000 in a new session, use Skip boot and ensure it stays dismissed; move the pointer over the core, scroll, then Tab to Pause motion and press Enter. Reload to check persistence. Enable reduced motion and confirm static art/no boot. Resize to 320px and check both hero actions and interests remain readable. Visit /#vault to confirm direct anchors bypass boot.

Stop here pending approval for Phase 4 (Project Vault).
