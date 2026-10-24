# Reference analysis — https://www.advaysinha.in/

Inspection date: 2026-10-21. Status: **Phase 2 design-system source and rendered desktop/mobile inspection complete; feature interactions remain partially unverified**.

## Evidence and limits
The web reader could not access the reference. Direct HTTPS retrieval succeeded for homepage HTML and `/_next/static/chunks/0cw2oh1-vlpor.css`. During planning, no dedicated browser tool was available. In Phase 2, temporary Playwright tooling with installed Google Chrome enabled rendered desktop/mobile inspection; see the Phase 2 addendum. Earlier findings below identify source observations separately. JavaScript bundle internals, canvas implementation and dossier routes have not yet been inspected. Do not claim exact visual fidelity or observed animation behavior from this record.

## Structure observed in HTML
A boot interface contains Systems Nexus, initialization console, percentage, three stages (interface, neural link, workspace), pointer hint and Skip boot. Main navigation links About, Projects, Journey, Certs, Terminal and Contact to #core, #vault, #logs, #live, #terminal and #contact. Skip-to-content and a motion control are present. Sections use DEPTH.01–06.

Hero includes split owner name, role line, biography, opportunity status, project/contact anchors, Neural Core, orbit/scroll hint, clock placeholder and six capability categories. These personal claims must not be copied to Priyanshu Raj.

Project Vault contains five project index anchors, visual-system labels, operational/experimental status, short descriptions, pipeline labels and Open dossier links. Dossiers use /systems/<slug> routes; one visible card also exposes a live-demo link. Exact sticky/scroll/selection behavior is unverified.

Journey has a dated operations ledger with education, leadership, experience and competition rows, plus certificate links. Certificates archive has 18 records with dates, issuers, topic tags and PDF links. Terminal exposes a shell greeting, input prompt and help hint. Contact includes email, location/timezone, GitHub, LinkedIn and resume. Footer contains owner attribution and status. None of the reference owner's records or files should become Priyanshu Raj's content.

## Stylesheet evidence: resolve scoped overrides
The file includes older `.np` and root cyan/blue tokens. Later `.np.nx,.np.nx-dossier` rules override these for the current homepage (nx class appears in homepage markup). Use these scoped values as provisional targets; browser computed styles still need confirmation.

| Token | Current scoped value |
| --- | --- |
| void | #08080d |
| panel | #101018 |
| text | #f0edf5 |
| muted | #aaa6b8 |
| dim | #8c879c |
| signal | #aa8fff |
| glow | #9bdcf0 |
| hairline | #d0bbff1c |
| strong hairline | #d0bbff38 |

Fonts in HTML: Space Grotesk, JetBrains Mono, Oxanium via Next font classes. The current `.nx` shell uses the grotesk family; mono labels use JetBrains Mono. Earlier `.np` uses Oxanium for body. Do not assume every heading uses the same font without computed inspection.

Main maximum width 1520px; horizontal padding clamp(24px,5.2vw,88px). Sections: clamp(76px,10vw,150px) vertical. Section headings: clamp(44px,6.5vw,96px), weight 400, line-height 1.03, tracking -.065em. Depth labels: 9px, tracking .14em, bottom margin 40px. Header: fixed, min-height 82px, 18px backdrop blur, translucent layered background, 1px bottom border. Anchor scroll margin: 120px. Focus outlines: 2px glow, offset 6px. Mono labels: 10px/1.7, tracking .09em, uppercase. Ambient radial gradients appear in CSS; their perceived strength is unverified.

Responsive rules at <=1050px hide navigation numbers and brand text, reduce hero name sizing and adjust grids. At <=760px header min-height becomes 72px with 20px side padding, navigation scrolls horizontally, main padding becomes 24px, hero grid becomes one column, depth labels wrap. Coarse-pointer rules hide pointer hints. These are stylesheet declarations, not tested mobile observations.

## Loading and animation evidence
Inline boot guard skips loading for reduced motion, saved motion pause, previously seen intro in the session, an existing hash, scrollY >=24, hidden document or back/forward navigation. It has a 6500ms fallback that clears loading state; this does not establish the normal animation duration. Storage keys use nexus:intro:v2 and nexus:motion-paused.

