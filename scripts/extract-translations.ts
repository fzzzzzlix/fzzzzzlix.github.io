/*
 * Development helper: dumps every English/Vietnamese string pair as JSON, for
 * building a side-by-side proofreading page. Not part of the build.
 *   npx tsx scripts/extract-translations.ts > pairs.json
 */
import { home as homeEn } from "../app/content/home.en";
import { home as homeVi } from "../app/content/home.vi";
import { about as aboutEn } from "../app/content/about.en";
import { about as aboutVi } from "../app/content/about.vi";
import { contact as contactEn } from "../app/content/contact.en";
import { contact as contactVi } from "../app/content/contact.vi";
import { experience as expEn } from "../app/content/experience.en";
import { experience as expVi } from "../app/content/experience.vi";
import { interests as intEn } from "../app/content/interests.en";
import { interests as intVi } from "../app/content/interests.vi";
import { getUi } from "../app/content/ui";
import { projects } from "../app/data";
import { projectsVi } from "../app/content/projects.vi";

import { muaHa as muaHaEn } from "../app/content/cases/mua-ha.en";
import { muaHa as muaHaVi } from "../app/content/cases/mua-ha.vi";
import { maggi as maggiEn } from "../app/content/cases/maggi.en";
import { maggi as maggiVi } from "../app/content/cases/maggi.vi";
import { tresemme as tresEn } from "../app/content/cases/tresemme.en";
import { tresemme as tresVi } from "../app/content/cases/tresemme.vi";
import { littleMe as littleEn } from "../app/content/cases/little-me.en";
import { littleMe as littleVi } from "../app/content/cases/little-me.vi";
import { empacts as empEn } from "../app/content/cases/empacts.en";
import { empacts as empVi } from "../app/content/cases/empacts.vi";
import { beLocal as beEn } from "../app/content/cases/be-local.en";
import { beLocal as beVi } from "../app/content/cases/be-local.vi";
import { crisisResponse as crisisEn } from "../app/content/cases/crisis-response.en";
import { crisisResponse as crisisVi } from "../app/content/cases/crisis-response.vi";

type Pair = { key: string; en: string; vi: string; same: boolean };

// Structural values a reader should never be asked to proofread.
const isStructural = (s: string) =>
  /^(\/|https?:\/\/|mailto:|tel:|#)/.test(s) || /\.(jpg|jpeg|png|gif|svg|mp4|mpp|xlsm|ttf)$/i.test(s);

function walk(en: unknown, vi: unknown, path: string[], out: Pair[]) {
  if (typeof en === "string") {
    if (!en.trim() || isStructural(en)) return;
    const viText = typeof vi === "string" ? vi : "";
    out.push({ key: path.join(" › "), en, vi: viText, same: en === viText });
    return;
  }
  if (Array.isArray(en)) {
    en.forEach((item, i) => walk(item, Array.isArray(vi) ? vi[i] : undefined, [...path, String(i + 1)], out));
    return;
  }
  if (en && typeof en === "object") {
    for (const k of Object.keys(en as Record<string, unknown>)) {
      walk((en as Record<string, unknown>)[k], (vi as Record<string, unknown> | undefined)?.[k], [...path, k], out);
    }
  }
}

function section(title: string, file: string, en: unknown, vi: unknown) {
  const pairs: Pair[] = [];
  walk(en, vi, [], pairs);
  return { title, file, pairs };
}

const PROSE_FIELDS = ["year", "publicType", "role", "tension", "approach", "output", "significance", "evidence", "alt"] as const;
const projectSections = Object.keys(projectsVi).map((id) => {
  const base = projects.find((p) => p.id === id)!;
  const overlay = projectsVi[id] as Record<string, string>;
  const pairs: Pair[] = PROSE_FIELDS.filter((f) => overlay[f] !== undefined).map((f) => ({
    key: f,
    en: (base as unknown as Record<string, string>)[f],
    vi: overlay[f],
    same: (base as unknown as Record<string, string>)[f] === overlay[f],
  }));
  return { title: `${id} ${base.title}`, file: "app/content/projects.vi.ts", pairs };
});

const data = {
  groups: [
    {
      group: "Pages",
      note: "The five main pages. Everything a first-time visitor reads.",
      sections: [
        section("Home", "app/content/home.vi.ts", homeEn, homeVi),
        section("About", "app/content/about.vi.ts", aboutEn, aboutVi),
        section("Contact", "app/content/contact.vi.ts", contactEn, contactVi),
        section("Experience", "app/content/experience.vi.ts", expEn, expVi),
        section("Focus Areas", "app/content/interests.vi.ts", intEn, intVi),
      ],
    },
    {
      group: "Interface",
      note: "Navigation, buttons, section labels and screen-reader text, shared by every page.",
      sections: [section("Interface chrome", "app/content/ui.ts", getUi("en"), getUi("vi"))],
    },
    {
      group: "Project summaries",
      note: "The lines behind each card and case-study header, from the Work grid.",
      sections: projectSections,
    },
    {
      group: "Case studies",
      note: "The long-form writing inside the seven feature cases.",
      sections: [
        section("P02 Mùa Hạ Của Chúng Tôi", "app/content/cases/mua-ha.vi.ts", muaHaEn, muaHaVi),
        section("P13 MAGGI", "app/content/cases/maggi.vi.ts", maggiEn, maggiVi),
        section("P20 TRESemmé", "app/content/cases/tresemme.vi.ts", tresEn, tresVi),
        section("P22 Little Me", "app/content/cases/little-me.vi.ts", littleEn, littleVi),
        section("P25 EMPACTS", "app/content/cases/empacts.vi.ts", empEn, empVi),
        section("P31 Be Local", "app/content/cases/be-local.vi.ts", beEn, beVi),
        section("P32 HUST Crisis Response", "app/content/cases/crisis-response.vi.ts", crisisEn, crisisVi),
      ],
    },
  ],
};

console.log(JSON.stringify(data, null, 2));
