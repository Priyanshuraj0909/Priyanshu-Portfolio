# Production verification

## Live portfolio and URL update — 27 October 2026

The owner confirmed [the live portfolio](https://priyanshu-portfolio-pi-ruby.vercel.app/#about) and [source repository](https://github.com/Priyanshuraj0909/Priyanshu-Portfolio). Synced four newer published redesign commits with a fast-forward before editing. Added src/content/site.ts as the confirmed origin/repository record, updated current workflow/release documents, and added the About anchor to the readable static fallback. Historical plans under docs/history remain unchanged.

Executed on local Node 26.10.0: lint, all 13 tests, strict typecheck, content validation, production build and deployment artifact checks passed. Verified both the public-origin build (canonical URLs, absolute social images, sitemap and indexing) and an explicitly empty PORTFOLIO_SITE_URL preview build (noindex/Disallow); restored the public build afterward. The static 404 stays noindex. Existing lazy renderer size and module-type notices remain. No dependencies changed.

Live HTTPS smoke: 65 successful requests cover the homepage, five direct dossiers, 24 PDFs (all PDF signatures valid), 24 previews, five project images, JS/CSS entry assets, favicon, brand mark, social image and robots.txt. The existing sitemap endpoint returned 404, the homepage was noindex and lacked canonical metadata. Headless installed Chrome with reduced motion opened /#about, confirmed the About section in view and the GitHub profile action; no uncaught browser errors. This is a live smoke check, not a repeat of the full historical accessibility, motion or device matrix.

Published commit f3b43a8 to origin/main. The GitHub Vercel status reports success for deployment FSfrsSrU9Vq2Wbbhq1hLLmrE3xrJ. Subsequent live requests confirmed index/follow, the correct homepage and five dossier canonical URLs, absolute social images, the static About anchor, robots.txt Allow and a valid six-route XML sitemap. No hosting settings were changed through Vercel. Temporary evidence: /tmp/portfolio-live-checks.json, /tmp/portfolio-live.html and /tmp/priyanshu-phase2-qa/verify-live-links.mjs.

## Historical production verification — 24 October 2026

## Deployment readiness follow-up

Pinned the deployment runtime to Node 24 in package.json to match .nvmrc, set Vercel's install command to `npm ci`, and added GitHub Actions validation for `main` pushes and pull requests. Added `npm run check:deployment` to inspect built static documents, dossier rewrites, linked assets, all 24 certificate originals/previews and indexing configuration. Preserved the pending personal monogram/favicon changes. Fixed the shared motion module's missing client directive so the legacy Next.js build compiles again.

Fresh `npm ci --no-audit --no-fund` passed on local Node 26.10.0. Lint, all 13 tests, content validation, strict TypeScript, production build and deployment artifact checks subsequently passed on Node 24.22.1, the pinned deployment major. The legacy production build also passed on local Node 26.10.0. The existing lazy WebGL chunk-size and module-type notices remain non-blocking. Browser checks below are earlier coverage; this follow-up did not repeat that matrix. Hosted Vercel deployment and the new remote CI run have not been verified locally. No deployment origin was supplied, so noindex remains enabled.

## Current result
The Vite portfolio is published to GitHub and live at `https://priyanshu-portfolio-pi-ruby.vercel.app`. The owner confirmed this origin on 2026-10-27 and HTTPS/browser smoke checks passed. Public metadata fixes deployed successfully through the existing GitHub/Vercel connection and passed live verification. Owner authorization covers publication without further implementation checkpoints.

## Executed checks
| Check | Actual result |
| --- | --- |
| Clean `npm ci` | Passed; audit reported 0 vulnerabilities |
| `npm run lint` | Passed, zero warnings |
| `npm run build` | Strict TypeScript + Vite + static readable homepage and five dossier documents passed |
| `npm test` | 13 tests passed: content/date eligibility, pure terminal parser and certificate search/filter/order |
| `npm run check:content` | Three journey + 24 certificate originals/previews passed; local file signatures checked |
| `npm run build:legacy` | Preserved Next homepage and five dossier routes still build |
| Production Chrome matrix | 1440, 1050, 768, 390, 320px passed: content counts, search/category/reset/empty state, terminal history/clear/safe text, no horizontal overflow/page errors |
| Dossiers | Five direct routes and refresh, project navigation/back, missing-project feedback passed |
| Asset requests | All 24 PDF URLs and 24 WebP preview URLs returned 200; PDF signatures checked |
| Keyboard | Skip → main, native links, Enter/Run, history/draft restoration and output focus paths passed |
| Motion | Normal boot/Skip, pause persistence/reload, offscreen stopping, reduced-motion static field passed |
| Touch | Mobile emulation (390px, touch enabled, DPR 3) navigation/terminal passed |
| WebGL fallback | Intentionally disabled WebGL → original SVG, portfolio and project content remain usable |
| No JavaScript | Readable static homepage, 24 original PDF links and Medical dossier passed on preview's matching static routes |
| Accessibility | Axe WCAG 2 A/AA + 2.1 A/AA: no reported violations on desktop/mobile homepage and mobile Medical dossier after fixes |
| Repository evidence | Every published project/capability source path exists in the pinned freshly inspected snapshots |

## Measured rendering and asset boundaries
Instrumented WebGL draw functions in Chrome: rendering was active during a 600ms sample; draws stopped entirely after manual pause, offscreen scrolling and a synthetic document.hidden visibility event. The latter verifies handler behavior, not a physical device/background-tab benchmark. DPR at device scale factor 3 measured 1.4983 (cap 1.5). Final geometry uses 185 desktop / 105 mobile nodes, including five stem nodes. Observer/listener cleanup is code-reviewed; GPU memory leak and long-session thermal measurements were not performed.

Entry JS is about 440.55 kB (138.58 kB gzip); scene is a separate lazy 933.52 kB chunk (248.14 kB gzip). Build reports the scene's >500 kB warning. It is not imported for reduced-motion sessions, and tests verified that request exclusion. No postprocessing, live GitHub API or project inference runs in the portfolio. Real project WebPs total about 248 KiB; all 24 document preview WebPs total about 472 KiB. Original PDFs (~11 MiB) are opened only on request, not embedded/preloaded.

Axe marked color-contrast as requiring manual review on textured/gradient surfaces; zero automated violations is not a complete conformance guarantee. Computed token contrasts: primary 18.62:1 on #05070B / 17.60:1 on #0B1019; secondary 6.59 / 6.23; violet 6.45 / 6.10; cyan 13.08 / 12.36. Against a separately checked #201833 ambient substrate the minimum of these is 5.42:1. This token calculation is not a pixel-by-pixel audit of every gradient/image. Essential input boundaries were strengthened. Root text-size overflow smoke passed; real assistive technology, Safari/Firefox and physical-device tests are not claimed.

## Genuine source and link checks
Five repositories were read at pinned commits; no models/backends/private accounts were exercised. Four project demo landing/workspace pages loaded (Fakeddit, CartPilot, Mock Interview, Medical). CineMatch redirects to Vercel login, so its public demo button is omitted and a clearly captioned genuine local frontend screenshot is used. The other screenshots are documented real captures. All source links are static. StudySync remains omitted pending its source information.

Six exact Coursera destinations from the original PDFs showed the matching owner/course/issuer/date and are exposed. Ethics returned an empty record, so its issuer action stays hidden. Other certificate PDFs/QR codes remain intact; no verification URL was invented. Contact exposes the owner-supplied GitHub, LinkedIn and `India · IST (UTC+5:30)` location; unknown email/resume/availability and unknown achievements remain unset.

## Issues resolved during verification
Corrected explicit filter labels, visible-text/accessibility-name consistency, initial route focus stealing the skip-link entry point, static dossier preview URL handling, a CSS editing error caught by the production build, motion-control overlap with the mobile Run action (control moved into header), and TypeScript import-extension configuration for shared Node/Vite logic. Reran relevant checks after corrections. Existing Node MODULE_TYPELESS_PACKAGE_JSON informational notices and the legacy ESLint 9 end-of-support warning remain; no forced dependency downgrade or unverified security fix was applied.

## Manual verification
1. `npm ci`, `npm run dev`, open http://127.0.0.1:5173. Check a fresh boot and Skip, hero/core, six modules and six navigation destinations.
2. Move the pointer over the core; pause/resume, reload and enable reduced motion. Scroll away and back. Inspect mobile/touch layout.
3. Open each of five project dossiers; check genuine image captions, source/demo actions, direct refresh and Back.
4. Search/filter/reset the archive; open original PDFs and available issuer records. Check issue/completion precision and all 24 records.
5. Type help, each of the ten commands, unknown input and clear; use Up/Down with a draft. Tab to output links and leave the form normally.
6. `npm run build`, `npm run preview`; review static metadata and no-JS fallback. The public build defaults to the confirmed origin in src/content/site.ts; explicitly empty PORTFOLIO_SITE_URL retains noindex for private previews.
7. After Vercel builds the updated commit, recheck the confirmed public URL, canonical metadata, robots.txt and sitemap.xml. The existing deployment and its dossier/PDF routes have already passed live HTTPS smoke checks; full hosted interaction/device coverage remains a separate check.

Temporary browser scripts, screenshots and detailed results are under /tmp/priyanshu-phase2-qa and /tmp/portfolio-*.json/png. They are verification artifacts, not product assets. No credentials/private messages or reference-owner assets were copied.

## Studio redesign — 25 October 2026

The active Vite homepage now uses the original editorial direction documented in
REDESIGN.md. Lint, type checking, build, content checks, deployment checks and all
13 existing tests passed. Playwright CLI with Chromium passed 23 checks covering
navigation, five direct project routes, certificate filtering, terminal interaction,
persistent pause, reduced motion, keyboard focus and responsive widths from 320 to
1440px. No uncaught browser errors. A tablet overflow caused by the hero decoration
was corrected. External visual-reference pages remained blocked by the network
proxy after retry; no claim is made to have inspected them. No hosted deployment
was performed as part of this redesign.

## Inference edition — 25 October 2026

ECHO reference inspected from source and its included design screenshot; original
implementation described in INFERENCE_DESIGN.md. Dark palette, compact AI/ML
inference sculpture, project selector, intro transition and lazy sections replace
the studio edition presentation. All 13 unit tests, lint, typecheck, production
build, content and deployment checks pass. Chromium: 33 production interaction
assertions plus failed-scene-import and direct-archive-anchor checks pass. Native
scrolling, visible focus and reduced motion are retained. Physical GPU performance
and deployed hosting remain unverified.

Final verification, 26 October 2026: production deployment-artifact checks passed
again after the final motion changes. Inspected the rendered 390px mobile WebGL
hero and Fakeddit project preview in Chromium; selection works and there is no
horizontal overflow. Browser reported no errors (software-rendering warnings only).

## Page-wide learning sphere — 26 October 2026

Replaced the small inference-core model with a large faceted sphere and segmented
orbital rings. One persistent canvas emerges from depth after the intro and reacts
to whole-page pointer movement, scrolling, hover and keyboard focus. Added floating
expand/collapse and pause controls. Existing tests (13), lint, typecheck, production
build and deployment-artifact checks pass. 28 new Chromium production assertions
pass; desktop and mobile screenshots were inspected. No uncaught browser errors.
The lazy Three.js chunk still produces the known build-size warning.

## Signature identity and cinematic introduction — 27 October 2026

Replaced the pr/asterisk identity with an original angular PR SVG monogram across
the header, footer, scene label, standalone mark and versioned favicon. Applied the
official Motion skill and shared-layout/path-drawing examples described in
INFERENCE_DESIGN.md. The introduction now draws the mark, reveals the name, and
hands the same mark to the header while the page and learning sphere emerge.

Lint, TypeScript, production build and deployment-artifact checks pass. Playwright
CLI/Chromium passed 31 assertions: SVG consistency and delivery, measured shared
logo movement, coordinated scene reveal, locked/unlocked controls, restored focus
and scrolling, session behavior, 320/390/768px layouts, Skip/Escape, reduced motion,
deep links and project controls. No uncaught browser errors. Desktop intro, desktop
page and mobile page screenshots inspected. Fixed a focus race by restoring focus
in an effect after the ready-state DOM commit instead of a pre-commit animation frame.
The lazy renderer retains its known bundle-size warning; live deployment unverified.

## Numbered navigation — 29 October 2026

Updated the homepage menu to match the supplied reference: six numbered uppercase
links, lavender accents, dark gradient and an active underline. Retained the PR
identity and existing anchors; Journey targets the nested learning timeline.
Mobile uses horizontal scrolling, with native links and visible keyboard focus.

TypeScript, production build, deployment-artifact checks and diff whitespace checks
pass. Chrome checks passed all six anchors and active states, 320/390/768px page
widths, keyboard focus scrolling and no uncaught errors. Desktop and mobile
screenshots inspected; fixed inherited CSS that hid mobile numbers. Existing
renderer chunk-size and Node module-type warnings remain. Publication status is
recorded in DEPLOYMENT.md.

The same Chrome checks passed against the public Vercel URL after deployment
of `aa133f6`; GitHub's Vercel status reports success.

## Compact navigation — 29 October 2026

Reduced numbered menu text from 16px maximum to 12px (10px on mobile),
link gaps and vertical padding. Preserved 44px minimum link height and focus
styles. TypeScript, production build, deployment artifacts and whitespace checks
passed; existing build warnings remain.

## Teal & Peach palette — 29 October 2026

Applied the owner's supplied reference across runtime CSS, WebGL materials/lights,
static fallback, introduction, monogram, favicon and browser theme color. Kept the
compact navigation sizing and source project/certificate assets. Updated README
and current design tokens.

Chrome desktop/mobile screenshots inspected. Browser checks passed palette values,
320/390/768px overflow checks, reduced-motion fallback, all six navigation anchors,
active states and keyboard focus scrolling, without uncaught errors. Solid token
contrast against the teal foundation: primary text 8.39:1, secondary text 6.00:1,
peach accents 5.50:1; button text on peach 6.99:1. These token measurements do not
claim an exhaustive audit of every translucent surface or animated composite.
TypeScript, production build and deployment-artifact checks passed; existing large
renderer chunk and Node module-type warnings remain.

The palette/browser checks also passed against the public URL after Vercel
reported successful deployment of `1dcb6cb`.

## Contact finale — 29 October 2026

Replaced the closing contact block with an oversized personal name, original CSS
dotted globe, contact/time-zone column, stacked GitHub/LinkedIn links, signoff and
copyright. Retained Teal & Peach, the procedural scene, motion controls and native
Back to top. Email/resume are rendered only when approved profile values exist;
the owner supplied `priyanshuraj032004@gmail.com` during this update, and the
resume remains null. No reference-owner content or assets were copied.

TypeScript, production build, deployment artifacts and whitespace checks passed.
Chrome checks passed contact deep linking, correct name and GitHub URL, available
link count, approved email link, 320/390/768/1440px page widths, 44px social link
heights, keyboard focus and Back to top, with no uncaught errors. Desktop/mobile
screenshots inspected. Existing bundle-size and module-type warnings remain.

All 13 existing content/terminal tests passed after adding the approved email.
Adjusted desktop email typography after screenshot inspection to keep the address
from breaking onto a final single-character line.

The same contact browser checks passed against the public portfolio after Vercel
reported successful deployment of `11b8acd`.

## Contact section number — 29 October 2026

Corrected the closing section label from `06 / CONTACT` to `04 / CONTACT`
as requested. Production build, TypeScript, deployment-artifact and whitespace
checks passed.

## About-first opening — 29 October 2026

The opening section is now `01 / ABOUT` with a two-line personal name, the exact
owner-supplied biography and emphasized name/interests, alongside the existing
learning sphere. Projects now follows as `02 / SELECTED WORK`; Journey retains
the three records and capabilities in its own section. Preserved `#about`,
`#vault`, `#logs` and the legacy `#core` home anchor, and aligned scene section
tracking and the static fallback with the new order. Updated typed biography
content also supplies metadata and terminal About output. Kept Teal & Peach and
the approved contact details. Mobile biography uses a solid backdrop.

TypeScript, production build, deployment artifacts and all 13 existing tests
passed. Chrome checks passed exact paragraph text and bold emphasis, section
order, unique About anchor, 320/390/768/1024/1440px page/title widths, reduced
motion fallback, project CTA, legacy home anchor and all six navigation active
states/keyboard focus scrolling, with no uncaught errors. Desktop and mobile
screenshots inspected. Existing renderer size/module-type warnings remain.

Vercel reported successful deployment of `31b9320`. Live browser verification
could not complete: two navigations timed out, as did an independent HTTP request.
Local visual/content/navigation checks passed; do not treat this release's live
visual checks as executed successfully.

## Connectivity follow-up — 29 October 2026

Live About-first browser checks passed using a process-local resolver override
to a reachable Vercel edge. Normal DNS-selected addresses still time out in this
environment; this is not a normal-route availability pass. See DEPLOYMENT.md
for the tested addresses and limits. No frontend changes were required by the
observed evidence and no system network settings were changed.

The normal route recovered later in the same investigation. It returned HTTP
200, and the full About-first browser suite passed through ordinary DNS. This
confirms the deployed application is currently serving correctly; the earlier
failure was transient on the selected Vercel network path.

## About contact link — 29 October 2026

Added a compact `Contact ↗` link beside `Explore my work` in the opening About
section. It uses the existing `#contact` anchor, Teal & Peach styling, visible
focus treatment and a 44px minimum target. Production build, TypeScript,
deployment artifacts and whitespace checks passed. Chrome checks passed the
contact anchor, keyboard focus and 320/390/768/1440px layouts without overflow.

## Reliable public backup — 29 October 2026

The Vercel hostname repeatedly timed out before HTTP while the same build passed
through another Vercel edge, isolating the failure to its managed network route.
Published the verified source as a public backup at
`https://priyanshu-raj-ai-portfolio.priyanshuraj032004.chatgpt.site/`. The final
deployment returned HTTP 200, served the current JavaScript/CSS and supplied
biography, emitted the backup origin as its canonical URL, and passed the About
Contact-link browser suite at 320/390/768/1440px without uncaught errors.

## Vercel route recovery — 29 October 2026

After the owner reported another failure, the Vercel hostname was confirmed to
have moved to new public edge addresses. The homepage and current hashed
JavaScript returned HTTP 200, GitHub's Vercel status reported success, and both
live Chrome suites passed through ordinary DNS: exact About content/order,
WebGL and reduced-motion views, legacy anchors, Contact navigation, keyboard
focus and 320/390/768/1024/1440px layouts. No frontend defect was found. GitHub
now lists Vercel as primary and retains the independently verified public backup.

## Filled Contact action — 30 October 2026

Changed the opening `Contact ↗` action from an underlined text link to a filled
peach button matching `Explore my work`, with dark teal text and arrow. The
button retains its native `#contact` anchor, visible focus behavior and at least
44px target height. TypeScript, production build, deployment artifacts and
whitespace checks passed. Chrome confirmed the peach background, navigation,
keyboard focus and 320/390/768/1440px layouts without document overflow.

## Journey section number — 30 October 2026

Updated the Journey eyebrow to `03 / THE JOURNEY SO FAR`, matching its position
after `01 / ABOUT` and `02 / SELECTED WORK` in the homepage sequence.

## Fast Vercel opening — 30 October 2026

Confirmed that `https://vercel.com/king-09` is a management/profile route and
returns HTTP 404; it is not the public portfolio. The correct Vercel deployment
returned HTTP 200 with roughly 0.10-second server response. Removed the
first-visit intro that could block content for about 4.85 seconds and deferred
the optional WebGL bundle until after the readable first screen paints. The
initial JavaScript decreased from 440.33 kB to 436.29 kB (139.25 kB to 138.15
kB gzip). TypeScript, production build, all 13 tests, deployment artifacts and
whitespace checks passed. Chrome confirmed immediate visible content, delayed
WebGL enhancement, no overflow and no uncaught errors at 390 and 1440 pixels.

## Technical capabilities number — 30 October 2026

Updated the capabilities heading to `04 / TECHNICAL CAPABILITIES` as requested.
TypeScript, production build, deployment-artifact and whitespace checks passed.
Existing renderer-size and Node module-type warnings remain. Browser verification
and live publication were not performed for this text-only edit.

## Unnumbered capabilities heading — 30 October 2026

Removed the `04 /` prefix from Technical Capabilities at the owner’s request.
Production build (including TypeScript), deployment-artifact and whitespace
checks passed. Browser verification was not performed for this text-only edit.

## Continuous Learning number — 30 October 2026

Changed the archive heading to `04 / CONTINUOUS LEARNING` at the owner’s request.
Production build (including TypeScript), deployment-artifact and whitespace
checks passed. Existing renderer-size and Node module-type warnings remain.
Browser and live-deployment verification were not performed for this text edit.

## Terminal section label — 30 October 2026

Added a full-width `05 — TERMINAL` label above the existing terminal layout,
with spaced monospace text, an accent number and a decorative horizontal rule.
Uses the approved Teal & Peach palette and smaller mobile spacing.
Production build (including TypeScript), deployment-artifact and whitespace
checks passed. Browser visual verification was not performed. Existing renderer
size and Node module-type warnings remain.

## Compact Terminal label — 30 October 2026

Replaced the separated number/divider/title with `05 / TERMINAL`, using the
same eyebrow typography as Continuous Learning. Removed custom label spacing,
rule and number color. Production build (including TypeScript), deployment
artifact and whitespace checks passed. Browser visual verification was not
performed; existing renderer-size and Node module-type warnings remain.

## Vercel connection recurrence — 30 October 2026

The owner reported a blank page at /#terminal. Two normal-route HTTPS probes
timed out during connection (10s and 8s), before any HTTP response. DNS selected
216.198.79.67 and 64.29.17.67. A request-only override to Vercel edge
76.76.21.21 returned HTTP 200 in 0.33s and served the latest JavaScript.
Chromium through that edge passed About content, section order, five viewport
widths, WebGL/reduced-motion fallback and navigation without uncaught errors.
The old QA selector matched both hero buttons; a temporary corrected script
passed. This does not establish normal-route recovery or the owner’s ISP status.
The backup hostname also timed out during DNS resolution from this environment,
so it is not claimed as a verified working alternative today. No frontend defect
was demonstrated and no source/network/domain settings were changed. Vercel
account access is not connected; hosting investigation remains pending that access.

## Contact numbered 06 — 30 October 2026

Updated the closing label to `06 / CONTACT`, following `05 / TERMINAL`, as
requested. Production build (including TypeScript), deployment-artifact and
whitespace checks passed. Browser/live verification was not performed for this
text-only change. Existing renderer-size and Node module-type warnings remain.

## GitHub failed check repair — 30 October 2026

The verify job for commit 99adee7 failed at lint because the Neural startup
effect read mobile state without declaring it as a dependency. GitHub job
123937120704 logs and a local lint run reproduced the same warning; the
workflow treats every lint warning as a failure. Vercel separately reported
success for that commit.

The mount-only startup timer now reads window.innerWidth directly, preserving
the 900ms mobile / 450ms desktop delay without capturing reactive state or
restarting observers and listeners on resize. Responsive scene state remains
updated by the existing resize handler.

Local lint, all 13 tests, personal-content validation, TypeScript, production
build, deployment-artifact checks and git diff --check passed on Node 26.10.0.
GitHub CI uses Node 24 per .nvmrc; its post-push result must be checked separately.
Existing nonfatal module-type and WebGL chunk-size warnings remain. No browser
visual check was performed for this one-line lifecycle correction.