CSS defines hero entrance/settle, blinking, node pulse, ring rotation, aurora, scan and grid effects; presence does not prove that all are active. Reduced-motion rules and data-motion=off disable effects. Lenis-related selectors exist, but its runtime use has not been confirmed. Neural hints say Move to orbit and Scroll to unfold; pointer hint says excite the core. Rendering algorithm, topology, drag/hover/scroll mapping and frame rate remain unknown.

## Required visual evidence
The following broader feature evidence remains useful beyond the Phase 2 screenshots now captured:
- Desktop full-page screenshots at 1440x900 (or actual viewport dimensions), and closeups of hero, selected project, timeline, archive, terminal and contact.
- Mobile full-page screenshots at 390x844 (or actual viewport dimensions), including navigation and project behavior.
- A fresh-session load recording showing boot, skip and settled hero.
- A recording of pointer movement over the neural core, page scrolling, project selection, dossier opening and browser-back behavior.
- A recording of archive scrolling/hover and terminal help/unknown-command/clear behavior; include motion pause and reduced-motion comparison if possible.

Do not invent findings to fill these gaps. If browser tooling becomes available, inspect directly instead of requiring user captures. The subsequent project tree authorized foundation scaffolding and the explicit Phase 2 request authorized the design system. Rendered Phase 2 reference inspection has now been performed.

## Phase 2 rendered inspection — 2026-10-21
Temporary Playwright 1.64.1, installed only under /tmp, drove the existing Google Chrome executable. A fresh curl attempt failed DNS, but Chrome successfully loaded the live reference with network-idle waiting and reduced-motion emulation. Screenshots were captured at 1440×900 and 390×844, and visually inspected.

Confirmed computed styles: header 82px on desktop; shell background rgb(8,8,13); Space Grotesk family. The desktop screenshot shows the fixed glass header, small mono navigation, about/depth label, large two-line name with muted lavender second line, restrained body text, underline/circle primary action, fine borders and grain. Mobile screenshot shows 72px header, hidden brand text and nav numbers, single-column hero, 24px content gutter and preserved mono navigation. Reference neural art was visible in this reduced-motion capture, but its runtime rendering/animation was not analyzed in Phase 2.

Additional source evidence used: second name line #bbb0cf; name masks include padding/margins that preserve descenders; primary .nx-link uses a bottom hairline and 32px circular arrow; atmosphere noise is low-opacity fractal noise. Implemented equivalent CSS/SVG noise, without downloading reference artwork or identity assets. The brand icon uses Lucide Orbit rather than copying the reference owner's personal monogram.

Local implementation screenshots were inspected at 1440px and 320px; a 390px full-page capture was also generated. Font/palette/header/layout fidelity has been checked within the Phase 2 scope. The current page deliberately contains section shells rather than reproducing future features, so full-page content and interactive equivalence is not claimed. Remaining feature analysis (boot, neural response, project selection/dossiers, archive and shell) belongs to later approved phases.

Font sources (SIL Open Font License files are colocated with downloaded TTFs):
- https://github.com/google/fonts/tree/main/ofl/spacegrotesk
- https://github.com/google/fonts/tree/main/ofl/jetbrainsmono
- https://github.com/google/fonts/tree/main/ofl/oxanium

QA images and temporary browser scripts are under /tmp/priyanshu-phase2-* and /tmp/priyanshu-phase2-qa; these are local QA artifacts, not committed reference assets.

## Phase 3 implementation boundary — 2026-10-23
The neural sphere is original Canvas geometry informed by the documented connected-node visual and orbit/scroll hints. Reference topology, animation timing and boot behavior have not been newly inspected; exact fidelity is unverified. Local production Chrome checked the implemented boot, saved pause, keyboard, reduced-motion static pixels and four viewport widths. The optional non-blocking boot status is an intentional implementation choice, not a measured reference match.

## Phase 4 rendered vault/dossier inspection — 2026-10-23
Chrome loaded the live reference at 1440×900 and 390×844 with reduced motion. The vault has a bordered visual-study panel, a numbered native anchor index, and stacked text cards with workflow labels and dossier links. Desktop uses a sticky visual column beside the cards; mobile places the numbered index above the visual, then the stacked cards. The screenshot showed the fixed header and vault title clearing it. Reference card markup exposes native #project-* anchors and /systems/* dossier links.

Opening the first reference dossier navigated to a separate /systems/nims page with a return-to-vault link, h1, overview, architecture, constraints, tradeoffs and source/infrastructure content. Browser Back returned to /#vault. Those reference project claims and personal content were not copied. Temporary reference captures: /tmp/priyanshu-phase4-reference.png and /tmp/priyanshu-phase4-reference-mobile.png; inspection script /tmp/priyanshu-phase2-qa/reference4.cjs.

