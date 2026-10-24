# Master prompt — ten-phase implementation plan

Latest owner instruction, 2026-10-24: **implement Phase 1 only; do not redesign or overwrite the existing portfolio until the audit is complete.** This sequence supersedes the earlier eight-phase Vite plan preserved in docs/history/vite-foundation. The prior Next.js reports remain in docs/history/nextjs.

Every phase: explain goal/files, implement approved scope, run tests and production build, record actual results/manual checks/incomplete work, obtain approval, then create its local Git commit. Obtain approval before starting the next phase. Never interpret elapsed time as approval. No remote push/deployment before explicit authorization.

## 1. Repository audit and reference analysis — complete, awaiting approval/commit
Goal: understand both existing apps, reference appearance/behavior, real repositories and missing content without modifying UI.
Files: six requested root documents, README/ORCHESTRATOR, reference/project evidence addenda and historical plan snapshots.
Acceptance: inspect source/dependencies, reference desktop/mobile, five featured repositories at pinned commits, canonical 24 PDFs; distinguish observed facts, proposed designs and gaps. Preserve existing application source/assets/config/dependencies.
Tests: lint, strict Vite typecheck/build, retained parser/content tests and PDF existence checks. Read-only browser reference inspection. Existing local UI has no changed code requiring new interaction tests.
Browser review: run npm run dev and confirm the unchanged identity foundation; use npm run dev:legacy to review the preserved full portfolio. Review audit gaps/documents before approving changes.

## 2. Project architecture and design system — awaiting approval
Goal: reusable layout/tokens and a clean Vite feature structure.
Files: src/foundation or application shell, src/components/ui, src/styles, src/content/navigation.ts, Vite/TypeScript routing configuration, package files if Router is needed; DESIGN_SYSTEM.md.
Acceptance: apply owner's explicit palette, licensed fonts, fluid type/spacing and accessible shared controls; establish dossier router/deep-link strategy; keep content separate. Boot/navigation behavior remains Phase 3.
Tests: lint/typecheck/build; contrast measurements and desktop/tablet/390/320px component checks, text zoom/focus and overflow. Browser review: typography, surfaces, actions and responsive shell.

## 3. Boot sequence and navigation — awaiting approval
Goal: original branded initialization and responsive native section navigation.
Files: src/features/boot, src/components/layout, src/content/navigation.ts, motion preference utilities.
Acceptance: progress/status/percentage, keyboard Skip Boot, short nonblocking transition, reduced-motion bypass, original Priyanshu branding; visible active navigation/focus, anchors and direct-hash support. Do not copy reference logo/source.
Tests: skip persists for session, deep links bypass boot, no focus trap, keyboard/mobile navigation, browser back/reduced motion; lint/typecheck/build. Browser review: fresh session, Skip, direct hashes and mobile navigation.

## 4. Hero and interactive neural core — awaiting approval
Goal: owner-supplied hero/biography, original Three/R3F scene and accessible actions.
Files: src/features/hero, src/features/neural, src/content/profile.ts, minimal Drei dependency/helpers when justified.
Acceptance: exact approved name/subtitle/biography; pointer-responsive graph, scroll movement, fallback, lazy loading, pause, hidden/offscreen suspension, reduced motion, mobile complexity/DPR limits and disposal. Availability/location stay absent unless confirmed.
Tests: WebGL failure/reduced-motion/pause, pointer/scroll, visibility lifecycle, keyboard, resize and measured mobile rendering; lint/typecheck/build. Browser review: motion controls, static fallback and primary links.

## 5. Technical capabilities — awaiting approval
Goal: six numbered evidence-backed modules below hero inside About.
Files: src/features/capabilities, typed capability content and PROJECT_EVIDENCE.md path mapping.
Acceptance: AI/ML, backend, frontend, languages, databases/data engineering, tools/deployment; each technology supported by inspected implementation/config. No proficiency scores or inferred expertise.
Tests: content evidence coverage, keyboard/touch states, contrast, responsive layout/reduced-motion; lint/typecheck/build. Browser review: module readability, accurate project attribution and subtle interactions.

## 6. Project Vault and dossiers — awaiting approval
Goal: five source-backed projects with original selector and detailed routes.
Files: src/features/projects, src/content/projects.ts, router, public/projects genuine images, evidence and Vercel routing specification.
Acceptance: CineMatch, Fakeddit, CartPilot, Mock Interview, Medical Cost App; number/code, verified stack/features/architecture/challenges, GitHub and checked optional demo; screenshots are real. Status/metrics only when confirmed. StudySync waits for source. Dossiers support refresh/direct URL/back and accessible selection/focus restoration.
Tests: verify source claims against pinned files, links/screenshots, selector keyboard/touch, route refresh/back/404, desktop/mobile; lint/typecheck/build. Browser review: each project, dossier, native repository/demo destination and captions.

## 7. Journey timeline — awaiting approval
Goal: original animated timeline with genuine records and editable missing fields.
Files: src/features/journey, src/content/journey.ts, src/lib/types.ts/validation and optional supporting document fields.
Acceptance: preserve three confirmed learning records and ongoing B.Tech/expected completion distinction; date/category/title/organization/description/document supported; unknown school/work/internships/achievements remain empty drafts.
Tests: date/category/confirmation validation, chronological order, optional document destinations, keyboard/reduced motion/responsive; lint/typecheck/build. Browser review: real education dates, no fabricated entries, readable mobile timeline.

