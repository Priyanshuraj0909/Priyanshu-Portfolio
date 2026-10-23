# Priyanshu Raj portfolio — development plan

## Objective
Build a portfolio titled **Priyanshu Raj | AI/ML Engineer & Developer**, closely matching the verified reference design while using genuine personal content. Reference: https://www.advaysinha.in/. Identity and interests are user-provided; interests: AI, machine learning, full-stack development, software engineering, data science.

## Architecture
Next.js App Router, React, TypeScript, Tailwind CSS, Motion for React, Lucide React. Use a lightweight Canvas neural field as an isolated client component. Server-render text and content; progressive enhancement for motion. Avoid adding a smooth-scroll dependency before native scrolling is assessed. Use Vercel deployment without backend/database requirements.

```text
src/
  app/
    layout.tsx              # metadata, fonts, global shell
    page.tsx                # ordered portfolio sections
    globals.css             # Tailwind entry, verified tokens
    systems/[slug]/page.tsx  # static, directly addressable dossier
    not-found.tsx
    robots.ts
    sitemap.ts              # actual configured deployment URL only
  components/
    layout/                 # header, footer, depth labels
    hero/                   # introduction, skippable boot, canvas
    projects/               # vault, selection, diagrams, dossier
    journey/                # timeline
    certificates/           # archive, verified links
    terminal/               # shell input and output
    contact/                # verified contact actions
    ui/                     # shared controls, motion helpers
  content/
    profile.ts              # nullable missing personal fields
    projects.ts             # typed verified records + evidence
    journey.ts
    certificates.ts
  lib/
    types.ts
    terminal.ts             # pure command parsing/dispatch
public/
  projects/                 # genuine screenshots only
  certificates/             # user-provided PDFs only
  resume/                   # actual Priyanshu Raj resume
```

