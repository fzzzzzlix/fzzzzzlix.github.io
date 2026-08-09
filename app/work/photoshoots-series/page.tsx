import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../site-shell";
import { asset } from "../../base-path";
import { PhotoshootsRedirect } from "./redirect";

// Compatibility route. P15 (Photoshoots Series) was merged into P14 (Equal in
// Ao Dai / Gender Equality Magazine). The old public URL must not 404, so this
// static page auto-navigates to the canonical case and offers a manual link.
const TARGET = asset("/work/equal-in-ao-dai");

export const metadata: Metadata = {
  title: "Photoshoots Series has moved",
  alternates: { canonical: "/work/equal-in-ao-dai" },
  robots: { index: false, follow: true },
};

export default function PhotoshootsSeriesMoved() {
  return (
    <div className="site-frame">
      <SiteHeader />
      <main id="main-content">
        <section className="page-hero section-shell">
          <div>
            <p className="eyebrow">Project moved</p>
            <h1>Photoshoots Series is now part of Equal in Ao Dai</h1>
            <p className="page-deck">
              The photo series is now presented inside the Gender Equality Magazine case. Taking you there now.
            </p>
            <p style={{ marginTop: 24 }}>
              <a className="button button-primary" href={TARGET}>Open Equal in Ao Dai / Gender Equality Magazine</a>
            </p>
          </div>
        </section>
        <PhotoshootsRedirect target={TARGET} />
      </main>
      <SiteFooter />
    </div>
  );
}
