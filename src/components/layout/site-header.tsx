"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { ButtonLink } from "@/components/ui/button";
import { joinHref, mainNav } from "@/config/site";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll and support Escape while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 h-[var(--header-height)] border-b transition-[background-color,border-color,backdrop-filter] duration-300",
          open ? "z-[55]" : "z-40",
          scrolled || open
            ? "border-border bg-background/80 backdrop-blur-xl backdrop-saturate-150"
            : "border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/" onClick={close} className="rounded-lg" aria-label="Verity home">
            <Logo />
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={item.href === pathname ? "page" : undefined}
                    className="rounded-full px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground aria-[current=page]:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle className="hidden xl:inline-flex" />
            <ButtonLink href={joinHref} size="sm" className="hidden sm:inline-flex" onClick={close}>
              Join Verity
              <ArrowRight className="transition-transform group-hover/button:translate-x-0.5" aria-hidden />
            </ButtonLink>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-full text-foreground hover:bg-surface-2 lg:hidden"
              aria-expanded={open}
              aria-controls={menuId}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
            </button>
          </div>
        </div>
      </header>

      {/* Outside <header>: its backdrop-filter would otherwise become the containing block for this fixed panel. */}
      <div
        id={menuId}
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[var(--header-height)] z-[55] overflow-y-auto border-t border-border bg-background lg:hidden"
      >
        <nav aria-label="Mobile" className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <ul className="space-y-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  aria-current={item.href === pathname ? "page" : undefined}
                  className="flex items-center rounded-xl px-4 py-3.5 text-lg font-medium text-foreground transition-colors hover:bg-surface-2 aria-[current=page]:bg-surface-2"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-4 border-t border-border pt-6">
            <ButtonLink href={joinHref} size="lg" onClick={close}>
              Join Verity
              <ArrowRight aria-hidden />
            </ButtonLink>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">Appearance</span>
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
