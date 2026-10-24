# Vercel release handoff

Local implementation and verification are ready. The owner supplied the Vercel dashboard target `https://vercel.com/king-09` on 2026-10-24, so deployments must use the `king-09` account/team after access is connected. This dashboard URL identifies the destination account; it is not the portfolio's public origin. Publishing is not complete because the integration is available but not installed/connected, and no authenticated CLI/project or GitHub remote is configured. Do not use another account or claim a live URL before a successful deployment.

Prepared configuration:

- Framework: Vite; Node target 24 (.nvmrc).
- Install: npm ci. Build: npm run build. Output: dist.
- vercel.json maps each of five dossier URLs to its static HTML and unknown dossier URLs to the SPA, while leaving PDFs/images/assets alone.
- Homepage and dossiers have static readable fallback content plus page-specific title/description/Open Graph metadata. Unknown routes have a static 404 artifact.
- Build environment PORTFOLIO_SITE_URL is optional and public: use only the actual returned/configured HTTPS origin. Unset keeps noindex/Disallow and omits guessed canonical/sitemap URLs. Once the real origin is known, set it and rebuild/redeploy to emit absolute social URLs, canonical URLs and sitemap and enable indexing.
- No API tokens, runtime project APIs or server secrets are needed by this frontend.
- Immutable hashed-asset caching and nosniff/referrer-policy headers are configured.

After connecting, select `king-09`, create or select the owner's intended project, deploy this checkout and inspect the actual returned URL. Verify /, all five /systems/:slug URLs with reload/Back, unknown route, favicon/social image, all PDF/preview URLs and no console errors. Use the returned HTTPS origin to set PORTFOLIO_SITE_URL and redeploy for public canonical metadata, sitemap and indexing. Do not auto-create a GitHub remote with an invented repository name; local phase commits are already retained.
