#!/usr/bin/env node
/*
 * Cross-file portfolio validation.
 *
 * Compares the canonical runtime data (app/data.ts) against the derived layers
 * (project-images, supporting-case density) and the documentation, and fails
 * (exit 1) on any drift. Runs on source only, so it can gate CI before the
 * build step. No TypeScript loader required: app/data.ts's `projects` array is
 * JSON-compatible and is sliced out and JSON.parsed.
 */
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (rel) => readFileSync(join(ROOT, rel), "utf8");

const EXPECTED = {
  activeCount: 32,
  absentIds: ["P08", "P15"],
  requiredIds: ["P01", "P30", "P31", "P32", "P33", "P34"],
  featured: ["P02", "P13", "P20", "P22", "P25", "P31"],
  d1Ids: ["P01", "P05", "P28", "P30", "P33", "P34"],
};

const errors = [];
const fail = (msg) => errors.push(msg);

// ---- Parse app/data.ts projects array (JSON-compatible slice) --------------
const dataSrc = read("app/data.ts");
const marker = "export const projects: Project[] =";
const start = dataSrc.indexOf("[", dataSrc.indexOf(marker) + marker.length);
const end = dataSrc.lastIndexOf("];", dataSrc.indexOf("export const projectBySlug"));
let projects = [];
try {
  projects = JSON.parse(dataSrc.slice(start, end + 1));
} catch (e) {
  fail(`Could not parse projects array from app/data.ts: ${e.message}`);
}

if (projects.length) {
  const ids = projects.map((p) => p.id);
  const slugs = projects.map((p) => p.slug);

  if (projects.length !== EXPECTED.activeCount)
    fail(`Active project count is ${projects.length}, expected ${EXPECTED.activeCount}.`);

  for (const id of EXPECTED.absentIds)
    if (ids.includes(id)) fail(`Retired id ${id} must not be active in data.ts.`);

  for (const id of EXPECTED.requiredIds)
    if (!ids.includes(id)) fail(`Required id ${id} is missing from data.ts.`);

  const dupIds = ids.filter((v, i) => ids.indexOf(v) !== i);
  if (dupIds.length) fail(`Duplicate project ids: ${[...new Set(dupIds)].join(", ")}.`);

  const dupSlugs = slugs.filter((v, i) => slugs.indexOf(v) !== i);
  if (dupSlugs.length) fail(`Duplicate slugs: ${[...new Set(dupSlugs)].join(", ")}.`);

  const featured = projects.filter((p) => p.feature).map((p) => p.id).sort();
  const expectedFeatured = [...EXPECTED.featured].sort();
  if (featured.join(",") !== expectedFeatured.join(","))
    fail(`Featured set is [${featured}], expected [${expectedFeatured}].`);

  // Claim-safety regressions.
  if (/\bviral\b/i.test(dataSrc)) fail(`Unsupported "viral" claim present in data.ts.`);
  if (/60%.*reduction|reduc.*60%/i.test(dataSrc))
    fail(`Unsupported "60% reduction" MBE metric present in data.ts.`);
}

// ---- codex-preview dev marker must be gone globally -----------------------
if (/codex-preview/i.test(read("app/layout.tsx")))
  fail(`codex-preview development marker still present in app/layout.tsx.`);

// ---- Supporting-case density for research cases ---------------------------
const scSrc = read("app/work/[slug]/supporting-case-data.ts");
for (const id of EXPECTED.d1Ids) {
  const m = scSrc.match(new RegExp(`${id}:\\s*\\{\\s*density:\\s*"(D\\d)"`));
  if (!m) fail(`No density found for ${id} in supporting-case-data.ts.`);
  else if (m[1] !== "D1") fail(`${id} density is ${m[1]}, expected D1.`);
}

// ---- Mapped image assets must exist on disk -------------------------------
const imgSrc = read("app/project-images.ts");
const rawBlock = imgSrc.slice(imgSrc.indexOf("RAW_IMAGES"), imgSrc.indexOf("// Prefix"));
for (const m of rawBlock.matchAll(/(P\d{2}):\s*\{\s*src:\s*"([^"]+)"/g)) {
  const [, id, src] = m;
  if (!existsSync(join(ROOT, "public", src)))
    fail(`Mapped asset for ${id} is missing: public${src}`);
}

// ---- Documentation reflects the canonical count and new cases -------------
for (const doc of ["content-master/PROJECT_INDEX.md", "content-master/ASSET_INDEX.md"]) {
  const text = read(doc);
  if (!text.includes("32")) fail(`${doc} does not reference the 32 active-project count.`);
  for (const id of ["P33", "P34"])
    if (!text.includes(id)) fail(`${doc} does not document ${id}.`);
}

// ---------------------------------------------------------------------------
if (errors.length) {
  console.error(`✗ Portfolio validation failed (${errors.length}):`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(`✓ Portfolio validation passed: ${projects.length} active projects, featured [${EXPECTED.featured.join(", ")}], docs and assets consistent.`);
