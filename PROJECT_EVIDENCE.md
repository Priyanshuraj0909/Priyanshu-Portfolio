# Project source and media evidence

Verified 23 October 2026 for Phase 4. Public repositories were cloned read-only into `/tmp/priyanshu-phase4`. Descriptions in `src/content/projects.ts` are based on the pinned source below. No project backend was run, no credentials were supplied, and no hosted accounts or data were changed. Metrics from READMEs are not used as portfolio achievements. Source-level verification does not establish deployed behavior or model accuracy.

## CineMatch AI

Repository: https://github.com/Priyanshuraj0909/Movie-content-recommendation-system

Commit: `50fdf027ed8fd924405d6939296ba9dc07832980`

- [Content model](https://github.com/Priyanshuraj0909/Movie-content-recommendation-system/blob/50fdf027ed8fd924405d6939296ba9dc07832980/src/recommender/models/content.py): TF-IDF from title/genre/tags, normalized profile features, cosine similarity and stable candidate ordering.
- [Collaborative model](https://github.com/Priyanshuraj0909/Movie-content-recommendation-system/blob/50fdf027ed8fd924405d6939296ba9dc07832980/src/recommender/models/collaborative.py): regularized biases, seeded latent factors and popularity fallback.
- [Ranking evaluation](https://github.com/Priyanshuraj0909/Movie-content-recommendation-system/blob/50fdf027ed8fd924405d6939296ba9dc07832980/src/recommender/evaluation/ranking.py): validation-only blend selection before test evaluation.
- [API](https://github.com/Priyanshuraj0909/Movie-content-recommendation-system/blob/50fdf027ed8fd924405d6939296ba9dc07832980/backend/app/main.py), `backend/app/services/external_ratings.py`, `frontend/web/app.js`, `frontend/app.py`, `requirements.txt` establish serving, optional provider lookups, browser watchlist, local Streamlit interface and dependencies.

Exact README demo: https://cinematch-king-09.vercel.app — Chrome redirected to Vercel login. Omitted from product demo actions. No current verified screenshot is available; a labeled abstract system illustration is used. Hosted rating persistence remains unverified.

## Fakeddit

Repository: https://github.com/Priyanshuraj0909/Fakeddit-Multimodal-FakeNews

Commit: `ef8137a196b1cb52bf8b233bc74b1ab2596d62d2`

- [Portable inference](https://github.com/Priyanshuraj0909/Fakeddit-Multimodal-FakeNews/blob/ef8137a196b1cb52bf8b233bc74b1ab2596d62d2/ml/inference/portable_text.py): exported TF-IDF/logistic model, uncertainty, coverage abstention, feature contributions and explicit non-fact-check boundary.
- [API](https://github.com/Priyanshuraj0909/Fakeddit-Multimodal-FakeNews/blob/ef8137a196b1cb52bf8b233bc74b1ab2596d62d2/backend/app/main.py) and [research service](https://github.com/Priyanshuraj0909/Fakeddit-Multimodal-FakeNews/blob/ef8137a196b1cb52bf8b233bc74b1ab2596d62d2/backend/app/services/verification.py): separate prediction and Groq source-research paths with configuration checks.
- [Text training](https://github.com/Priyanshuraj0909/Fakeddit-Multimodal-FakeNews/blob/ef8137a196b1cb52bf8b233bc74b1ab2596d62d2/ml/training/train_text.py), [multimodal training](https://github.com/Priyanshuraj0909/Fakeddit-Multimodal-FakeNews/blob/ef8137a196b1cb52bf8b233bc74b1ab2596d62d2/ml/training/train_multimodal.py), `ml/models/clip_encoder.py`: trainable text baseline and separate local CLIP/XGBoost research pipeline. Research technologies are identified as such, not represented as the hosted default.

Exact README demo: https://fakeddit-multimodal-fakenews.vercel.app — timed out at 35s (network-idle attempt) and 20s (DOMContentLoaded attempt). Omitted from product demo actions rather than claiming the service is permanently unavailable.

Screenshot: [workspace-desktop.png](https://github.com/Priyanshuraj0909/Fakeddit-Multimodal-FakeNews/blob/ef8137a196b1cb52bf8b233bc74b1ab2596d62d2/docs/assets/workspace-desktop.png), 1440×1200. Visually inspected; it shows an empty workspace. [Capture provenance](https://github.com/Priyanshuraj0909/Fakeddit-Multimodal-FakeNews/blob/ef8137a196b1cb52bf8b233bc74b1ab2596d62d2/docs/assets/README.md) records a real local Chrome capture on 21 October, bundled text model available and Groq unconfigured. Converted to `public/projects/fakeddit.webp` using the already-installed Sharp package, quality 85; no content edits.

## CartPilot

Repository: https://github.com/Priyanshuraj0909/CartPilot

Commit: `980187ce7df6c1067cf9b3ed6125278744c755ab`

- [Coordinator](https://github.com/Priyanshuraj0909/CartPilot/blob/980187ce7df6c1067cf9b3ed6125278744c755ab/backend/app/services/orchestration/coordinator.py): deterministic coordination, cross-specialist conflicts, priority/risk aggregation, approval-required plans.
- [Action workflow](https://github.com/Priyanshuraj0909/CartPilot/blob/980187ce7df6c1067cf9b3ed6125278744c755ab/backend/app/services/actions/workflow.py): merchant ownership checks, approval linkage and separate transactional execution.
- [Buyer intent](https://github.com/Priyanshuraj0909/CartPilot/blob/980187ce7df6c1067cf9b3ed6125278744c755ab/backend/app/services/commerce/intent.py): local fallback and optional configured structured AI intent. This is separate from merchant specialist logic. The current repository has more commerce capabilities than the older planning notes; portfolio scope deliberately describes only inspected parts.
- [Shopify client](https://github.com/Priyanshuraj0909/CartPilot/blob/980187ce7df6c1067cf9b3ed6125278744c755ab/backend/app/integrations/shopify/client.py): bounded read queries against configured Admin GraphQL. `frontend/package.json`, `backend/requirements.txt` establish React/TypeScript/Vite/Tailwind/FastAPI/SQLAlchemy/PostgreSQL dependencies.

Exact demo: https://cart-pilot-seven.vercel.app/ — HTTP 200, CartPilot sign-in interface visible in Chrome. Included as a demo entry point, with dossier wording that authenticated merchant workflows and checkout were not exercised.

Screenshot: [01_dashboard.png](https://github.com/Priyanshuraj0909/CartPilot/blob/980187ce7df6c1067cf9b3ed6125278744c755ab/docs/screenshots/01_dashboard.png), 1440×1000. Visually inspected. [Provenance](https://github.com/Priyanshuraj0909/CartPilot/blob/980187ce7df6c1067cf9b3ed6125278744c755ab/docs/screenshots/README.md) identifies synthetic Four-product Demo data, not actual merchant outcomes. Converted to `public/projects/cartpilot.webp` at quality 85 without content changes. Display caption explicitly identifies demo figures.

## Mock Interview AI

Repository: https://github.com/Priyanshuraj0909/Mock-Interview

Commit: `1a69128089e3a7a7b3204645b8e8acc22d3e2e95`

- [Interview routes](https://github.com/Priyanshuraj0909/Mock-Interview/blob/1a69128089e3a7a7b3204645b8e8acc22d3e2e95/Ai/routers/interview.py) and [test routes](https://github.com/Priyanshuraj0909/Mock-Interview/blob/1a69128089e3a7a7b3204645b8e8acc22d3e2e95/Ai/routers/tests.py): role/test configuration and answer feedback. Practice routes do not verify JWT.
- [Grading](https://github.com/Priyanshuraj0909/Mock-Interview/blob/1a69128089e3a7a7b3204645b8e8acc22d3e2e95/Ai/grading.py): semantic written/code grading, strict report fields and server-derived scores; prompts explicitly do not claim code execution.
- [AI service](https://github.com/Priyanshuraj0909/Mock-Interview/blob/1a69128089e3a7a7b3204645b8e8acc22d3e2e95/Ai/ai_service.py): credential-dependent Gemini primary, bounded retry and Groq fallback.
- `newmyapp/src/components/MockTest.jsx`, `DashboardInterview.js`, `newmyapp/package.json`, `Ai/database.py`, `requirements.txt` establish timer, optional browser voice support and React/FastAPI/MongoDB dependencies. No inference from unused package names to product features.

Exact demo: https://mock-interview-king-09.vercel.app/ — HTTP 200 and expected public landing page visible in Chrome. Included. Generation, grading, account creation and voice behavior were not exercised against the hosted service.

Screenshot: new read-only Chrome capture of that landing page on 23 October 2026 at 1440×1000, reduced motion enabled, after a 3s settling wait. Visually inspected and converted to `public/projects/mock-interview.webp`, quality 85. The application labels its interview panel as a preview; portfolio caption preserves that distinction. No claims of a generated practice session.

## Asset and verification boundaries

Only the user's own project screenshots are included; reference site art, project records and personal details were not downloaded into product assets. Screenshot files total approximately 157 KiB. Portfolio runtime never calls GitHub or project APIs; evidence is static typed content. Recheck public availability and any changed source before final publication. All repository path links exposed in dossiers use these fixed commits.

## Master prompt Phase 1 audit — 2026-10-24

All five public repositories were freshly cloned read-only into /tmp/portfolio-master-audit. CineMatch, Fakeddit, CartPilot and Mock Interview HEADs match the pinned commits above; key implementation paths were reinspected. This is not a fresh live-demo or backend/model validation.

Medical Cost App: https://github.com/Priyanshuraj0909/Medical-cost-app at `33ddbab3ec45980923228589f16766411525eed6` (repository branding: CareEstimate).

- [app.py](https://github.com/Priyanshuraj0909/Medical-cost-app/blob/33ddbab3ec45980923228589f16766411525eed6/app.py): FastAPI lifespan loads model, checks feature-name/order contract, validates finite/nonnegative output and exposes /predict and /health. The model artifact was not loaded/executed in this audit.
- [schema/user_input.py](https://github.com/Priyanshuraj0909/Medical-cost-app/blob/33ddbab3ec45980923228589f16766411525eed6/schema/user_input.py): Pydantic bounds/category normalization and derived BMI, insurance fraction and city encoding.
- [requirements.txt](https://github.com/Priyanshuraj0909/Medical-cost-app/blob/33ddbab3ec45980923228589f16766411525eed6/requirements.txt): FastAPI, Pydantic, NumPy, LightGBM and related pinned numerical dependencies. Presence alone does not establish use of every dependency.
- [static/app.js](https://github.com/Priyanshuraj0909/Medical-cost-app/blob/33ddbab3ec45980923228589f16766411525eed6/static/app.js) and [interface](https://github.com/Priyanshuraj0909/Medical-cost-app/blob/33ddbab3ec45980923228589f16766411525eed6/static/index.html): actual vanilla JS form submits /predict and handles estimates, monthly equivalent, loading and errors. It is not a React interface.

Candidate README demo: https://medical-cost-app-jade.vercel.app — not opened/verified in this phase. No genuine Medical screenshot captured yet. Do not add a live-demo action or fabricated image until verified in Phase 6. Do not invent a currency, accuracy, clinical validity, user count or project status. Source verification is a portfolio code audit, not medical guidance or evaluation of the model.

The API list returned five public repositories; StudySync AI still lacks a source URL/access. CONTENT_AUDIT.md contains the current inventory and feature gaps. No new project card or technical description was published during the audit.

## Autonomous implementation demo/media checks — 2026-10-24
Chrome read-only checks returned expected HTTP 200 public landing/workspace pages for Fakeddit, CartPilot, Mock Interview and Medical Cost App. Fakeddit's workspace now loads, superseding the previous timeout; enabled its actual demo URL. CineMatch still redirects to Vercel login, so no public demo button is exposed. No authentication, model prediction, generation, merchant action or private data was exercised.

Medical: original Chrome 1440×1000 capture of the real public CareEstimate form at https://medical-cost-app-jade.vercel.app/; no estimate submitted. CineMatch: real local 1440×1000 capture of the pinned static frontend served read-only with Python HTTP server; backend absent, explicitly captioned as local UI rather than a hosted outcome. Both visually inspected, converted with Sharp to public/projects/{medical-cost,cinematch}.webp at quality 85 without content edits. Original screenshots for the other three remain with earlier provenance.
