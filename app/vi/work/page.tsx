import type { Metadata } from "next";
import { WorkView } from "../../views/work-view";
import { getUi } from "../../content/ui";
import { localeAlternates } from "../../i18n";

const ui = getUi("vi");

export const metadata: Metadata = {
  title: ui.workMetaTitle,
  description: ui.workMetaDescription,
  alternates: localeAlternates("vi", "/work"),
};

export default async function Page({ searchParams }: { searchParams: Promise<{ role?: string }> }) {
  const { role } = await searchParams;
  return <WorkView locale="vi" role={role} />;
}
