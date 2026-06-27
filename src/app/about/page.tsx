import type { Metadata } from "next";

import { about } from "@/content/data";
import { buildMetadata } from "@/lib/seo";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProfileImage } from "@/components/ui/ProfileImage";
import { Reveal } from "@/components/motion/Reveal";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Learn about Jobaedul Islam Jewel — an operations, logistics and customer support specialist who keeps the day-to-day of a business calm, organised and reliable.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title="Who I am, and how I work" description={about.lead} />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
            <Reveal className="lg:sticky lg:top-24 lg:self-start">
              <ProfileImage className="aspect-[4/5] w-full max-w-sm" />
            </Reveal>

            <div className="space-y-6">
              {about.paragraphs.map((paragraph, index) => (
                <Reveal
                  as="div"
                  key={index}
                  delay={index * 0.05}
                  className="text-lg leading-relaxed text-muted-foreground text-pretty"
                >
                  {paragraph}
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section muted>
        <Container>
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            How I work
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {about.values.map((value, index) => (
              <Reveal
                as="div"
                key={value.title}
                delay={index * 0.05}
                className="rounded-3xl border border-border bg-card p-6 sm:p-7"
              >
                <h3 className="text-lg font-semibold tracking-tight">{value.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                  {value.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <CTA
          title="Curious whether I’m the right fit?"
          body="The best way to find out is a short conversation. Tell me about the role or the work, and I’ll be honest about how I can help."
        />
      </Section>
    </>
  );
}
