# Priyanshu Raj — developer portfolio

**Live portfolio: [www.priyanshuraj.tech](https://www.priyanshuraj.tech/)**

A teal and peach editorial portfolio with warm metallic typography, peach accents and a large procedural learning sphere inspired by Priyanshu’s AI/ML and full-stack work. Built with React, TypeScript, Vite and React Three Fiber. The About page opens immediately, with Projects and Journey below. Phones open with a lightweight sphere; interactive 3D loads only after tapping “Enable 3D”. Desktop 3D loads after the readable page paints, with a static fallback while it loads or if WebGL is unavailable. The same interactive sphere reacts to pointer movement, scrolling and controls throughout the homepage. Features expand/collapse and pause controls, an interactive project explorer, viewport-triggered lazy loading, reduced-motion support and static visual fallbacks. An oversized closing contact section pairs stacked social links with a subtle dotted globe.

Five source-backed projects, three journey records and all 24 original certificate PDFs remain available. See INFERENCE_DESIGN.md for the ECHO reference, original design choices and performance limits. The earlier Next.js implementation remains under the legacy scripts.

[About](https://www.priyanshuraj.tech/#about) · [Source on GitHub](https://github.com/Priyanshuraj0909/Priyanshu-Portfolio)

`https://vercel.com/king-09` is the owner's management dashboard, not a public
portfolio URL. Share the custom-domain link above with visitors.

Run `npm run check:connectivity` to compare ordinary Vercel access, DNS-selected
edges and the independent host. A successful build or isolated HTTP 200 does
not establish recovery on every network. See DEPLOYMENT.md for the evidence
and hosting limits.

Use the exact spelling **priyanshuraj.tech**. The misspelling
`priyasnhuraj.tech` (swapped n/s) returns NXDOMAIN and is not this portfolio's
domain. Open the clickable custom-domain link above to avoid the typo.

Custom-domain diagnostics: `npm run check:connectivity -- priyanshuraj.tech`.
The root domain redirects to `www`; the check follows HTTPS redirects and
reports the final URL. A browser's `DNS_PROBE_FINISHED_NXDOMAIN` occurs before
the app loads. Public DNS and HTTPS for the correctly spelled domain passed
on 31 October 2026. See DEPLOYMENT.md.

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
npm run check:performance
```

All 16 content/parser/filter/loading-policy tests, lint, typecheck, production build and deployment checks passed. Earlier production browser checks and the latest live smoke checks are recorded separately. See QA_REPORT.md for executed coverage and limits. `npm run dev:legacy`, `build:legacy` and `typecheck:legacy` retain the previous Next.js app. Runtime never calls GitHub or model APIs.

GitHub Actions runs a clean install, lint, tests, content checks, production build and deployment artifact checks on Node 24 for pushes and pull requests to `main`. Vercel uses the same Node major and lockfile installation through `vercel.json`.

## Opening performance

The homepage is accessible on its first React render, including a fresh tab or session. There is no full-screen intro, font-readiness wait, scroll lock or entry button. The optional WebGL bundle loads after 450 ms on desktop. Phones, touch devices, Data Saver and reported slow connections start with the lightweight sphere and offer “Enable 3D”; opening or scrolling does not download the renderer. Reduced motion uses the static sphere. Text uses local WOFF2 fonts with `font-display: swap`. The original TTF fonts and licenses are preserved for the legacy app. The Vite UI uses Motion’s smaller animation feature bundle; navigation caches section positions rather than measuring layout on each scroll frame. `npm run check:performance` checks initial script size, compressed font assets and deferred WebGL, and runs in GitHub Actions.

Design references: [GSAP Showcase](https://gsap.com/showcase/) for coordinated motion and [Siteinspire](https://www.siteinspire.com/) for restrained typography and spacing. Awwwards WebGL/preloader galleries were requested but could not be fetched during this session. No reference assets or personal content were copied.

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

The portfolio custom domain was verified on 31 October 2026.
Its existing HTTPS redirect leads to `https://www.priyanshuraj.tech`, now the
default origin for canonical URLs, sitemap and social metadata. The generated
Vercel hostname has intermittent connection timeouts; share the custom domain
with visitors. `PORTFOLIO_SITE_URL` overrides the origin; an explicitly
empty value retains noindex for private previews. The independent deployment
uses its own origin. See QA_REPORT.md and DEPLOYMENT.md for checks and limits.
