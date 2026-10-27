# Inference edition — 25 October 2026

## Reference and original direction

Inspected Jishnu09-siuu/ECHO-WEBSITE at commit
0b7e98d3663dd8f9b2fe9f13008738a0cf1f2ab5: README, index.html,
experience-section.js, works-wheel.js, and the included extracted/screen.png design
reference. Its live local rendering was limited by unavailable CDN resources.
Borrowed design principles: large metallic type, a staged opening, restrained
perimeter information, interactive project exploration, and scroll reveals.
No reference source, portraits, project content, or artwork was copied.

The original identity uses graphite surfaces, silver typography and mint signals.
The hero names Priyanshu directly. A small inference-core sculpture represents
his AI/ML and full-stack interests: four connected layers surrounding a processor.
It is an illustration, not an executed ML model or a claim of model performance.

## Interaction and performance

- Original procedural geometry: 24 nodes and 108 connections, three processor
  plates and a wire enclosure. No GLB, HDRI, remote texture or downloaded model.
- Lazy WebGL import, capped DPR (1 on mobile / 1.5 desktop), demand rendering while
  paused/offscreen, page-visibility suspension, reduced-motion/static fallback.
- Project index selects previews with native buttons, previous/next controls and
  persistent direct links to every project study. Native page scrolling retained.
- Intro waits for fonts and scene readiness with a minimum 850ms introduction;
  it dismisses after at most 2.6s plus a 650ms exit even if the scene is unavailable.
  Skip and Escape work; underlying controls are inert; focus and scroll restore.
  Deep links, repeat visits in a session, reduced motion and saved pause skip it.
- Certificates and terminal use viewport-triggered imports (350px lookahead).
  Project detail routes are separately lazy loaded. Images use native lazy loading.
- Hover/focus feedback, section navigation state, motion preference persistence,
  certificate search and keyboard terminal history remain available.

## Limits

Three.js and React Three Fiber still require a substantial lazy renderer chunk
(about 243kB gzip in this build); the model itself is procedural and small. The
build reports its chunk-size warning. Browser validation uses Chromium in the
cloud, not physical mobile GPU profiling. No deployed URL is implied.

## Validation

Lint, TypeScript, production build, content validation and deployment artifact
checks pass. All 13 existing unit tests pass. Playwright CLI/Chromium passed 33
production-browser assertions: intro inertness and release, session behavior,
actual lazy module request timing, scene pause persistence, project selection and
controls, certificate filtering, terminal history, five direct routes and back
navigation, 320/390/768/1440px layouts, reduced motion and keyboard access.
Two further checks confirmed failed scene imports fall back without trapping the
visitor, and direct archive anchors bypass the introduction and load the archive.

## Page-wide learning sphere — 26 October 2026

This update replaces the small four-layer inference-core illustration above with
an original faceted learning sphere, twelve segmented orbital arcs, three fine
orbits and 96 data points. Its silhouette fills most of the desktop hero and scales
to mobile width. Geometry remains procedural, with no external model or texture.

One fixed, non-interactive canvas sits behind the entire homepage. The same model
starts small and distant during the introduction, then advances toward the camera
and scales up as the overlay clears. Pointer movement anywhere on the page changes
its orientation. Scroll progress rotates it; section changes move it laterally.
Hovering or focusing actual links and controls spreads the rings slightly. Floating
expand/collapse and pause controls remain available throughout the page. Content
surfaces dim the background sculpture to retain reading contrast.

Unlike the earlier hero-only implementation, the canvas remains active while the
homepage is visible because it is present behind every section. It stops animation
when paused or the document is hidden, uses demand rendering while paused, and
unmounts when navigating to a project page. The observers and window listeners are
cleaned up. Reduced motion uses a static CSS sphere and skips the WebGL import.
DPR remains capped at 1 on mobile and 1.5 on desktop. No dependency was added.

Validation: all 13 existing tests, lint, type checking, production build and
artifact checks pass. 28 targeted production-browser assertions passed, covering
intro state, full-viewport single canvas, expansion, pause and persistence, scroll
section updates, global hover and keyboard responses, working project/terminal
controls, scene persistence to contact, widths from 320 to 1440px, static fallback
and cleanup on project navigation. Inspected desktop hero, work and mobile views.
Physical-device GPU profiling and hosted deployment are not claimed.

## Signature identity and cinematic opening — 26 October 2026

Replaced the lowercase pr/asterisk with an original angular PR monogram: an ivory
path, mint diagonal and a small signal square. The React SVG component, standalone
public/brand-mark.svg and favicon share the same path geometry. Header, footer and
scene label use the same component. The favicon URL is versioned to refresh caches.

Online references consulted:
- Official Motion skill: https://github.com/motiondivision/ai-kit/blob/main/plugins/motion/skills/motion/SKILL.md
  (AI Kit commit 1e424943582cbbdb6e3f410687e39f96451447bb). Applied its React,
  CSS-vs-Motion and animation best-practices guidance. No MCP installation needed
  for this self-contained guidance; the Motion MCP server was not connected.
- Official shared-layout and SVG path-drawing examples in motiondivision/motion,
  commit 136f854291ad3c325dfa257d28912c4849ba2e9b, under dev/react/src/examples.
- Motion.dev, Awwwards and Behance pages were blocked by the network proxy.
  No claim is made to have viewed their gallery content; no third-party logo copied.

The opening draws the SVG, reveals the name through a mask, and sweeps a restrained
light across the same dark/mint environment. A Motion LayoutGroup/layoutId transfers
the center mark to the header. Loading, revealing and ready phases coordinate the
logo transfer, curtain dissolve, hero text arrival and sphere emergence. The sphere
starts advancing during the reveal, not after it. Interaction stays locked until
the transition completes; focus and scroll then restore.

Normal introduction: 1.7-second minimum, capped at 3.8 seconds if fonts or scene
are unavailable, followed by a 1.05-second reveal. Skip and Escape trigger the same
handoff. Reduced motion and saved pause bypass the introduction. Session and hash
handling are retained with a new introduction version. No new production packages.

Final validation on 27 October: lint, typecheck, production build, artifact checks
and 31 targeted production-browser assertions pass. Confirmed the shared SVG
physically transitions from its large center position to the 44px header slot.
Focus restoration runs after the ready-state DOM commit to avoid the earlier race.
