/**
 * Legal and business facts used by the policy pages.
 *
 * IMPORTANT: Every `null` below renders as a highlighted "To confirm" marker on
 * the live page until it is filled in.
 */

// Takes the value (not the name): only literal `process.env.NEXT_PUBLIC_*`
// references are inlined into browser code.
function env(value: string | undefined) {
  return value?.trim() || null;
}

export const company = {
  /** Legal developer or company name that operates Verity. */
  legalName: null as string | null,
  /** Legally required business contact address, if applicable. */
  registeredAddress: null as string | null,
  /** Verified in-app steps to delete an account, e.g. "Settings → Account → Delete account". */
  accountDeletionSteps: null as string | null,
  /** Public web page where people can request account deletion without the app. */
  accountDeletionUrl: null as string | null,

  /** Privacy inbox; falls back to the general contact inbox. */
  privacyEmail: env(process.env.NEXT_PUBLIC_PRIVACY_EMAIL) ?? env(process.env.NEXT_PUBLIC_CONTACT_EMAIL),
};

/** Privacy Policy dates (ISO format). */
export const policyDates = {
  privacy: { effective: "2026-10-19" as string | null, lastUpdated: "2026-10-19" },
};

export function formatPolicyDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
