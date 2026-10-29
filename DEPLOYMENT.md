# Vercel deployment

- Live portfolio: [https://priyanshu-portfolio-pi-ruby.vercel.app/](https://priyanshu-portfolio-pi-ruby.vercel.app/)
- About: [https://priyanshu-portfolio-pi-ruby.vercel.app/#about](https://priyanshu-portfolio-pi-ruby.vercel.app/#about)
- Repository: [https://github.com/Priyanshuraj0909/Priyanshu-Portfolio](https://github.com/Priyanshuraj0909/Priyanshu-Portfolio)
- Owner-supplied account dashboard: https://vercel.com/king-09 (management only).

The owner supplied the live URL on 2026-10-27. HTTPS requests confirm the deployment is public. Commit f3b43a8 deployed successfully through the existing GitHub/Vercel connection; homepage and five dossier canonical/social metadata, indexing, robots.txt and the six-page XML sitemap passed live checks on 2026-10-27. The local checkout was fast-forwarded to the four published redesign commits before updating deployment references.

## Build configuration

Node 24 is pinned in .nvmrc and package.json. Vercel uses `npm ci`, `npm run build`, and the `dist` output. vercel.json preserves static dossier routes, asset caching and security headers. No credentials or runtime APIs are needed by the frontend.

`src/content/site.ts` records the confirmed public origin and source repository. Production builds default to this origin, generating canonical URLs, absolute social images, robots.txt and a sitemap for the homepage and five dossiers. The 404 artifact remains noindex. `PORTFOLIO_SITE_URL` overrides the origin when moving domains; use an HTTPS origin without a path or fragment. An explicitly empty value (`PORTFOLIO_SITE_URL=`) retains noindex/Disallow for private previews. See .env.example. Local development retains the noindex template.

## Updating the published site

Push reviewed changes to the existing GitHub repository. If the project is connected to GitHub, Vercel can build that commit automatically; a successful push alone does not prove a deployment. An old Vercel environment override can supersede the source default: remove it or set it to `https://priyanshu-portfolio-pi-ruby.vercel.app` for production. Preview environments can set an empty value to remain noindex.

After deployment, check homepage and five direct dossier URLs, About anchor, refresh/Back, PDFs/previews, favicon/social image, console errors and mobile layout. Confirm canonical and Open Graph URLs use `https://priyanshu-portfolio-pi-ruby.vercel.app`, robots.txt allows indexing and sitemap.xml is valid XML. Hosting settings or manual deploys require authenticated Vercel access. See QA_REPORT.md for the checks actually completed and the remaining live verification.

## Numbered navigation release — 29 October 2026

Published implementation commit `aa133f6959fb11c6a3530a049669a4b47008a1bb`
to `origin/main`. The connected Vercel deployment reported success:
https://vercel.com/king-09/priyanshu-portfolio/DdZm6RCwmCpLA7Sz3EXXmxTjrhBo
The release adds the six-link numbered navigation from the supplied reference.
Live Chrome verification passed all six navigation anchors and active states,
320/390/768px page widths and keyboard focus scrolling, with no uncaught errors.

## Teal & Peach release — 29 October 2026

Implementation commit `1dcb6cb` was pushed to `origin/main` and Vercel reported
success at https://vercel.com/king-09/priyanshu-portfolio/ES4AyByrWBJmcTA4JaytmAzB1Wty.
Live Chrome checks confirmed the teal foundation and peach navigation,
320/390/768px layouts, reduced-motion fallback and no uncaught errors at the
public portfolio URL.

## Contact finale release — 29 October 2026

Implementation commit `11b8acd` was pushed to `origin/main`; Vercel reported
success at https://vercel.com/king-09/priyanshu-portfolio/8LPWGjjAUTnoR2grcoxqwbJvbMBs.
Live Chrome checks passed the contact deep link, personal heading, approved email
link, social links, 320/390/768/1440px widths, touch targets, keyboard focus and
Back to top, without uncaught errors. Resume remains omitted pending owner input.

## About-first release — 29 October 2026

Implementation commit `31b9320` was pushed to `origin/main`; GitHub's Vercel status
reported success at https://vercel.com/king-09/priyanshu-portfolio/7kEDPCyXRbzAdMtunDanteF6ijxi.
The opening is now `01 / ABOUT` and uses the owner's exact biography.
Local Chrome layout/content/navigation checks and production checks passed.
Post-deployment public verification was limited by connectivity: two Chrome
navigations timed out at 30 seconds and an independent curl request timed out
at 20 seconds. Successful hosting status is verified; live visual verification
for this release remains unconfirmed.

## Public connectivity diagnosis — 29 October 2026

The owner reported the portfolio would not open. The latest commit `ba00880`
has a successful Vercel deployment status:
https://vercel.com/king-09/priyanshu-portfolio/AQmUqb5CtYd9wMA23B5RthzUeZcK

Default DNS resolves the public hostname to `216.198.79.3` and `64.29.17.3`
(also confirmed via Google's public DNS JSON endpoint). Connections to those
addresses timed out from the execution environment, while vercel.com responded.
Using curl's per-request `--resolve` for the same hostname with `76.76.21.21`
returned HTTP 200, the latest About-first HTML, and the application JavaScript.
Chrome with a per-process host resolver override to the working edge passed
About-first order, exact biography/emphasis, 320/390/768/1024/1440px layouts,
reduced motion, project CTA and legacy home-anchor checks without uncaught errors.

This isolates the observed failure to the DNS-selected connection path, not a
failed build or demonstrated frontend crash. It does not prove an ISP-wide
outage or repair the normal public route. No system DNS/hosts or Vercel domain
settings were changed. The public GitHub deployments API returned no alternate
deployment records. Authenticated Vercel tools are not connected; the Vercel
plugin was found but is not installed. A normal-route recheck and the owner's
browser error remain needed to confirm end-user recovery.

The normal public route subsequently recovered during the same investigation:
it returned HTTP 200 from Vercel with the latest 8,501-byte homepage. A fresh
Chrome run through ordinary DNS passed the About-first content, responsive
widths, WebGL/reduced-motion rendering, CTA and home-anchor checks without
uncaught errors. No source or hosting configuration change was required.