## Behavior
Preserve six-section order: About (#core), Projects (#vault), Journey (#logs), Certificates (#live), Terminal (#terminal), Contact (#contact). Use depth labels 01–06. Hero has name, approved introduction, interests/verified skills, neural interaction, projects/contact links. Boot is skippable and respects reduced motion. Project Vault uses reusable records and genuine screenshots with dossier routes; exact selection/scroll behavior awaits observation. Journey and certificates show genuine entries or an honest empty state, with editable missing fields outside published claims.

Terminal commands: help, about, skills, projects, experience, education, github, linkedin, resume, contact, clear. Normalize whitespace/case, handle unknown commands, preserve readable output and keyboard input, and render safe text/links rather than injected HTML. Missing data commands explain availability; do not open fabricated URLs. Use labelled input, controlled announcements and no keyboard trap.

Contact uses actual email, social links, resume and location when supplied. Omit unavailable actions. Provide SEO title/description, correct Open Graph data and canonical URL only after host is known. Ensure keyboard navigation, native anchors, contrast, reduced motion, motion pause and mobile touch usability.

## Preliminary project evidence — 2026-10-21
Public repository pages and rendered READMEs were retrieved directly. These observations are repository-documented, not independent code/runtime verification; source files, dependencies, screenshots and demo availability must be checked in Phase 4 before displaying claims. No performance metrics are approved for portfolio use.

| Candidate | Repository | Documented behavior and boundaries |
| --- | --- | --- |
| CINEMATCH AI | https://github.com/Priyanshuraj0909/Movie-content-recommendation-system | TF-IDF content similarity, collaborative matrix factorization and validation-tuned hybrid ranking; Python/FastAPI, local Streamlit and native browser frontend. External ratings need credentials; hosted rating-write verification is pending per README. |
| Fakeddit | https://github.com/Priyanshuraj0909/Fakeddit-Multimodal-FakeNews | Bundled TF-IDF/Logistic Regression headline classifier; separate credential-dependent Groq claim research. CLIP/XGBoost paired research is experimental and requires artifacts. Image/video previews are not authenticity classification. Python/FastAPI and native JavaScript frontend. |
| CartPilot | https://github.com/Priyanshuraj0909/CartPilot | Four deterministic pricing, restock, promotion and listing specialists with merchant review and guarded local actions. React/TypeScript/Vite/Tailwind, FastAPI, SQLAlchemy/PostgreSQL. No LLM, trained ML or autonomous learning. Optional Shopify sync is read-only. |
| Mock Interview | https://github.com/Priyanshuraj0909/Mock-Interview | Configurable mock tests, role questions, typed/browser-supported voice practice and AI feedback. React, FastAPI, MongoDB, Gemini/Groq. Code answers are assessed by AI, not executed; practice routes do not verify JWT per README. |

GitHub public API returned rate-limit error; direct repository HTML succeeded. Live-demo links are not yet approved: extract and probe exact destinations in Phase 4. Missing Mock Interview screenshots are explicitly noted in its README.

## Validation strategy
Phase 1: install reproducibly, lint, typecheck, production build and HTTP smoke if possible. Phase 2: compare token values to recorded CSS. Phase 3: verify boot skip, reduced motion, resize, canvas cleanup and touch. Phase 4: code-backed project audit, routing/back behavior and actual links. Phase 5: chronological ordering and all PDFs/verification links. Phase 6: every terminal command, missing data, unknown input, clear and contact actions. Phase 7: desktop/mobile screenshots, keyboard, reduced motion and performance. Phase 8: clean install, lint/typecheck/build, targeted behavior checks, final content/link audit and Vercel production smoke.

## Foundation scope update
The user subsequently supplied the desired priyanshu-portfolio tree. Implement foundation setup in the existing Portfolio workspace, using priyanshu-portfolio as the package name; avoid duplicating the existing documents into a nested checkout. The user explicitly authorized Phase 2; desktop/mobile design-system evidence was gathered in headless Chrome and applied. Phases 3 and 4 were completed on 2026-10-23; Phase 5 was approved and implemented on 2026-10-24 with honest empty states pending personal data. Stop before Phase 6 pending approval.

## Open information and decisions
Desktop/mobile reference screenshots and computed styles are now inspected for Phase 2. Full interaction fidelity remains unverified: inspect initial load, neural pointer/scroll, Project Vault selection/dossier/back, timeline, certificate archive and terminal in their corresponding phases. Missing personal details remain null in content files and are excluded from production claims. No GitHub remote name or deployment domain is assumed.

## Implemented design-system architecture — Phase 2
- `src/content/navigation.ts` owns six ordered section destinations and labels.
- `src/components/layout/header.tsx` isolates IntersectionObserver-based active navigation as a client component; native anchors preserve hash/deep links and browser history.
- Shared server components provide section headings/depth labels, footer and link variants.
- `src/app/globals.css` owns the verified palette, typography, layout, spacing, glass header, subtle grain, focus styles, responsive breakpoints and reduced-motion/print rules; selected tokens are exposed through Tailwind's inline theme.
- `src/app/fonts/` contains Google Fonts variable TTFs and original SIL Open Font Licenses; Next local fonts eliminate build-time/runtime Google network requests. Space Grotesk and JetBrains Mono are used; Oxanium is available without preloading for later components where reference evidence supports it.
- The static introductory shell displays only approved identity/interests. Five remaining section shells provide valid navigation targets and honest pending-content messages. No project dossier, timeline records, certificate records, boot, canvas or functional terminal has been implemented.
- Mobile name sizing is deliberately smaller than the reference's short first name to accommodate Priyanshu at 320px without clipping. Interest list is temporary approved-content placement rather than a recreation of the later neural field.

## Implemented hero — Phase 3
Server-rendered identity/interests and native project/contact anchors remain in page.tsx. Client components isolate optional initialization status and Canvas neural rendering. Canvas lifecycle, pause, reduced motion and rendering caps are documented in PHASES.md. No verified skills or biography were supplied.

## Implemented Project Vault — Phase 4
Four repository snapshots and media/demo evidence are recorded in PROJECT_EVIDENCE.md, superseding the preliminary README-only table above. CartPilot now has separate optional buyer AI capabilities, while merchant specialists remain deterministic. Project content is typed and static, including pinned source paths, workflows, limits and screenshot dimensions. Shared server components render cards and decorative SVG studies; only the scroll-aware index/stage uses client state. All four dossiers are statically generated with strict known slugs, metadata and native return links. Three genuine screenshots are local WebP assets. Demo entry points are exposed only for publicly observed CartPilot/Mock Interview pages. No runtime remote API dependency or extra package was added.

## Implemented Journey and certificates — Phase 5
Server components consume the typed content arrays and share pure calendar/confirmation/link-shape helpers in src/lib/personal-records.ts. Journey sorts earliest start first and only displays Present for explicit ongoing records. Archive sorts newest first and exposes independent native PDF/issuer links in a named keyboard-scrollable region. It has no client JavaScript or custom keyboard handler. Confirmation and link-check dates are manual evidence stamps, not automatic remote verification. A content checker checks draft eligibility, duplicate IDs and any supplied local PDF files. CONTENT_GUIDE.md records intake and verification steps. Both arrays intentionally remain empty: no personal records, PDFs or credential URLs have been supplied. Production empty states and isolated populated fixtures have separate QA evidence in PHASES.md.
