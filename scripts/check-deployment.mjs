import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { projects } from "../src/content/projects.ts";
import { certificates } from "../src/content/certificates.ts";

const root = new URL("../dist/", import.meta.url);
const config = JSON.parse(await readFile(new URL("../vercel.json", import.meta.url), "utf8"));
assert.equal(config.framework, "vite");
assert.equal(config.outputDirectory, "dist");
const origin = process.env.PORTFOLIO_SITE_URL
  ? new URL(process.env.PORTFOLIO_SITE_URL).origin : null;

for (const path of ["index.html", ...projects.map(p => `systems/${p.slug}/index.html`), "404.html"]) {
  const html = await readFile(new URL(path, root), "utf8");
  assert.match(html, /<main\b/, `${path}: missing static content`);
  assert.match(html, /<title>[^<]+<\/title>/, `${path}: missing title`);
  assert.match(html, origin ? /content="index, follow"/ : /content="noindex, nofollow"/);
  for (const match of html.matchAll(/(?:src|href)="(\/[^"?#]*)/g)) {
    if (/\.[a-z0-9]+$/i.test(match[1])) {
      await access(new URL(match[1].slice(1), root));
    }
  }
}

for (const project of projects) {
  assert.ok(config.rewrites.some(route =>
    route.source === `/systems/${project.slug}` &&
    route.destination === `/systems/${project.slug}/index.html`
  ), `${project.slug}: missing static dossier rewrite`);
  const html = await readFile(new URL(`systems/${project.slug}/index.html`, root), "utf8");
  assert.ok(html.includes(project.repository), `${project.slug}: missing source link`);
}
assert.ok(config.rewrites.some(route => route.source === "/systems/:path*" && route.destination === "/index.html"));
for (const certificate of certificates) {
  for (const path of [certificate.pdf, certificate.preview]) {
    if (path?.startsWith("/")) await access(new URL(path.slice(1), root));
  }
}
const robots = await readFile(new URL("robots.txt", root), "utf8");
assert.ok(robots.includes(origin ? "Allow: /" : "Disallow: /"));
if (origin) {
  assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
  const sitemap = await readFile(new URL("sitemap.xml", root), "utf8");
  for (const path of ["/", ...projects.map(p => `/systems/${p.slug}`)]) {
    assert.ok(sitemap.includes(`<loc>${origin}${path}</loc>`));
  }
}
console.log(`PASS: static pages, deployment rewrites, linked assets, ${certificates.length} certificates and indexing configuration.`);
