import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (rel) => readFileSync(join(ROOT, rel), "utf8");

// ---- Parse the canonical projects array (JSON-compatible slice) ------------
const dataSrc = read("app/data.ts");
const marker = "export const projects: Project[] =";
const start = dataSrc.indexOf("[", dataSrc.indexOf(marker) + marker.length);
const end = dataSrc.lastIndexOf("];", dataSrc.indexOf("export const projectBySlug"));
const projects = JSON.parse(dataSrc.slice(start, end + 1));
const ids = projects.map((p) => p.id);
const slugs = projects.map((p) => p.slug);
const byId = Object.fromEntries(projects.map((p) => [p.id, p]));

const scSrc = read("app/work/[slug]/supporting-case-data.ts");
const densityOf = (id) => {
  const m = scSrc.match(new RegExp(`${id}:\\s*\\{\\s*density:\\s*"(D\\d)"`));
  return m ? m[1] : null;
};

// ---- Project integrity ----------------------------------------------------
test("exactly 27 active projects", () => {
  assert.equal(projects.length, 27);
});

test("retired ids are absent", () => {
  // P08/P15 retired earlier; P09 (TH true Tea) deleted and P27/P28 merged into P10.
  for (const id of ["P08", "P15", "P09", "P27", "P28"]) {
    assert.ok(!ids.includes(id), `${id} should be absent`);
  }
});

test("research expansion P33 and P34 are present", () => {
  assert.ok(ids.includes("P33"));
  assert.ok(ids.includes("P34"));
});

test("all ids and slugs are unique", () => {
  assert.equal(new Set(ids).size, ids.length);
  assert.equal(new Set(slugs).size, slugs.length);
});

test("featured set is exactly the locked six", () => {
  const featured = projects.filter((p) => p.feature).map((p) => p.id).sort();
  assert.deepEqual(featured, ["P02", "P13", "P20", "P22", "P25", "P31"]);
});

// ---- Status corrections ---------------------------------------------------
test("P04 is an academic podcast with the corrected role", () => {
  assert.match(byId.P04.publicType, /Academic podcast/i);
  assert.match(byId.P04.role, /Researcher and scriptwriter/i);
  assert.doesNotMatch(byId.P04.role, /Producer|Audio Recorder|Editor/i);
});

test("P07 is a board-game campaign led as Production Director", () => {
  assert.match(byId.P07.publicType, /board-game/i);
  assert.match(byId.P07.role, /Production Director/i);
});

test("P16 is proposal-only", () => {
  assert.match(byId.P16.publicType, /research proposal/i);
});

test("P17 role reflects sole-authored editorial output", () => {
  assert.match(byId.P17.role, /sole author/i);
});

test("P33 and P34 are D1 research cases", () => {
  assert.equal(densityOf("P33"), "D1");
  assert.equal(densityOf("P34"), "D1");
});

// ---- Claim-safety regressions ---------------------------------------------
test("no unsupported 'viral' claim anywhere in project data", () => {
  assert.doesNotMatch(dataSrc, /\bviral\b/i);
});

test("no development preview marker in layout", () => {
  assert.doesNotMatch(read("app/layout.tsx"), /codex-preview/i);
});

test("no legacy 60% MBE efficiency-reduction claim", () => {
  assert.doesNotMatch(dataSrc, /60%.*reduction|reduc\w*.*60%/i);
});

test("P21 does not claim the 30 interviews were conducted", () => {
  const p21 = `${byId.P21.output} ${byId.P21.evidence} ${byId.P21.significance}`;
  assert.match(p21, /designed, not conducted|no fieldwork/i);
});

test("P17 does not positively claim VTV published the work, and states the boundary", () => {
  const blob = `${byId.P17.evidence} ${scSrc}`;
  // No positive publication claim...
  assert.doesNotMatch(blob, /published by VTV|VTV published|featured on VTV/i);
  // ...and the VTV boundary is explicitly disclaimed.
  assert.match(blob, /not\b[^.]*VTV publication|No official VTV publication|not proof of VTV publication/i);
});

// ---- Asset integrity ------------------------------------------------------
test("every mapped project image exists on disk", () => {
  const imgSrc = read("app/project-images.ts");
  const block = imgSrc.slice(imgSrc.indexOf("RAW_IMAGES"), imgSrc.indexOf("// Prefix"));
  const missing = [];
  for (const m of block.matchAll(/(P\d{2}):\s*\{\s*src:\s*"([^"]+)"/g)) {
    if (!existsSync(join(ROOT, "public", m[2]))) missing.push(`${m[1]} ${m[2]}`);
  }
  assert.deepEqual(missing, []);
});

// ---- Routing --------------------------------------------------------------
test("P15 compatibility route source exists", () => {
  assert.ok(existsSync(join(ROOT, "app/work/photoshoots-series/page.tsx")));
});
