import type { Locale } from "../i18n";
import { contact as en, type ContactCopy } from "./contact.en";
import { contact as vi } from "./contact.vi";

/*
 * Contact page copy, one file per language:
 *   app/content/contact.en.ts  English words
 *   app/content/contact.vi.ts  Vietnamese words
 * This file only picks between them. Edit the words in the language files.
 */
const BY_LOCALE: Record<Locale, ContactCopy> = { en, vi };

export function getContact(locale: Locale): ContactCopy {
  return BY_LOCALE[locale];
}

export type { ContactCopy };
