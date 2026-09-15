import type { Locale } from "../i18n";
import { interests as en, type InterestsCopy } from "./interests.en";
import { interests as vi } from "./interests.vi";

/*
 * Focus Areas page copy, one file per language:
 *   app/content/interests.en.ts  English words
 *   app/content/interests.vi.ts  Vietnamese words
 * This file only picks between them. Edit the words in the language files.
 */
const BY_LOCALE: Record<Locale, InterestsCopy> = { en, vi };

export function getInterests(locale: Locale): InterestsCopy {
  return BY_LOCALE[locale];
}

export type { InterestsCopy };
