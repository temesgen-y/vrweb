import type { LegalDocument } from "@/components/legal/legal-layout";
import { Fact } from "@/components/ui/primitives";
import { company, policyDates } from "@/config/company";
import { siteConfig } from "@/config/site";

/*
 * Verity Privacy Policy. Text supplied by Verity. Each "[Insert …]" placeholder
 * from the source is filled from src/config/company.ts (or NEXT_PUBLIC_* env
 * vars) and renders as a highlighted "[To confirm: …]" marker until it is set.
 */

const operator = <Fact value={company.legalName} label="legal developer or company name" />;
const privacyEmail = company.privacyEmail ? (
  <a href={`mailto:${company.privacyEmail}`}>{company.privacyEmail}</a>
) : (
  <Fact value={null} label="verified privacy support email" />
);
const website = siteConfig.isProductionDomainConfigured ? (
  <a href={siteConfig.url}>{siteConfig.url.replace(/^https?:\/\//, "")}</a>
) : (
  <Fact value={null} label="official Verity website" />
);
const inAppDeletion = (
  <Fact
    value={company.accountDeletionSteps}
    label="the actual verified navigation steps to the Delete Account feature"
  />
);
const webDeletion = company.accountDeletionUrl ? (
  <a href={company.accountDeletionUrl}>{company.accountDeletionUrl}</a>
) : (
  <Fact value={null} label="the public account deletion request URL" />
);

function ContactDetails() {
  return (
    <p>
      <strong>Application:</strong> Verity
      <br />
      <strong>Developer / Operator:</strong> {operator}
      <br />
      <strong>Email:</strong> {privacyEmail}
      <br />
      <strong>Website:</strong> {website}
      <br />
      <strong>Address:</strong>{" "}
      <Fact value={company.registeredAddress} label="legally required business contact address, if applicable" />
    </p>
  );
}

const hasPlaceholders = [
  company.legalName,
  company.privacyEmail,
  company.registeredAddress,
  company.accountDeletionSteps,
  company.accountDeletionUrl,
  siteConfig.isProductionDomainConfigured || null,
].some((value) => value === null);

export const privacyPolicy: LegalDocument = {
  title: "Privacy Policy",
  subtitle: `${siteConfig.name} — ${siteConfig.tagline}`,
  dates: policyDates.privacy,
  draft: hasPlaceholders,
  details: [
    { label: "Application", value: "Verity" },
    { label: "Developer / Legal Operator", value: operator },
    { label: "Privacy Contact", value: privacyEmail },
    { label: "Website", value: website },
  ],
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      content: (
        <>
          <p>Welcome to Verity.</p>
          <p>
            Verity (&ldquo;Verity,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is a social
            networking and knowledge-sharing platform that enables users to connect, communicate, exchange knowledge,
            engage with communities, consult experts, and discover professional opportunities.
          </p>
          <p>
            We recognize the importance of your privacy and are committed to handling personal information responsibly
            and transparently.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, store, disclose, and protect information when you use the
            Verity mobile application, website, and related services (collectively, the &ldquo;Services&rdquo;).
          </p>
          <p>
            By using Verity, you acknowledge the data practices described in this Privacy Policy. Where consent is
            required by applicable law, we will request it separately.
          </p>
        </>
      ),
    },
    {
      id: "information-we-collect",
      title: "Information We Collect",
      content: (
        <>
          <p>Depending on the features you use, Verity may collect the following categories of information.</p>
          <h3>2.1 Account and Personal Information</h3>
          <p>When you register or manage your account, we may collect:</p>
          <ul>
            <li>Full name and username</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Profile picture</li>
            <li>Password authentication data</li>
            <li>Date of birth or age-related information, where required</li>
            <li>Country, language, and preferences</li>
            <li>Account type (Personal, Creator, or Business)</li>
            <li>Profile biography and interests</li>
          </ul>
          <p>
            Passwords should be protected using secure authentication mechanisms. We do not require users to provide
            their passwords to other users.
          </p>
          <h3>2.2 User-Generated Content</h3>
          <p>We process content you create or upload, including:</p>
          <ul>
            <li>Text posts and comments</li>
            <li>Photos and videos</li>
            <li>Stories and other shared media</li>
            <li>Audio recordings and voice messages</li>
            <li>Reactions, likes, and shares</li>
            <li>Community contributions</li>
            <li>Debate participation</li>
            <li>Questions submitted to experts</li>
            <li>Professional endorsements</li>
          </ul>
          <p>Content you choose to publish publicly may be visible to other users and may be redistributed by them.</p>
          <h3>2.3 Communication Information</h3>
          <p>
            Verity provides communication features that may include private messaging, voice calls, video calls, and
            expert consultations.
          </p>
          <p>Depending on the feature and its technical implementation, we may process:</p>
          <ul>
            <li>Message content</li>
            <li>Shared attachments</li>
            <li>Voice messages</li>
            <li>Call participants</li>
            <li>Call timestamps and duration</li>
            <li>Technical connection information</li>
            <li>Consultation communications</li>
          </ul>
          <p>
            Where end-to-end encryption is implemented, we will describe its scope and limitations accurately in the
            relevant product information.
          </p>
          <p>
            We do not claim that all communications are end-to-end encrypted or that calls are never recorded unless
            those practices have been verified.
          </p>
          <h3>2.4 Professional and Expert Information</h3>
          <p>Users who register as experts or professionals may provide:</p>
          <ul>
            <li>Professional qualifications</li>
            <li>Expertise categories</li>
            <li>Employment history</li>
            <li>Education</li>
            <li>Certifications</li>
            <li>Professional experience</li>
            <li>Consultation availability</li>
            <li>Professional endorsements</li>
            <li>Verification documents, where necessary</li>
          </ul>
          <p>
            Certain professional information may be visible publicly depending on profile settings and platform
            functionality.
          </p>
          <h3>2.5 Technical and Device Information</h3>
          <p>When you use Verity, we may collect:</p>
          <ul>
            <li>Device type and operating system</li>
            <li>Application version</li>
            <li>Device or application identifiers</li>
            <li>IP address</li>
            <li>Language settings</li>
            <li>Diagnostic and crash information</li>
            <li>Performance and error logs</li>
            <li>Session and authentication information</li>
          </ul>
          <p>
            Information collected by integrated third-party software development kits (SDKs) must also be reflected in
            our applicable disclosures.
          </p>
          <h3>2.6 Location Information</h3>
          <p>
            If Verity offers location-dependent functionality, it may process location information when the user enables
            relevant features.
          </p>
          <p>
            This may include approximate location derived from network information or precise location with applicable
            permissions.
          </p>
          <p>The application will disclose when precise location is collected and explain its purpose.</p>
          <h3>2.7 Sensitive Information</h3>
          <p>
            Some users may voluntarily provide sensitive information when requesting expert advice, including
            health-related or other personal circumstances.
          </p>
          <p>Users should avoid sharing unnecessary sensitive information in public posts.</p>
          <p>
            Where sensitive information is processed, Verity will apply appropriate safeguards and any consent or other
            legal requirements applicable to that processing.
          </p>
        </>
      ),
    },
    {
      id: "how-we-use-information",
      title: "How We Use Information",
      content: (
        <>
          <p>We may use personal information to:</p>
          <ol>
            <li>Create and manage user accounts.</li>
            <li>Authenticate users and protect account security.</li>
            <li>Display profiles and user-generated content.</li>
            <li>Personalize feeds and content recommendations.</li>
            <li>Connect users with experts and communities.</li>
            <li>Facilitate messaging, calling, and consultations.</li>
            <li>Support expert verification and endorsements.</li>
            <li>Operate the Trust Ring reputation system.</li>
            <li>Recommend relevant career and professional opportunities.</li>
            <li>Respond to support requests.</li>
            <li>Detect fraud, spam, harassment, and misuse.</li>
            <li>Maintain, troubleshoot, and improve our Services.</li>
            <li>Comply with applicable legal obligations.</li>
          </ol>
          <p>
            We do not use personal information for unrelated purposes without an appropriate legal basis or additional
            notice where required.
          </p>
        </>
      ),
    },
    {
      id: "public-profiles-and-content",
      title: "Public Profiles and Content",
      content: (
        <>
          <p>Verity is a social networking platform, and certain user information may be publicly visible.</p>
          <p>
            Depending on your account settings and the available functionality, this may include your username, profile
            image, biography, publicly shared posts, professional information, and visible community contributions.
          </p>
          <p>
            Users are responsible for selecting appropriate visibility settings and deciding what information to share
            publicly.
          </p>
          <p>
            Even if content is subsequently deleted, copies previously saved or shared by other users may remain outside
            our control.
          </p>
        </>
      ),
    },
    {
      id: "private-messaging-calls-and-expert-consultations",
      title: "Private Messaging, Calls, and Expert Consultations",
      content: (
        <>
          <p>Verity enables users to communicate and exchange information.</p>
          <p>
            Private communication content is intended for authorized participants, subject to the actual service
            architecture, authorized processing, safety operations, and applicable law.
          </p>
          <p>
            Communication information may be processed to deliver messages, establish calls, prevent abuse, and provide
            requested consultations.
          </p>
          <p>
            The availability and scope of encryption, moderation, storage, and recording depend on the implemented
            feature.
          </p>
          <p>
            Verity will not represent a communication as end-to-end encrypted unless it is protected by a verified
            end-to-end encryption implementation.
          </p>
        </>
      ),
    },
    {
      id: "trust-ring-and-reputation-system",
      title: "Trust Ring and Reputation System",
      content: (
        <>
          <p>Verity may use a Trust Ring system designed to support credibility and constructive participation.</p>
          <p>Depending on how the system is implemented, reputation indicators may consider:</p>
          <ul>
            <li>User contributions</li>
            <li>Community engagement</li>
            <li>Professional endorsements</li>
            <li>Account verification</li>
            <li>Compliance with community guidelines</li>
            <li>Other relevant participation signals</li>
          </ul>
          <p>Trust Ring information may influence how users discover profiles or evaluate credibility.</p>
          <p>
            Reputation scores should not be interpreted as a guarantee of a user&apos;s professional competence,
            honesty, or reliability.
          </p>
          <p>
            Where applicable law requires additional rights concerning automated decision-making, users may contact
            Verity using the privacy contact information below.
          </p>
        </>
      ),
    },
    {
      id: "expert-advice-and-health-related-information",
      title: "Expert Advice and Health-Related Information",
      content: (
        <>
          <p>
            Verity allows users to request assistance from individuals presenting professional knowledge or expertise.
          </p>
          <p>Users may submit questions containing personal or sensitive information.</p>
          <p>
            Information provided during consultations may be shared with the experts selected to participate in the
            consultation and with necessary service providers.
          </p>
          <p>
            Expert-generated content is provided by the relevant participant and does not automatically represent
            professional advice endorsed by Verity.
          </p>
          <p>Unless a specific service expressly states otherwise, Verity is not an emergency response service.</p>
          <p>Users experiencing medical emergencies should contact appropriate emergency services.</p>
        </>
      ),
    },
    {
      id: "career-and-professional-opportunities",
      title: "Career and Professional Opportunities",
      content: (
        <>
          <p>Verity may offer professional networking and career-matching functionality.</p>
          <p>Relevant information may include:</p>
          <ul>
            <li>Professional profiles</li>
            <li>Work experience</li>
            <li>Education</li>
            <li>Skills</li>
            <li>Career interests</li>
            <li>Opportunity preferences</li>
          </ul>
          <p>
            Such information may be used to recommend professional opportunities or connect users with relevant
            recruiters and organizations, subject to applicable visibility controls.
          </p>
        </>
      ),
    },
    {
      id: "permissions-used-by-the-android-application",
      title: "Permissions Used by the Android Application",
      content: (
        <>
          <p>Depending on the features implemented, Verity may request the following Android permissions.</p>
          <p>
            <strong>Camera:</strong> To capture profile photos, create media content, participate in video calls, or
            support other camera-enabled features.
          </p>
          <p>
            <strong>Microphone:</strong> To record voice messages, participate in audio/video calls, and create audio
            content.
          </p>
          <p>
            <strong>Photos and Videos:</strong> To select, upload, or share media. Access will be limited to the scope
            of the permissions granted and the features used.
          </p>
          <p>
            <strong>Notifications:</strong> To deliver messages, interaction alerts, consultation reminders, and other
            application notifications.
          </p>
          <p>
            <strong>Location:</strong> Where implemented, to support location-based services, subject to applicable
            permission requirements.
          </p>
          <p>Permissions are requested only when applicable to the implemented functionality.</p>
          <p>
            You can manage permissions through your Android device settings. Restricting permissions may limit certain
            app features.
          </p>
        </>
      ),
    },
    {
      id: "sharing-of-personal-information",
      title: "Sharing of Personal Information",
      content: (
        <>
          <p>We may disclose relevant information in the following circumstances:</p>
          <h3>Other Users</h3>
          <p>
            Information that you publish or intentionally share may be accessible to other users according to the
            applicable feature and visibility settings.
          </p>
          <h3>Experts and Consultation Participants</h3>
          <p>Information you provide during a consultation may be made available to the relevant participants.</p>
          <h3>Service Providers</h3>
          <p>
            We may use authorized service providers for services such as hosting, authentication, analytics,
            notifications, storage, communications, and payment processing.
          </p>
          <p>
            These providers may process data only as appropriate to the services they perform and applicable contractual
            and legal obligations.
          </p>
          <h3>Legal Requirements</h3>
          <p>
            We may disclose information when required by applicable law, valid legal process, or other legally permitted
            circumstances, including protecting users and the security of the Services.
          </p>
          <h3>Business Transactions</h3>
          <p>
            Where permitted by law, data may be transferred as part of a merger, acquisition, restructuring, or transfer
            of business assets, subject to applicable safeguards.
          </p>
          <p>
            We will disclose any additional data-sharing practices, including advertising-related sharing, if such
            activities are implemented.
          </p>
        </>
      ),
    },
    {
      id: "third-party-services",
      title: "Third-Party Services",
      content: (
        <>
          <p>Verity may integrate external services that support application functionality.</p>
          <p>
            These may include infrastructure providers, cloud storage, communication providers, notification services,
            analytics services, or other software integrations.
          </p>
          <p>
            The identity of relevant providers and their data-handling practices should be disclosed where required by
            applicable law.
          </p>
          <p>Third-party services may maintain their own privacy notices.</p>
        </>
      ),
    },
    {
      id: "data-storage-and-security",
      title: "Data Storage and Security",
      content: (
        <>
          <p>
            We use appropriate technical and organizational safeguards designed to protect personal information against
            unauthorized access, disclosure, alteration, or loss.
          </p>
          <p>Depending on the implemented infrastructure, these safeguards may include:</p>
          <ul>
            <li>Encrypted network communications</li>
            <li>Authentication and authorization controls</li>
            <li>Restricted access to sensitive information</li>
            <li>Secure credential management</li>
            <li>Logging and security monitoring</li>
            <li>Infrastructure access restrictions</li>
            <li>Security maintenance and vulnerability remediation</li>
          </ul>
          <p>No internet service or data-storage system can guarantee absolute security.</p>
          <p>Users are encouraged to use strong authentication credentials and protect access to their accounts.</p>
        </>
      ),
    },
    {
      id: "data-retention",
      title: "Data Retention",
      content: (
        <>
          <p>
            We retain personal information for as long as reasonably necessary to provide the Services and fulfill the
            purposes described in this Privacy Policy, subject to applicable laws.
          </p>
          <p>
            Retention periods depend on the type of information, why it was collected, operational needs, and legal
            obligations.
          </p>
          <p>
            Certain information may be retained when legally justified, including for fraud prevention, security,
            dispute resolution, or regulatory compliance.
          </p>
          <p>
            Where such retention applies, the information will be handled according to applicable restrictions and
            retention policies.
          </p>
        </>
      ),
    },
    {
      id: "account-deletion",
      title: "Account Deletion and Data Removal",
      content: (
        <>
          <p>Verity recognizes users&apos; rights to control their accounts and associated information.</p>
          <p>
            Users must be provided with a clear process to request account deletion and associated personal data
            removal.
          </p>
          <h3>In-App Account Deletion</h3>
          <p>{inAppDeletion}</p>
          <h3>Web-Based Account Deletion</h3>
          <p>{webDeletion}</p>
          <h3>Account Deletion Process</h3>
          <p>
            When a valid account deletion request is received, Verity will process the deletion of the account and
            associated personal information in accordance with applicable requirements.
          </p>
          <p>
            Some information may need to be retained for legally permitted reasons, including compliance, fraud
            prevention, or security. Such retention will be limited to the relevant purpose.
          </p>
          <p>Deletion of an account is different from temporarily deactivating it.</p>
          <p>
            Account deletion does not automatically remove copies of previously public content independently saved or
            redistributed by other users.
          </p>
        </>
      ),
    },
    {
      id: "your-privacy-rights",
      title: "Your Privacy Rights",
      content: (
        <>
          <p>Depending on your location and applicable law, you may have rights to:</p>
          <ul>
            <li>Access personal information held about you</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Request a copy of applicable personal data</li>
            <li>Withdraw consent where processing is consent-based</li>
            <li>Object to certain processing</li>
            <li>Request restrictions on certain processing</li>
            <li>Challenge certain automated decisions, where applicable</li>
            <li>Lodge a complaint with a relevant data protection authority</li>
          </ul>
          <p>To exercise an applicable right, contact:</p>
          <p>
            <strong>{privacyEmail}</strong>
          </p>
          <p>We may need to verify your identity before fulfilling a request.</p>
        </>
      ),
    },
    {
      id: "legal-bases-for-processing",
      title: "Legal Bases for Processing",
      content: (
        <>
          <p>
            Where data protection legislation requires a legal basis, Verity will process personal information under an
            applicable basis, which may include:
          </p>
          <ul>
            <li>Performance of a contract</li>
            <li>Legitimate interests, where permitted</li>
            <li>Compliance with legal obligations</li>
            <li>Consent, where required</li>
            <li>Other legally recognized grounds where applicable</li>
          </ul>
          <p>
            The specific basis depends on the processing activity, the jurisdiction, and the nature of the information.
          </p>
          <p>Where special-category or sensitive information is processed, additional legal conditions may apply.</p>
        </>
      ),
    },
    {
      id: "childrens-privacy",
      title: "Children's Privacy",
      content: (
        <>
          <p>Verity is committed to respecting the privacy of children and young people.</p>
          <p>
            The minimum permitted age for creating an account will be stated in Verity&apos;s Terms of Service and
            enforced according to the application&apos;s verified age-eligibility policies and applicable laws.
          </p>
          <p>
            If we become aware that personal information was collected from a child in violation of applicable law, we
            will take appropriate steps to address the issue, including deletion where required.
          </p>
          <p>Parents or guardians with concerns may contact the privacy team.</p>
        </>
      ),
    },
    {
      id: "international-data-transfers",
      title: "International Data Transfers",
      content: (
        <>
          <p>Verity may use infrastructure or service providers located outside the country where a user resides.</p>
          <p>
            Where personal information is transferred internationally, we will apply safeguards required by relevant
            data protection laws.
          </p>
          <p>Users may contact us for additional information about applicable international transfer arrangements.</p>
        </>
      ),
    },
    {
      id: "cookies-analytics-and-similar-technologies",
      title: "Cookies, Analytics, and Similar Technologies",
      content: (
        <>
          <p>
            Verity&apos;s website and application may use cookies, application identifiers, local storage, analytics
            tools, and related technologies.
          </p>
          <p>These technologies may support:</p>
          <ul>
            <li>Authentication</li>
            <li>Session management</li>
            <li>User preferences</li>
            <li>Security</li>
            <li>Performance monitoring</li>
            <li>Service analytics</li>
            <li>Personalization, where implemented</li>
          </ul>
          <p>
            Where legally required, we will obtain consent before activating nonessential tracking technologies and
            provide appropriate controls.
          </p>
        </>
      ),
    },
    {
      id: "notifications-and-user-choices",
      title: "Notifications and User Choices",
      content: (
        <>
          <p>Verity may provide push notifications related to:</p>
          <ul>
            <li>New messages</li>
            <li>Comments and reactions</li>
            <li>Community activity</li>
            <li>Expert responses</li>
            <li>Consultation reminders</li>
            <li>Account security</li>
          </ul>
          <p>
            Users may manage notification permissions through their device settings and available Verity preferences.
          </p>
        </>
      ),
    },
    {
      id: "changes-to-this-privacy-policy",
      title: "Changes to This Privacy Policy",
      content: (
        <>
          <p>
            We may update this Privacy Policy to reflect changes in our Services, technical practices, or applicable
            laws.
          </p>
          <p>When material changes occur, we will provide notice as required.</p>
          <p>
            The latest version will be made available through our website and updated with the relevant revision date.
          </p>
        </>
      ),
    },
    {
      id: "contact",
      title: "Contact Us",
      content: (
        <>
          <p>
            If you have questions, concerns, or requests concerning this Privacy Policy or your personal information,
            please contact:
          </p>
          <ContactDetails />
          <p>We will review privacy-related inquiries and respond in accordance with applicable legal requirements.</p>
        </>
      ),
    },
  ],
};
