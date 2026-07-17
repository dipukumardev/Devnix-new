import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Firebase Hosting (serves the `out/` folder).
  output: "export",
  // Static hosting has no Next.js image optimizer; serve images as-is.
  images: {
    unoptimized: true,
  },
  // Emit `/route/index.html` so clean URLs work on static hosts.
  trailingSlash: true,
};

export default nextConfig;
