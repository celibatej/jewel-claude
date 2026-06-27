import type { Metadata } from "next";
import { siteConfig, socialLinks } from "@/lib/site";

/**
 * Builds page-level metadata with sensible defaults, Open Graph and Twitter
 * cards. Pass a page title/description/path to override per route.
 */
export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
} = {}): Metadata {
  const pageTitle = title
    ? `${title} · ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.title}`;

  const url = `${siteConfig.url}${path}`;

  return {
    title: pageTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: pageTitle,
      description,
      // Open Graph / Twitter images are provided automatically by the
      // dynamic src/app/opengraph-image.tsx route.
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
    },
  };
}

/** Schema.org Person + WebSite structured data for rich results. */
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.title,
    url: siteConfig.url,
    email: `mailto:${siteConfig.email}`,
    telephone: siteConfig.phone,
    image: `${siteConfig.url}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chattogram",
      addressCountry: "BD",
    },
    // Links the profile to verified social/freelance accounts.
    sameAs: socialLinks
      .filter((link) => link.href.startsWith("http"))
      .map((link) => link.href),
    knowsLanguage: ["English", "Bengali", "Arabic", "Hindi", "Urdu"],
    knowsAbout: [
      "Customer Service",
      "Operations",
      "Logistics",
      "Fleet Coordination",
      "Administration",
      "KYC & AML Compliance",
      "Reporting",
      "Documentation",
      "CRM",
      "Data Entry",
    ],
    description: siteConfig.description,
  };
}
