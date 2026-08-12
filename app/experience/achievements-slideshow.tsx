"use client";

import { useEffect, useRef, type MouseEvent as ReactMouseEvent, type PointerEvent as ReactPointerEvent } from "react";
import { asset } from "../base-path";

/**
 * Continuous, draggable achievements strip. It auto-scrolls horizontally, but
 * the user can grab and drag (or swipe / wheel) to scroll back to images that
 * already passed. The list is duplicated once so the auto-scroll loops
 * seamlessly. Auto-scroll pauses while hovering, focusing or dragging, and is
 * disabled for reduced-motion users (who can still drag). Renders nothing when
 * no images are supplied.
 */
export function AchievementsSlideshow({ images, pxPerTick = 1, tickMs = 24 }: { images: string[]; pxPerTick?: number; tickMs?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });

  useEffect(() => {
    const el = ref.current;
    if (!el || images.length < 2) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (paused.current || drag.current.active) return;
      const half = el.scrollWidth / 2;
      if (half <= 0) return;
      let next = el.scrollLeft + pxPerTick;
      if (next >= half) next -= half; // seamless wrap across the duplicated half
      el.scrollLeft = next;
    }, tickMs);
    return () => clearInterval(id);
  }, [images.length, pxPerTick, tickMs]);

  if (!images.length) return null;
  const loop = [...images, ...images];

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return; // touch/pen use native momentum scroll
    const el = ref.current;
    if (!el) return;
    drag.current = { active: true, startX: e.clientX, startScroll: el.scrollLeft, moved: false };
    el.setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || !drag.current.active) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 3) drag.current.moved = true;
    el.scrollLeft = drag.current.startScroll - dx;
  };
  const endDrag = (e: ReactPointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (el && drag.current.active) el.releasePointerCapture?.(e.pointerId);
    drag.current.active = false;
  };
  // Swallow the click that ends a drag so a drag doesn't register as a tap.
  const onClickCapture = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  return (
    <div
      className="achievements-marquee"
      ref={ref}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerLeave={endDrag}
      onMouseEnter={() => { paused.current = true; }}
      onMouseLeave={() => { paused.current = false; }}
      onFocus={() => { paused.current = true; }}
      onBlur={() => { paused.current = false; }}
      onClickCapture={onClickCapture}
      aria-label="Achievements, drag to browse"
    >
      <div className="achievements-track">
        {loop.map((src, i) => (
          <img
            key={i}
            src={asset(src)}
            alt={i < images.length ? "Achievement" : ""}
            loading="lazy"
            draggable={false}
            aria-hidden={i >= images.length ? true : undefined}
          />
        ))}
      </div>
    </div>
  );
}
