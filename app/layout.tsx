import type { Metadata } from "next";
import "./globals.css";
import { asset } from "./base-path";

export const metadata: Metadata = {
  title: "Felix Phan | Creative Strategist & Storyteller",
  description: "Felix Phan moves meaningful ideas from insight, to story, to impact.",
  other: { "codex-preview": "development" },
  icons: { icon: asset("/favicon.svg"), shortcut: asset("/favicon.svg") },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to main content</a>{children}</body></html>;
}
