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

## 3. Hero and neural visualization — complete; Phase 4 approved
- [x] Approved identity/interests, boot/skip and CTAs; unprovided biography/skills stay unset.
- [x] Canvas interaction, motion pause, reduced-motion fallback and capped mobile rendering.
- [x] Verify keyboard/resize and inspect lifecycle cleanup; report and commit.
- [x] Obtain Phase 4 approval (user: “continue phase 4”, 2026-10-23).

## 4. Project Vault — complete; Phase 5 approved
- [x] Verify four pinned repository snapshots, dependencies/features, exact demo URLs and screenshot provenance.
- [x] Reusable server-rendered cards, sticky visual/index, native anchor selection and static accessible dossier routes.
- [x] Check deep links/back, keyboard, actual destinations, responsive layouts; report and commit.
- [x] Obtain Phase 5 approval (user: “continue phase 5”, 2026-10-24).

## 5. Journey and certificates — complete; three journey and 24 certificate records supplied
- [x] Typed chronological timeline and confirmation checks; three owner-confirmed journey entries now supplied.
- [x] Accessible archive with independent PDF/issuer actions and link-check stamps; no real certificate files or URLs supplied, so none published.
- [x] Honest empty states, content intake guide, targeted checks, report and commit.
- [x] Populate three owner-confirmed journey records, including ongoing B.Tech with expected completion.
- [x] Populate 24 certificate records and check local PDF destinations; external issuer URLs remain documentary evidence pending live checks.
- [x] Obtain Phase 6 approval (user: “now do next step”, 2026-10-24).

## 6. Interactive terminal and contact — complete; Phase 7 approval pending
- [x] Twelve commands, unknown-command handling and clear.
- [x] Keyboard input/history, safe text/link output and available actual contact links.
- [x] Targeted command/browser checks, documentation and phase commit.
- [ ] Obtain Phase 7 approval.

## 7. Animations, responsiveness, accessibility — awaiting approval
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


## Phase 4 report — 2026-10-23

Explicitly authorized by “continue phase 4”. Implemented four source-backed projects: CineMatch AI, Fakeddit, CartPilot and Mock Interview AI. `PROJECT_EVIDENCE.md` records pinned commits, source URLs, verification date, screenshots and demo boundaries. Typed content holds descriptions, technologies, features, constraints, workflow, media dimensions and evidence. No README-only metrics are promoted into portfolio claims; source checks are not labeled runtime verification.

Project Vault now uses server-rendered reusable cards and a sticky SVG study with numbered native anchors. A small client component synchronizes the active index/visual on scroll, hash changes and resize, coalescing geometry reads to one animation frame; listeners/frame requests are cleaned up. On mobile the index appears above the visual and cards stack. Abstract art is decorative. No animation or tab-widget keyboard model is added; links retain native browser operation.

`/systems/cinematch`, `/systems/fakeddit`, `/systems/cartpilot` and `/systems/mock-interview` are statically generated dossiers with a single h1, metadata, repository/demo actions, real screenshots where available, overview, features, workflow, limits and commit-pinned source links. Each provides a native return link to the corresponding home-page card. Unknown slugs return 404. Global noindex remains inherited; no GitHub/project API request is needed at runtime.

Live checks: CineMatch redirected to Vercel login; Fakeddit timed out in two browser attempts. Their demo actions are omitted. CartPilot sign-in and Mock Interview landing returned HTTP 200 and expected rendered content; their demo actions are included. No authenticated flow, AI call, rating write, checkout or project backend test was performed. CartPilot/Fakeddit screenshots are genuine repository captures with provenance; Mock Interview is a new public landing capture. CineMatch has no verified screenshot and uses a clearly labeled abstract system illustration. Three WebP files total approximately 157 KiB. No dependencies added or changed.

