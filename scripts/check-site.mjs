#!/usr/bin/env node
/**
 * Crawls a running instance of the site and verifies:
 *  - every required route returns 200 with a unique <title>, description and canonical URL
 *  - every internal link resolves (200), including #fragment targets
 *  - sitemap.xml and robots.txt are served
 *
 * Usage: BASE_URL=http://localhost:3000 node scripts/check-site.mjs
 */

const BASE = (process.env.BASE_URL ?? "http://localhost:3000").replace(/\/$/, "");
const BASE_PATH = new URL(BASE).pathname.replace(/\/$/, "");

const requiredRoutes = ["/", "/privacy-policy"];

const failures = [];
const pages = new Map(); // path -> html
const fail = (msg) => failures.push(msg);

async function load(path) {
  if (pages.has(path)) return pages.get(path);
  const res = await fetch(BASE + path, { redirect: "manual" });
  const html = res.status === 200 ? await res.text() : null;
  if (res.status !== 200) fail(`${path} → HTTP ${res.status}`);
  pages.set(path, html);
  return html;
}

const attr = (html, re) => html.match(re)?.[1];

const queue = [...requiredRoutes];
const seenLinks = new Map(); // "path#hash" -> source page

while (queue.length) {
  const path = queue.shift();
  const html = await load(path);
  if (!html) continue;

  for (const [, href] of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
    if (/^(https?:|mailto:|tel:)/.test(href)) continue;
    const url = new URL(href.replace(/&amp;/g, "&"), BASE + path);
    if (url.origin !== new URL(BASE).origin) continue;
    // With a base path (BASE_URL=http://host/verity), links include it; strip it to get the route.
    const route = url.pathname.startsWith(BASE_PATH) ? url.pathname.slice(BASE_PATH.length) || "/" : url.pathname;
    const key = route + (url.hash || "");
    if (!seenLinks.has(key)) seenLinks.set(key, path);
    if (!pages.has(route) && !queue.includes(route)) queue.push(route);
  }
}

// Per-page SEO and footer checks
const titles = new Map();
for (const route of requiredRoutes) {
  const html = pages.get(route);
  if (!html) continue;
  const title = attr(html, /<title>([^<]+)<\/title>/);
  const description = attr(html, /<meta name="description" content="([^"]+)"/);
  const canonical = attr(html, /<link rel="canonical" href="([^"]+)"/);
  const ogImage = attr(html, /<meta property="og:image" content="([^"]+)"/);
  if (!title) fail(`${route}: missing <title>`);
  else if (titles.has(title)) fail(`${route}: duplicate title with ${titles.get(title)}`);
  else titles.set(title, route);
  if (!description) fail(`${route}: missing meta description`);
  if (!canonical || !canonical.endsWith(route === "/" ? "" : route)) fail(`${route}: bad canonical ${canonical}`);
  if (!ogImage) fail(`${route}: missing og:image`);
  if ((html.match(/<h1[\s>]/g) ?? []).length !== 1) fail(`${route}: expected exactly one <h1>`);
}

// Link targets, including fragments
for (const [key, source] of seenLinks) {
  const [pathname, hash] = key.split("#");
  const html = await load(pathname);
  if (html && hash && !new RegExp(`id="${hash}"`).test(html)) fail(`${source} links to missing anchor ${key}`);
}

for (const path of ["/sitemap.xml", "/robots.txt", "/og.png", "/icon.svg"]) {
  const res = await fetch(BASE + path);
  if (res.status !== 200) fail(`${path} → HTTP ${res.status}`);
}

const missing = await fetch(BASE + "/this-page-does-not-exist");
if (missing.status !== 404) fail(`unknown route returned ${missing.status}, expected 404`);

console.log(`Checked ${pages.size} pages and ${seenLinks.size} internal links against ${BASE}`);
if (failures.length) {
  console.error(`\n${failures.length} problem(s):\n - ${failures.join("\n - ")}`);
  process.exit(1);
}
console.log("All checks passed.");
