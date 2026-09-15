import type { Metadata } from "next";
import { ExperienceView } from "../../views/experience-view";
import { getExperience } from "../../content/experience";
import { localeAlternates } from "../../i18n";

const copy = getExperience("vi");

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  alternates: localeAlternates("vi", "/experience"),
};

export default function Page() {
  return <ExperienceView locale="vi" />;
}
