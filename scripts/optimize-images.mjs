#!/usr/bin/env node
/*
 * One-shot image optimiser for the served public assets.
 *
 * Walks public/images, and for every raster over a size threshold, resizes to
 * a max on-screen width and re-compresses in place (same path, same format, so
 * no code references change). Evidence charts/storyboards keep enough
 * resolution to stay legible; PNGs are palette-quantised, JPEGs use mozjpeg.
 * Animated GIFs are skipped (handled separately via a reduced-motion poster).
 *
 * Usage: node scripts/optimize-images.mjs [--min=500] [--width=1800]
 */
import sharp from "sharp";
import { readdirSync, statSync, writeFileSync, readFileSync } from "node:fs";
import { join, extname } from "node:path";

const args = Object.fromEntries(process.argv.slice(2).map((a) => a.replace(/^--/, "").split("=")));
const MIN_KB = Number(args.min ?? 500);
const MAX_W = Number(args.width ?? 1800);
const ROOT = new URL("../public/images", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) yield* walk(p);
    else yield p;
  }
}

let saved = 0;
for (const file of walk(ROOT)) {
  const ext = extname(file).toLowerCase();
  if (![".png", ".jpg", ".jpeg"].includes(ext)) continue;
  const before = statSync(file).size;
  if (before < MIN_KB * 1024) continue;

  // Read into a buffer first so the source file handle is released before we
  // overwrite it (Windows locks a file that sharp is still reading from a path).
  const img = sharp(readFileSync(file), { failOn: "none" });
  const meta = await img.metadata();
  let pipeline = img.rotate();
  if (meta.width && meta.width > MAX_W) pipeline = pipeline.resize({ width: MAX_W, withoutEnlargement: true });
  pipeline = ext === ".png"
    ? pipeline.png({ quality: 82, compressionLevel: 9, effort: 8, palette: true })
    : pipeline.jpeg({ quality: 82, mozjpeg: true });

  const buf = await pipeline.toBuffer();
  if (buf.length < before) {
    writeFileSync(file, buf);
    const kb = (before - buf.length) / 1024;
    saved += kb;
    console.log(`${file.replace(ROOT, "images")}  ${(before / 1024) | 0}KB -> ${(buf.length / 1024) | 0}KB`);
  }
}
console.log(`\nDone. Saved ~${(saved / 1024).toFixed(2)} MB.`);
