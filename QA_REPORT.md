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

## First-visit 3D opening — 31 October 2026

Restored an owner-requested, once-per-session opening using the existing
procedural learning sphere and Motion stack. The same Canvas persists while
the centered sculpture assembles, then moves into the unchanged About layout.
The opening uses the current teal/peach palette, masked title motion, a subtle
grid and a readiness line (not a simulated download percentage). No new
packages, models, textures or external runtime requests were added.

Fonts and the first scene frame gate the reveal after a 1.8-second minimum;
a 3.6-second deadline starts the 1.2-second reveal even if optional assets fail.
The Enter portfolio button and Escape skip immediately into that transition.
The dialog contains keyboard focus while the page and sculpture controls are
inert; completion restores scrolling and focuses main. Deep anchors/dossiers,
reduced motion, saved pause and denied session storage bypass the opening.
Root, #about and #core support the first-visit opening. The session key is
portfolio:intro-v5.

Local lint, TypeScript/production build, all 13 existing tests, personal-content
checks, deployment-artifact checks and whitespace checks passed. Headless
installed Chrome with Playwright verified desktop first visit, one persistent
Canvas, focus and scroll cleanup, refresh bypass, 320/390/768px layouts,
Shift+Tab containment, Escape, button skip, reduced motion, saved pause,
#terminal bypass, #about entry, blocked optional scene-chunk fallback/deadline
and denied-storage bypass. No unexpected page errors occurred. Desktop,
mobile and post-reveal screenshots were inspected; the initial sphere/title
overlap and a legacy masthead selector collision were corrected. Browser checks
used the local Vite server; physical devices and Safari were not tested.

References reviewed: https://gsap.com/showcase/ and https://www.siteinspire.com/.
The requested Awwwards WebGL and preloader galleries timed out; they are not
claimed as inspected. Existing nonfatal module-type and renderer-size warnings
remain. Publication and live verification are recorded separately below.

Publication check: implementation commit `4a37c48` was pushed to origin/main;
GitHub Actions verify completed successfully; Vercel reported Deployment has completed. The public Vercel hostname
served the matching index-D_o2w4Jc.js and index-B3c0rwUS.css production assets.
Live Chrome checks at 1440px and 390px passed HTTPS delivery, first-session
intro, reveal, persistent Canvas, unlocked page, viewport width, refresh bypass
and absence of page errors. Screenshots were captured in /private/tmp for
local visual review. The independent backup Site was not republished in this
bounded Vercel update.

## Recurring connection timeout — 31 October 2026

- Reproduced twice outside the network-restricted sandbox at 23:20–23:22 IST:
  ordinary Vercel HTTPS and both default DNS IPv4 edges timed out before TCP/TLS.
- Same hostname with request-only routing to Google-resolved edges returned
  HTTP 200. No persistent DNS, hosts or browser changes were made.
- Independent Cloudflare Site returned HTTP 200 twice; the owner confirmed it
  opens on their device while Vercel fails on Wi-Fi and mobile data.
- Recommended sharing link now uses the independent host. Vercel's original
  hostname remains unresolved; transient success must not be called a repair.
