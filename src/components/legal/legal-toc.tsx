"use client";

import { ChevronDown, ListTree } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type TocItem = { id: string; title: string };

/** Tracks the section whose heading has most recently scrolled past the top of the viewport. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      // Anchor jumps land a section ~216px down (scroll-padding + scroll-margin).
      const line = 240;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(atBottom ? ids[ids.length - 1] : current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    // The browser's initial jump to #hash can land short once layout settles; re-align once.
    const target = location.hash ? document.getElementById(decodeURIComponent(location.hash.slice(1))) : null;
    if (target && ids.includes(target.id)) target.scrollIntoView({ block: "start", behavior: "instant" });
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids]);

  return [active, setActive] as const;
}

function TocList({
  items,
  active,
  onSelect,
}: {
  items: TocItem[];
  active: string;
  onSelect: (id: string) => void;
}) {
  return (
    <ol className="space-y-0.5 border-l border-border">
      {items.map((item, i) => {
        const isActive = item.id === active;
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={isActive ? "location" : undefined}
              onClick={() => onSelect(item.id)}
              className={cn(
                "-ml-px flex gap-2.5 border-l-2 py-1.5 pl-4 pr-2 text-sm leading-snug transition-colors",
                isActive
                  ? "border-primary font-medium text-foreground dark:border-link"
                  : "border-transparent text-muted hover:border-border-strong hover:text-foreground",
              )}
            >
              <span className={cn("w-5 shrink-0 tabular-nums", isActive ? "text-primary dark:text-link" : "text-subtle")}>
                {i + 1}.
              </span>
              <span>{item.title}</span>
            </a>
          </li>
        );
      })}
    </ol>
  );
}

export function LegalToc({ items }: { items: TocItem[] }) {
  const [ids] = useState(() => items.map((i) => i.id));
  const [active, setActive] = useActiveSection(ids);
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const activeIndex = Math.max(0, items.findIndex((i) => i.id === active));

  return (
    <>
      {/* Mobile / tablet: collapsible bar under the site header */}
      <div className="no-print sticky top-[var(--header-height)] z-30 -mx-4 border-b border-border bg-background/90 px-4 backdrop-blur-xl sm:-mx-6 sm:px-6 lg:hidden">
        <details ref={detailsRef} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-3 text-sm font-medium text-foreground [&::-webkit-details-marker]:hidden">
            <span className="flex min-w-0 items-center gap-2">
              <ListTree className="size-4 shrink-0 text-subtle" aria-hidden />
              <span className="shrink-0 text-subtle">On this page:</span>
              <span className="truncate">
                {activeIndex + 1}. {items[activeIndex]?.title}
              </span>
            </span>
            <ChevronDown className="size-4 shrink-0 text-subtle transition-transform group-open:rotate-180" aria-hidden />
          </summary>
          <nav aria-label="Table of contents" className="max-h-[60vh] overflow-y-auto pb-4">
            <TocList
              items={items}
              active={active}
              onSelect={(id) => {
                setActive(id);
                if (detailsRef.current) detailsRef.current.open = false;
              }}
            />
          </nav>
        </details>
      </div>

      {/* Desktop: sticky sidebar */}
      <nav aria-label="Table of contents" className="no-print hidden lg:block">
        <div className="sticky top-[calc(var(--header-height)+2rem)] max-h-[calc(100vh-var(--header-height)-4rem)] overflow-y-auto pb-8 pr-2">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-subtle">Contents</p>
          <TocList items={items} active={active} onSelect={setActive} />
        </div>
      </nav>
    </>
  );
}
