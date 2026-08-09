// Single source of truth for the deploy base path.
//
// The site is deployed as a GitHub *user* Pages site (repo fzzzzzlix.github.io),
// served at the domain root, so no path prefix is needed and this is empty.
//
// If the site is ever moved to a project page served under a sub-path
// (e.g. /portfolio/), set BASE_PATH to that prefix. NOTE: vinext's static
// exporter does not support Next's `basePath`, so a sub-path deploy also needs
// a post-build URL-rewrite step for framework asset/link URLs — this constant
// alone only covers plain <img>/favicon, not `next/link` or JS chunks.
export const BASE_PATH = "";

/** Prefix a root-absolute asset path (e.g. "/images/x.jpg") with BASE_PATH. */
export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
