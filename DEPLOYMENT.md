# Vercel release handoff

Local implementation and verification are ready. The complete `main` branch is published at `https://github.com/Priyanshuraj0909/Priyanshu-Portfolio`. The owner supplied the Vercel dashboard target `https://vercel.com/king-09` on 2026-10-24, so deployments must use the `king-09` account/team after access is connected. This dashboard URL identifies the destination account; it is not the portfolio's public origin. Publishing is not complete because the integration and CLI are not authenticated to Vercel. Do not use another account or claim a live URL before a successful deployment.

Prepared configuration:

- Framework: Vite; Node 24 is pinned in .nvmrc and package.json engines.
- Install: npm ci. Build: npm run build. Output: dist.
- vercel.json maps each of five dossier URLs to its static HTML and unknown dossier URLs to the SPA, while leaving PDFs/images/assets alone.
- Homepage and dossiers have static readable fallback content plus page-specific title/description/Open Graph metadata. Unknown routes have a static 404 artifact.
- Build environment PORTFOLIO_SITE_URL is optional and public: use only the actual returned/configured HTTPS origin. Unset keeps noindex/Disallow and omits guessed canonical/sitemap URLs. Once the real origin is known, set it and rebuild/redeploy to emit absolute social URLs, canonical URLs and sitemap and enable indexing.
- No API tokens, runtime project APIs or server secrets are needed by this frontend.
- Immutable hashed-asset caching and nosniff/referrer-policy headers are configured.
- GitHub Actions verifies `main` pushes and pull requests with Node 24, `npm ci`, lint, tests, content validation, production build and `npm run check:deployment`. The deployment check verifies generated static pages, dossier rewrites, linked local assets, certificate files and indexing configuration.

After authenticating, select `king-09`, import the published `Priyanshu-Portfolio` repository or link this checkout, and inspect the actual returned URL. Verify /, all five /systems/:slug URLs with reload/Back, unknown route, favicon/social image, all PDF/preview URLs and no console errors. Use the returned HTTPS origin to set PORTFOLIO_SITE_URL and redeploy for public canonical metadata, sitemap and indexing. Local phase commits and the authorized GitHub remote are retained.
