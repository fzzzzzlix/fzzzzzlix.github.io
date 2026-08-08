"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { filters, projects } from "../data";
import { MediaPlaceholder } from "../site-shell";
import { REAL_IMAGES } from "../project-images";

const roleToFilter: Record<string, string> = {
  "Creative Scriptwriting": "Script & Story",
  "Strategic Planning": "Strategy & Research",
  "Communication & Sustainability": "Sustainability & Advocacy",
  "Project Management": "Project Management",
  "Communication Events": "Events & Leadership",
  "Content Roles": "Content & Channels",
};

export default function WorkGrid({ initialRole }: { initialRole?: string }) {
  const [active, setActive] = useState(initialRole && roleToFilter[initialRole] ? roleToFilter[initialRole] : "All");

  const visible = useMemo(() => active === "All" ? projects : projects.filter((project) => project.tags.includes(active)), [active]);

  return (
    <>
      <div className="filter-bar" aria-label="Filter projects by capability">
        {filters.map((filter) => <button key={filter} className={active === filter ? "active" : ""} onClick={() => setActive(filter)} aria-pressed={active === filter}>{filter}</button>)}
      </div>
      <p className="result-count" aria-live="polite">Showing {visible.length} of {projects.length} projects</p>
      <div className="all-projects-grid">
        {visible.map((project, index) => (
          <Link href={`/work/${project.slug}`} className={`work-card${project.feature ? " feature" : ""}`} key={project.id}>
            {REAL_IMAGES[project.id] ? (
              <div className="project-img-wrap">
                <img src={REAL_IMAGES[project.id].src} alt={project.alt} style={{ objectFit: REAL_IMAGES[project.id].fit }} />
              </div>
            ) : (
              <MediaPlaceholder label={`${project.id} evidence placeholder`} filename={project.assetFilename} ratio="16:9 · 1600 × 900 px" note="Crop to Fill, never stretch" index={index + 1} />
            )}
            <div className="work-card-copy">
              <p className="project-meta"><span>{project.id}</span>{project.year} · {project.publicType}</p>
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
