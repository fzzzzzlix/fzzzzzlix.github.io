import type { Locale } from "../../i18n";
import { crisisResponse as en, type CrisisResponseCopy } from "./crisis-response.en";
import { crisisResponse as vi } from "./crisis-response.vi";

/*
 * Case copy, one file per language:
 *   crisis-response.en.ts  English words
 *   crisis-response.vi.ts  Vietnamese words
 * This file only picks between them. Edit the words in the language files.
 */
const BY_LOCALE: Record<Locale, CrisisResponseCopy> = { en, vi };

export function getCrisisResponse(locale: Locale): CrisisResponseCopy {
  return BY_LOCALE[locale];
}

export type { CrisisResponseCopy };
