# Reference analysis — https://www.advaysinha.in/

Inspection date: 2026-10-21. Status: **partial source inspection; visual/interactive inspection unavailable**.

## Evidence and limits
The web reader could not access the reference. Direct HTTPS retrieval succeeded for homepage HTML and `/_next/static/chunks/0cw2oh1-vlpor.css`. No interactive browser tool is available in this session. Findings below are HTML/CSS/script observations, not measured rendered screenshots or tested interactions. JavaScript bundle internals, canvas implementation and dossier routes have not yet been inspected. Do not claim exact visual fidelity or observed animation behavior from this record.

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
Before finalizing the analysis, obtain:
- Desktop full-page screenshots at 1440x900 (or actual viewport dimensions), and closeups of hero, selected project, timeline, archive, terminal and contact.
- Mobile full-page screenshots at 390x844 (or actual viewport dimensions), including navigation and project behavior.
- A fresh-session load recording showing boot, skip and settled hero.
- A recording of pointer movement over the neural core, page scrolling, project selection, dossier opening and browser-back behavior.
- A recording of archive scrolling/hover and terminal help/unknown-command/clear behavior; include motion pause and reduced-motion comparison if possible.

Do not invent findings to fill these gaps. If browser tooling becomes available, inspect directly instead of requiring user captures. The subsequent user-provided project tree authorizes foundation scaffolding; rendered reference analysis remains required before visual feature implementation.
