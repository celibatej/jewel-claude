/**
 * ------------------------------------------------------------------
 * SITE CONFIGURATION
 * ------------------------------------------------------------------
 * Central place for identity, URLs, navigation and contact details.
 *
 * 🔧 PLACEHOLDERS TO REPLACE (search for the word "REPLACE"):
 *   - siteUrl        → your live domain
 *   - email          → your real professional email
 *   - social links   → your real profile URLs
 *   - resumeFile     → path to your CV PDF in /public
 * ------------------------------------------------------------------
 */

export const siteConfig = {
  name: "Jobaedul Islam Jewel",
  shortName: "Jewel",
  title: "Operations, Logistics & Customer Support Specialist",
  // REPLACE with your live domain (no trailing slash).
  url: "https://your-domain.com",
  locale: "en_US",
  location: "Bangladesh",
  experienceYears: "15+",

  // A concise description used for SEO and previews.
  description:
    "Jobaedul Islam Jewel is an Operations, Logistics & Customer Support Specialist with 15+ years of experience helping companies run smoother, support customers better, and keep documentation and compliance airtight.",

  // REPLACE with your real professional email.
  email: "hello@your-domain.com",
  // REPLACE with your real phone number, or leave empty to hide.
  phone: "",

  // Placeholder assets — REPLACE the files in /public, keep the paths.
  // The Open Graph / favicon images are generated automatically
  // (see src/app/opengraph-image.tsx, icon.svg, apple-icon.tsx).
  profileImage: "/images/profile-placeholder.svg",
  resumeFile: "/jobaedul-islam-jewel-cv.pdf",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

/** Primary navigation shown in the header and footer. */
export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Highlights", href: "/highlights" },
  { label: "Skills", href: "/skills" },
  { label: "Certifications", href: "/certifications" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export type SocialLink = {
  label: string;
  href: string;
  // Lucide icon name handled in the component; brand platforms use a custom map.
  platform:
    | "email"
    | "linkedin"
    | "github"
    | "upwork"
    | "freelancer"
    | "fiverr";
};

/**
 * Professional & freelance profiles.
 * REPLACE every "#" href with your real profile URL.
 */
export const socialLinks: SocialLink[] = [
  { label: "Email", href: "mailto:hello@your-domain.com", platform: "email" },
  { label: "LinkedIn", href: "#", platform: "linkedin" },
  { label: "GitHub", href: "#", platform: "github" },
  { label: "Upwork", href: "#", platform: "upwork" },
  { label: "Freelancer", href: "#", platform: "freelancer" },
  { label: "Fiverr", href: "#", platform: "fiverr" },
];
