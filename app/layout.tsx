import type { Metadata, Viewport } from "next";
import "./globals.css";
import { asset } from "./base-path";
import { DEFAULT_DESCRIPTION, OG_IMAGE, SITE_NAME, SITE_URL, jsonLd, siteJsonLd } from "./seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "Felix Phan, %s",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Felix Phan", url: SITE_URL }],
  creator: "Felix Phan",
  keywords: ["Felix Phan", "Felix Phan portfolio", "Nguyen Phan Thuc Huong", "Nguyễn Phan Thục Hương", "creative strategist", "storyteller", "Ho Chi Minh City", "Hanoi"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    firstName: "Felix",
    lastName: "Phan",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  icons: { icon: asset("/favicon.svg"), shortcut: asset("/favicon.svg") },
  // Search Console ownership check for https://fzzzzzlix.github.io
  verification: { google: "dDAe22nQZqT9dU7PgUHTZzfPBX8m0d95f7jc39fFtvg" },
};

// Mobile browser chrome matches the bone page background (--bone in globals.css).
export const viewport: Viewport = {
  themeColor: "#EFEEEC",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(siteJsonLd)} />
      </body>
    </html>
  );
}
