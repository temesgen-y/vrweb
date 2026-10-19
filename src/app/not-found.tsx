import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-sm font-semibold text-primary dark:text-link">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Page not found</h1>
      <p className="mt-4 max-w-md text-lg text-muted">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <ButtonLink href="/" className="mt-10">
        Back to home
      </ButtonLink>
    </Container>
  );
}
