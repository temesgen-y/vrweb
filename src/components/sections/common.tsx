import { Bell, Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/primitives";
import { waitlistMailto } from "@/config/site";

export const steps = [
  {
    title: "Join Verity",
    description: "Create your account, choose a username, and decide how you'd like to appear.",
  },
  {
    title: "Personalise your profile",
    description: "Add your interests, skills, and — if you're a professional — your expertise.",
  },
  {
    title: "Discover communities & experts",
    description: "Find communities that match your interests and experts in the fields you care about.",
  },
  {
    title: "Share ideas & engage",
    description: "Post, ask, debate respectfully, and help others with what you know.",
  },
  {
    title: "Build credibility & find opportunities",
    description: "Grow your Trust Ring through meaningful contribution and get matched with opportunities.",
  },
];

export function StepsTimeline() {
  return (
    <ol className="relative grid gap-4 md:grid-cols-5 md:gap-3">
      <span
        aria-hidden
        className="absolute left-[1.375rem] top-6 h-[calc(100%-3rem)] w-px bg-gradient-to-b from-primary via-secondary to-accent md:left-[10%] md:right-[10%] md:top-[1.375rem] md:h-px md:w-auto md:bg-gradient-to-r"
      />
      {steps.map((step, i) => (
        <li key={step.title} className="relative flex gap-4 md:flex-col md:items-center md:text-center">
          <span className="relative z-10 inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-sm font-semibold text-foreground shadow-md">
            <span className="text-gradient">{String(i + 1).padStart(2, "0")}</span>
          </span>
          <div className="pb-6 md:pb-0 md:pt-5">
            <h3 className="font-semibold text-foreground">{step.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/** Closing call to action; the header's "Join Verity" button scrolls here. */
export function FinalCta() {
  return (
    <Section id="join" className="pt-0 sm:pt-0">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-[#0b1020] px-6 py-16 text-center shadow-lg sm:px-16 sm:py-24">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(60%_80%_at_20%_0%,rgb(79_70_229/0.55),transparent),radial-gradient(50%_70%_at_90%_100%,rgb(124_58_237/0.5),transparent),radial-gradient(40%_50%_at_60%_40%,rgb(6_182_212/0.22),transparent)]"
          />
          <div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Join a Community That Helps You Grow.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-indigo-100/85">
            Verity is coming soon to iOS and Android. Be among the first to try it when it launches.
          </p>
          <div className="mt-10 flex justify-center">
            {waitlistMailto ? (
              <a
                href={waitlistMailto}
                className={buttonVariants({
                  size: "lg",
                  className: "bg-white text-[#111827] shadow-none hover:bg-indigo-50 hover:shadow-none",
                })}
              >
                <Mail aria-hidden />
                Notify me at launch
              </a>
            ) : (
              <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-3 text-sm font-medium text-white">
                <Bell className="size-4" aria-hidden />
                Waitlist sign-ups open soon
              </p>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