Changed files:
- src/content/projects.ts; src/lib/types.ts; src/app/page.tsx; src/app/globals.css
- src/components/projects/{project-art,project-stage,project-card,project-vault}.tsx
- src/app/systems/[slug]/page.tsx
- public/projects/{fakeddit,cartpilot,mock-interview}.webp
- PROJECT_EVIDENCE.md; AGENTS.md; PHASES.md; PLAN.md; ORCHESTRATOR.md; README.md; REFERENCE_ANALYSIS.md

Checks:
- `npm run lint`, `npm run typecheck`, `npm run build`: passed; four dossier paths statically generated.
- Pinned source-path and media check against the four cloned commits: passed.
- Production headless Chrome: four keyboard index selections, active visual/index state, 120px anchor offsets, dossier navigation and browser-back hash restoration; direct dossier HTTP 200; per-project titles and noindex; fixed-commit source URLs; images loaded; no horizontal overflow on home and all four dossiers at 1440, 1050, 768, 760, 390 and 320px; keyboard return link; unknown-slug 404; no page errors.
- Desktop vault and full mobile dossier screenshots visually inspected. Temporary scripts/captures remain under /tmp/priyanshu-phase2-qa and /tmp/priyanshu-phase4-*.
- Browser testing found an observer-based active-index mismatch; replaced it with measured card-position tracking and verified all four selections. A subsequent keyboard navigation assertion ran before navigation completed; the test now waits for the destination URL.
- `git diff --check`: passed.

Limits: source audit covers the described features and does not certify all project behavior. Hosted demos require rechecking before publication. Reference desktop/mobile vault and dossier/back behavior were inspected; exact transition timing and artwork equivalence are not claimed. Performance benchmarking, broader accessibility audit and release checks remain for Phases 7–8. Validation host remains Node 26.10.0; project target is Node 24. No remote, push or deployment.

Manual verification:
1. Run `npm run dev`; open http://localhost:3000/#vault.
2. Scroll through four cards; use Tab/Enter on 01–04 and confirm selected underline/art follow the card, with headings clear of the header.
3. Open each dossier, refresh its direct URL, use browser Back, then try its Return to vault link. Confirm each returns to the correct project anchor.
4. At 390px/320px, check the index, stacked cards, screenshot captions, source paths and actions remain readable without horizontal overflow.
5. Confirm only CartPilot and Mock Interview expose demo actions, all repository links point to Priyanshuraj0909, and screenshot captions identify demo/preview content. Try /systems/no-such-project for 404.

Stop here pending approval for Phase 5 (Journey and certificates).


## Phase 5 original implementation report — 2026-10-24 (before journey intake)

Explicitly authorized by “continue phase 5”. Completed reusable server-rendered journey timeline and certificate archive components, typed confirmation/link-check fields, calendar-date formatting/validation, publication eligibility and chronological ordering. The timeline uses oldest-start-first ordering, semantic list/record headings, organization labels and explicit ongoing status; a missing end date never implies Present. The archive uses newest-issued-first ordering, a named focusable native scroll region, clear keyboard instructions and independent native PDF/issuer actions. Absent actions are omitted. Responsive rules stack timeline rows on mobile; print expands the archive. No new client component, animation or dependency was added.

**Personal content remains pending:** no education, experience, leadership or certificate details, original PDFs or issuer URLs have been supplied. An asynchronous intake question was sent while independent implementation continued. Both content arrays remain empty. Production shows two designed empty states, no fabricated records and no certificate destinations. CONTENT_GUIDE.md documents required fields, source/confirmation evidence, real PDF and issuer verification, and how to add records. Tests do not establish genuine certificate availability.

Changed files:
- src/components/journey/journey-timeline.tsx; src/components/certificates/certificate-archive.tsx
- src/lib/personal-records.ts; src/lib/types.ts; src/content/{journey,certificates}.ts
- src/app/page.tsx; src/app/globals.css; package.json (two check/test scripts only)
- scripts/check-personal-content.mjs; tests/personal-records.test.mjs
- CONTENT_GUIDE.md; AGENTS.md; ORCHESTRATOR.md; PHASES.md; PLAN.md; README.md; REFERENCE_ANALYSIS.md

