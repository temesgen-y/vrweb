import type { LegalDocument } from "@/components/legal/legal-layout";
import { company, policyDates } from "@/config/company";
import { siteConfig } from "@/config/site";

/*
 * Verity Child Safety Standards. Google Play requires every app in the Social
 * category to publish its standards against child sexual abuse and
 * exploitation (CSAE) at a public, non-PDF URL and to name a point of contact.
 * The contact inbox comes from src/config/company.ts (NEXT_PUBLIC_CHILD_SAFETY_EMAIL).
 */

const contactEmail = <a href={`mailto:${company.childSafetyEmail}`}>{company.childSafetyEmail}</a>;
const website = <a href="https://verity.gebetacloud.com/">https://verity.gebetacloud.com/</a>;

export const childSafetyStandards: LegalDocument = {
  title: "Child Safety Standards",
  subtitle: `${siteConfig.name} — ${siteConfig.tagline}`,
  dates: policyDates.childSafety,
  details: [
    { label: "Application", value: "Verity" },
    { label: "Child Safety Contact", value: contactEmail },
    { label: "Website", value: website },
  ],
  sections: [
    {
      id: "our-commitment",
      title: "Our Commitment",
      content: (
        <>
          <p>
            Verity (&ldquo;Verity,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is a social
            networking and knowledge-sharing platform intended for people aged 13 and over.
          </p>
          <p>
            We do not tolerate child sexual abuse or exploitation (&ldquo;CSAE&rdquo;) in any form, anywhere on
            Verity. This page sets out the standards we apply, how we enforce them, and how to reach us about a
            child safety concern.
          </p>
          <p>
            These standards apply to every part of the Verity mobile application and related services, including
            posts, stories, comments, direct messages, voice and video calls, live streams, debates, expert
            consultations and career listings.
          </p>
        </>
      ),
    },
    {
      id: "prohibited-content-and-behaviour",
      title: "Prohibited Content and Behaviour",
      content: (
        <>
          <p>The following are strictly prohibited on Verity:</p>
          <ul>
            <li>
              <strong>Child sexual abuse material (CSAM)</strong> of any kind, including photographs, videos,
              drawings, computer-generated or AI-generated imagery, audio and text.
            </li>
            <li>
              <strong>Sexualised depictions of minors</strong>, including content that presents a minor in a sexual
              manner or focuses on a minor&apos;s body in a sexual way, whether real or fictional.
            </li>
            <li>
              <strong>Grooming</strong>: contacting a minor with the aim of sexual abuse or exploitation, including
              building trust for that purpose, requesting intimate images, or arranging to meet.
            </li>
            <li>
              <strong>Sextortion</strong>: threatening or blackmailing a minor using real or fabricated intimate
              images.
            </li>
            <li>
              <strong>Trafficking</strong>: advertising, recruiting or facilitating the sexual exploitation of a
              minor.
            </li>
            <li>
              <strong>Facilitation</strong>: sharing, requesting, offering or linking to any of the above, whether on
              Verity or on another service.
            </li>
          </ul>
          <p>
            Accounts that engage in any of this behaviour are permanently removed from Verity. There are no
            exceptions and no warnings.
          </p>
        </>
      ),
    },
    {
      id: "age-requirements",
      title: "Age Requirements",
      content: (
        <>
          <p>
            Users must be at least 13 years old to create a Verity account, or older where local law sets a higher
            minimum age.
          </p>
          <p>
            Accounts that we become aware belong to children below the minimum age are removed, and any personal
            information collected from them is deleted as described in our{" "}
            <a href="/privacy-policy#childrens-privacy">Privacy Policy</a>.
          </p>
        </>
      ),
    },
    {
      id: "how-we-enforce-these-standards",
      title: "How We Enforce These Standards",
      content: (
        <>
          <ul>
            <li>
              <strong>In-app reporting.</strong> Every post, comment and profile on Verity can be reported from
              inside the app using the <strong>Report</strong> option in its menu. Reports are reviewed by our
              moderation team.
            </li>
            <li>
              <strong>Removal and account action.</strong> Content that violates these standards is removed, and the
              account responsible is suspended or permanently deleted.
            </li>
            <li>
              <strong>Reporting to authorities.</strong> Confirmed CSAM is reported to the relevant authorities,
              including the National Center for Missing &amp; Exploited Children (NCMEC) and local law enforcement,
              as required by applicable law. We preserve the evidence needed for those reports.
            </li>
            <li>
              <strong>Cooperation with law enforcement.</strong> We respond to valid legal requests from law
              enforcement relating to child safety.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "how-to-report-a-concern",
      title: "How to Report a Concern",
      content: (
        <>
          <p>If you see content or behaviour on Verity that may harm a child, please report it:</p>
          <ul>
            <li>
              <strong>In the app:</strong> open the menu on the post, comment or profile and choose{" "}
              <strong>Report</strong>, then pick the reason that best fits. Reports are confidential.
            </li>
            <li>
              <strong>By email:</strong> write to {contactEmail}. Please include the username, a link or screenshot
              where possible, and a short description of the concern.
            </li>
          </ul>
          <p>
            <strong>If a child is in immediate danger, contact your local police first.</strong>
          </p>
        </>
      ),
    },
    {
      id: "child-safety-point-of-contact",
      title: "Child Safety Point of Contact",
      content: (
        <>
          <p>
            Verity&apos;s designated child safety point of contact can speak to our CSAM prevention practices and
            our compliance with applicable child safety laws.
          </p>
          <p>
            <strong>Application:</strong> Verity
            <br />
            <strong>Email:</strong> {contactEmail}
            <br />
            <strong>Website:</strong> {website}
          </p>
        </>
      ),
    },
    {
      id: "legal-compliance",
      title: "Legal Compliance",
      content: (
        <>
          <p>
            Verity complies with applicable child safety laws, including mandatory reporting obligations, and with
            the Google Play Developer Program&apos;s Child Safety Standards policy.
          </p>
          <p>
            We may update these standards to reflect changes in our Services, our practices or applicable law. The
            latest version is always available on this page with its revision date.
          </p>
        </>
      ),
    },
  ],
};
