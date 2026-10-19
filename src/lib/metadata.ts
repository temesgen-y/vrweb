import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

/** Per-page metadata with canonical URL and matching Open Graph/Twitter tags. */
export function createMetadata({
  title,
  description,
  path,
}: {
  title?: string;
  description: string;
  path: string;
}): Metadata {
  // Setting openGraph here replaces the parent's, so re-attach the shared image.
  const image = { url: "/og.png", width: 1200, height: 630, alt: `${siteConfig.name} — ${siteConfig.tagline}` };
  const fullTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} — ${siteConfig.tagline}`;
  return {
    title: title ?? { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
