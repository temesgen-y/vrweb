import { Mail, TriangleAlert } from "lucide-react";
import type { ReactNode } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Container, Eyebrow, Fact } from "@/components/ui/primitives";
import { formatPolicyDate } from "@/config/company";
import { LegalToc } from "./legal-toc";
import { PrintButton } from "./print-button";

export type LegalSection = { id: string; title: string; content: ReactNode };

export type LegalDocument = {
  title: string;
  subtitle: string;
  dates: { effective: string | null; lastUpdated: string };
  /** Extra facts shown under the dates, e.g. operator and contact. */
  details?: { label: string; value: ReactNode }[];
  /** Shows the "unfinished" notice while placeholders remain. */
  draft?: boolean;
  sections: LegalSection[];
};

export function LegalLayout({
  doc,
  eyebrow = "Legal",
  cta,
}: {
  doc: LegalDocument;
  eyebrow?: string;
  cta?: { title: string; description: string; href: string; label: string };
}) {
  return (
    <div className="relative">
      <header className="relative overflow-hidden border-b border-border bg-background-subtle">
        <div aria-hidden className="bg-grid absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <Container className="relative pb-12 pt-14 sm:pb-16 sm:pt-20">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-foreground sm:text-5xl">{doc.title}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{doc.subtitle}</p>
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-sm">
            <div>
              <dt className="text-subtle">Effective date</dt>
              <dd className="mt-1 font-medium text-foreground">
                {doc.dates.effective ? (
                  <time dateTime={doc.dates.effective}>{formatPolicyDate(doc.dates.effective)}</time>
                ) : (
                  <Fact value={null} label="effective date" />
                )}
              </dd>
            </div>
            <div>
              <dt className="text-subtle">Last updated</dt>
              <dd className="mt-1 font-medium text-foreground">
                <time dateTime={doc.dates.lastUpdated}>{formatPolicyDate(doc.dates.lastUpdated)}</time>
              </dd>
            </div>
            {doc.details?.map((detail) => (
              <div key={detail.label}>
                <dt className="text-subtle">{detail.label}</dt>
                <dd className="mt-1 font-medium text-foreground [&_a]:text-link [&_a]:underline [&_a]:underline-offset-2">
                  {detail.value}
                </dd>
              </div>
            ))}
          </dl>
          <div className="no-print mt-8">
            <PrintButton />
          </div>
        </Container>
      </header>

      <Container>
        <div className="grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[300px_minmax(0,760px)]">
          <LegalToc items={doc.sections.map(({ id, title }) => ({ id, title }))} />

          <article className="pb-24 pt-10 lg:pt-14">
            {doc.draft ? <DraftNotice /> : null}
            <div className={doc.draft ? "mt-10 space-y-14" : "space-y-14"}>
              {doc.sections.map((section, i) => (
                <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`} className="prose-legal scroll-mt-32">
                  <h2 id={`${section.id}-heading`}>
                    <span className="mr-2 text-subtle tabular-nums">{i + 1}.</span>
                    {section.title}
                  </h2>
                  {section.content}
                </section>
              ))}
            </div>

            {cta ? (
              <aside className="no-print mt-16 flex flex-col gap-6 rounded-3xl border border-border bg-gradient-to-br from-primary/[0.08] via-transparent to-secondary/[0.08] p-8 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-foreground">{cta.title}</h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{cta.description}</p>
                </div>
                <a href={cta.href} className={buttonVariants({ className: "shrink-0" })}>
                  <Mail aria-hidden />
                  {cta.label}
                </a>
              </aside>
            ) : null}
          </article>
        </div>
      </Container>
    </div>
  );
}

function DraftNotice() {
  return (
    <div
      role="note"
      className="flex gap-3 rounded-2xl border border-warning-border bg-warning-bg p-4 text-sm leading-relaxed text-foreground [print-color-adjust:exact]"
    >
      <TriangleAlert className="mt-0.5 size-4 shrink-0 text-warning" aria-hidden />
      <p>
        <strong className="font-semibold">Not yet complete.</strong> Items marked{" "}
        <span className="font-medium text-warning">[To confirm: …]</span> still need to be filled in by Verity before
        this policy is published.
      </p>
    </div>
  );
}
