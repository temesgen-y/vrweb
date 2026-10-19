import { BadgeCheck, HeartHandshake, Lock, ShieldCheck } from "lucide-react";
import { FinalCta, StepsTimeline } from "@/components/sections/common";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Hero } from "@/components/sections/hero";
import { ExpertScreen, PhoneFrame, TrustRingScreen } from "@/components/sections/phone-mockup";
import { Reveal } from "@/components/sections/reveal";
import { Container, Eyebrow, IconTile, Section, SectionHeader } from "@/components/ui/primitives";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  description: siteConfig.description,
  path: "/",
});

const categories = [
  { name: "Learn", hint: "Pick up skills and ideas" },
  { name: "Debate", hint: "Test arguments respectfully" },
  { name: "Entertain", hint: "Enjoy creative work" },
  { name: "Build", hint: "Share what you're making" },
  { name: "Sell", hint: "Offer products and services" },
  { name: "Inspire", hint: "Stories that move you" },
];

const trustPillars = [
  {
    icon: HeartHandshake,
    title: "Meaningful by design",
    description:
      "Verity rewards helpful, constructive contribution — not outrage. Trust Ring makes credibility visible so good voices rise.",
  },
  {
    icon: Lock,
    title: "Privacy you control",
    description:
      "Private questions stay private. You decide what appears on your public profile and who can contact you.",
  },
  {
    icon: BadgeCheck,
    title: "Verified expertise",
    description:
      "Experts go through professional verification before they can answer questions or offer consultations.",
  },
  {
    icon: ShieldCheck,
    title: "Respectful environment",
    description:
      "Clear community guidelines, reporting and blocking tools, and moderation keep conversations safe and civil.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Hero />

      {/* Feed categories strip */}
      <section aria-labelledby="categories-heading" className="border-y border-border bg-background-subtle">
        <Container className="py-10">
          <h2 id="categories-heading" className="text-center text-sm font-medium text-subtle">
            One feed, six intentions — choose how you spend your time
          </h2>
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {categories.map((c) => (
              <li
                key={c.name}
                className="rounded-2xl border border-border bg-surface px-4 py-3 text-center transition-colors hover:border-primary/30"
              >
                <p className="font-semibold text-foreground">{c.name}</p>
                <p className="mt-0.5 text-xs text-subtle">{c.hint}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Section id="features">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Featured capabilities"
              title="Everything you need to learn, connect, and grow"
              description="Verity combines a thoughtful social feed with access to real expertise, communities, and opportunities."
            />
          </Reveal>
          <div className="mt-14">
            <FeatureGrid />
          </div>
          <p className="mt-8 text-center text-sm text-subtle">
            Verity is in development. Status labels show what&apos;s available today and what&apos;s on the way.
          </p>
        </Container>
      </Section>

      {/* Expert spotlight */}
      <Section id="experts" className="overflow-hidden bg-background-subtle">
        <Container className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Ask an Expert</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Answers from people who <span className="font-serif font-normal italic">actually</span> know
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Ask a verified expert a private question, then continue with a scheduled text, voice, or video
              consultation when you need more depth.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Private by default — only you and the expert see the conversation",
                "Experts are verified before they can answer",
                "Book text, voice, or video consultations",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-foreground">
                  <BadgeCheck className="mt-0.5 size-5 shrink-0 text-primary dark:text-link" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="relative flex justify-center gap-6">
            <div aria-hidden className="absolute inset-10 rounded-full bg-gradient-to-br from-primary/25 to-accent/20 blur-3xl" />
            <PhoneFrame label="Private expert conversation" className="relative">
              <ExpertScreen />
            </PhoneFrame>
            <PhoneFrame label="Trust Ring profile" className="relative mt-16 hidden sm:block">
              <TrustRingScreen />
            </PhoneFrame>
          </Reveal>
        </Container>
      </Section>

      <Section id="how-it-works">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="How Verity works"
              title="From your first post to your next opportunity"
              description="Five simple steps take you from joining to building real credibility."
            />
          </Reveal>
          <Reveal delay={0.1} className="mt-16">
            <StepsTimeline />
          </Reveal>
        </Container>
      </Section>

      <Section id="trust" className="pt-0 sm:pt-0">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Trust & community"
              title="A social network you can trust"
              description="We're building Verity around meaningful connection, privacy, security, and respect."
            />
          </Reveal>
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustPillars.map(({ icon: Icon, title, description }, i) => (
              <li key={title}>
                <Reveal delay={i * 0.06} className="h-full rounded-3xl border border-border bg-surface p-7">
                  <IconTile>
                    <Icon aria-hidden />
                  </IconTile>
                  <h3 className="mt-6 font-semibold text-foreground">{title}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{description}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <FinalCta />
    </>
  );
}

function JsonLd() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/icon.svg`,
      slogan: siteConfig.tagline,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
    },
  ];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
