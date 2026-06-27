import type { Metadata } from "next";

import { certifications } from "@/content/data";
import { buildMetadata } from "@/lib/seo";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { CertificationCard } from "@/components/cards/CertificationCard";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = buildMetadata({
  title: "Certifications",
  description:
    "Professional certifications and training held by Jobaedul Islam Jewel across customer support, logistics, administration and data.",
  path: "/certifications",
});

export default function CertificationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Credentials"
        title="Certifications"
        description="Formal training that supports the hands-on experience. Replace these with your verified certificates and issuers."
      />

      <Section>
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((item, index) => (
              <Reveal as="div" key={item.title} delay={(index % 3) * 0.05} className="h-full">
                <CertificationCard item={item} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section muted>
        <CTA
          title="Want references or verification?"
          body="I’m happy to share certificates and references on request. Reach out and I’ll get them to you promptly."
        />
      </Section>
    </>
  );
}
