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