- Added the existing read-only connectivity diagnostic to the documented
  workflow and preserved failure timings (curl's `000` status is parsed safely).
- Lint and all 13 tests passed. The independent checkout passed Node 24 tests,
  content validation, TypeScript, Vite build and deployment artifact checks.
  Existing large-renderer and module-type warnings remain.
- Published independent Site version 5 successfully from source commit
  `719f69f497333688b6bc1ff1f0d214160683fee1`, including the latest intro.
  Deployment ID: `appgdep_6ae62b43a3a48191b86f89387ac018f7`.
- Live Chrome at 1440px and 390px passed HTTPS, first-session intro/reveal,
  one persistent Canvas, unlocked page, no horizontal overflow, refresh bypass
  and no uncaught page errors through ordinary DNS. Homepage and all five direct
  project routes returned HTTP 200; robots.txt and sitemap.xml returned HTTP
  200, with the independent origin in homepage canonical and sitemap metadata.

## Custom-domain DNS and canonical metadata — 31 October 2026

- Closer inspection corrected the initial reading of the screenshot: the
  failing hostname is `priyasnhuraj.tech` (n/s swapped), not `priyanshuraj.tech`.
  Google Public DNS returned status 3/NXDOMAIN for the typo and status 0 with
  records for the correctly spelled domain. This reproduces the pictured error.
- Ordinary HTTPS: root 308 to www, then www 200 with valid certificate and the
  expected portfolio asset. The full normal chain passed in approximately
  0.23s. This does not establish recovery on the owner's affected device.
- Corrected the source SEO origin from the Vercel mirror to the working www
  custom domain. Independent hosting keeps its own SEO origin.
- The read-only connectivity script now accepts an optional validated hostname,
  follows up to five HTTPS-only redirects and reports final URL/redirect count.
- Node 24 production build, TypeScript, deployment artifacts, lint and
  whitespace checks passed. Existing renderer-size/module-type warnings remain.
- Live Chrome through normal DNS at 1440px and 390px passed custom-domain
  delivery, intro/reveal, repeat bypass, layout and no uncaught errors.
- No registrar or Vercel domain settings were edited. The typo explains this
  screenshot; an owner-side recheck using the correct link remains outstanding.

## Immediate opening — 1 November 2026

The owner reported a slow first visit while the full-screen intro displayed
“Preparing the experience”. Source inspection confirmed a 1.8-second minimum,
font and scene readiness gating (3.6-second deadline), then a 1.2-second exit
with the entire portfolio inert until completion. This supersedes the previous
31 October intro behavior.

Before the fix, live Chrome fresh contexts measured usable content at 4,061 ms
on desktop (1440px) and 3,267 ms on mobile (390px); the shell was inert at mount.
Separate HTTPS requests returned 200: custom-domain total 0.743s and Vercel total
0.374s. These are individual measurements, not broad network benchmarks.

Removed the intro component, phase state, readiness gating, forced focus and
intro-specific CSS. The same sphere loads after the existing 450/900 ms delay;
a CSS fallback remains visible during loading. Fonts retain `font-display: swap`.
The portfolio no longer depends on font downloads or a successful WebGL frame
for entry. README now describes this behavior.

Production build/TypeScript, all 13 tests, content checks and deployment-artifact
checks passed on local Node 26.10.0. CI/Vercel continue to target Node 24. Existing
large optional WebGL chunk and Node module-type warnings remain.

Production-preview Chrome checks passed at 320, 390 and 1440px: shell visible
and non-inert immediately, no entry overlay or scroll lock, keyboard access,
project navigation and browser Back, reload, About anchor, no horizontal overflow
and no unexpected uncaught errors. Normal local contexts measured 103–248 ms
from navigation to mounted accessible content; these local results are not
comparable network performance benchmarks. Four-second delays to both font
and WebGL requests still allowed immediate content (108 ms). Aborted WebGL
requests preserved the static fallback and navigation. Reduced motion rendered
no Canvas. The mobile screenshot was inspected.

Published application commit `3bd83e507bb2e2556b8425ab6507092e0fad13e9` to
GitHub `main`. Vercel reported “Deployment has completed”; Node 24 GitHub Actions
[Verify portfolio](https://github.com/Priyanshuraj0909/Priyanshu-Portfolio/actions/runs/41287090230)
passed. Both custom-domain and Vercel URLs returned 200 and served matching
`index-CmSRFQFK.js` / `index-yEG2L4Nn.css` assets.

The same Chrome suite passed on the live custom domain at 320/390/1440px,
including navigation, Back/reload, reduced motion, four-second font/scene delays
and failed WebGL. Fresh normal contexts reached mounted usable content at
1,186 ms desktop and 237 ms mobile, with the shell visible and non-inert at
mount. No unexpected uncaught errors or document overflow. These are single-run
observations from this connection, not a guarantee for other networks. The
separate Sites mirror could not be updated because its recorded project was
not accessible in this session. No replacement Site was created.

## Phone startup — 1 November 2026

The previous immediate-entry fix still automatically loaded the 915 kB optional
renderer (~243 kB gzip) after 900 ms on a phone. Phone startup now keeps the CSS
sphere and offers “Enable 3D”. No renderer is requested until that action on
narrow screens, coarse-pointer devices (including landscape phones), Data Saver
or reported slow-2G/2G/3G connections. Desktop auto-loading remains delayed;
paused, reduced-motion and hidden pages avoid automatic startup. Mobile
backdrop blurs and fallback ring shadows were removed to reduce compositing.

Production build/TypeScript, lint, 16 tests (including the loading-policy device
and network matrix) and deployment-artifact checks passed. Local Node remains
26.10.0; deployment/CI target Node 24. Existing optional-renderer size and
module-type warnings remain.

Chrome production-preview checks passed at 320/390px and 844px touch landscape:
zero renderer requests on opening and scrolling, immediate non-inert content,
working work-section navigation, no horizontal overflow or uncaught errors.
Explicit phone activation requested the scene once, then Canvas, expand and
pause controls worked. Desktop auto-loading, Data Saver, slow network hints
(using prototype getters like the browser API) and reduced-motion behavior
passed. At 4x CPU slowdown, 150 ms latency and 200,000 bytes/sec download,
phone content became usable in 1,848 ms without requesting WebGL. This is
Chrome emulation, not a physical-phone or Safari benchmark. The 320px screenshot
was inspected.

Published `49e35bb169272ad68f2cfd379ef3b935ad6ba009` to GitHub. Vercel
reported successful deployment and Node 24
[Verify portfolio](https://github.com/Priyanshuraj0909/Priyanshu-Portfolio/actions/runs/41287535031)
passed. Both public hosts serve matching `index-bU7KRQXc.js` and
`index-CXjQclb-.css` assets. The same live custom-domain Chrome matrix passed:
phone portrait, 320px, touch landscape, throttled phone, desktop auto-loading,
Data Saver, reported 3G and reduced motion. Phone opening/scrolling issued zero
renderer requests before explicit activation; enabling, expanding and pausing
worked without uncaught errors. Live throttled usable-content observation was
1,771 ms; unthrottled first phone context was 1,138 ms. Measurements are single
runs and emulation cannot establish physical-device/Safari performance.
The independent Sites mirror remains unavailable to this session.

## Cross-browser performance — 1 November 2026

Further reduced startup costs while preserving the mobile opt-in 3D policy:

- Converted the three existing fonts to full-glyph variable WOFF2 with temporary
  FontTools 4.68.0. Verified cmap, glyph order and variable axis ranges match the
  originals. Originals and their licenses remain unchanged. Total font assets
  fell from 367,420 to 139,516 bytes (62% smaller, rounded); the two fonts used
  on opening fell from 323,884 to 120,660 bytes. `font-display: swap` remains.
- Switched Vite animations to strict LazyMotion/domAnimation and m components.
  Removed the unused brand layout transition left over from the former intro.
  Initial JS fell from 435,910 to 389,601 bytes (~11%); Vite gzip report fell
  from 138.06 to 124.96 kB (~9.5%). Optional WebGL remains a separate lazy chunk.
- Navigation caches section positions on layout/viewport changes. Scroll frames
  use cached values rather than repeated getBoundingClientRect/sorting work.
- Added `npm run check:performance` and a CI step: entry <=400 kB /130 kB gzip,
  total WOFF2 <=150 kB, no runtime TTF references, resolvable compressed fonts,
  and no optional scene preload in the entry HTML.

Production build/TypeScript, lint, all 16 tests, deployment-artifact checks and
performance budgets passed locally on Node 26.10.0. Existing optional-renderer
chunk size and Node module-type warnings remain. Build/runtime dependencies
were unchanged. Temporary font tooling and browser binaries reside under /tmp.

Local production Chrome and WebKit 27.2 checks passed at 390 and 1440px:
accessible content on first render, successful WOFF2 loads, retained scene
policy, next/previous project animation, active navigation after manual scroll,
capability reveal, direct dossier reload and browser Back, no overflow or
uncaught errors. Reduced motion passed in both engines. WebKit tests are not
physical iPhone/Safari verification. Firefox 157 could not launch in this host:
“Could not find profile folder”, including a retry with explicit /tmp storage;
no Firefox page result is claimed.

Application commit `8dd55d086f2c3463190933ee7b54f3010f230614` was pushed to
GitHub and successfully deployed by Vercel. Node 24
[Verify portfolio](https://github.com/Priyanshuraj0909/Priyanshu-Portfolio/actions/runs/41287993899)
passed, including the new performance budget. Both public hostnames returned
200 and served matching `index-BQMP24dz.js` / `index-D1YnI941.css` assets.
Sites again returned `project_not_found` for the recorded mirror; no replacement
or access change was made.

Live Chrome and WebKit checks passed at 390/1440px: immediate content, fonts,
mobile opt-in/desktop automatic scene policy, gallery transitions, manual-scroll
active navigation, capability reveal, dossier direct reload/Back, certificate
search/reset across all 24 records, terminal help, reduced motion, no document
overflow, no failed asset responses or uncaught page errors. One terminal test
used an overly strict label-text selector; the textbox's accessible name was
correct and the corrected role selector passed. No application fix was needed
for that test issue. The fresh mobile opening screenshot was inspected.

A live Chrome observation at 4x CPU slowdown, 150 ms latency and 200,000 bytes/sec
measured usable content at 1,766 ms, versus the same earlier simulation's
1,958 ms. Observed long tasks changed from 74/190 ms to one 76 ms task; CLS stayed
at 0.00163. Initial JS/CSS/two font transfer sizes totaled 266,367 bytes versus
318,021 bytes before (~16% less, including response overhead). These are single
observations, not repeat-run benchmarks or guarantees for every device/network.
Physical iPhones/Android phones and Firefox remain unverified in this session.

## Connection timeout and GitHub visitor links — 1 November 2026

Reproduced the owner's ERR_CONNECTION_TIMED_OUT screenshot for the generated
Vercel hostname. Two diagnostic runs resolved system addresses 64.29.17.67 and
216.198.79.67 and timed out in ~5s with TCP/TLS timings both zero. Per-request
comparisons preserving SNI/TLS to public-DNS addresses 64.29.17.195 and
216.198.79.195 returned 200. These comparisons establish a working deployment
behind an affected network path; they do not repair ordinary routing or prove
which provider/ISP is responsible. Browser navigation also timed out after 10s.

The custom domain returned HTTP 200 normally (0.096–0.360s in individual curl
checks). Fresh desktop/mobile Chrome at 1440/390px reached mounted, non-inert
content in 606/253 ms with no uncaught errors. These are observations on this
connection, not uptime guarantees. No DNS, hosts, proxy, firewall or browser
settings were changed. This supersedes earlier point-in-time Vercel success
observations as evidence of current availability.

The authenticated GitHub repository API showed the About website link still
used the failing Vercel hostname. Updated it to https://www.priyanshuraj.tech/
and verified the returned value. Removed the Vercel row from the README so its
visitor link uses the custom domain. Connectivity diagnostics now also probe
the configured primary origin and report primaryHost, even when the queried
mirror fails. Lint, whitespace checks and the live diagnostic execution passed;
its exit code 1 correctly reflects the observed mirror failure. Frontend assets
were unchanged, so no additional frontend rebuild was needed for these edits.

Vercel plugin discovery found an available but unconnected integration. It had
already been suggested recently, so no duplicate suggestion was issued. Local
Vercel settings contained no access token; no account-level mutation was
attempted. Original-hostname investigation remains dependent on Vercel/network
access. [Vercel's connectivity guide](https://vercel.com/kb/guide/troubleshooting-connectivity-issues)
describes comparing DNS/network paths and collecting the corresponding evidence.

## Vercel redeployment and canonical-host redirect — 1 November 2026

The owner explicitly requested another Vercel deployment after the recurring
blank loading tab. The next diagnostic observed ordinary generated-host access
returning 200 in 0.392s, with system and public DNS now both selecting working
.195 addresses. This recovery occurred before any configuration change; it is
not attributed to redeployment or an application fix.

Added a permanent host-specific redirect in vercel.json from the generated
hostname to https://www.priyanshuraj.tech/:path*. Primary-domain and preview
requests do not match the condition. Deployment checks assert the exact source,
host condition, canonical destination and permanence to catch redirect loops
or accidentally redirecting previews. Existing static dossier rewrites remain.
Production build/TypeScript, lint, all 16 tests, artifact checks and performance
budgets passed locally. Existing size/module-type warnings remain.

[Vercel redirect configuration](https://vercel.com/docs/project-configuration/vercel-json#redirects)
supports this host condition and permanent 308 response. Live deployment must
verify root, query strings, dossier paths, anchors and the primary-domain loop
check. The rule can act only after HTTPS reaches Vercel; it cannot repair a
failed TCP connection. Account-level domain/routing access remains unconnected.

First deployment `c3605cee5436d54e2092ceba61607f0d20d72b65` reported success
and Node 24 CI passed. Live probing found project-path redirects active (308,
query preserved), while `/` still returned 200, including a fresh query URL.
Added an explicit host-conditioned `/` rule before the wildcard and extended
the deployment gate to require both. The redirect work remains under live
verification until the root check passes.

Final application/configuration commit
`76174fc68daa6cfa8017754a2f25f7650e2d08fb` reported Vercel “Deployment has
completed” at
https://vercel.com/king-09/priyanshu-portfolio/9gMHFZbiBrFcpiQsWBbVQkxqNtGK.
Node 24 [Verify portfolio](https://github.com/Priyanshuraj0909/Priyanshu-Portfolio/actions/runs/41289297112)
passed all checks.

Ordinary live HTTP checks confirmed 308 redirects for `/`,
`/systems/cinematch?from=old-link` and `/robots.txt`, with exact custom-domain
Location values and preserved path/query. The corresponding custom-domain URLs
returned 200 directly, confirming no redirect loop. Fresh Chrome at 1440/390px
confirmed original-host navigation ends at the custom domain, `#about` is
retained, content is immediately non-inert, project queries survive, dossier
reload works and no uncaught errors occur. No per-request DNS override was used
for these final live checks. This verifies the deployed redirect, not a repair
of the previously failing .67 network paths. Visitors should share the custom
domain directly so initial access does not depend on the old hostname.
