import type { Metadata } from "next";

import { highlights } from "@/content/data";
import { buildMetadata } from "@/lib/seo";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { HighlightCard } from "@/components/cards/HighlightCard";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = buildMetadata({
  title: "Professional Highlights",
  description:
    "Areas of demonstrated expertise — customer service, operations, logistics, fleet coordination, administration, compliance, reporting, documentation, CRM, data entry, AI productivity and market research.",
  path: "/highlights",
});

export default function HighlightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="What I do"
        title="Professional highlights"
        description="The areas where I consistently deliver the most value — built across three industries and 15 years of operations work."
      />

      <Section>
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item, index) => (
              <Reveal as="div" key={item.title} delay={(index % 3) * 0.05} className="h-full">
                <HighlightCard item={item} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section muted>
        <CTA
          title="Need this kind of support on your team?"
          body="These are the areas I can take off your plate from day one. Let’s talk about where you need the most help."
        />
      </Section>
    </>
  );
}
