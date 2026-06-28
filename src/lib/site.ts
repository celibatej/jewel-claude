/**
 * ------------------------------------------------------------------
 * SITE CONFIGURATION
 * ------------------------------------------------------------------
 * Central place for identity, URLs, navigation and contact details.
 * ------------------------------------------------------------------
 */

export const siteConfig = {
  name: "Jobaedul Islam Jewel",
  shortName: "Jewel",
  title: "Operations, Logistics & Customer Support Specialist",
  url: "https://jobisjewel.vercel.app",
  locale: "en_US",
  location: "Chattogram, Bangladesh",
  address: "City Gate, Chattogram, Bangladesh",
  experienceYears: "15+",

  // A concise description used for SEO and previews.
  description:
    "Jobaedul Islam Jewel is an Operations, Logistics & Customer Support Specialist with 15+ years of experience across the Saudi Arabian market — in international remittance, fleet coordination and banking — now supporting teams remotely from Bangladesh.",

  email: "jobisjewel@gmail.com",
  phone: "+880 1886 666 988",

  // Assets live in /public. The Open Graph / favicon images are generated
  // automatically (see src/app/opengraph-image.tsx, icon.svg, apple-icon.tsx).
  profileImage: "/images/profile.jpg",
  logoLight: "/images/logo-light.png", // light-coloured mark (used on dark UI)
  logoDark: "/images/logo-dark.png", // dark-coloured mark (used on light UI)
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

/** Professional & freelance profiles. */
export const socialLinks: SocialLink[] = [
  { label: "Email", href: "mailto:jobisjewel@gmail.com", platform: "email" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jobisjewel/",
    platform: "linkedin",
  },
  {
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~01d6529c54266e18d8",
    platform: "upwork",
  },
  {
    label: "Freelancer",
    href: "https://www.freelancer.com/u/jobisjewel",
    platform: "freelancer",
  },
  { label: "Fiverr", href: "https://www.fiverr.com/s/5rWYm06", platform: "fiverr" },
];
