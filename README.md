# Priyanshu Raj — developer portfolio

A teal and peach editorial portfolio with warm metallic typography, peach accents and a large procedural learning sphere inspired by Priyanshu’s AI/ML and full-stack work. Built with React, TypeScript, Vite and React Three Fiber. About opens the homepage immediately with the supplied biography beside a static sphere fallback, followed by Projects and Journey. The interactive sphere loads after the readable first screen and reacts to pointer movement, scrolling and controls throughout the homepage. Features expand/collapse and pause controls, an interactive project explorer, viewport-triggered lazy loading, reduced-motion support and static visual fallbacks. An oversized closing contact section pairs stacked social links with a subtle dotted globe.

Five source-backed projects, three journey records and all 24 original certificate PDFs remain available. See INFERENCE_DESIGN.md for the ECHO reference, original design choices and performance limits. The earlier Next.js implementation remains under the legacy scripts.

Live portfolio: **[https://priyanshu-portfolio-pi-ruby.vercel.app/](https://priyanshu-portfolio-pi-ruby.vercel.app/)** · [About](https://priyanshu-portfolio-pi-ruby.vercel.app/#about) · [Public backup](https://priyanshu-raj-ai-portfolio.priyanshuraj032004.chatgpt.site/) · [Source on GitHub](https://github.com/Priyanshuraj0909/Priyanshu-Portfolio)

`https://vercel.com/king-09` is the owner's management dashboard, not a public
portfolio URL. Share the `vercel.app` link above with visitors.

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
npm run build
npm run check:deployment
```

All 13 content/parser/filter tests, lint, typecheck, production build and deployment checks passed. Earlier production browser checks and the latest live smoke checks are recorded separately. See QA_REPORT.md for executed coverage and limits. `npm run dev:legacy`, `build:legacy` and `typecheck:legacy` retain the previous Next.js app. Runtime never calls GitHub or model APIs.

GitHub Actions runs a clean install, lint, tests, content checks, production build and deployment artifact checks on Node 24 for pushes and pull requests to `main`. Vercel uses the same Node major and lockfile installation through `vercel.json`.

## Architecture and content

- src/main.tsx / src/foundation: Vite entry, router, theme and fonts.
- src/features: hero/neural graph, motion preferences, capabilities, dossiers, archive and home composition.
- src/components: reusable semantic layout/project/journey/terminal/contact primitives.
- src/content: typed editable owner data and evidence-backed project/certificate records.
- src/lib: pure validation, command dispatch and certificate search.
- public: genuine project/document assets, original favicon and social graphic.
- src/content/site.ts: confirmed public portfolio origin and source repository.
- scripts/prerender.mjs: static readable fallback and metadata for homepage + five dossiers.

Edit profile.ts for supplied contact/biography, projects.ts for source-verified projects, journey.ts for confirmed records, journey-drafts.ts for unpublished intake and certificates.ts for original-document records. Missing personal values stay null; do not fabricate achievements, metrics or proficiency. StudySync AI awaits source information. Source/media evidence is in PROJECT_EVIDENCE.md, CERTIFICATE_EVIDENCE.md and CONTENT_AUDIT.md.

## Workflow and publishing

The owner authorized all remaining implementation phases autonomously. Local phase commits are retained. See MASTER_ORCHESTRATOR.md, PHASES.md, AGENTS.md and DESIGN_SYSTEM.md for architecture, scope and verification. Earlier plans are preserved in docs/history.

The owner confirmed the live portfolio at `https://priyanshu-portfolio-pi-ruby.vercel.app/#about` on 2026-10-27. The public origin is `https://priyanshu-portfolio-pi-ruby.vercel.app` and the source repository is `https://github.com/Priyanshuraj0909/Priyanshu-Portfolio`. HTTPS homepage delivery was verified. The release build now defaults to this confirmed origin for canonical URLs, sitemap and absolute social metadata; `PORTFOLIO_SITE_URL` can override it, and an explicitly empty value retains noindex for private previews. Vercel successfully deployed commit f3b43a8; live checks confirmed indexing, canonical/social URLs, robots.txt and the six-page sitemap on 2026-10-27. See QA_REPORT.md and DEPLOYMENT.md for executed checks and remaining limits.
