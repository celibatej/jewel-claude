import type { Metadata } from "next";
import { Download, Mail, MapPin } from "lucide-react";

import {
  certifications,
  education,
  experience,
  languages,
  skillCategories,
  summary,
} from "@/content/data";
import { siteConfig, socialLinks } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { Timeline } from "@/components/sections/Timeline";

export const metadata: Metadata = buildMetadata({
  title: "Resume",
  description:
    "The online resume of Jobaedul Islam Jewel — experience, skills, certifications, education and languages, with a downloadable CV.",
  path: "/resume",
});

/** A simple labelled block used throughout the resume layout. */
function ResumeBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-6 border-t border-border py-10 first:border-t-0 first:pt-0 lg:grid-cols-[200px_1fr] lg:gap-10">
      <h2 className="font-display text-xl font-semibold tracking-tight">{title}</h2>
      <div>{children}</div>
    </div>
  );
}

export default function ResumePage() {
  return (
    <>
      {/* Resume header / identity */}
      <section className="pt-16 sm:pt-20">
        <Container>
          <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow mb-4">Resume</p>
              <h1 className="font-display text-4xl font-semibold tracking-tightest sm:text-5xl">
                {siteConfig.name}
              </h1>
              <p className="mt-3 text-lg font-medium text-muted-foreground">
                {siteConfig.title}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {siteConfig.location}
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <Button href={siteConfig.resumeFile} external size="lg">
              <Download className="h-[18px] w-[18px]" aria-hidden="true" />
              Download CV
            </Button>
          </Reveal>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="rounded-4xl border border-border bg-card p-7 sm:p-10 lg:p-12">
            <ResumeBlock title="Profile">
              <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                {summary.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </ResumeBlock>

            <ResumeBlock title="Experience">
              <Timeline items={experience} />
            </ResumeBlock>

            <ResumeBlock title="Skills">
              <div className="space-y-6">
                {skillCategories.map((category) => (
                  <div key={category.title}>
                    <h3 className="text-sm font-semibold tracking-tight">{category.title}</h3>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-full border border-border bg-subtle px-3 py-1 text-sm text-muted-foreground"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </ResumeBlock>

            <ResumeBlock title="Certifications">
              <ul className="space-y-4">
                {certifications.map((item) => (
                  <li key={item.title} className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.issuer}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{item.year}</span>
                  </li>
                ))}
              </ul>
            </ResumeBlock>

            <ResumeBlock title="Education">
              <ul className="space-y-4">
                {education.map((item) => (
                  <li key={item.qualification} className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <div>
                      <p className="font-medium">{item.qualification}</p>
                      <p className="text-sm text-muted-foreground">{item.institution}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{item.year}</span>
                  </li>
                ))}
              </ul>
            </ResumeBlock>

            <ResumeBlock title="Languages">
              <ul className="space-y-2">
                {languages.map((item) => (
                  <li key={item.language} className="flex items-baseline justify-between gap-x-4">
                    <span className="font-medium">{item.language}</span>
                    <span className="text-sm text-muted-foreground">{item.level}</span>
                  </li>
                ))}
              </ul>
            </ResumeBlock>

            <ResumeBlock title="Profiles">
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {socialLinks.map((link) => {
                  const isExternal = link.href.startsWith("http");
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </ResumeBlock>
          </div>
        </Container>
      </Section>
    </>
  );
}
