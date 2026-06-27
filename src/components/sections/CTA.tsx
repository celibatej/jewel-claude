import { ArrowRight, Download } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

/** Closing call to action, reused across pages. */
export function CTA({
  title = "Looking for someone reliable to run operations and support?",
  body = "I am open to remote roles and freelance engagements. Let’s discuss how I can help your team stay organised and your customers well looked after.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <Container>
      <Reveal className="relative overflow-hidden rounded-4xl border border-border bg-card px-6 py-14 text-center sm:px-12 sm:py-20">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
          {body}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="/contact" size="lg">
            Get in touch
            <ArrowRight className="h-[18px] w-[18px]" aria-hidden="true" />
          </Button>
          <Button href={siteConfig.resumeFile} external variant="secondary" size="lg">
            <Download className="h-[18px] w-[18px]" aria-hidden="true" />
            Download CV
          </Button>
        </div>
      </Reveal>
    </Container>
  );
}
