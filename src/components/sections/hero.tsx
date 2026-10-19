import { ArrowRight, BadgeCheck, CircleDot, MessageCircleQuestion } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/primitives";
import { joinHref } from "@/config/site";
import { ExpertScreen, FeedScreen, FloatingChip, PhoneFrame, TrustRingScreen } from "./phone-mockup";

export function BackgroundGlow({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
      <div className="absolute -top-40 left-1/2 h-[560px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(79_70_229/0.22),transparent)] blur-2xl dark:bg-[radial-gradient(closest-side,rgb(99_102_241/0.32),transparent)]" />
      <div className="absolute -right-40 top-40 h-[420px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgb(124_58_237/0.16),transparent)] blur-2xl dark:bg-[radial-gradient(closest-side,rgb(139_92_246/0.25),transparent)]" />
      <div className="absolute -left-40 top-72 h-[380px] w-[480px] rounded-full bg-[radial-gradient(closest-side,rgb(6_182_212/0.14),transparent)] blur-2xl dark:bg-[radial-gradient(closest-side,rgb(34_211_238/0.18),transparent)]" />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative -mt-[var(--header-height)] overflow-hidden pt-[var(--header-height)]">
      <BackgroundGlow />
      <Container className="relative grid items-center gap-16 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:pb-28 lg:pt-24">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 py-1 pl-1 pr-3 text-xs font-medium text-muted shadow-sm backdrop-blur">
            <span className="rounded-full bg-gradient-to-r from-primary to-secondary px-2 py-0.5 text-[0.6875rem] font-semibold text-white">
              Coming soon
            </span>
            Where Knowledge Meets Connection
          </p>
          <h1 className="mt-6 text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.035em] text-foreground sm:text-6xl lg:text-[4.5rem]">
            Connect. Learn.
            <br />
            Share. <span className="font-serif font-normal italic tracking-[-0.01em] text-gradient">Grow.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            Verity brings meaningful conversations, trusted expertise, inspiring communities, and real opportunities
            together in one social platform.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={joinHref} size="lg">
              Join Verity
              <ArrowRight className="transition-transform group-hover/button:translate-x-0.5" aria-hidden />
            </ButtonLink>
            <ButtonLink href="#features" size="lg" variant="outline">
              Explore Features
            </ButtonLink>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { term: "Feed categories", value: "6" },
              { term: "Ways to consult", value: "3" },
              { term: "Focus", value: "Trust" },
            ].map((item) => (
              <div key={item.term}>
                <dt className="text-xs text-subtle">{item.term}</dt>
                <dd className="mt-1 text-2xl font-semibold tracking-tight text-foreground">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto h-[560px] w-full max-w-[560px] sm:h-[600px]">
          <div
            aria-hidden
            className="absolute inset-x-8 bottom-6 top-16 rounded-[3rem] bg-gradient-to-br from-primary/25 via-secondary/20 to-accent/20 blur-3xl"
          />
          <div className="absolute left-1/2 top-4 z-20 -translate-x-1/2 animate-float sm:top-0">
            <PhoneFrame label="Verity smart feed">
              <FeedScreen />
            </PhoneFrame>
          </div>
          <div className="absolute left-0 top-24 z-10 hidden -rotate-6 animate-float-delayed opacity-95 sm:block">
            <PhoneFrame label="Ask an Expert conversation" className="scale-[0.82]">
              <ExpertScreen />
            </PhoneFrame>
          </div>
          <div className="absolute right-0 top-24 z-10 hidden rotate-6 animate-float-delayed opacity-95 sm:block">
            <PhoneFrame label="Trust Ring profile" className="scale-[0.82]">
              <TrustRingScreen />
            </PhoneFrame>
          </div>

          <FloatingChip className="bottom-24 left-0 sm:bottom-20 sm:left-2">
            <span className="inline-flex size-7 items-center justify-center rounded-full bg-primary/10 text-primary dark:text-link">
              <MessageCircleQuestion className="size-3.5" />
            </span>
            An expert replied
          </FloatingChip>
          <FloatingChip className="right-0 top-10 sm:right-4">
            <CircleDot className="size-4 text-secondary" />
            Trust Ring +3
          </FloatingChip>
          <FloatingChip className="bottom-8 right-2 sm:right-10">
            <BadgeCheck className="size-4 text-primary dark:text-link" />
            Verified expert
          </FloatingChip>
        </div>
      </Container>
      <p className="sr-only">Product imagery on this page shows illustrative design concepts of the Verity app.</p>
    </section>
  );
}
