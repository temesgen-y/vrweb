import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

// Generated once at build time for the static export.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteConfig.url}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/privacy-policy`, changeFrequency: "monthly", priority: 0.5 },
  ];
}
