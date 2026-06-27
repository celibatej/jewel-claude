import { ArrowLeft, Home } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/** Custom 404 page, styled to match the rest of the site. */
export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-display text-7xl font-semibold tracking-tightest text-muted-foreground/40 sm:text-8xl">
        404
      </p>
      <h1 className="mt-6 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        This page took a different route
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground text-pretty">
        The page you are looking for has moved or never existed. Let’s get you back to
        familiar ground.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button href="/" size="lg">
          <Home className="h-[18px] w-[18px]" aria-hidden="true" />
          Back to home
        </Button>
        <Button href="/contact" variant="secondary" size="lg">
          <ArrowLeft className="h-[18px] w-[18px]" aria-hidden="true" />
          Contact me
        </Button>
      </div>
    </Container>
  );
}
