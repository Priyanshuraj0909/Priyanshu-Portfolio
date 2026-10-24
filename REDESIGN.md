# Studio edition — 25 October 2026

Original direction: warm editorial portfolio, ivory and ink, copper-orange sculpture,
serif emphasis, sage contact surface. The main flow is introduction → selected work →
about and learning → certificate archive → interactive terminal → contact.
The previous boot overlay, numbered dashboard navigation, neural graph and project
vault presentation are no longer used by the active homepage. Verified content and
original project/certificate assets are retained.

## Reference use

- Vercel Web Interface Guidelines: read from vercel-labs/web-interface-guidelines;
  applied semantic navigation, labels, focus visibility, image dimensions, native
  controls, reduced motion and pause support.
- pmndrs/react-three-fiber: existing renderer used for an original procedural copper
  torus-knot sculpture. No downloaded model or external HDR environment is required.
- ruucm/shadergradient: reviewed renderer documentation; inspired the original GLSL
  gradient field behind the sculpture. Its package was not added.
- dashersw/liquid-glass-js: reviewed implementation approach; used lightweight CSS
  translucent, blurred surfaces for the floating label and project links. Its DOM
  sampling/WebGL package was not added.
- paper-design/liquid-logo: reviewed liquid-metal concept; translated into the
  sculpture's reflective material, without copying its logo or shader code.
- Dribbble developer-portfolio tag, Instagram reel DexTHhNTeh0, Refero and Cult UI:
  requests denied by the environment proxy, including a retry after the user
  reported enabling public internet. Their visual content was not inspected.
- “awesome design .md” and “Cult ai”: exact sources not identified; clarification
  requested. No claim to have read these resources.

## Rendering and accessibility

The 3D scene is lazy loaded, caps DPR at 1.5 and reduces geometry on narrow screens.
It pauses offscreen, while the document is hidden, or with the persistent motion
control. Reduced motion and renderer failures use a static CSS sculpture. The
original shader shares the same pause behavior. No new production dependencies.

Playwright CLI is installed in the external npm cache for validation; Chromium is
provided by /usr/bin/chromium. Browser outputs are kept outside the checkout.
Live hosting and physical-device GPU performance are not covered by these checks.

## Validation

- Lint, TypeScript, production build and deployment artifact checks passed.
- All 13 existing content, certificate and terminal unit tests passed; content
  validation confirmed the three journey records and 24 certificate records.
- Playwright CLI + Chromium: 23 checks passed for five project cards, pause and
  persistence, certificate empty/reset states, terminal help and keyboard history,
  all five direct dossier routes, project navigation and browser back, no horizontal
  overflow at 1440/768/390/320px, reduced-motion fallback with no WebGL, keyboard
  skip link/focus, and no uncaught browser errors.
- Browser warnings: Three.js Clock deprecation and software GPU readback notices.
  Build retains a size warning for the lazy-loaded 3D bundle.
- Production preview: homepage with rendered WebGL and all five dossier routes
  passed in Chromium; every route returned HTTP 200.
