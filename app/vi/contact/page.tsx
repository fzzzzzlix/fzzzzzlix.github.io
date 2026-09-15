import type { Metadata } from "next";
import { ContactView } from "../../views/contact-view";
import { getContact } from "../../content/contact";
import { localeAlternates } from "../../i18n";

const copy = getContact("vi");

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  alternates: localeAlternates("vi", "/contact"),
};

export default function Page() {
  return <ContactView locale="vi" />;
}
