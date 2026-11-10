import { LegalLayout } from "@/components/legal/legal-layout";
import { company } from "@/config/company";
import { childSafetyStandards } from "@/content/legal/child-safety";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Child Safety Standards",
  description:
    "Verity's standards against child sexual abuse and exploitation (CSAE): what is prohibited, how we enforce it, how to report a concern, and who to contact.",
  path: "/child-safety",
});

export default function ChildSafetyPage() {
  return (
    <LegalLayout
      doc={childSafetyStandards}
      eyebrow="Child safety"
      cta={{
        title: "Need to report a child safety concern?",
        description: "Use the Report option in the app, or email our child safety contact. If a child is in immediate danger, contact your local police first.",
        href: `mailto:${company.childSafetyEmail}?subject=${encodeURIComponent("Child safety concern")}`,
        label: "Contact Child Safety",
      }}
    />
  );
}
