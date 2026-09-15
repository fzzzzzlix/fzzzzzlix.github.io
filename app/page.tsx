import type { Metadata } from "next";
import { HomeView } from "./views/home-view";
import { localeAlternates } from "./i18n";

// Title and description come from the root layout; this only declares the
// language alternates so search engines pair the two versions.
export const metadata: Metadata = { alternates: localeAlternates("en", "/") };

export default function Page() {
  return <HomeView locale="en" />;
}
