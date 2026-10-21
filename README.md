# Priyanshu Raj | AI/ML Engineer & Developer

Personal portfolio planned with Next.js App Router, React, TypeScript, Tailwind CSS, Motion for React and Lucide React. Visual reference: https://www.advaysinha.in/. Hosting target: Vercel.

## Status
Phase 1 foundation complete, 21 October 2026. Includes an App Router foundation page, strict TypeScript, Tailwind CSS, Motion for React, Lucide React, separate typed content and metadata. Lint, typecheck, production build and production HTTP smoke passed. Visual features and deployment are pending; reference browser inspection remains incomplete. The temporary page uses noindex until publication readiness.

## Documentation
- [Agent standards](AGENTS.md)
- [Workflow and approval checkpoints](ORCHESTRATOR.md)
- [Architecture and content evidence](PLAN.md)
- [Reference findings and inspection limits](REFERENCE_ANALYSIS.md)
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
Production dependency audit: zero findings. Full audit: five high-severity development-tool findings in the ESLint dependency chain; ESLint 9 is upstream end-of-support. See PHASES.md for details. No automated browser or visual checks have been executed.
