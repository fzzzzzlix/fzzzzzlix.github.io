#!/usr/bin/env node
/*
 * Writes dist/client/sitemap.xml after `vinext build`.
 *
 * Built from the exported HTML itself, so it always lists exactly what is
 * deployed: every page's canonical URL, skipping 404 and noindex pages (such
 * as moved-project redirects). robots.txt (public/) points crawlers here.
 */
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT = new URL("../dist/client", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");

function* htmlFiles(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) yield* htmlFiles(p);
    else if (name.endsWith(".html") && name !== "404.html") yield p;
  }
}

const today = new Date().toISOString().slice(0, 10);
const urls = new Set();
for (const file of htmlFiles(OUT)) {
  const html = readFileSync(file, "utf8");
  if (/<meta name="robots" content="[^"]*noindex/i.test(html)) continue;
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
  if (canonical) urls.add(canonical);
}

const sorted = [...urls].sort((a, b) => a.split("/").length - b.split("/").length || a.localeCompare(b));
const body = sorted
  .map((url) => `  <url><loc>${url}</loc><lastmod>${today}</lastmod></url>`)
  .join("\n");
writeFileSync(join(OUT, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`);
console.log(`sitemap.xml: ${sorted.length} URLs`);
