import {
  BadgeCheck,
  Bookmark,
  Calendar,
  Heart,
  House,
  Lock,
  MessageSquare,
  Mic,
  Search,
  Send,
  Share2,
  Sparkles,
  Users,
  Video,
} from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Illustrative product UI rendered in HTML/CSS. These are design concepts of
 * the Verity app, not screenshots of a shipped build — sample people and posts
 * are fictional.
 */

export function PhoneFrame({
  children,
  className,
  label,
}: {
  children: ReactNode;
  className?: string;
  label: string;
}) {
  return (
    <figure
      className={cn(
        "relative w-[260px] shrink-0 rounded-[2.6rem] border border-black/10 bg-[#0b0f1c] p-[9px] shadow-[0_40px_80px_-24px_rgb(30_27_75/0.45),0_0_0_1px_rgb(255_255_255/0.06)_inset] dark:border-white/10",
        className,
      )}
    >
      <figcaption className="sr-only">{label} (illustrative concept)</figcaption>
      <div
        aria-hidden
        className="relative h-[530px] overflow-hidden rounded-[2.1rem] bg-white text-[#111827] dark:bg-[#0f1530] dark:text-gray-100"
      >
        <div className="absolute left-1/2 top-2 z-10 h-[22px] w-[84px] -translate-x-1/2 rounded-full bg-[#0b0f1c]" />
        <div className="flex h-9 items-end justify-between px-6 pb-1 text-[10px] font-semibold">
          <span>9:41</span>
          <span className="flex items-center gap-1">
            <span className="h-2 w-3 rounded-sm bg-current opacity-80" />
          </span>
        </div>
        {children}
      </div>
    </figure>
  );
}

function Avatar({ initials, tone = "indigo", size = "md" }: { initials: string; tone?: "indigo" | "violet" | "cyan" | "amber"; size?: "sm" | "md" | "lg" }) {
  const tones = {
    indigo: "from-indigo-500 to-violet-500",
    violet: "from-violet-500 to-fuchsia-500",
    cyan: "from-cyan-500 to-indigo-500",
    amber: "from-amber-400 to-rose-500",
  };
  const sizes = { sm: "size-6 text-[9px]", md: "size-8 text-[10px]", lg: "size-14 text-base" };
  return (
    <span className={cn("inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br font-semibold text-white", tones[tone], sizes[size])}>
      {initials}
    </span>
  );
}

function TabBar({ active }: { active: number }) {
  const items = [House, Search, Users, MessageSquare];
  return (
    <div className="absolute inset-x-0 bottom-0 flex items-center justify-around border-t border-black/5 bg-white/90 pb-5 pt-2.5 backdrop-blur dark:border-white/10 dark:bg-[#0f1530]/90">
      {items.map((Icon, i) => (
        <Icon key={i} className={cn("size-[18px]", i === active ? "text-indigo-600 dark:text-indigo-300" : "text-gray-400")} />
      ))}
    </div>
  );
}

const feedCategories = ["Learn", "Debate", "Entertain", "Build", "Sell", "Inspire"];

