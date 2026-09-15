import type { Locale } from "../../i18n";
import { littleMe as en, type LittleMeCopy } from "./little-me.en";
import { littleMe as vi } from "./little-me.vi";

/*
 * Case copy, one file per language:
 *   little-me.en.ts  English words
 *   little-me.vi.ts  Vietnamese words
 * This file only picks between them. Edit the words in the language files.
 */
const BY_LOCALE: Record<Locale, LittleMeCopy> = { en, vi };

export function getLittleMe(locale: Locale): LittleMeCopy {
  return BY_LOCALE[locale];
}

export type { LittleMeCopy };
