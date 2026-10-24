# Priyanshu Raj portfolio — agent instructions

## Scope and approvals
Follow the eight phases in PHASES.md. The user authorized Phase 1 through the project tree and explicitly authorized Phase 2. Desktop/mobile rendered design-system inspection is now available; see REFERENCE_ANALYSIS.md. The user approved Phase 3 with “continue working” on 2026-10-23. The user explicitly approved Phase 4 on 2026-10-23. The user explicitly approved Phase 5 on 2026-10-24. Phase 5 components are complete; three journey records were confirmed directly on 2026-10-24 and added. The 24 certificates from the owner-supplied deduplicated PDF are now populated; see CERTIFICATE_EVIDENCE.md. The user approved Phase 6 with “now do next step” on 2026-10-24. Phase 6 is complete; stop until the user approves Phase 7. At the end of each phase, update documentation, report changed files and checks, provide manual verification steps, and wait for explicit user approval before the next phase. Never treat elapsed time as approval.

## Engineering
Use Next.js App Router, React, strict TypeScript, Tailwind CSS, Motion for React, and Lucide React. Prefer Canvas API for the neural visualization; add Three.js only with demonstrated need. Keep server components by default and isolate client interactions. Use reusable semantic components and typed content in src/content, separate from rendering. Avoid secrets, unnecessary dependencies, and runtime GitHub API dependencies.

## Content integrity
Use Priyanshu Raj consistently. Verify project features and technologies against repository code before publication; README evidence is preliminary. Record source URLs and verification dates. Do not import the reference owner's personal history, certificates, contact details, metrics, or resume. Missing information belongs in editable content fields; omit unavailable links and unverified claims from production. Interests do not establish proficiency.

## Accessibility and performance
Support keyboard operation, visible focus, reduced motion, motion pause, readable contrast, and semantic landmarks. Canvas is decorative with an accessible text equivalent. Stop animation when hidden/offscreen, cap pixel ratio and mobile particle counts, and clean up listeners. Preserve native anchor navigation. Dossiers must support direct URLs and browser back.

## Validation and Git
Run lint, TypeScript checks, and production build when tooling exists. Test terminal parsing and keyboard interactions where meaningful. Do not claim browser QA without executing it. Initialize Git if absent; commit each completed phase with a meaningful message. Never force-push or overwrite existing work. Do not publish before the final phase and required user approvals. Respect the requested Vercel target.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->


Certificate intake update — 2026-10-24: 24 records from the supplied deduplicated PDF now populate the archive, with individual single-page PDFs, printed issue/completion dates, categories and available credential IDs/hours/CEUs/grades. See CERTIFICATE_EVIDENCE.md for source mapping and issuer URLs retained as documentary evidence pending live checks. This supersedes earlier certificate empty-state notes. Phase 6 remains unapproved.