## 8. Certificates archive — awaiting approval
Goal: all 24 original PDFs with real previews/search/category filter/newest-first order.
Files: src/features/certificates, src/content/certificates.ts, preview assets derived from PDFs, content tests/evidence.
Acceptance: title, issuer, issue date, category, preview, PDF and available verified issuer action; independent completion metadata retained. Accessible search/filter result counts, empty state and keyboard flow. Never reimport the extra workshop as a 25th certificate.
Tests: 24-record uniqueness/file availability, PDF preview provenance, search/filter/order/empty state/reset, URL checks, keyboard and mobile; lint/typecheck/build. Browser review: every PDF, filter/search and issuer destination validity. Do not preload all PDFs.

## 9. Interactive terminal and contact — awaiting approval
Goal: owner-requested simulated shell and genuine channels.
Files: src/features/terminal, src/features/contact, src/lib/terminal.ts, content commands/profile and tests.
Acceptance: prompt priyanshu@nexus:~$; help/about/skills/projects/certificates/education/github/resume/contact/clear; pure safe parser, history/draft restore, clear, mobile input, native links/section navigation. Contact only available owner values; no fabricated email/location/resume or automatic shell/HTML execution.
Tests: all commands, whitespace/case, malicious text, missing fields, history/clear/announcements/focus/link/back; lint/typecheck/build. Browser review: Enter/Run, history, certificates command, Tab escape and actual contact actions.

## 10. Responsive design, performance, accessibility, SEO and deployment — awaiting approval
Goal: production-ready original portfolio and separately authorized Vercel release.
Files: observed audit fixes, SEO/Open Graph and original share asset, routing/hosting config, documentation.
Acceptance: measured contrast/keyboard/landmarks, 320px–desktop/touch/text zoom, reduced-motion/pause/WebGL fallback/lifecycle, lazy heavy components and optimized genuine images; route refresh, titles/metadata/Open Graph; no missing PDFs or unsupported metrics. Keep noindex until release-ready. Obtain remote/account/deployment authorization; do not guess URLs or push prematurely.
Tests: clean install, all lint/typecheck/build/content/terminal/regression checks, production browser matrix and performance profiling, deep links/back/404, external destination audit and authorized live deployment smoke. Browser review: final checklist, all public routes/assets, exact returned deployment URL. Report any limits honestly.

## Phase 1 execution report — 2026-10-24
Completed source/dependency audit and read-only browser/reference/repository inspection. Five fresh public clones show four original repository commits unchanged plus newly identified Medical Cost App. Read app.py, request schemas and real JS interface for Medical; no backend/model/pickle execution or accuracy claims. CONTENT_AUDIT.md contains code-supported scope and gaps. All 24 original local PDF assets pass the existing checker. Biography/subtitle now supplied in master prompt; retained source is intentionally unchanged during audit.

Reference: fresh Chrome at 1440×900 and 390×900 inspected six navigation destinations, hero, Project Vault, journey, certificates, terminal and contact. Hero/project/contact and mobile archive captures were visually reviewed. Help/unknown/clear were exercised; no document overflow observed at these widths. Detailed motion/performance/dossier behavior is not fully measured; see REFERENCE_ANALYSIS.md. Captures remain temporary under /tmp/master-audit-*.png. Web reader access failed, while direct Chrome succeeded.

Changed only documentation: AGENTS.md, MASTER_ORCHESTRATOR.md, PLAN.md, PHASES.md, new DESIGN_SYSTEM.md and CONTENT_AUDIT.md, README.md, ORCHESTRATOR.md, PROJECT_EVIDENCE.md/REFERENCE_ANALYSIS.md addenda and docs/history/vite-foundation snapshots. No app source, assets, configuration, dependency or lockfile change. No commit yet: the latest master prompt explicitly requires approval first. No GitHub remote is configured; no push or publication occurred.

Verification results are recorded below after the check run. Phase 2 remains unapproved.

Verification — all passed on Node 26.10.0: npm run lint; npm run build (includes strict Vite typecheck); npm run test:terminal (4); npm run test:content (6); npm run check:content (3 journey + 24 certificates). Vite artifact remains 221.99 kB JS / 69.72 kB gzip and 9.07 kB CSS. npm ls --depth=0 reports expected installed packages; Drei/Router absent as documented. Existing informational MODULE_TYPELESS_PACKAGE_JSON notices in Node tests remain; no code change was needed. Browser normal-motion inspection observed reference boot status/percentage/stages and keyboard-activated Skip Boot, with hero visible afterward; one canvas was present. This did not measure full boot duration or GPU performance.

Manual review: open CONTENT_AUDIT.md and DESIGN_SYSTEM.md, verify missing information is correct, then run npm run dev and view http://127.0.0.1:5173 to confirm the existing foundation is unchanged. Run npm run dev:legacy separately for the preserved Next.js portfolio. In the next approved phase compare design tokens/layout to the reference. Pending: owner review/approval, local audit commit after approval and explicit Phase 2 authorization. No new local browser regression run was needed for documentation-only changes; prior foundation browser results are historical, while this phase's fresh browser checks concern the reference.


## Autonomy approval — 2026-10-24
The owner subsequently instructed “cdo everything by your self”. This approves the completed audit commit and all remaining implementation phases without intermediate approval stops. Continue through verification and local phase commits autonomously. Preserve unknown personal fields and do not fabricate claims. Publishing may proceed only with available authorized hosting access; never infer missing credentials or a GitHub remote. This update supersedes earlier phase-stop/commit-approval gates.

## Implementation run — Phase 2
Completed the shared Vite shell, React Router, original licensed font registration, requested palette and responsive primitives while retaining legacy source. Drei/Router dependencies installed; strict Vite scope now includes features/shared components. `npm run lint` and `npm run build` passed. Browser regression verification will run against the integrated production app. No remote/deployment.
