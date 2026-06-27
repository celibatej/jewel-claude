import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  certifications,
  experience,
  highlights,
  skillCategories,
  summary,
} from "@/content/data";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { CTA } from "@/components/sections/CTA";
import { Timeline } from "@/components/sections/Timeline";

import { HighlightCard } from "@/components/cards/HighlightCard";
import { SkillCategoryCard } from "@/components/cards/SkillCategoryCard";
import { CertificationCard } from "@/components/cards/CertificationCard";

/** Small "see everything" link used at the end of each preview section. */
function ViewAll({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors"
    >
      {label}
      <ArrowRight
        className="h-4 w-4 transition-transform duration-300 ease-apple group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </Link>
  );
}

export default function HomePage() {
  const previewHighlights = highlights.slice(0, 6);
  const previewExperience = experience.slice(0, 2);
  const previewSkills = skillCategories.slice(0, 3);
  const previewCerts = certifications.slice(0, 3);

  return (
    <>
      <Hero />

      {/* Career highlights / proof points */}
      <Section>
        <Stats />
      </Section>

      {/* Professional summary */}
      <Section muted>
        <Container>
          <SectionHeading eyebrow="Professional summary" title={summary.heading} />
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {summary.paragraphs.map((paragraph, index) => (
              <Reveal
                as="div"
                key={index}
                delay={index * 0.06}
                className="text-[15px] leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Professional highlights preview */}
      <Section>
        <Container>
          <div className="flex items-end justify-between gap-6">
            <SectionHeading
              eyebrow="What I do"
              title="Professional highlights"
              description="The areas where I consistently deliver the most value — built across three industries and 15 years of operations work."
            />
            <div className="hidden shrink-0 pb-2 sm:block">
              <ViewAll href="/highlights" label="All highlights" />
            </div>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {previewHighlights.map((item, index) => (
              <Reveal as="div" key={item.title} delay={index * 0.05} className="h-full">
                <HighlightCard item={item} />
              </Reveal>
            ))}
          </div>

          <div className="mt-8 sm:hidden">
            <ViewAll href="/highlights" label="All highlights" />
          </div>
        </Container>
      </Section>

      {/* Experience preview */}
      <Section muted>
        <Container>
          <div className="flex items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Career"
              title="Experience"
              description="A look at where I have worked, what I was responsible for, and the environments I have operated in."
            />
            <div className="hidden shrink-0 pb-2 sm:block">
              <ViewAll href="/experience" label="Full timeline" />
            </div>
          </div>

          <div className="mt-12 max-w-3xl">
            <Timeline items={previewExperience} showAchievements={false} />
          </div>

          <div className="mt-2 sm:hidden">
            <ViewAll href="/experience" label="Full timeline" />
          </div>
        </Container>
      </Section>

      {/* Skills preview */}
      <Section>
        <Container>
          <div className="flex items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Toolkit"
              title="Skills"
              description="Capabilities built over 15 years — organised by the part of the business they support."
            />
            <div className="hidden shrink-0 pb-2 sm:block">
              <ViewAll href="/skills" label="All skills" />
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {previewSkills.map((category, index) => (
              <Reveal as="div" key={category.title} delay={index * 0.05} className="h-full">
                <SkillCategoryCard category={category} />
              </Reveal>
            ))}
          </div>

          <div className="mt-8 sm:hidden">
            <ViewAll href="/skills" label="All skills" />
          </div>
        </Container>
      </Section>

      {/* Certifications preview */}
      <Section muted>
        <Container>
          <div className="flex items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Credentials"
              title="Certifications"
              description="Formal training completed during my career break to sharpen and modernise what I already know from the field."
            />
            <div className="hidden shrink-0 pb-2 sm:block">
              <ViewAll href="/certifications" label="All certifications" />
            </div>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {previewCerts.map((item, index) => (
              <Reveal as="div" key={item.title} delay={index * 0.05} className="h-full">
                <CertificationCard item={item} />
              </Reveal>
            ))}
          </div>

          <div className="mt-8 sm:hidden">
            <ViewAll href="/certifications" label="All certifications" />
          </div>
        </Container>
      </Section>

      {/* Closing CTA */}
      <Section>
        <CTA
          title="Looking for someone who brings both field experience and fresh operational thinking?"
          body="I am open to remote roles, KSA opportunities, and freelance engagements. Let’s talk."
        />
      </Section>
    </>
  );
}
