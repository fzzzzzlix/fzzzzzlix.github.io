import type { Locale } from "../i18n";
import { home as en, type HomeCopy } from "./home.en";
import { home as vi } from "./home.vi";

/*
 * Home page copy, one file per language:
 *   app/content/home.en.ts  English words
 *   app/content/home.vi.ts  Vietnamese words
 * This file only picks between them. Edit the words in the language files.
 */
const BY_LOCALE: Record<Locale, HomeCopy> = { en, vi };

export function getHome(locale: Locale): HomeCopy {
  return BY_LOCALE[locale];
}

export type { HomeCopy };
