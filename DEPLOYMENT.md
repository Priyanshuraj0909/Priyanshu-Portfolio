# Production deployments

- Recommended sharing URL: [https://priyanshu-raj-ai-portfolio.priyanshuraj032004.chatgpt.site/](https://priyanshu-raj-ai-portfolio.priyanshuraj032004.chatgpt.site/)
- Vercel mirror (intermittent connectivity): [https://priyanshu-portfolio-pi-ruby.vercel.app/](https://priyanshu-portfolio-pi-ruby.vercel.app/)
- About: [https://priyanshu-portfolio-pi-ruby.vercel.app/#about](https://priyanshu-portfolio-pi-ruby.vercel.app/#about)
- Public backup: [https://priyanshu-raj-ai-portfolio.priyanshuraj032004.chatgpt.site/](https://priyanshu-raj-ai-portfolio.priyanshuraj032004.chatgpt.site/)
- Repository: [https://github.com/Priyanshuraj0909/Priyanshu-Portfolio](https://github.com/Priyanshuraj0909/Priyanshu-Portfolio)
- Owner-supplied account dashboard: https://vercel.com/king-09 (management only;
  it is not a public portfolio URL and currently returns 404 without a matching
  public profile route).

The owner supplied the live URL on 2026-10-27. HTTPS requests confirm the deployment is public. Commit f3b43a8 deployed successfully through the existing GitHub/Vercel connection; homepage and five dossier canonical/social metadata, indexing, robots.txt and the six-page XML sitemap passed live checks on 2026-10-27. The local checkout was fast-forwarded to the four published redesign commits before updating deployment references.

Historical checks below describe availability at the time, not a lasting repair.
See the 31 October recurrence entry for the current recommendation.

On 2026-10-29 the Vercel-managed hostname repeatedly timed out on its current
DNS-selected edge addresses even though the application and alternate Vercel
edge were healthy. A public backup deployment was published at the reliable URL
above. It returned HTTP 200 through Cloudflare, served the current Contact-link
build, used its own canonical origin, and passed Chrome checks at 320, 390, 768
and 1440 pixels. The Vercel project remains deployed as a mirror.

Vercel subsequently reassigned the hostname to edge addresses ending in `.131`.
The primary URL returned HTTP 200, its hashed JavaScript returned HTTP 200 with
immutable caching, and the complete About/Contact browser checks passed through
ordinary DNS without uncaught errors. Vercel is restored as the primary link;
the independent public deployment remains available during future route issues.

On 2026-10-30 the account dashboard URL returned HTTP 404 while the public
portfolio returned HTTP 200 with approximately 0.10-second server response in
the same check. The first-visit blocking intro was removed and the optional
WebGL bundle was moved behind a short post-paint delay, so readable content no
longer waits for the 3D renderer. The public portfolio URL remains unchanged.

## Build configuration

Node 24 is pinned in .nvmrc and package.json. Vercel uses `npm ci`, `npm run build`, and the `dist` output. vercel.json preserves static dossier routes, asset caching and security headers. No credentials or runtime APIs are needed by the frontend.

`src/content/site.ts` records the confirmed public origin and source repository. Production builds default to this origin, generating canonical URLs, absolute social images, robots.txt and a sitemap for the homepage and five dossiers. The 404 artifact remains noindex. `PORTFOLIO_SITE_URL` overrides the origin when moving domains; use an HTTPS origin without a path or fragment. An explicitly empty value (`PORTFOLIO_SITE_URL=`) retains noindex/Disallow for private previews. See .env.example. Local development retains the noindex template.

## Updating the published site

Push reviewed changes to the existing GitHub repository. If the project is connected to GitHub, Vercel can build that commit automatically; a successful push alone does not prove a deployment. An old Vercel environment override can supersede the source default: remove it or set it to `https://www.priyanshuraj.tech` for production. Preview environments can set an empty value to remain noindex.

After deployment, check homepage and five direct dossier URLs, About anchor, refresh/Back, PDFs/previews, favicon/social image, console errors and mobile layout. Confirm canonical and Open Graph URLs use `https://www.priyanshuraj.tech`, robots.txt allows indexing and sitemap.xml is valid XML. Hosting settings or manual deploys require authenticated Vercel access. See QA_REPORT.md for the checks actually completed and the remaining live verification.

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

## First-visit opening — 31 October 2026

The owner requested a new 3D first-visit intro, superseding the 30 October
removal. The short opening now reuses the persistent learning sphere and
transitions into About without changing section structure. A skip button,
Escape, reduced-motion and saved-pause bypass, direct-link bypass and a hard
readiness deadline preserve access. It runs once per tab session; use a fresh
tab to see it again. Local validation is recorded in QA_REPORT.md.

Implementation commit `4a37c48` was pushed to GitHub and passed its verify
workflow. Vercel reported successful deployment. The primary hostname served the matching production assets;
live Chrome at 1440px and 390px passed intro/reveal, persistent Canvas, unlocked
page, repeat-visit bypass and no page errors. Deployment details:
https://vercel.com/king-09/priyanshu-portfolio/5rQZWiHs3tJfPiW1AdiMoicnkSiq
The backup Site was not updated as part of this Vercel-focused request.

## Recurring connection timeout — 31 October 2026

The owner supplied Chrome's `ERR_CONNECTION_TIMED_OUT` screenshot and confirmed
failure on Wi-Fi and mobile data. At 23:20–23:22 IST, ordinary HTTPS access
also failed here before TCP/TLS established. The default resolver returned
`216.198.79.195` and `64.29.17.195`; both timed out. Google Public DNS returned
edges ending in `.131`, then `.67`; request-only comparisons to those addresses
returned HTTP 200 for the same hostname with certificate validation enabled.
Different DNS answers alone do not prove stale DNS: geographic edge selection
can vary. The evidence establishes a failing selected connection path, not
whether the responsible component is an ISP, resolver, firewall or Vercel.

The independent Cloudflare-hosted Site returned HTTP 200 on both probes. The
owner explicitly confirmed that its URL opens on their device. README now
recommends that independent URL for sharing. This avoids dependence on the
observed Vercel route; it does not repair the original hostname or guarantee
uninterrupted service. A frontend redirect cannot run before a connection
establishes. No system DNS/hosts edits, hardcoded edge IPs, paid domain purchases
or Vercel account-setting changes were made.

`npm run check:connectivity` is a bounded, read-only diagnostic that compares
default/public DNS, ordinary HTTPS, the independent host and returned IPv4
edges. It exits nonzero when normal Vercel access fails, even if the independent
host works. Failed requests preserve their DNS/TCP/TLS timing values. It needs
Node and curl plus network access; sandbox DNS failures are not site evidence.

The source default in `src/content/site.ts` remains Vercel for that deployment.
The separate Sites checkout uses its own public origin for canonical/social
URLs and sitemap. Future portfolio changes must also be published to the
existing Site `appgprj_6ae37d32f5ac8191b8fe565e7256d547`; a GitHub/Vercel push
alone does not update it. Vercel account tools are unavailable in this session,
so repairing or escalating that hostname's routing remains unresolved.
Vercel's relevant guide: https://vercel.com/kb/guide/troubleshooting-connectivity-issues

Sites version 5 successfully published the latest portfolio, including the
first-visit intro, from source commit
`719f69f497333688b6bc1ff1f0d214160683fee1`. Deployment
`appgdep_6ae62b43a3a48191b86f89387ac018f7` returned `succeeded` and the existing
public URL. Its audience remains public; no new Site was created.
Live Chrome passed desktop/mobile intro and repeat-visit checks without page
errors. Homepage, all five direct project routes, robots.txt and sitemap.xml
returned HTTP 200; canonical/sitemap origins match this independent host.

## Custom-domain NXDOMAIN investigation — 31 October 2026

The owner supplied a mobile screenshot of `priyanshuraj.tech` returning
`DNS_PROBE_FINISHED_NXDOMAIN`. This is a DNS lookup failure, distinct from the
earlier Vercel TCP timeouts. No tracked source referenced this custom domain.
At approximately 23:35–23:36 IST, Google Public DNS returned a root A record
of `216.198.79.1`, four `tech-domains.*.orderbox-dns.com` nameservers, and a
`www` CNAME of `cname.vercel-dns.com` resolving to Vercel edges. These are
observed records, not proposed replacement IPs.

Normal HTTPS to the root returned 308 to `https://www.priyanshuraj.tech/`;
normal HTTPS to www returned 200 with the portfolio's current entry asset.
Certificate verification passed. The updated connectivity check followed the
complete normal redirect chain to HTTP 200 in approximately 0.23 seconds.
An initial direct DNS command timed out; that was not an NXDOMAIN response.
The screenshot's NXDOMAIN could not be reproduced here. A cached negative
answer, recent DNS changes or inconsistent resolvers remain possibilities;
the responsible component and affected-device recovery are unconfirmed.

The custom domain served canonical metadata for the old Vercel hostname.
Updated the default origin and environment example to
`https://www.priyanshuraj.tech`, matching the existing hosting redirect.
This aligns canonical/social metadata and the sitemap; it cannot repair a
resolver returning NXDOMAIN or force Google to refresh its search results.
The independent Site retains its own origin and does not need a new app build
for this Vercel-specific metadata change.

Run `npm run check:connectivity -- priyanshuraj.tech` or pass the www hostname
to compare DNS and HTTPS. Checks now follow bounded HTTPS-only redirects and
report the final URL. No persistent DNS, hosts, registrar, nameserver or Vercel
domain changes were made. Vercel/registrar account tools remain unconnected;
domain-setting changes require that access. The owner's registrar/recent-DNS
change question is pending. Do not claim the affected phone is fixed yet.

References: https://developers.google.com/speed/public-dns/docs/troubleshooting
and https://vercel.com/docs/domains/troubleshooting.