Checks:
- `npm run test:content`: five tests passed covering partial dates/leap years, chronology without mutating content, drafts/reversed ranges/ongoing status, certificate ordering/confirmation, and destination URL/path shapes.
- `npm run check:content`: passed with zero journey and zero certificate records. Checks fields/dates/stamps, duplicate IDs and any supplied local PDF existence/signature. No actual PDF or external destination was available to verify; this command makes no network request.
- `npm run lint`, `npm run typecheck`, `npm run build`: passed. Static home and four existing dossier routes still generate.
- Production Chrome at 1440, 1050, 768, 760, 390 and 320px: honest empty states, zero timeline/archive records and certificate links, no horizontal overflow, keyboard section anchors, header offsets, active navigation and browser-back hashes passed.
- Separately, real components were server-rendered with explicitly TEST ONLY synthetic fixtures and injected into an intercepted temporary browser URL. At all six widths: timeline order, explicit ongoing display, newest-first archive, no horizontal overflow, ArrowDown scrolling, Tab to native links, focus scrolling, tabbing out and native issuer-link activation passed. The issuer destination was intercepted too; no real certificate claim was tested. No fixture route/file was added to the app, public directory or content arrays.
- No browser page errors. Local mobile empty-state and populated-fixture screenshots visually inspected; reference desktop timeline/mobile archive screenshots visually inspected. Temporary QA: /tmp/priyanshu-phase2-qa/{reference5,render5,phase5}.cjs and /tmp/priyanshu-phase5-*.
- `git diff --check`: passed. Node emitted an informational MODULE_TYPELESS_PACKAGE_JSON warning while importing TypeScript in the two new commands; checks still passed. Runtime target remains Node 24; verification host was Node 26.10.0.

Limits: populated layouts/keyboard were tested with synthetic data only, not approved personal history. No real certificate URL/PDF, document authenticity or issuer identity could be checked. No private information was inferred from repositories or the reference. General performance/accessibility/release audits remain in Phases 7–8. No remote, push or deployment.

Manual verification:
1. Run `npm run dev`; open http://localhost:3000/#logs and /#live. Confirm the two honest empty states and absence of invented entries, counts or certificate actions.
2. Use Tab/Enter on Journey and Certs in the fixed header; confirm section labels remain visible and Back restores the previous hash.
3. At 390px/320px confirm headings and empty-state descriptions wrap without horizontal overflow.
4. Review CONTENT_GUIDE.md and supply actual records/links/PDFs. After adding confirmed records, run content checks, open actual destinations and test chronological display, ArrowDown/PageDown scrolling, Tab through each link and Tab out. Recheck before publication.

Stop before Phase 6 (Interactive terminal and contact) until approved. Personal record intake remains open and must be completed before genuine entries can be published.


### Phase 5 journey intake follow-up — 2026-10-24

Priyanshu Raj supplied three confirmed learning/education records in reply to the intake question: B.Tech CSE at Bennett University (2024–present, expected 2028), independent AI/ML/full-stack development (2025–present), and MLOps learning at Bennett University (2026–present). Added the supplied descriptions without promoting them into profile proficiency, employment claims, new project dossiers or certificates. Year-only dates are retained; the tentative 2025 start was not adjusted without evidence. Confirmation source/date are recorded in src/content/journey.ts and CONTENT_GUIDE.md; no public source URL was supplied.

Added optional expectedEndDate support so an ongoing degree can display Present and Expected completion: 2028 separately from a completed end date. Validation rejects expected completion before start, invalid dates and expected completion on non-ongoing records. A sixth targeted test covers these rules. Certificates remain empty and Phase 6 is not approved.

Changed: src/content/journey.ts; src/lib/{types,personal-records}.ts; src/components/journey/journey-timeline.tsx; tests/personal-records.test.mjs; CONTENT_GUIDE.md; AGENTS.md; ORCHESTRATOR.md; PLAN.md; README.md; PHASES.md.


