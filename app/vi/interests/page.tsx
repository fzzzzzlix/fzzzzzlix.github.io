import type { Metadata } from "next";
import { InterestsView } from "../../views/interests-view";
import { getInterests } from "../../content/interests";
import { localeAlternates } from "../../i18n";

const copy = getInterests("vi");

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  alternates: localeAlternates("vi", "/interests"),
};

export default function Page() {
  return <InterestsView locale="vi" />;
}
