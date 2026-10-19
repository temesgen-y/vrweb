import type { ComponentProps, ReactNode } from "react";
import { featureStatusLabel, type FeatureStatus } from "@/config/features";
import { cn } from "@/lib/utils";

export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)} {...props} />;
}

export function Section({ className, ...props }: ComponentProps<"section">) {
  return <section className={cn("relative py-20 sm:py-28", className)} {...props} />;
}

export function Eyebrow({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary dark:text-link",
        className,
      )}
    >
      <span aria-hidden className="h-px w-6 bg-gradient-to-r from-primary to-secondary" />
      {children}
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center [&>p:first-child]:justify-center" : "",
        className,
      )}
    >
      {eyebrow ? <Eyebrow className={align === "center" ? "justify-center" : ""}>{eyebrow}</Eyebrow> : null}
      <Heading className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </Heading>
      {description ? <p className="mt-5 text-lg leading-relaxed text-muted">{description}</p> : null}
    </div>
  );
}

const statusStyles: Record<FeatureStatus, string> = {
  live: "border-success/30 bg-success/10 text-success",
  beta: "border-primary/30 bg-primary/10 text-primary dark:text-link",
  "in-development": "border-border-strong bg-surface-2 text-muted",
};

export function StatusBadge({ status, className }: { status: FeatureStatus; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[0.6875rem] font-medium tracking-wide",
        statusStyles[status],
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "size-1.5 rounded-full",
          status === "live" ? "bg-success" : status === "beta" ? "bg-primary" : "bg-subtle animate-pulse-soft",
        )}
      />
      {featureStatusLabel[status]}
    </span>
  );
}

export function IconTile({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "relative inline-flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white shadow-[0_8px_20px_-8px_rgb(79_70_229/0.7)] [&_svg]:size-5",
        className,
      )}
    >
      <span aria-hidden className="absolute inset-px rounded-[11px] bg-gradient-to-b from-white/20 to-transparent" />
      <span className="relative">{children}</span>
    </span>
  );
}


/** Highlighted marker for business/legal facts that still need confirmation. */
export function ToConfirm({ children }: { children: ReactNode }) {
  return (
    <mark
      className="rounded border border-dashed border-warning-border bg-warning-bg px-1 py-px font-medium text-warning [print-color-adjust:exact]"
      title="Requires confirmation before publication"
    >
      [To confirm: {children}]
    </mark>
  );
}

/** Renders a configured value, or a ToConfirm marker when it is not set. */
export function Fact({ value, label }: { value: ReactNode | null | undefined; label: string }) {
  if (value === null || value === undefined || value === "") return <ToConfirm>{label}</ToConfirm>;
  return <>{value}</>;
}