Local adaptation uses four genuine Priyanshu Raj records, original SVG studies, matching native numbered anchors and static dossiers. Mobile index ordering follows the observed arrangement. Local desktop vault and mobile full dossier captures were visually inspected. Exact art geometry, animation and transition timing are not claimed; later reference interactions remain for their respective phases.

## Phase 5 rendered timeline/archive inspection — 2026-10-24
Read-only Chrome inspection loaded reference #logs and #live at 1440×900 and 390×900 with reduced motion. Journey is an ordered chronological ledger: date/category column, fine vertical rule with colored markers, title/organization/body text, and numbered rows. The observed timeline progresses from earlier to later start dates. Reference records and scores are not Priyanshu Raj's and were not imported.

The archive presents dated issuer/topic rows inside a rounded bounded vertical window, each with a native PDF link; mobile screenshot shows multiple records and clipped continuation below. Layout and link markup were inspected; reference PDFs were not downloaded, and exact scroll/hover animation fidelity is not claimed. Local implementation uses an ordinary focusable overflow region with keyboard instructions and a visible scrollbar; it adds no custom scroll handler or focus trap.

Reference captures: /tmp/priyanshu-phase5-reference-{logs,live}-{1440,390}.png. Desktop timeline and mobile archive screenshots were visually inspected. Actual local production contains empty states, since no personal records are supplied. Populated-state screenshots use clearly labeled, temporary test-only fixtures rendered from the real components; these verify layout and keyboard access, not personal claims or certificate authenticity. See PHASES.md for the distinction.


## Phase 6 rendered terminal inspection — 2026-10-24

Chrome inspected the reference at 1440px and 390px with reduced motion. Observed shell prompt, help output, unknown-command hint and clear removing output. Help lists whoami, about, skills, projects, open <name>, journey, certs, philosophy, contact, time, clear (plus a hidden-command hint). This portfolio follows the approved local command plan, adding whoami to resolve the eleven-name/twelve-command mismatch. It does not copy reference personal content, philosophy or hidden commands. Local output uses a separate labelled form, native dossier/profile links and polite announcements. Screenshots live in /tmp/reference6-*.png; exact visual/animation fidelity is not claimed.

## Master prompt audit — 2026-10-24

Fresh read-only Chrome inspection at 1440×900 and 390×900 verified six navigation destinations (#core, #vault, #logs, #live, #terminal, #contact), desktop split hero/neural diagram, compact mobile navigation and stacked hero/core. Body computed background rgb(6,8,22), text rgb(243,244,246), Space Grotesk. No horizontal document overflow observed at those widths. The owner's newly supplied palette is a specification and differs from these computed reference values; DESIGN_SYSTEM.md separates the two.

Visually inspected hero screenshots at desktop/mobile, desktop Project Vault and contact, and mobile certificate archive. Vault shows numbered visual/index beside project copy and dossier actions; archive is rounded with independent scrolling, issue metadata and compact PDF actions. Contact uses oversized identity and separated channel columns. Reference personal content was observed only to understand layout; none is copied into product content/assets.

Terminal help, unknown command and clear were exercised. Help exposes reference-specific commands, while the owner's requested command list will govern this portfolio. The reference command list is not a requirement to copy hidden commands. Initial broad inspection used reduced motion; screenshots do not establish precise animation timing, topology, frame rate or lifecycle. Pointer was moved during a separate normal-motion session; exact response/rotation behavior has not been measured. Normal-motion boot/skip inspection is recorded in the Phase 1 report. Web reader could not access the URL; browser access succeeded.

Audit captures and structured output remain temporary: /tmp/master-audit-*.png and /tmp/portfolio-reference-audit.json. They are evidence, not site assets. Fresh quantitative neural performance, detailed dossier/back behavior, mobile touch, scroll transition timing and full accessibility remain for their respective phases. No source code, reference logo, textures, project screenshots or personal records were copied into the portfolio.

Normal-motion follow-up succeeded in a fresh session: boot displayed initialization branding/status, percentage and three stages; keyboard focus + Enter activated Skip Boot and the hero was visible afterward. One canvas was present. Pointer movement was exercised but exact motion response, interpolation and topology were not quantified. No claim of measured GPU performance or complete animation fidelity.