export function FeedScreen() {
  return (
    <div className="relative h-full px-4">
      <div className="flex items-center justify-between pt-1">
        <span className="text-[17px] font-semibold tracking-tight">For you</span>
        <Sparkles className="size-4 text-violet-500" />
      </div>
      <div className="mt-3 flex gap-1.5 overflow-hidden">
        {feedCategories.map((c, i) => (
          <span
            key={c}
            className={cn(
              "shrink-0 rounded-full px-2.5 py-1 text-[10px] font-medium",
              i === 0 ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-300",
            )}
          >
            {c}
          </span>
        ))}
      </div>

      <article className="mt-4 rounded-2xl border border-black/5 p-3 dark:border-white/10">
        <div className="flex items-center gap-2">
          <Avatar initials="AM" />
          <div className="min-w-0">
            <p className="flex items-center gap-1 text-[11px] font-semibold">
              Amara Mensah <BadgeCheck className="size-3 text-indigo-500" />
            </p>
            <p className="text-[9px] text-gray-500 dark:text-gray-400">Data scientist · Learn</p>
          </div>
        </div>
        <p className="mt-2.5 text-[11px] leading-snug">
          Three habits that made statistics finally click for me — a short thread for anyone starting out.
        </p>
        <div className="mt-2.5 h-24 rounded-xl bg-gradient-to-br from-indigo-100 via-violet-100 to-cyan-100 p-2.5 dark:from-indigo-500/20 dark:via-violet-500/20 dark:to-cyan-500/20">
          <div className="flex h-full items-end gap-1.5">
            {[40, 65, 50, 85, 70, 95].map((h, i) => (
              <span key={i} className="flex-1 rounded-t bg-gradient-to-t from-indigo-500 to-violet-400" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
        <div className="mt-2.5 flex items-center justify-between text-gray-500 dark:text-gray-400">
          <span className="flex items-center gap-3 text-[10px]">
            <span className="flex items-center gap-1"><Heart className="size-3" /> 1.2k</span>
            <span className="flex items-center gap-1"><MessageSquare className="size-3" /> 86</span>
            <Share2 className="size-3" />
          </span>
          <Bookmark className="size-3" />
        </div>
      </article>

      <article className="mt-3 rounded-2xl border border-black/5 p-3 dark:border-white/10">
        <div className="flex items-center gap-2">
          <Avatar initials="JL" tone="cyan" />
          <div>
            <p className="text-[11px] font-semibold">Jon Lee</p>
            <p className="text-[9px] text-gray-500 dark:text-gray-400">Product designer · Build</p>
          </div>
        </div>
        <p className="mt-2.5 text-[11px] leading-snug">Shipping our first community toolkit this week. Feedback welcome!</p>
      </article>
      <TabBar active={0} />
    </div>
  );
}

export function ExpertScreen() {
  return (
    <div className="relative h-full px-4">
      <div className="flex items-center gap-2 pt-1">
        <Avatar initials="SK" tone="violet" />
        <div>
          <p className="flex items-center gap-1 text-[12px] font-semibold">
            Dr. Sara Kim <BadgeCheck className="size-3.5 text-indigo-500" />
          </p>
          <p className="text-[9px] text-gray-500 dark:text-gray-400">Verified · Nutrition & dietetics</p>
        </div>
        <Lock className="ml-auto size-3.5 text-gray-400" />
      </div>
      <p className="mt-3 rounded-lg bg-gray-50 px-2.5 py-1.5 text-center text-[9px] text-gray-500 dark:text-gray-400 dark:bg-white/5">
        Private question · only you and the expert can see this
      </p>
      <div className="mt-3 space-y-2.5">
        <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-indigo-600 px-3 py-2 text-[11px] leading-snug text-white">
          I train for half-marathons. How should I plan meals on long-run days?
        </div>
        <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-gray-100 px-3 py-2 text-[11px] leading-snug dark:bg-white/10">
          Great question. Start with a carb-focused meal 2–3 hours before, then…
        </div>
        <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-gray-100 px-3 py-2 text-[11px] leading-snug dark:bg-white/10">
          Want to go deeper? I have consultation slots this week.
        </div>
      </div>
      <div className="mt-3 rounded-2xl border border-indigo-200 bg-indigo-50 p-3 dark:border-indigo-400/30 dark:bg-indigo-500/10">
        <p className="flex items-center gap-1.5 text-[11px] font-semibold text-indigo-700 dark:text-indigo-200">
          <Calendar className="size-3.5" /> Book a consultation
        </p>
        <div className="mt-2 grid grid-cols-3 gap-1.5 text-[10px]">
          {[
            { icon: MessageSquare, label: "Text" },
            { icon: Mic, label: "Voice" },
            { icon: Video, label: "Video" },
          ].map(({ icon: Icon, label }, i) => (
            <span
              key={label}
              className={cn(
                "flex flex-col items-center gap-1 rounded-lg border py-1.5",
                i === 2 ? "border-indigo-500 bg-white text-indigo-700 dark:bg-white/10 dark:text-indigo-200" : "border-black/5 bg-white/60 text-gray-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300",
              )}
            >
              <Icon className="size-3.5" />
              {label}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-4 bottom-6 flex items-center gap-2 rounded-full border border-black/10 px-3 py-2 dark:border-white/15">
        <span className="flex-1 text-[10px] text-gray-500 dark:text-gray-400">Write a reply…</span>
        <Send className="size-3.5 text-indigo-500" />
      </div>
    </div>
  );
}

export function TrustRingScreen() {
  const r = 46;
  const circumference = 2 * Math.PI * r;
  return (
    <div className="relative h-full px-4">
      <p className="pt-1 text-[17px] font-semibold tracking-tight">Trust Ring</p>
      <div className="mt-4 flex flex-col items-center">
        <div className="relative size-36">
          <svg viewBox="0 0 120 120" className="size-full -rotate-90">
            <defs>
              <linearGradient id="ring-mock" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#4F46E5" />
                <stop offset="60%" stopColor="#7C3AED" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
            <circle cx="60" cy="60" r={r} fill="none" strokeWidth="10" className="stroke-gray-100 dark:stroke-white/10" />
            <circle
              cx="60"
              cy="60"
              r={r}
              fill="none"
              stroke="url(#ring-mock)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference * 0.22}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Avatar initials="AM" size="lg" />
          </div>
        </div>
        <p className="mt-3 text-[13px] font-semibold">Amara Mensah</p>
        <p className="text-[10px] text-gray-500 dark:text-gray-400">Trusted contributor · Data science</p>
      </div>
      <ul className="mt-5 space-y-2 text-[11px]">
        {[
          { label: "Helpful answers", value: "142" },
          { label: "Peer endorsements", value: "38" },
          { label: "Constructive debates", value: "21" },
        ].map((row) => (
          <li key={row.label} className="flex items-center justify-between rounded-xl bg-gray-50 px-3 py-2 dark:bg-white/5">
            <span className="text-gray-600 dark:text-gray-300">{row.label}</span>
            <span className="font-semibold">{row.value}</span>
          </li>
        ))}
      </ul>
      <TabBar active={2} />
    </div>
  );
}

/** Small floating UI chip used around mockups. */
export function FloatingChip({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "absolute z-10 flex items-center gap-2 rounded-2xl border border-border bg-surface/90 px-3 py-2 text-xs font-medium text-foreground shadow-lg backdrop-blur-xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
