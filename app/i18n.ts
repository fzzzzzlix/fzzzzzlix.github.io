/*
 * Language support for the site.
 *
 * English is the default and lives at the root (/about, /work/...), so every
 * link that already exists in the world keeps working. Vietnamese lives under
 * /vi (/vi/about, /vi/work/...). There is no auto-redirect: visitors choose
 * with the EN | VI toggle in the header.
 *
 * Adding a third language later means adding it to LOCALES, adding a matching
 * content file for each page, and mirroring the route folder.
 */
export const LOCALES = ["en", "vi"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

/** The URL prefix for a locale. English has none. */
export const LOCALE_PREFIX: Record<Locale, string> = { en: "", vi: "/vi" };

/** Short label shown in the header toggle. */
export const LOCALE_LABEL: Record<Locale, string> = { en: "EN", vi: "VI" };

/** Full language name, written in that language (for aria labels and hreflang UI). */
export const LOCALE_NAME: Record<Locale, string> = { en: "English", vi: "Tiếng Việt" };

/**
 * Turn a locale-free site path into the path for `locale`.
 * localePath("vi", "/about") -> "/vi/about";  localePath("vi", "/") -> "/vi"
 */
export function localePath(locale: Locale, path: string): string {
  const prefix = LOCALE_PREFIX[locale];
  if (!prefix) return path;
  return path === "/" ? prefix : `${prefix}${path}`;
}

/**
 * Remove the locale prefix from a live pathname so it can be re-prefixed for
 * another language. "/vi/about" -> "/about";  "/vi" -> "/"
 */
export function stripLocale(pathname: string): string {
  for (const locale of LOCALES) {
    const prefix = LOCALE_PREFIX[locale];
    if (!prefix) continue;
    if (pathname === prefix) return "/";
    if (pathname.startsWith(`${prefix}/`)) return pathname.slice(prefix.length);
  }
  return pathname || "/";
}

/** Which locale a live pathname belongs to. */
export function localeFromPath(pathname: string): Locale {
  for (const locale of LOCALES) {
    const prefix = LOCALE_PREFIX[locale];
    if (prefix && (pathname === prefix || pathname.startsWith(`${prefix}/`))) return locale;
  }
  return DEFAULT_LOCALE;
}

/**
 * Canonical URL plus hreflang alternates for a page, given the locale-free
 * site path. Search engines use this to serve the right language and to avoid
 * treating the two versions as duplicate content.
 */
export function localeAlternates(locale: Locale, path: string) {
  const languages: Record<string, string> = { "x-default": localePath(DEFAULT_LOCALE, path) };
  for (const other of LOCALES) languages[other] = localePath(other, path);
  return { canonical: localePath(locale, path), languages };
}

/**
 * Pick the copy for a locale, falling back to English when a language has not
 * been translated yet. This is what lets the site ship one page at a time
 * instead of needing every word translated before anything goes live.
 */
export function pickCopy<T>(locale: Locale, byLocale: Partial<Record<Locale, T>> & { en: T }): T {
  return byLocale[locale] ?? byLocale.en;
}
