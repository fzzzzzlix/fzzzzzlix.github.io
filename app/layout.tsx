import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Felix Phan | Creative Strategist & Storyteller",
  description: "Felix Phan moves meaningful ideas from insight, to story, to impact.",
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to main content</a>{children}</body></html>;
}
