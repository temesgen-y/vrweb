import Link from "next/link";
import { Container } from "@/components/ui/primitives";
import { mainNav, siteConfig } from "@/config/site";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme";

const linkClass = "text-sm text-muted transition-colors hover:text-foreground";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-background-subtle">
      <Container className="py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="inline-block rounded-lg" aria-label="Verity home">
              <Logo />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {siteConfig.tagline} Verity brings people together through knowledge sharing, trusted expertise,
              communities, and real opportunities.
            </p>
            <div className="mt-6">
              <ThemeToggle />
            </div>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
              {siteConfig.contactEmail ? (
                <li>
                  <a href={`mailto:${siteConfig.contactEmail}`} className={linkClass}>
                    Contact
                  </a>
                </li>
              ) : null}
            </ul>
          </nav>
        </div>

        <p className="mt-14 border-t border-border pt-8 text-sm text-subtle">
          © {new Date().getFullYear()} Verity. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
