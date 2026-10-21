"use client";

import Link from "next/link";
import { useMemo, useSyncExternalStore } from "react";
import { filters, projects } from "../data";
import { CoverImage } from "../site-shell";
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

  // Sort most-recent-first using the latest 4-digit year found in each project's
  // `year` field (handles ranges like "Sep 2023-Jun 2024"). Stable for ties.
  const sorted = useMemo(() => {
    const recency = (p: (typeof projects)[number]) => {
      const years = (p.year ?? "").match(/\d{4}/g);
      return years ? Math.max(...years.map(Number)) : 0;
    };
    return [...projects].sort((a, b) => recency(b) - recency(a));
  }, []);

  const visible = useMemo(() => active === "All" ? sorted : sorted.filter((project) => project.tags.includes(active)), [active, sorted]);

  return (
    <>
      <div className="filter-bar-wrap">
        <div className="filter-bar section-shell" aria-label="Filter projects by capability">
          {filters.map((filter) => <button key={filter} type="button" className={active === filter ? "active" : ""} onClick={() => selectFilter(filter)} aria-pressed={active === filter}>{filter}</button>)}
        </div>
      </div>
      <div className="section-shell work-list-shell">
        <p className="result-count" aria-live="polite">Showing {visible.length} of {projects.length} projects</p>
        <ol className="work-list">
          {visible.map((project, index) => {
            const img = REAL_IMAGES[project.id];
            // Scale comes from the data: feature cases get a large spread, the rest
            // a contents-page row. Rows with no published image stay typographic.
            const featureCount = visible.slice(0, index).filter((p) => p.feature).length;
            const cls = ["work-row", project.feature ? "is-feature" : "", project.feature && featureCount % 2 ? "is-flip" : "", img ? "" : "no-media"].filter(Boolean).join(" ");
            return (
              <li key={project.id}>
                <Link href={`/work/${project.slug}`} className={cls}>
                  <span className="work-row-num">{String(index + 1).padStart(2, "0")}</span>
                  <div className="work-row-head">
                    <p className="project-meta"><span>{project.year}</span><span className="meta-last">{project.publicType}</span></p>
                    <h2>{project.title}</h2>
                  </div>
                  <div className="work-row-body">
                    <p>{project.tension}</p>
                    <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                  {img ? (
                    <div className="work-row-media">
                      <CoverImage src={img.src} fit={img.fit} poster={img.poster} alt={project.alt} />
                    </div>
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}
