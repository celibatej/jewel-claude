import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

/** Consistent page intro used at the top of every inner page. */
export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="pt-16 sm:pt-20">
      <Container>
        <Reveal blur className="max-w-3xl">
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h1 className="font-display text-4xl font-semibold tracking-tightest text-balance sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
              {description}
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
