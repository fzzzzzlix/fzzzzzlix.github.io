import type { Locale } from "../../i18n";
import { empacts as en, type EmpactsCopy } from "./empacts.en";
import { empacts as vi } from "./empacts.vi";

/*
 * Case copy, one file per language:
 *   empacts.en.ts  English words
 *   empacts.vi.ts  Vietnamese words
 * This file only picks between them. Edit the words in the language files.
 */
const BY_LOCALE: Record<Locale, EmpactsCopy> = { en, vi };

export function getEmpacts(locale: Locale): EmpactsCopy {
  return BY_LOCALE[locale];
}

export type { EmpactsCopy };
