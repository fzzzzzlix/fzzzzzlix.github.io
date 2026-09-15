import type { Locale } from "../../i18n";
import { beLocal as en, type BeLocalCopy } from "./be-local.en";
import { beLocal as vi } from "./be-local.vi";

/*
 * Case copy, one file per language:
 *   be-local.en.ts  English words
 *   be-local.vi.ts  Vietnamese words
 * This file only picks between them. Edit the words in the language files.
 */
const BY_LOCALE: Record<Locale, BeLocalCopy> = { en, vi };

export function getBeLocal(locale: Locale): BeLocalCopy {
  return BY_LOCALE[locale];
}

export type { BeLocalCopy };
