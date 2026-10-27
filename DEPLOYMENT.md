# Vercel deployment

- Live portfolio: [https://priyanshu-portfolio-pi-ruby.vercel.app/](https://priyanshu-portfolio-pi-ruby.vercel.app/)
- About: [https://priyanshu-portfolio-pi-ruby.vercel.app/#about](https://priyanshu-portfolio-pi-ruby.vercel.app/#about)
- Repository: [https://github.com/Priyanshuraj0909/Priyanshu-Portfolio](https://github.com/Priyanshuraj0909/Priyanshu-Portfolio)
- Owner-supplied account dashboard: https://vercel.com/king-09 (management only).

The owner supplied the live URL on 2026-10-27. HTTPS requests confirm the existing deployment is public. The local checkout was fast-forwarded to the four published redesign commits before updating deployment references.

## Build configuration

Node 24 is pinned in .nvmrc and package.json. Vercel uses `npm ci`, `npm run build`, and the `dist` output. vercel.json preserves static dossier routes, asset caching and security headers. No credentials or runtime APIs are needed by the frontend.

`src/content/site.ts` records the confirmed public origin and source repository. Production builds default to this origin, generating canonical URLs, absolute social images, robots.txt and a sitemap for the homepage and five dossiers. The 404 artifact remains noindex. `PORTFOLIO_SITE_URL` overrides the origin when moving domains; use an HTTPS origin without a path or fragment. An explicitly empty value (`PORTFOLIO_SITE_URL=`) retains noindex/Disallow for private previews. See .env.example. Local development retains the noindex template.

## Updating the published site

Push reviewed changes to the existing GitHub repository. If the project is connected to GitHub, Vercel can build that commit automatically; a successful push alone does not prove a deployment. An old Vercel environment override can supersede the source default: remove it or set it to `https://priyanshu-portfolio-pi-ruby.vercel.app` for production. Preview environments can set an empty value to remain noindex.

After deployment, check homepage and five direct dossier URLs, About anchor, refresh/Back, PDFs/previews, favicon/social image, console errors and mobile layout. Confirm canonical and Open Graph URLs use `https://priyanshu-portfolio-pi-ruby.vercel.app`, robots.txt allows indexing and sitemap.xml is valid XML. Hosting settings or manual deploys require authenticated Vercel access. See QA_REPORT.md for the checks actually completed and the remaining live verification.
