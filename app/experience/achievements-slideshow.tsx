"use client";

import { asset } from "../base-path";

/**
 * Continuous achievements marquee. The strip scrolls horizontally forever,
 * pausing on hover and respecting reduced-motion. The image list is duplicated
 * once so the loop wraps seamlessly. Renders nothing when no images are supplied,
 * so the section stays clean until images are dropped into
 * /public/images/achievements/ and listed in experience.credentials.slideshow.
 */
export function AchievementsSlideshow({ images, secondsPerImage = 5 }: { images: string[]; secondsPerImage?: number }) {
  if (!images.length) return null;
  // Duplicate the list so translateX(-50%) lands on an identical frame.
  const loop = [...images, ...images];
  const duration = Math.max(images.length * secondsPerImage, 10);

  return (
    <div className="achievements-marquee" aria-label="Achievements" aria-roledescription="carousel">
      <div className="achievements-track" style={{ animationDuration: `${duration}s` }}>
        {loop.map((src, i) => (
          <img
            key={i}
            src={asset(src)}
            alt={i < images.length ? "Achievement" : ""}
            loading="lazy"
            aria-hidden={i >= images.length ? true : undefined}
          />
        ))}
      </div>
    </div>
  );
}
