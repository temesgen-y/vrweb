/**
 * Site-wide configuration.
 *
 * Values that depend on the deployment (domain, contact inbox) are read from
 * environment variables and inlined at build time. See `.env.example`.
 */

function normaliseUrl(value: string | undefined) {
  if (!value) return undefined;
  return value.replace(/\/+$/, "");
}

const configuredUrl = normaliseUrl(process.env.NEXT_PUBLIC_SITE_URL);
/** Sub-path the site is served under (e.g. "/verity"), or "" at the domain root. */
export const basePath = normaliseUrl(process.env.NEXT_PUBLIC_BASE_PATH) ?? "";

export const siteConfig = {
  name: "Verity",
  tagline: "Where Knowledge Meets Connection.",
  description:
    "Verity is a social platform that brings meaningful conversations, trusted expertise, inspiring communities, and real opportunities together in one place.",
  /** Absolute site URL (origin + base path) used for canonical URLs, Open Graph, sitemap and robots. */
  url: `${configuredUrl ?? "http://localhost:3000"}${basePath}`,
  /**
   * False until NEXT_PUBLIC_SITE_URL is set. While false, the site asks search
   * engines not to index it, so previews on temporary domains stay private.
   */
  isProductionDomainConfigured: Boolean(configuredUrl),
  locale: "en_US",
  /** Public inbox for launch sign-ups. While unset, the page shows "coming soon" instead of an email link. */
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || null,
} as const;

export type NavItem = { label: string; href: string };

/** Landing page sections (root-relative so they also work from the Privacy Policy), then the Privacy Policy. */
export const mainNav: NavItem[] = [
  { label: "Features", href: "/#features" },
  { label: "Ask an Expert", href: "/#experts" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Trust", href: "/#trust" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export const joinHref = "/#join";


/** Pre-filled email for launch sign-ups, or null when no inbox is configured. */
export const waitlistMailto = siteConfig.contactEmail
  ? `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent("Join the Verity waitlist")}&body=${encodeURIComponent("Please let me know when Verity launches.")}`
  : null;
