# Implementation phases

## Planning checkpoint
- [x] Inspect workspace: empty directory, no existing code or Git repository.
- [x] Create six required development documents before application features.
- [x] Retrieve reference HTML/CSS and document source-observed evidence.
- [x] Locate four genuine project repositories and inspect README descriptions.
- [ ] Complete rendered desktop/mobile and interactive reference analysis.
- [ ] Resolve screenshot/recording gaps before application code.

## 1. Foundation and setup — complete; Phase 2 approval pending
- [x] Initialize Git and Next.js App Router with strict TypeScript.
- [x] Configure Tailwind CSS, Motion for React, Lucide React, ESLint, scripts and lockfile.
- [x] Establish metadata, semantic shell, content types and nullable personal fields.
- [x] Run lint, typecheck and production build; document manual localhost smoke.
- [x] Update documents and prepare completed Phase 1 commit.
- [ ] Obtain approval for Phase 2.

## 2. Design system — awaiting Phase 1 approval
- [ ] Apply verified palette, font families, spacing, borders, focus and depth labels.
- [ ] Build responsive header, shared controls and shell.
- [ ] Verify against desktop/mobile evidence; report checks and commit; obtain Phase 3 approval.

## 3. Hero and neural visualization — awaiting Phase 2 approval
- [ ] Approved introduction, skills/interests, boot/skip and CTAs.
- [ ] Canvas interaction, motion pause, reduced-motion fallback, mobile performance.
- [ ] Verify keyboard/resize/lifecycle; report and commit; obtain Phase 4 approval.

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
