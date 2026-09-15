import type { Locale } from "../i18n";
import { about as en, type AboutCopy } from "./about.en";
import { about as vi } from "./about.vi";

/*
 * About page copy, one file per language:
 *   app/content/about.en.ts  English words
 *   app/content/about.vi.ts  Vietnamese words
 * This file only picks between them. Edit the words in the language files.
 */
const BY_LOCALE: Record<Locale, AboutCopy> = { en, vi };

export function getAbout(locale: Locale): AboutCopy {
  return BY_LOCALE[locale];
}

export type { AboutCopy };
