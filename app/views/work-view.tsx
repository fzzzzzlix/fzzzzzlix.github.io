import { PageHero, SiteFooter, SiteHeader } from "../site-shell";
import { featureProjects, projects } from "../data";
import { getUi, fill } from "../content/ui";
import type { Locale } from "../i18n";
import WorkGrid from "../work/work-grid";

/** Work index body, shared by /work and /vi/work. */
export function WorkView({ locale, role }: { locale: Locale; role?: string }) {
  const ui = getUi(locale);
  return (
    <div className="site-frame" lang={locale}>
      <SiteHeader locale={locale} />
      <main id="main-content">
        <PageHero
          eyebrow={ui.workEyebrow}
          deck={fill(ui.workDeck, { count: featureProjects.length })}
          aside={<div className="page-aside-stat"><strong>{projects.length}</strong><span>{ui.workAsideLabel}</span></div>}
        />
        <section className="work-index section-shell" aria-label={ui.workIndexAria}>
          <WorkGrid initialRole={role} locale={locale} />
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
