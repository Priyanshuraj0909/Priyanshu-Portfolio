# Priyanshu Raj — developer portfolio

An original dark futuristic portfolio inspired by the reference layout, built with React, strict TypeScript, Vite, Tailwind CSS, Three.js, React Three Fiber, Drei, Motion and Lucide. The complete Vite implementation is active; the earlier Next.js implementation remains preserved under legacy scripts.

Features: short skippable boot; lazy interactive neural field with static fallback, pause/reduced motion and visibility suspension; six source-backed technical modules; five projects with genuine screenshots and dossier routes; confirmed chronological education/learning journey; 24 original certificate PDFs with real previews/search/categories and six checked issuer destinations; safe ten-command terminal with history; genuine available contact links.

## Run

Use Node 24 (`nvm use`), then:

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:5173. Production preview: `npm run build` then `npm run preview`.

```sh
npm run lint
npm run typecheck
npm test
npm run check:content
```

All 13 content/parser/filter tests, lint, builds and production browser checks passed. See QA_REPORT.md for executed coverage and limits. `npm run dev:legacy`, `build:legacy` and `typecheck:legacy` retain the previous Next.js app. Runtime never calls GitHub or model APIs.

## Architecture and content

- src/main.tsx / src/foundation: Vite entry, router, theme and fonts.
- src/features: boot, hero/neural graph, motion preferences, capabilities, dossiers, archive and home composition.
- src/components: reusable semantic layout/project/journey/terminal/contact primitives.
- src/content: typed editable owner data and evidence-backed project/certificate records.
- src/lib: pure validation, command dispatch and certificate search.
- public: genuine project/document assets, original favicon and social graphic.
- scripts/prerender.mjs: static readable fallback and metadata for homepage + five dossiers.

Edit profile.ts for supplied contact/biography, projects.ts for source-verified projects, journey.ts for confirmed records, journey-drafts.ts for unpublished intake and certificates.ts for original-document records. Missing personal values stay null; do not fabricate achievements, metrics or proficiency. StudySync AI awaits source information. Source/media evidence is in PROJECT_EVIDENCE.md, CERTIFICATE_EVIDENCE.md and CONTENT_AUDIT.md.

## Workflow and publishing

The owner authorized all remaining implementation phases autonomously. Local phase commits are retained. See MASTER_ORCHESTRATOR.md, PHASES.md, AGENTS.md and DESIGN_SYSTEM.md for architecture, scope and verification. Earlier plans are preserved in docs/history.

The complete repository is published on GitHub at `https://github.com/Priyanshuraj0909/Priyanshu-Portfolio`, with local `main` tracking `origin/main`. Vercel deployment to the owner-supplied `king-09` account target is the remaining external step; its integration or CLI session must be authenticated for project access. The dashboard URL is not the portfolio URL. No live deployment is claimed. DEPLOYMENT.md contains the ready configuration and release checks. Noindex remains until the actual HTTPS origin is configured through the hosted build's PORTFOLIO_SITE_URL; the build then generates canonical/sitemap/absolute social metadata without guessing a domain.
