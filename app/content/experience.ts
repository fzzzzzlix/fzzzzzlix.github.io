import type { Locale } from "../i18n";
import { experience as en, type ExperienceCopy } from "./experience.en";
import { experience as vi } from "./experience.vi";

/*
 * Experience page copy, one file per language:
 *   app/content/experience.en.ts  English words
 *   app/content/experience.vi.ts  Vietnamese words
 * This file only picks between them. Edit the words in the language files.
 */
const BY_LOCALE: Record<Locale, ExperienceCopy> = { en, vi };

export function getExperience(locale: Locale): ExperienceCopy {
  return BY_LOCALE[locale];
}

export type { ExperienceCopy };
