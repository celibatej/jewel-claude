import type { Metadata } from "next";

import { experience } from "@/content/data";
import { buildMetadata } from "@/lib/seo";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { Timeline } from "@/components/sections/Timeline";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = buildMetadata({
  title: "Experience",
  description:
    "The career timeline of Jobaedul Islam Jewel across operations, logistics, customer support, administration and compliance roles.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Career"
        title="Experience"
        description="A look at where I have worked, what I was responsible for, and the environments I have operated in."
      />

      <Section>
        <Container>
          <div className="max-w-3xl">
            <Timeline items={experience} />
          </div>
        </Container>
      </Section>

      <Section muted>
        <CTA
          title="Want the full picture?"
          body="Download my CV for a complete record, or reach out and I will happily walk you through any role in detail."
        />
      </Section>
    </>
  );
}