Certificate intake update — 2026-10-24: 24 records from the supplied deduplicated PDF now populate the archive, with individual single-page PDFs, printed issue/completion dates, categories and available credential IDs/hours/CEUs/grades. See CERTIFICATE_EVIDENCE.md for source mapping and issuer URLs retained as documentary evidence pending live checks. This supersedes earlier certificate empty-state notes. Phase 6 remains unapproved.

Certificate intake validation: content checker (3 journey / 24 certificate records), all six content tests, lint, TypeScript and production build passed. Chrome at 1440/390/320px confirmed 24 rows, newest-first ordering, keyboard entry into PDF actions, no document overflow and no page errors. All 24 local PDF URLs returned HTTP 200 with PDF signatures. Screenshots inspected at mobile width; artifacts remain under /tmp. Local preview/Chrome initially failed under sandbox restrictions; approved elevated runs passed. External issuer identity/authenticity has not been independently checked.

Changed for this intake: src/content/certificates.ts, src/lib/{types,personal-records}.ts, src/components/certificates/certificate-archive.tsx, src/app/globals.css, public/certificates/*.pdf, CERTIFICATE_EVIDENCE.md and the six project/status/content documents. Existing uncommitted journey changes were preserved; this intake is not a new phase and no mixed-work commit was created.

Manual verification: run npm run dev, visit /#live, browse all 24 records, Tab through View PDF links, compare issue/completion dates and Saylor details to their PDFs, and check the archive at 320px. Phase 6 still requires explicit approval; no publication or deployment performed.


## Phase 6 — terminal and contact — 2026-10-24

Authorized by “now do next step”. Completed twelve local commands: help, whoami, about, skills, projects, experience, education, github, linkedin, resume, contact, clear. The plan listed eleven names while the checklist requested twelve; whoami was added from observed reference behavior. No arbitrary shell execution, automatic external navigation, injected HTML or runtime API requests. Output uses typed text/native links. Missing biography/skills/contact fields remain unset; interests are labelled, education preserves ongoing/expected completion and no professional experience is invented.

The terminal client boundary receives serializable content from the server page. Labelled input, Enter/Run submission, Up/Down history with draft restoration, scrollable focusable output, separate polite result announcement, visible focus and native links support keyboard use. History is bounded to 100 commands and displayed output to 50 entries; nothing is persisted or transmitted. Contact stays server-rendered and displays GitHub; email/LinkedIn/resume/location only render when supplied in profile content. No new dependencies.

Changed: src/content/terminal.ts, src/lib/terminal.ts, src/components/terminal/portfolio-terminal.tsx, src/components/contact/contact-panel.tsx, src/app/page.tsx, src/app/globals.css, tests/terminal.test.mjs, package.json and project documentation. The phase commit also captures the previously uncommitted authorized Phase 5 journey/certificate intake documented above; existing work was preserved.

Checks: npm run test:terminal (four tests), npm run test:content (six tests), npm run check:content (3 journey / 24 certificate records), lint, typecheck and production build passed. A test assertion initially mismatched the valid missing-experience wording and was corrected. Production Chrome checks cover all twelve commands, mixed-case/whitespace, unknown input rendered as text, clear, draft/history, project link/browser Back, GitHub output and contact hrefs, keyboard entry/exit and no overflow at 1440/768/390/320px. The first multi-viewport run preserved state between same-URL navigations; the QA script now reloads per viewport. Full accessibility/performance auditing remains Phase 7. External GitHub availability was not rechecked in this phase; the existing approved URL is used. Node emits its existing informational MODULE_TYPELESS_PACKAGE_JSON warning in TypeScript tests. No deployment.

Manual verification: npm run dev, visit /#terminal, type help, try all listed commands, unknown input and clear. Type a draft and use Up/Down to recall commands and restore it. Tab/Shift+Tab between the input, Run button and output links; follow a project and use Back. At /#contact confirm only genuine available links appear. Resize to 320px and enable reduced motion. Phase 7 (animations, responsiveness and accessibility audit) requires explicit approval before proceeding.
