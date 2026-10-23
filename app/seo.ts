import type { Metadata } from "next";
import { asset } from "./base-path";

/*
 * Search identity: one place for the names, profile facts and structured data
 * that tell search and answer engines who Felix Phan is. The JSON-LD graph
 * links every page to the same Person (by @id), so "Felix Phan" and the legal
 * name "Nguyen Phan Thuc Huong" resolve to one entity.
 */
export const SITE_URL = "https://fzzzzzlix.github.io";
export const SITE_NAME = "Felix Phan, PORTFOLIO";
export const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export const PERSON = {
  name: "Felix Phan",
  legalName: "Nguyen Phan Thuc Huong",
  legalNameVi: "Nguyễn Phan Thục Hương",
  jobTitle: "Creative Strategist & Storyteller",
  email: "felixphan.contact@gmail.com",
  linkedIn: "https://www.linkedin.com/in/felixphan/",
  image: asset("/images/hero-portrait.jpg"),
};

export const DEFAULT_DESCRIPTION =
  "Portfolio of Felix Phan (Nguyen Phan Thuc Huong), a creative strategist and storyteller in Ho Chi Minh City and Hanoi: research, scriptwriting, events and project delivery.";

export const OG_IMAGE = { url: PERSON.image, width: 800, height: 1000, alt: "Felix Phan (Nguyen Phan Thuc Huong), creative strategist and storyteller" };

/** Metadata for an interior page: canonical URL plus its own share card. */
export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const fullTitle = `Felix Phan, ${title}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", siteName: SITE_NAME, title: fullTitle, description, url: path, images: [OG_IMAGE] },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [OG_IMAGE.url] },
  };
}

const person = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: PERSON.name,
  alternateName: [PERSON.legalName, PERSON.legalNameVi, "Felix Phan (Nguyen Phan Thuc Huong)"],
  givenName: "Felix",
  familyName: "Phan",
  jobTitle: PERSON.jobTitle,
  description: DEFAULT_DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}${PERSON.image}`,
  email: `mailto:${PERSON.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Ho Chi Minh City", addressCountry: "VN" },
  homeLocation: [{ "@type": "Place", name: "Ho Chi Minh City, Vietnam" }, { "@type": "Place", name: "Hanoi, Vietnam" }],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "RMIT University", sameAs: "https://www.rmit.edu.vn/" },
    { "@type": "CollegeOrUniversity", name: "National Economics University", sameAs: "https://www.neu.edu.vn/" },
  ],
  knowsAbout: [
    "Creative strategy", "Storytelling", "Scriptwriting", "Consumer research", "Social listening",
    "Media planning", "Event production", "Project management", "Sustainable development", "Social advocacy",
  ],
  sameAs: [PERSON.linkedIn],
};

/** Site-wide graph: the website and the person it belongs to. */
export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: SITE_NAME,
      alternateName: ["Felix Phan Portfolio", "Felix Phan", "Nguyen Phan Thuc Huong portfolio", "Nguyễn Phan Thục Hương portfolio"],
      description: DEFAULT_DESCRIPTION,
      inLanguage: "en",
      publisher: { "@id": PERSON_ID },
      about: { "@id": PERSON_ID },
    },
    person,
  ],
};

/** The About page is Felix's profile page. */
export const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: `${SITE_URL}/about`,
  name: "Felix Phan, About",
  isPartOf: { "@id": WEBSITE_ID },
  mainEntity: { "@id": PERSON_ID },
};

/** A case study: a piece of work credited to Felix. */
export function projectJsonLd(project: { title: string; slug: string; tension: string; role: string; year?: string }, image?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    url: `${SITE_URL}/work/${project.slug}`,
    description: project.tension,
    ...(image ? { image: `${SITE_URL}${image}` } : {}),
    ...(project.year ? { dateCreated: project.year.match(/\d{4}/)?.[0] } : {}),
    creator: { "@id": PERSON_ID },
    creditText: `${PERSON.name}: ${project.role}`,
    isPartOf: { "@id": WEBSITE_ID },
    inLanguage: "en",
  };
}

/** Serialise JSON-LD safely for a <script> tag. */
export function jsonLd(data: object) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
