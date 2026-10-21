# Priyanshu Raj portfolio — agent instructions

## Scope and approvals
Follow the eight phases in PHASES.md. The user authorized Phase 1 through the project tree and explicitly authorized Phase 2. Desktop/mobile rendered design-system inspection is now available; see REFERENCE_ANALYSIS.md. Stop after Phase 2 until the user approves Phase 3. At the end of each phase, update documentation, report changed files and checks, provide manual verification steps, and wait for explicit user approval before the next phase. Never treat elapsed time as approval.

## Engineering
Use Next.js App Router, React, strict TypeScript, Tailwind CSS, Motion for React, and Lucide React. Prefer Canvas API for the neural visualization; add Three.js only with demonstrated need. Keep server components by default and isolate client interactions. Use reusable semantic components and typed content in src/content, separate from rendering. Avoid secrets, unnecessary dependencies, and runtime GitHub API dependencies.

## Content integrity
Use Priyanshu Raj consistently. Verify project features and technologies against repository code before publication; README evidence is preliminary. Record source URLs and verification dates. Do not import the reference owner's personal history, certificates, contact details, metrics, or resume. Missing information belongs in editable content fields; omit unavailable links and unverified claims from production. Interests do not establish proficiency.

## Accessibility and performance
Support keyboard operation, visible focus, reduced motion, motion pause, readable contrast, and semantic landmarks. Canvas is decorative with an accessible text equivalent. Stop animation when hidden/offscreen, cap pixel ratio and mobile particle counts, and clean up listeners. Preserve native anchor navigation. Dossiers must support direct URLs and browser back.

## Validation and Git
Run lint, TypeScript checks, and production build when tooling exists. Test terminal parsing and keyboard interactions where meaningful. Do not claim browser QA without executing it. Initialize Git if absent; commit each completed phase with a meaningful message. Never force-push or overwrite existing work. Do not publish before the final phase and required user approvals. Respect the requested Vercel target.
