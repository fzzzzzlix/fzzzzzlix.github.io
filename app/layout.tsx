import type { Metadata } from "next";
import "./globals.css";
import { asset } from "./base-path";

const SITE_URL = "https://fzzzzzlix.github.io";
const OG_IMAGE = asset("/images/hero-portrait.jpg");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Felix Phan | Creative Strategist & Storyteller",
    template: "%s | Felix Phan",
  },
  description: "Felix Phan moves meaningful ideas from insight, to story, to impact.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Felix Phan",
    title: "Felix Phan | Creative Strategist & Storyteller",
    description: "Felix Phan moves meaningful ideas from insight, to story, to impact.",
    images: [{ url: OG_IMAGE, alt: "Felix Phan" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Felix Phan | Creative Strategist & Storyteller",
    description: "Felix Phan moves meaningful ideas from insight, to story, to impact.",
    images: [OG_IMAGE],
  },
  icons: { icon: asset("/favicon.svg"), shortcut: asset("/favicon.svg") },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Felix Phan",
  alternateName: "Nguyen Phan Thuc Huong",
  jobTitle: "Creative Strategist & Storyteller",
  url: SITE_URL,
  address: { "@type": "PostalAddress", addressLocality: "Ho Chi Minh City", addressCountry: "VN" },
  sameAs: ["https://www.linkedin.com/in/felixphan/"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
