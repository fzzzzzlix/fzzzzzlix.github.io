import type { Locale } from "../../i18n";
import { tresemme as en, type TresemmeCopy } from "./tresemme.en";
import { tresemme as vi } from "./tresemme.vi";

/*
 * Case copy, one file per language:
 *   tresemme.en.ts  English words
 *   tresemme.vi.ts  Vietnamese words
 * This file only picks between them. Edit the words in the language files.
 */
const BY_LOCALE: Record<Locale, TresemmeCopy> = { en, vi };

export function getTresemme(locale: Locale): TresemmeCopy {
  return BY_LOCALE[locale];
}

export type { TresemmeCopy };
