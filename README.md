# Priyanshu Raj | AI/ML Engineer & Developer

Personal portfolio planned with Next.js App Router, React, TypeScript, Tailwind CSS, Motion for React and Lucide React. Visual reference: https://www.advaysinha.in/. Hosting target: Vercel.

## Status
Phase 4 Project Vault complete, 23 October 2026. The portfolio now has reference-based typography, colors, atmospheric background, responsive glass navigation, shared controls and six section shells. Fonts are self-hosted with their SIL Open Font Licenses. Desktop/mobile reference inspection and local Chrome QA were performed. Lint, typecheck, build and browser checks pass. Skippable boot, interactive neural Canvas, motion pause and hero actions are implemented. Four source-backed project cards and static dossier pages are implemented, with genuine screenshots, pinned source links and verified public demo entry points where available. Journey, certificates, terminal and deployment remain for later phases. The page retains noindex until publication readiness.

## Documentation
- [Agent standards](AGENTS.md)
- [Workflow and approval checkpoints](ORCHESTRATOR.md)
- [Architecture and content evidence](PLAN.md)
- [Reference findings and inspection limits](REFERENCE_ANALYSIS.md)
- [Project source, demo and media evidence](PROJECT_EVIDENCE.md)
- [Eight-phase checklist](PHASES.md)

## Planned experience
A responsive six-section portfolio with skippable introduction, interactive neural canvas, verified Project Vault and dossiers, personal journey, certificates, terminal and contact. Reduced motion, keyboard access, semantic HTML and mobile performance are requirements.

## Local setup
Use Node 24 (`nvm use`), then:

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
npm start
```

The runtime target is Node 24 (.nvmrc); checks passed on the host Node 26.10.0. The generated package-lock.json is tracked. The build uses Next.js webpack. No secrets are required for the portfolio; never put private credentials in NEXT_PUBLIC_ variables.

## Architecture and content
See PLAN.md for the proposed file tree. Server-render content and isolate canvas, boot, navigation state and terminal as client interactions. Store personal information and evidence-backed projects separately in src/content. Missing personal fields remain editable and absent from production claims. Project descriptions require source verification before publication.

## Deployment plan
In Phase 8, run lint/typecheck/build, finalize genuine content and links, push through an authorized GitHub remote, then import the Next.js project into Vercel. Configure its real domain before canonical/sitemap metadata. Verify production pages, dossier deep links, social destinations, certificates and resume. Local Git is initialized. No GitHub remote or Vercel project currently exists for this portfolio.

## Personal content still needed
Approved biography and skills, email, LinkedIn, location, resume PDF, education/experience/leadership records, certificates and genuine project screenshots. Never substitute the reference owner's information or fabricate achievements.

## Validation limits
Production dependency audit: zero findings. Full audit: five high-severity development-tool findings in the ESLint dependency chain; ESLint 9 is upstream end-of-support. See PHASES.md for details. Headless Chrome checks passed at six widths from 320px to 1440px, including keyboard navigation, anchors, font loading and reduced-motion CSS. Reference and local screenshots were visually inspected for Phase 2; later feature equivalence is not claimed.

## Design system
Global tokens and responsive rules live in `src/app/globals.css`; navigation data lives in `src/content/navigation.ts`. Shared layout/UI components live in `src/components`. Breakpoints match the observed reference at 1050px and 760px. Header, boot status and neural canvas are client components; section content remains server-rendered. Font sources and inspection evidence are documented in REFERENCE_ANALYSIS.md. For manual verification and the complete Phase 2 file list, see PHASES.md.

Phase 3 checks: lint, typecheck, production build and Chrome boot/keyboard/persistence/reduced-motion/responsive checks passed. See PHASES.md for manual steps and limits. Phase 4 is complete; Phase 5 requires approval.

Phase 4 checks: lint, typecheck, production build, source-path/media validation and production Chrome route/keyboard/history/image checks passed. Home and all four dossiers fit six widths from 320–1440px. Direct routes: `/systems/cinematch`, `/systems/fakeddit`, `/systems/cartpilot`, `/systems/mock-interview`. Only CartPilot and Mock Interview currently expose demo entry points. See PROJECT_EVIDENCE.md for project verification limits and PHASES.md for changed files/manual steps. No hosting or remote publication performed.
