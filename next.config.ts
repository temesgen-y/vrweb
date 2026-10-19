import type { NextConfig } from "next";

/**
 * Static export: `next build` writes plain HTML/CSS/JS to `out/`, which any
 * static host can serve. There is no server, so security headers (CSP, HSTS, …)
 * are set by the host — see `nginx.conf` and the README.
 */
const nextConfig: NextConfig = {
  output: "export",
  // Optional sub-path, e.g. "/verity" serves the site at https://example.com/verity/.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
