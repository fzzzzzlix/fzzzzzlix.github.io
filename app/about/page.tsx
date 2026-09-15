import type { Metadata } from "next";
import { AboutView } from "../views/about-view";
import { getAbout } from "../content/about";
import { localeAlternates } from "../i18n";

const copy = getAbout("en");

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  alternates: localeAlternates("en", "/about"),
};

export default function Page() {
  return <AboutView locale="en" />;
}
