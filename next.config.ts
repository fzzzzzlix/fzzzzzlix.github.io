import type { NextConfig } from "next";

// Static export for GitHub Pages (user site fzzzzzlix.github.io, served at root).
const nextConfig: NextConfig = {
  output: "export",
  images: {
    // No server image optimizer on GitHub Pages; serve images as-is.
    unoptimized: true,
  },
};

export default nextConfig;
