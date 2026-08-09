"use client";

import { useEffect } from "react";

// Client-side auto-navigation for the P15 compatibility route. The visible
// link on the page is the no-JS fallback.
export function PhotoshootsRedirect({ target }: { target: string }) {
  useEffect(() => {
    window.location.replace(target);
  }, [target]);
  return null;
}
