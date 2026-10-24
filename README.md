# Priyanshu Raj portfolio

Completed: **Phase 1 of the Vite rebuild**, requested 24 October 2026. The prior Next.js portfolio is preserved and runnable separately. Only the minimal foundation page is served by Vite; the reference design and features await approval of later phases.

## Run

Use Node 24 (`nvm use`) and `npm ci`.

- `npm run dev`: Vite development server.
- `npm run build`: strict Vite TypeScript check and production output in dist.
- `npm run preview`: preview the built Vite app.
- `npm run lint`: repository ESLint checks, including retained legacy code.
- `npm run test:content`, `npm run test:terminal`, `npm run check:content`: retained content/behavior checks.
- `npm run dev:legacy`: previous Next.js portfolio.
- `npm run build:legacy`, `npm run typecheck:legacy`: previous framework checks.

Stack: React, TypeScript, Vite, Tailwind CSS, Three.js, React Three Fiber, Motion and Lucide. Three/R3F and Motion are installed for later phases and do not run on the foundation page. Next.js dependencies remain temporarily for legacy source compatibility.

## Documentation

Read MASTER_ORCHESTRATOR.md for workflow, PLAN.md for architecture, PHASES.md for acceptance criteria/results and AGENTS.md for implementation rules. Earlier documents are under docs/history/nextjs. Existing project/certificate/content evidence remains in PROJECT_EVIDENCE.md, CERTIFICATE_EVIDENCE.md and CONTENT_GUIDE.md.

Phase 1 displays only supplied identity, education, focus and GitHub. StudySync AI requires its repository URL before technical descriptions. Email, LinkedIn, biography, location, resume and proficiency claims remain unset. No deployment, push or external messages are authorized. Vercel is the intended final hosting target.

Verification: lint, strict Vite typecheck/build, ten retained tests, content checks and legacy Next build passed. Production Chrome smoke passed at 1440/390/320px with keyboard access and no overflow/page errors. Phase 2 awaits approval. Detailed results/manual steps are in PHASES.md.
