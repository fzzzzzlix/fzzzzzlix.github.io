#!/usr/bin/env node
/*
 * Small copies of the project cover images for tiles and thumbnail rows.
 *
 * Reads every `src` in app/project-images.ts and writes an 800px-wide copy to
 * public/images/thumbs/ under the same file name (animated GIFs are skipped:
 * their tiles use the full file). project-images.ts points `thumb` there.
 * Re-run after adding or replacing a project image:  node scripts/make-thumbs.mjs
 */
import sharp from "sharp";
import { mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { basename, extname, join } from "node:path";

const root = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const out = join(root, "public/images/thumbs");
mkdirSync(out, { recursive: true });

const source = readFileSync(join(root, "app/project-images.ts"), "utf8");
const srcs = [...source.matchAll(/src: "([^"]+)"/g)].map((m) => m[1]);
for (const src of srcs) {
  const ext = extname(src).toLowerCase();
  if (ext === ".gif") continue;
  const file = join(root, "public", src);
  if (!existsSync(file)) { console.warn(`missing ${src}`); continue; }
  let img = sharp(readFileSync(file), { failOn: "none" }).rotate().resize({ width: 800, withoutEnlargement: true });
  img = ext === ".png" ? img.png({ palette: true, quality: 85, compressionLevel: 9 }) : img.jpeg({ quality: 80, mozjpeg: true });
  writeFileSync(join(out, basename(src)), await img.toBuffer());
}
console.log(`thumbs: ${srcs.length} sources`);
