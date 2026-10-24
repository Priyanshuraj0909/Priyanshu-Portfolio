import { readFile, writeFile, mkdir } from "node:fs/promises";
import { projects } from "../src/content/projects.ts";
import { profile } from "../src/content/profile.ts";
import { certificates } from "../src/content/certificates.ts";
import { journey } from "../src/content/journey.ts";

// Static readable fallback + page-specific metadata; React progressively replaces
// the mount point for the interactive app. No server API or model execution.
const escape = value => String(value).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const root = new URL("../dist/", import.meta.url);
const template = await readFile(new URL("index.html", root), "utf8");
let origin = null;
if (process.env.PORTFOLIO_SITE_URL) {
  const url = new URL(process.env.PORTFOLIO_SITE_URL);
  if (url.protocol !== "https:") throw new Error("PORTFOLIO_SITE_URL must be the actual HTTPS deployment origin");
  origin = url.origin;
}
function page(title, description, body, path) {
  let html = template.replace(/<title>.*?<\/title>/, `<title>${escape(title)}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${escape(description)}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${escape(title)}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${escape(description)}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*"\s*\/?>/, `<meta name="twitter:title" content="${escape(title)}" />`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  if (origin) html = html.replace('content="noindex, nofollow"', 'content="index, follow"')
    .replaceAll('content="/social-card.png"', `content="${origin}/social-card.png"`)
    .replace('</head>', `<link rel="canonical" href="${origin}${path}" /><meta property="og:url" content="${origin}${path}" /></head>`);
  return html;
}
const title = `${profile.name} | AI/ML & Full-Stack Developer`;
const contactLinks = `<a href="${escape(profile.github)}">GitHub</a>${profile.linkedin ? ` <a href="${escape(profile.linkedin)}">LinkedIn</a>` : ""}`;
const intro = `<h1>${escape(profile.name)}</h1><p>${escape(profile.title)}</p><p>${escape(profile.biography)}</p>${contactLinks}`;
const fallback = `<main id="main" class="page-container dossier"><section id="core">${intro}</section><section id="vault"><h2>Project Vault</h2>${projects.map(p => `<article><h3><a href="/systems/${p.slug}">${escape(p.name)}</a></h3><p>${escape(p.description)}</p></article>`).join("")}</section><section id="logs"><h2>Journey</h2>${journey.map(j => `<h3>${escape(j.title)}</h3><p>${escape(j.organization)} · ${escape(j.startDate)}–${j.ongoing ? "Present" : escape(j.endDate ?? "")}${j.expectedEndDate ? ` · Expected completion ${escape(j.expectedEndDate)}` : ""}</p>`).join("")}</section><section id="live"><h2>Certificates</h2><ul>${certificates.map(c => `<li><a href="${escape(c.pdf)}">${escape(c.title)}</a> · ${escape(c.issuer)} · ${escape(c.issuedOn)}</li>`).join("")}</ul></section><section id="contact"><h2>Contact</h2>${contactLinks}</section></main>`;
await writeFile(new URL("index.html", root), page(title, profile.biography, fallback, "/"));
for (const p of projects) {
  const dir = new URL(`systems/${p.slug}/`, root); await mkdir(dir, { recursive: true });
  const body = `<main id="main" class="page-container dossier"><a href="/#vault">Return to vault</a><h1>${escape(p.name)}</h1><p>${escape(p.description)}</p><img src="${escape(p.screenshot)}" alt="${escape(p.name)} interface" width="1440" height="1000" style="max-width:100%;height:auto" /><p>${escape(p.screenshotCaption)}</p><h2>Overview</h2><p>${escape(p.overview)}</p><h2>Features</h2><ul>${p.features.map(f => `<li>${escape(f)}</li>`).join("")}</ul><a href="${escape(p.repository)}">Source code</a></main>`;
  await writeFile(new URL("index.html", dir), page(`${p.name} | ${profile.name}`, p.description, body, `/systems/${p.slug}`));
}
await writeFile(new URL("404.html", root), page(`Page not found | ${profile.name}`, "This page could not be found.", '<main id="main" class="page-container dossier"><h1>Signal not found.</h1><a href="/">Return to portfolio</a></main>', "/404"));
await writeFile(new URL("robots.txt", root), origin ? `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n` : "User-agent: *\nDisallow: /\n");
if (origin) await writeFile(new URL("sitemap.xml", root), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${["/", ...projects.map(p => `/systems/${p.slug}`)].map(path => `<url><loc>${origin}${path}</loc></url>`).join("")}</urlset>`);
console.log(`Prerendered homepage + ${projects.length} dossiers; ${origin ? "public SEO origin configured" : "noindex retained until actual deployment origin is configured"}.`);
