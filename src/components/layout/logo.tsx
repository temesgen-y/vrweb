import { cn } from "@/lib/utils";

/** Verity mark: a ring (trust) around a "V" that doubles as a check mark. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className={cn("size-8", className)}>
      <defs>
        <linearGradient id="verity-mark" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4F46E5" />
          <stop offset="0.6" stopColor="#7C3AED" />
          <stop offset="1" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill="url(#verity-mark)" />
      <circle cx="16" cy="16" r="10.5" fill="none" stroke="#fff" strokeOpacity="0.35" strokeWidth="1.5" />
      <path
        d="M10.5 12.5 15 21.5 21.5 9.5"
        fill="none"
        stroke="#fff"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="text-lg font-semibold tracking-tight text-foreground">Verity</span>
    </span>
  );
}
