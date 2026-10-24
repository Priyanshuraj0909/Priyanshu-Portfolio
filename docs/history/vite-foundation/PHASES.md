# Vite rebuild phases

The owner restarted the workflow on 2026-10-24 with a new stack and Phase 1 only. Previous Next.js reports are preserved in docs/history/nextjs/PHASES.md. Every phase ends with documentation, a local commit, a result report and explicit approval before the next phase.

## 1. Foundation, architecture and dependencies — complete; Phase 2 approval pending
Acceptance:
- Preserve existing Next.js app, Git history, approved content and assets.
- Default dev/build/preview run Vite with React, strict TypeScript and Tailwind.
- Install Three.js, React Three Fiber, Motion and Lucide; defer scene/animation features.
- Minimal semantic identity/education/focus/GitHub page; no unverified technical claims.
- MASTER_ORCHESTRATOR.md, PLAN.md, PHASES.md and AGENTS.md define architecture and phase gates.
Tests: lint, Vite typecheck, production build, retained content/terminal tests, local HTTP/browser smoke and mobile width/keyboard checks. Verify Three/R3F dependency pairing and absence from initial JS bundle. No final reference design or deployment required.

## 2. Reference analysis and design system — awaiting approval
Acceptance: inspect reference desktop/mobile navigation, palette, typography, spacing and section order; document observed behavior; create original reusable layout, controls, focus states and responsive navigation.
Tests: rendered comparison at desktop/390/320px; keyboard/skip/anchor behavior, contrast measurements, no horizontal overflow, lint/typecheck/build. Record differences without claiming exact fidelity.

## 3. Hero and neural scene — awaiting approval
Acceptance: owner-approved identity/focus, optional boot/skip, original Three/R3F scene, lazy loading, pointer/scroll behavior, pause/reduced-motion/WebGL fallback and hidden/offscreen suspension.
Tests: pause persistence, reduced motion, resize, visibility lifecycle and cleanup, keyboard access, mobile DPR/complexity caps, production bundle split and browser errors; lint/typecheck/build.

## 4. Verified project vault and dossier migration — awaiting approval
Acceptance: inspect code for all five named repositories before descriptions; store URLs/commits/dates; StudySync waits for its real repository. Port reusable project cards and original visuals, selection and direct dossier routes; establish Vercel rewrite architecture.
Tests: verify every published feature/technology against code; genuine screenshots/links; dossier refresh/back and anchors; keyboard/touch/responsive checks; lint/typecheck/build. Omit unavailable links and unverifiable projects.

## 5. Journey and certificates migration — awaiting approval
Acceptance: migrate three confirmed journey records and 24 certificates without changing meaning; accessible timeline/archive, original PDFs and checked actions, independent issue/completion dates. Preserve documentary versus live-verified issuer distinction.
Tests: content/date/eligibility tests, chronological ordering, local PDF HTTP checks, keyboard archive and responsive layouts; lint/typecheck/build.

## 6. Terminal and contact migration — awaiting approval
Acceptance: port twelve typed safe commands, unknown input/clear/history, readable announcements and native links. Render only owner-approved available contact/resume destinations; no automatic shell execution or HTML injection.
Tests: command dispatch/missing data/hostile-input tests, Enter/Run, history/draft restore, focus and links, back/deep navigation, desktop/mobile; lint/typecheck/build.

## 7. Animation, accessibility and performance audit — awaiting approval
Acceptance: original Motion scroll/reveal transitions, reduced-motion/pause support, keyboard/focus/landmark/contrast remediation, mobile/touch behavior and practical neural performance budget.
Tests: production browser matrix desktop/tablet/390/320px; measured contrast, reduced motion and hidden/offscreen suspension, console/network errors, focus/back/scroll, performance profiling, lint/typecheck/build and regression tests. Record remaining limits.

## 8. Release, GitHub and Vercel — awaiting approval
Acceptance: final approved content/link audit, reproducible install, production routing/metadata/assets, clean meaningful commits; obtain required account/remote/deployment authorization. Never infer biography, proficiency, metrics or contact details.
Tests: npm ci, complete checks/build, production preview and deep-link refresh; authorized Vercel deploy and live URL/asset/keyboard smoke. Report exact deployed URL and any remaining limitations. Remove noindex only when release-ready and authorized.

## Phase 1 result — 2026-10-24
Completed the requested Vite foundation while retaining the prior Next.js source, assets, content and Git history. Default scripts use Vite; legacy scripts remain available. No reference-design sections or neural scene were implemented in the new app.

Installed/resolved: React 19.3.1, Vite 8.3.5, TypeScript 5.9.3, Tailwind 4.3.3, Three 0.186.1, React Three Fiber 9.8.2, Motion 12.43.0 and Lucide 0.468.0. React/Fiber majors are compatible; npm ls reports no invalid peer dependencies. React/Tailwind Vite plugins and Three types are configured. Three/R3F/Motion have no imports in the foundation runtime; their implementation is deferred. Retained Next dependencies and Next ESLint configuration support the existing source until migration completes.

Changed files: index.html, vite.config.mts, tsconfig.vite.json, src/main.tsx, src/foundation/{App.tsx,styles.css}, package.json/package-lock.json, .gitignore and eslint.config.mjs; created MASTER_ORCHESTRATOR.md; refreshed AGENTS.md, PLAN.md, PHASES.md, ORCHESTRATOR.md and README.md; archived five original planning files under docs/history/nextjs. Existing root tsconfig.json and portfolio content/assets were preserved.

Checks executed:
- npm run lint: passed, zero warnings.
- npm run build: passed, including strict Vite TypeScript check. Output: dist/index.html, 9.07 kB CSS and 221.99 kB JS (69.72 kB gzipped).
- npm run test:terminal: four tests passed; npm run test:content: six passed.
- npm run check:content: three journey and 24 certificate records passed.
- npm run build:legacy: passed; existing Next homepage and four dossier pages still build.
- npm ls --depth=0 and lockfile specification consistency: passed. Dependency installation reported zero audit vulnerabilities.
- Production Vite preview: HTTP 200; Chrome passed at 1440/390/320px for title, identity, education, actual GitHub href, noindex, no canvas, keyboard skip/main/GitHub focus, no horizontal overflow and no page errors. Initial education assertion was case-sensitive against CSS-uppercase innerText; corrected QA assertion and reran all widths successfully. Screenshots remain temporary at /tmp/vite-foundation-*.png.
- git diff --check: passed. Existing Node informational MODULE_TYPELESS_PACKAGE_JSON notices remain in the retained TypeScript test commands; no failed check results.

Limits: this is a foundation smoke screen, not the reference design or full portfolio migration. Reference URL was inaccessible to the web reader on this turn; existing rendered evidence remains in REFERENCE_ANALYSIS.md and fresh feature inspection is planned for Phase 2. Three/WebGL behavior is not yet implemented or tested. The existing content checker does not reverify external issuer destinations. No GitHub push, hosting registration or deployment occurred. Checked on Node 26.10.0; .nvmrc retains the intended Node 24 target.

Manual verification:
1. Use Node 24, run npm ci, then npm run dev; open http://127.0.0.1:5173.
2. Confirm Priyanshu Raj, B.Tech CSE/Bennett University, the supplied focus and GitHub link.
3. Use Tab, Enter and Tab to check the skip link, main focus and GitHub action; resize to 320px.
4. Run npm run build and npm run preview to check the production artifact.
5. Use npm run dev:legacy to open the preserved prior portfolio separately.

Phase 1 is complete and locally committed. Stop here pending explicit Phase 2 approval.
