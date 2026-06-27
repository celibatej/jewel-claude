import type { Metadata } from "next";

import { skillCategories } from "@/content/data";
import { buildMetadata } from "@/lib/seo";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { SkillCategoryCard } from "@/components/cards/SkillCategoryCard";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = buildMetadata({
  title: "Skills",
  description:
    "The capabilities Jobaedul Islam Jewel brings across operations, logistics, customer support, administration, tools and ways of working.",
  path: "/skills",
});

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Toolkit"
        title="Skills"
        description="Capabilities built over 15 years — organised by the part of the business they support."
      />

      <Section>
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => (
              <Reveal
                as="div"
                key={category.title}
                delay={(index % 3) * 0.05}
                className="h-full"
              >
                <SkillCategoryCard category={category} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section muted>
        <CTA
          title="See a skill set that fits your opening?"
          body="If this lines up with what you’re hiring for, I’d be glad to walk you through where I’ve put each of these to work."
        />
      </Section>
    </>
  );
}
