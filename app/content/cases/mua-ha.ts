import type { Locale } from "../../i18n";
import { muaHa as en, type MuaHaCopy } from "./mua-ha.en";
import { muaHa as vi } from "./mua-ha.vi";

/*
 * Case copy, one file per language:
 *   mua-ha.en.ts  English words
 *   mua-ha.vi.ts  Vietnamese words
 * This file only picks between them. Edit the words in the language files.
 */
const BY_LOCALE: Record<Locale, MuaHaCopy> = { en, vi };

export function getMuaHa(locale: Locale): MuaHaCopy {
  return BY_LOCALE[locale];
}

export type { MuaHaCopy };
