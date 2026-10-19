import { LegalLayout } from "@/components/legal/legal-layout";
import { company } from "@/config/company";
import { privacyPolicy } from "@/content/legal/privacy-policy";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Learn how Verity collects, uses, protects, and manages your personal information, and the rights and choices you have.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      doc={privacyPolicy}
      eyebrow="Your privacy"
      cta={
        company.privacyEmail
          ? {
              title: "Questions about your privacy?",
              description: "Our privacy team can help with access, correction, deletion, and other privacy requests.",
              href: `mailto:${company.privacyEmail}?subject=${encodeURIComponent("Privacy request")}`,
              label: "Contact Privacy Team",
            }
          : undefined
      }
    />
  );
}
