import { stats } from "@/content/data";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

/** Career highlights presented as a row of quiet, confident proof points. */
export function Stats() {
  return (
    <Container>
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal
            as="div"
            key={stat.label}
            delay={index * 0.05}
            className="bg-card p-6 sm:p-8"
          >
            <dt className="sr-only">{stat.label}</dt>
            <dd className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {stat.value}
            </dd>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </Reveal>
        ))}
      </dl>
    </Container>
  );
}
