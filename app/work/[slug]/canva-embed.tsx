"use client";

import { useState } from "react";

const EMBED_URL = "https://www.canva.com/design/DAGlkXNbHM4/OTW2amJs3KP1o6_sYLBelQ/view?embed";

export function CanvaEmbed() {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="p31-embed-frame">
      {loaded ? (
        <iframe
          title="Be Local, original final project presentation"
          src={EMBED_URL}
          allow="fullscreen"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <button type="button" className="p31-embed-poster" onClick={() => setLoaded(true)} aria-label="Load the original Be Local presentation">
          <span className="p31-play" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
          </span>
          <strong>Load the original presentation</strong>
          <span>32-slide Canva deck, loads on click</span>
        </button>
      )}
    </div>
  );
}
