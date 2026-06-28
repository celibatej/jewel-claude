import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import { contact } from "@/content/data";
import { siteConfig, socialLinks } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { platformIcons } from "@/components/icons/BrandIcons";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with Jobaedul Islam Jewel for remote operations, logistics and customer support roles, or freelance engagements.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title={contact.heading} description={contact.body} />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            {/* Direct channels */}
            <Reveal className="space-y-8">
              <div>
                <p className="eyebrow mb-4">Direct</p>
                <div className="space-y-3">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="group flex items-center gap-3 text-lg font-medium transition-colors hover:text-accent"
                  >
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-muted">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </span>
                    {siteConfig.email}
                  </a>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                    className="group flex items-center gap-3 text-lg font-medium transition-colors hover:text-accent"
                  >
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-muted">
                      <Phone className="h-5 w-5" aria-hidden="true" />
                    </span>
                    {siteConfig.phone}
                  </a>
                  <p className="flex items-center gap-3 text-lg font-medium">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-muted">
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                    </span>
                    {siteConfig.address}
                  </p>
                </div>
              </div>

              <div>
                <p className="eyebrow mb-4">Find me online</p>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {socialLinks
                    .filter((link) => link.platform !== "email")
                    .map((link) => {
                      const Icon = platformIcons[link.platform];
                      const isExternal = link.href.startsWith("http");
                      return (
                        <li key={link.label}>
                          <a
                            href={link.href}
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noopener noreferrer" : undefined}
                            className="group flex items-center justify-between gap-3 rounded-2xl border border-border bg-card px-4 py-3.5 transition-colors hover:bg-muted"
                          >
                            <span className="inline-flex items-center gap-3 text-sm font-medium">
                              <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                              {link.label}
                            </span>
                            <ArrowUpRight
                              className="h-4 w-4 text-muted-foreground transition-transform duration-300 ease-apple group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                      );
                    })}
                </ul>
                <p className="mt-4 text-sm text-muted-foreground">
                  Open to on-site, hybrid, and remote opportunities across KSA, Bangladesh, and beyond.
                </p>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
