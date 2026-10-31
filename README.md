# Priyanshu Raj — developer portfolio

| Hosting | Live portfolio |
| --- | --- |
| Custom domain | [www.priyanshuraj.tech](https://www.priyanshuraj.tech/) |
| Independent host (recommended) | [priyanshu-raj-ai-portfolio.priyanshuraj032004.chatgpt.site](https://priyanshu-raj-ai-portfolio.priyanshuraj032004.chatgpt.site/) |
| Vercel | [priyanshu-portfolio-pi-ruby.vercel.app](https://priyanshu-portfolio-pi-ruby.vercel.app/) |

A teal and peach editorial portfolio with warm metallic typography, peach accents and a large procedural learning sphere inspired by Priyanshu’s AI/ML and full-stack work. Built with React, TypeScript, Vite and React Three Fiber. On the first visit each session, a short 3D opening assembles the learning sphere before it glides into the existing About page, followed by Projects and Journey. Enter portfolio or Escape skips the opening; reduced motion, saved pause preferences and deep links bypass it. Readiness checks have a 3.6-second deadline, with a static sphere fallback if WebGL is unavailable. The same interactive sphere reacts to pointer movement, scrolling and controls throughout the homepage. Features expand/collapse and pause controls, an interactive project explorer, viewport-triggered lazy loading, reduced-motion support and static visual fallbacks. An oversized closing contact section pairs stacked social links with a subtle dotted globe.

Five source-backed projects, three journey records and all 24 original certificate PDFs remain available. See INFERENCE_DESIGN.md for the ECHO reference, original design choices and performance limits. The earlier Next.js implementation remains under the legacy scripts.

[About](https://priyanshu-raj-ai-portfolio.priyanshuraj032004.chatgpt.site/#about) · [Source on GitHub](https://github.com/Priyanshuraj0909/Priyanshu-Portfolio)

`https://vercel.com/king-09` is the owner's management dashboard, not a public
portfolio URL. Share the recommended link above with visitors. On 31 October
2026 the owner confirmed that it opens while Vercel times out on both tested
networks. The recommended link uses independent Cloudflare hosting; the old
Vercel address remains subject to the unresolved network-path issue.

Run `npm run check:connectivity` to compare ordinary Vercel access, DNS-selected
edges and the independent host. A successful build or isolated HTTP 200 does
not establish recovery on every network. See DEPLOYMENT.md for the evidence
and hosting limits.

Custom-domain diagnostics: `npm run check:connectivity -- priyanshuraj.tech`.
The root domain redirects to `www`; the check follows HTTPS redirects and
reports the final URL. A browser's `DNS_PROBE_FINISHED_NXDOMAIN` occurs before
the app loads. Public DNS and HTTPS worked here on 31 October 2026, but the
owner's affected device still needs a recheck. See DEPLOYMENT.md.

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

## Opening animation

The intro uses the existing Motion and React Three Fiber stack; no animation dependency was added. It runs once per tab session on `/`, `/#about` and `/#core`; other anchors and dossier routes remain directly accessible. To replay it, open a fresh tab or clear `portfolio:intro-v5` from session storage. Readiness is based on fonts and the first scene frame; the thin line is a readiness indicator, not a download percentage.

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

The owner supplied the custom domain `priyanshuraj.tech` on 31 October 2026.
Its existing HTTPS redirect leads to `https://www.priyanshuraj.tech`, now the
default origin for canonical URLs, sitemap and social metadata. The Vercel
mirror remains available. `PORTFOLIO_SITE_URL` overrides the origin; an explicitly
empty value retains noindex for private previews. The independent deployment
uses its own origin. See QA_REPORT.md and DEPLOYMENT.md for checks and limits.
