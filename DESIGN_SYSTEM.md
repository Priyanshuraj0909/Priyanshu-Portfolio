# Design system — implemented

## Current palette — 29 October 2026

The owner supplied a Teal & Peach reference, superseding earlier palette values
below. Current runtime styling lives in `src/foundation/dark.css`: deep teal
`#064F57` foundation, `#0D9488` sphere material, peach `#FFB6A1` accents, warm
cream `#FFF1E8` text and `#B8D6D2` secondary text. Navigation, introduction,
monogram, favicon, controls, static fallback and WebGL use this palette. Original
project screenshots and certificate PDFs retain their source colors.


## Sources and precedence
Requested tokens below come directly from the latest master prompt. Browser inspection of https://www.advaysinha.in/ on 2026-10-24 established layout/typography/visual references at 1440×900 and 390×900. Observed body background was rgb(6,8,22), text rgb(243,244,246) and Space Grotesk; these differ from the requested values. Use the owner's explicit palette while matching practical layout/proportions. These requested tokens are now applied in src/foundation/styles.css.

| Token | Requested value | Use |
| --- | --- | --- |
| Background | #05070B | Page foundation |
| Secondary surface | #0B1019 | Terminal, archive, panels |
| Primary text | #F3F6FC | Headings/body emphasis |
| Secondary text | #8994A8 | Body metadata, never low-opacity essential text |
| Cyan | #58E1FF | Technical indicators, neural connections |
| Violet | #9B7CFF | Focus, active location, secondary neural glow |
| Border | translucent white | Thin dividers; focus must remain clearly visible |

## Typography and composition
Reuse existing licensed self-hosted Space Grotesk, JetBrains Mono and optional Oxanium after Vite-compatible font registration in Phase 2. Oversized split-name hero, generous vertical rhythm, compact uppercase monospaced metadata, restrained body width (~50–65ch), thin rules and small depth labels. Fluid display sizing must preserve reading order and avoid clipping at 320px. Exact scale/spacing to be measured during Phase 2 implementation rather than invented as observed values.

Reference desktop: glass fixed header; hero copy left/neural form right; numbered technical metadata and lower rail; split Project Vault visual/content with index; restrained ledger timeline; rounded independently scrollable certificate archive; mono terminal; oversized contact name and separated channel rows. Mobile: compact horizontal navigation, stacked hero/core/projects and reduced spacing; no document overflow observed at 390px. Reference screenshots are audit evidence under /tmp, not product assets.

## Component contract
Shared section heading/depth label, primary/text/icon actions, focus-visible navigation, glass header, motion control, capability module, project selector/card/dossier, timeline record, certificate search/filter/card/preview, terminal form/output and contact channel. Native anchors remain anchors; use buttons for state changes. Touch targets at least 44px where practical. Avoid interactive nested controls and color-only state.

## Atmosphere and motion
Original CSS subtle grid, radial cyan/violet glows, translucent surfaces and thin borders. No reference textures, logo or imagery. Motion should support orientation and hierarchy: short reveals, selector transitions and hover feedback. Boot must be skippable and nonblocking with reduced-motion bypass. Pause affects nonessential motion; reduced motion removes parallax/continuous camera movement and lengthy transitions. Never hide essential content waiting on observers or WebGL.

## Responsive and accessibility acceptance
Proposed breakpoint approach: content-first mobile base, wider tablet layout where content fits, two-column desktop hero/project stage. Validate 320/390/768/1440px, 200% text zoom, keyboard focus, native scroll/back and touch. Contrast targets: 4.5:1 ordinary text, 3:1 large text and necessary UI boundaries. Measure actual composite colors before claiming compliance. WebGL is decorative with text equivalent and fallback, capped DPR and mobile complexity, no essential actions inside canvas. Phase 10 performs the full measured audit.


Implementation update — 2026-10-24: licensed fonts, requested tokens, six top-level destinations, responsive hero/project/ledger/archive/terminal/contact components and original atmosphere are active. Reduced-motion SVG shares the original graph geometry with WebGL; mobile controls use 16px input text. Visible labels now remain part of accessible names. Automated checks and measured token contrasts are documented in QA_REPORT.md; no exact reference animation or universal accessibility conformance is claimed.
