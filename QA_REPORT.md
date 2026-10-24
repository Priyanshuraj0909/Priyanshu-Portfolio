# Production verification — 2026-10-24

## Result
The complete Vite portfolio is implemented, locally verified and published to `https://github.com/Priyanshuraj0909/Priyanshu-Portfolio`; local `main` tracks `origin/main`. Public deployment remains pending authenticated Vercel access. The owner supplied `https://vercel.com/king-09` as the account target on 2026-10-24, but the available integration is not installed/connected and the CLI reports logged out. The dashboard URL is not a portfolio origin, so no live portfolio URL is claimed. Owner authorization covers deployment without further implementation checkpoints.

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
6. `npm run build`, `npm run preview`; review static metadata and no-JS fallback. Configure the real PORTFOLIO_SITE_URL in the hosted build only when known to generate canonical URLs/sitemap and enable indexing.
7. Connect the Vercel integration, select `king-09`, create or select the intended project and deploy this prepared checkout. Confirm the returned deployment URL, redirects/deep routes, PDFs and live metadata before marking Phase 10 fully complete.

Temporary browser scripts, screenshots and detailed results are under /tmp/priyanshu-phase2-qa and /tmp/portfolio-*.json/png. They are verification artifacts, not product assets. No credentials/private messages or reference-owner assets were copied.
