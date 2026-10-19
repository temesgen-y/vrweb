import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

// Generated once at build time for the static export.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  // Until the production domain is configured, keep crawlers out of previews.
  if (!siteConfig.isProductionDomainConfigured) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
