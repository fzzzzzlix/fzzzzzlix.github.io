import type { Metadata } from "next";
import { ExperienceView } from "../views/experience-view";
import { getExperience } from "../content/experience";
import { localeAlternates } from "../i18n";

const copy = getExperience("en");

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  alternates: localeAlternates("en", "/experience"),
};

export default function Page() {
  return <ExperienceView locale="en" />;
}
