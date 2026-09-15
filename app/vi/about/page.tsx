import type { Metadata } from "next";
import { AboutView } from "../../views/about-view";
import { getAbout } from "../../content/about";
import { localeAlternates } from "../../i18n";

const copy = getAbout("vi");

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  alternates: localeAlternates("vi", "/about"),
};

export default function Page() {
  return <AboutView locale="vi" />;
}
