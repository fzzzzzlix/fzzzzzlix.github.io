"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useSyncExternalStore } from "react";
import { filters, projects } from "../data";
import { CoverImage, StarMark } from "../site-shell";
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
  Featured: "featured",
  All: "all",
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

// The page opens on the feature cases; "All" is the last tab.
const DEFAULT_FILTER = "Featured";

function resolveRole(initialRole?: string): string {
  if (!initialRole) return DEFAULT_FILTER;
  if (roleToFilter[initialRole]) return roleToFilter[initialRole];
  if (filters.includes(initialRole)) return initialRole;
  return DEFAULT_FILTER;
}

// Resolve the active filter from the URL. `filter` (slug) is the canonical,
// shareable form; `role` (full label / legacy) is still accepted. Invalid
// values fall back cleanly to the given default.
function filterFromSearch(search: string, fallback: string): string {
  const params = new URLSearchParams(search);
  const slug = params.get("filter");
  if (slug) {
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
    if (filter === DEFAULT_FILTER) url.searchParams.delete("filter");
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

  const visible = useMemo(() => {
    if (active === "All") return sorted;
    if (active === "Featured") return sorted.filter((project) => project.feature);
    return sorted.filter((project) => project.tags.includes(active));
  }, [active, sorted]);

  // Featured is a 12-column grid, three tiles a row on desktop and two on
  // tablets. Widen the closing tiles so the last row is never one tile alone:
  // a leftover pair goes half-width, a leftover single turns the last four
  // into a row of four. On tablets an odd count opens on one full-width tile.
  const featured = active === "Featured";
  const tileSpan = (i: number) => {
    if (!featured) return undefined;
    const n = visible.length;
    const classes = [];
    if (n % 3 === 1 && n >= 4 && i >= n - 4) classes.push("d-span-3");
    if (n % 3 === 2 && i >= n - 2) classes.push("d-span-6");
    if (n % 2 === 1 && i === 0) classes.push("t-span-12");
    return classes.join(" ") || undefined;
  };

  // On phones the filter row scrolls sideways. Mark which end still hides
  // filters (CSS fades that edge and shows the arrow) and nudge the row once
  // on load so it reads as swipeable. No nudge under reduced motion.
  const barRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const bar = barRef.current;
    const wrap = bar?.parentElement;
    if (!bar || !wrap) return;
    const update = () => {
      const max = bar.scrollWidth - bar.clientWidth;
      wrap.dataset.edge = max <= 4 ? "none" : bar.scrollLeft <= 4 ? "start" : bar.scrollLeft >= max - 4 ? "end" : "middle";
    };
    update();
    let back: number | undefined;
    const cancel = () => window.clearTimeout(back);
    const nudge = window.setTimeout(() => {
      if (wrap.dataset.edge !== "start" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      bar.scrollTo({ left: 56, behavior: "smooth" });
      back = window.setTimeout(() => bar.scrollTo({ left: 0, behavior: "smooth" }), 650);
    }, 900);
    bar.addEventListener("scroll", update, { passive: true });
    bar.addEventListener("pointerdown", cancel);
    window.addEventListener("resize", update);
    return () => {
      window.clearTimeout(nudge);
      cancel();
      bar.removeEventListener("scroll", update);
      bar.removeEventListener("pointerdown", cancel);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      <div className="filter-bar-wrap">
        <div ref={barRef} className="filter-bar section-shell" aria-label="Filter projects by capability">
          {filters.map((filter) => <button key={filter} type="button" className={active === filter ? "active" : ""} onClick={() => selectFilter(filter)} aria-pressed={active === filter}>{filter}</button>)}
        </div>
      </div>
      <div className="section-shell">
        <p className="result-count" aria-live="polite">Showing {visible.length} of {projects.length} projects</p>
        <ul className={`work-grid${featured ? " is-featured" : ""}`}>
          {visible.map((project, index) => {
            const img = REAL_IMAGES[project.id];
            return (
              <li key={project.id} className={tileSpan(index)}>
                <Link href={`/work/${project.slug}`} className={`work-tile${img ? "" : " no-media"}`}>
                  <span className="work-tile-media">
                    {img ? <CoverImage src={img.src} fit={img.fit} poster={img.poster} alt="" /> : <StarMark size={featured ? 44 : 32} />}
                  </span>
                  <span className="work-tile-caption">
                    <span className="work-tile-title">{project.title}</span>
                    <span className="work-tile-role">{project.role}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
