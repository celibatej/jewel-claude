import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `How ${siteConfig.name} handles the limited personal information collected through this website.`,
  path: "/privacy",
});

const sections = [
  {
    heading: "Overview",
    body: `This website is the personal professional profile of ${siteConfig.name}. It is informational and does not sell products or run accounts. This policy explains the limited data the site handles and how it is used.`,
  },
  {
    heading: "Information you provide",
    body: "If you use the contact form or email me directly, you share your name, email address and the contents of your message. This information is used solely to read and reply to your enquiry. It is not sold or shared for marketing.",
  },
  {
    heading: "Information collected automatically",
    body: "The site may use privacy-friendly analytics and standard server logs (such as anonymised page views and approximate region) to understand general traffic. These do not identify you personally. If you have not enabled analytics, this section can be removed.",
  },
  {
    heading: "Cookies",
    body: "The site uses a small amount of local browser storage to remember your light or dark theme preference. This stays on your device and is not used for tracking.",
  },
  {
    heading: "Third-party links",
    body: "Pages link to external profiles such as LinkedIn, GitHub and freelance marketplaces. Once you follow those links, the privacy policy of the destination site applies.",
  },
  {
    heading: "Your choices",
    body: `You can contact me at ${siteConfig.email} to ask what enquiry information I hold about you, or to request that I delete the messages you have sent.`,
  },
  {
    heading: "Changes to this policy",
    body: "This policy may be updated occasionally to reflect changes to the site. The latest version will always be available on this page.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="A short, plain-language summary of how this website handles your information."
      />

      <Section>
        <Container>
          <div className="max-w-2xl space-y-10">
            <p className="text-sm text-muted-foreground">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-display text-xl font-semibold tracking-tight">
                  {section.heading}
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground text-pretty">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
