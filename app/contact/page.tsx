import type { Metadata } from "next";
import { ContactView } from "../views/contact-view";
import { getContact } from "../content/contact";
import { localeAlternates } from "../i18n";

const copy = getContact("en");

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  alternates: localeAlternates("en", "/contact"),
};

export default function Page() {
  return <ContactView locale="en" />;
}
