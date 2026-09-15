import type { Project } from "../data";
import type { Locale } from "../i18n";
import { projectsVi } from "./projects.vi";

/*
 * Translated project prose.
 *
 * app/data.ts stays the single source of truth for every project: ids, slugs,
 * tags, image rules and the English words. A translation does not copy that
 * file. It supplies only the sentences that change, keyed by project id, and
 * this module lays them over the English record.
 *
 * Anything a language has not translated yet simply falls back to English, so
 * the site can be translated project by project without ever being broken.
 */

/** The fields of a project that carry words a reader sees. */
export type ProjectCopyFields = Pick<
  Project,
  "title" | "year" | "publicType" | "role" | "tension" | "approach" | "output" | "significance" | "evidence" | "alt"
>;

/** A translation of one project: any subset of the fields above. */
export type ProjectOverlay = Partial<ProjectCopyFields>;

/** Keyed by project id, e.g. { P02: { tension: "..." } }. */
export type ProjectOverlays = Record<string, ProjectOverlay>;

const OVERLAYS: Partial<Record<Locale, ProjectOverlays>> = { vi: projectsVi };

/** The project record as it should read in `locale`, English where untranslated. */
export function getProjectCopy(locale: Locale, project: Project): Project {
  const overlay = OVERLAYS[locale]?.[project.id];
  return overlay ? { ...project, ...overlay } : project;
}

/** True when this project has been translated into `locale`. */
export function hasTranslation(locale: Locale, projectId: string): boolean {
  return Boolean(OVERLAYS[locale]?.[projectId]);
}
