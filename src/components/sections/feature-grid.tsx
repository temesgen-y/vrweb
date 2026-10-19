"use client";

import type { PointerEvent } from "react";
import { IconTile, StatusBadge } from "@/components/ui/primitives";
import { featuredFeatures } from "@/config/features";

function trackPointer(e: PointerEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
}

/** Homepage capability cards with a pointer-following spotlight. */
export function FeatureGrid() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {featuredFeatures.map((feature) => {
        const Icon = feature.icon;
        return (
          <li key={feature.id}>
            <article
              onPointerMove={trackPointer}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface p-7 shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(420px circle at var(--x, 50%) var(--y, 0%), color-mix(in oklab, var(--primary) 12%, transparent), transparent 60%)",
                }}
              />
              <div className="relative flex items-start justify-between gap-4">
                <IconTile>
                  <Icon aria-hidden />
                </IconTile>
                <StatusBadge status={feature.status} />
              </div>
              <h3 className="relative mt-6 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="relative mt-2 flex-1 text-[0.9375rem] leading-relaxed text-muted">{feature.summary}</p>
            </article>
          </li>
        );
      })}
    </ul>
  );
}
