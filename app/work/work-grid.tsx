"use client";

import Link from "next/link";
import { useMemo, useSyncExternalStore } from "react";
import { filters, projects } from "../data";
import { CoverImage, MediaPlaceholder } from "../site-shell";
import { REAL_IMAGES } from "../project-images";

const roleToFilter: Record<string, string> = {
  // Homepage proposition routes
  "Shape the strategy": "Strategy & Research",
  "Build the story": "Creative Content",
  "Lead the delivery": "Project Management",
  // Legacy / alternate labels
  "Creative Scriptwriting": "Creative Content",
  "Strategic Planning": "Strategy & Research",
  "Communication & Sustainability": "Sustainability & Advocacy",
  "Communication Events": "Event & Production",
  "Content Roles": "Creative Content",
};

// Short, shareable slugs for the URL (e.g. /work?filter=research).
const FILTER_SLUGS: Record<string, string> = {
  "Creative Content": "creative",
  "Strategy & Research": "research",
  "Event & Production": "production",
  "Project Management": "delivery",
  "Sustainability & Advocacy": "sustainability",
  "Culture & Editorial": "culture",
};
const SLUG_TO_FILTER: Record<string, string> = {
  ...Object.fromEntries(Object.entries(FILTER_SLUGS).map(([label, slug]) => [slug, label])),
  // Legacy slug aliases so older shared links still resolve after the
  // Creative Content and Event & Production category merges.
  story: "Creative Content",
  content: "Creative Content",
  events: "Event & Production",
};

function resolveRole(initialRole?: string): string {
  if (!initialRole) return "All";
  if (roleToFilter[initialRole]) return roleToFilter[initialRole];
  if (filters.includes(initialRole)) return initialRole;
  return "All";
}

// Resolve the active filter from the URL. `filter` (slug) is the canonical,
// shareable form; `role` (full label / legacy) is still accepted. Invalid
// values fall back cleanly to the given default.
function filterFromSearch(search: string, fallback: string): string {
  const params = new URLSearchParams(search);
  const slug = params.get("filter");
  if (slug) {
    if (slug === "all") return "All";
    if (SLUG_TO_FILTER[slug]) return SLUG_TO_FILTER[slug];
    return fallback;
  }
  const role = params.get("role");
  if (role) return resolveRole(role);
  return fallback;
}

// The URL query string is the external store. Query params only reach the
// client on a static export, so the filter is derived from the live URL rather
// than server state. popstate covers Back/Forward; a synthetic event covers our
// own pushState on filter clicks. useSyncExternalStore keeps hydration correct
// (server snapshot is empty, matching the param-free prerender).
function subscribe(cb: () => void) {
  window.addEventListener("popstate", cb);
  window.addEventListener("workfilterchange", cb);
  return () => {
    window.removeEventListener("popstate", cb);
    window.removeEventListener("workfilterchange", cb);
  };
}

export default function WorkGrid({ initialRole }: { initialRole?: string }) {
  const search = useSyncExternalStore(
    subscribe,
    () => window.location.search,
    () => "",
  );
  const active = filterFromSearch(search, resolveRole(initialRole));

  function selectFilter(filter: string) {
    const url = new URL(window.location.href);
    url.searchParams.delete("role");
    if (filter === "All") url.searchParams.delete("filter");
    else url.searchParams.set("filter", FILTER_SLUGS[filter] ?? filter);
    window.history.pushState({}, "", url);
    window.dispatchEvent(new Event("workfilterchange"));
  }

  const visible = useMemo(() => active === "All" ? projects : projects.filter((project) => project.tags.includes(active)), [active]);

  return (
    <>
      <div className="filter-bar-wrap">
        <div className="filter-bar" aria-label="Filter projects by capability">
          {filters.map((filter) => <button key={filter} className={active === filter ? "active" : ""} onClick={() => selectFilter(filter)} aria-pressed={active === filter}>{filter}</button>)}
        </div>
      </div>
      <p className="result-count" aria-live="polite">Showing {visible.length} of {projects.length} projects</p>
      <div className="all-projects-grid">
        {visible.map((project, index) => (
          <Link href={`/work/${project.slug}`} className={`work-card${project.feature ? " feature" : ""}`} key={project.id}>
            {REAL_IMAGES[project.id] ? (
              <div className="project-img-wrap">
                <CoverImage src={REAL_IMAGES[project.id].src} fit={REAL_IMAGES[project.id].fit} poster={REAL_IMAGES[project.id].poster} alt={project.alt} />
              </div>
            ) : (
              <MediaPlaceholder projectId={project.id} discipline={project.publicType} index={index + 1} />
            )}
            <div className="work-card-copy">
              <p className="project-meta"><span>{project.year}</span><span className="meta-last">{project.publicType}</span></p>
              <h2>{project.title}</h2>
              <p>{project.tension}</p>
              <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
