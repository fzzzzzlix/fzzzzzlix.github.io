import type { Locale } from "../../i18n";
import { maggi as en, type MaggiCopy } from "./maggi.en";
import { maggi as vi } from "./maggi.vi";

/*
 * Case copy, one file per language:
 *   maggi.en.ts  English words
 *   maggi.vi.ts  Vietnamese words
 * This file only picks between them. Edit the words in the language files.
 */
const BY_LOCALE: Record<Locale, MaggiCopy> = { en, vi };

export function getMaggi(locale: Locale): MaggiCopy {
  return BY_LOCALE[locale];
}

export type { MaggiCopy };
