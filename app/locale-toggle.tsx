"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALES, LOCALE_LABEL, LOCALE_NAME, localePath, stripLocale, type Locale } from "./i18n";

const STORAGE_KEY = "felix-portfolio-locale";

/*
 * EN | VI switcher.
 *
 * It keeps the visitor on the same page: it strips the language prefix off the
 * current path and re-adds the other one, so /vi/work/be-local toggles to
 * /work/be-local rather than dumping the visitor on the home page.
 *
 * It is a client component because it needs the live pathname. The chosen
 * language is remembered in localStorage, which is read by the small script in
 * the layout only to highlight nothing and redirect nothing: there is no
 * auto-redirect by design, so a link someone shares always opens the language
 * it points at.
 */
export function LocaleToggle({ locale, ariaLabel }: { locale: Locale; ariaLabel: string }) {
  const pathname = usePathname() ?? "/";
  const basePath = stripLocale(pathname);

  return (
    <div className="locale-toggle" role="group" aria-label={ariaLabel}>
      {LOCALES.map((option) => {
        const current = option === locale;
        return (
          <Link
            key={option}
            href={localePath(option, basePath)}
            hrefLang={option}
            lang={option}
            className={current ? "current" : ""}
            aria-current={current ? "true" : undefined}
            aria-label={LOCALE_NAME[option]}
            onClick={() => {
              try {
                window.localStorage.setItem(STORAGE_KEY, option);
              } catch {
                // Private mode or blocked storage: the toggle still navigates.
              }
            }}
          >
            {LOCALE_LABEL[option]}
          </Link>
        );
      })}
    </div>
  );
}
