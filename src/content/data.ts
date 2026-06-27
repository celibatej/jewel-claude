/**
 * ------------------------------------------------------------------
 * WEBSITE CONTENT
 * ------------------------------------------------------------------
 * All written copy lives here so it is easy to edit without touching
 * components. Text is written professionally and is NOT copied from
 * any CV verbatim.
 *
 * 🔧 PLACEHOLDERS: Company names, dates and a few figures are written
 *    as editable placeholders. Search for "[" to find them and replace
 *    with your real details.
 * ------------------------------------------------------------------
 */

import type { LucideIcon } from "lucide-react";
import {
  Headset,
  Settings2,
  Truck,
  Route,
  ClipboardList,
  ShieldCheck,
  BarChart3,
  FileText,
  Users2,
  Database,
  Sparkles,
  Search,
} from "lucide-react";

/* ----------------------------- HERO / HOME ----------------------------- */

export const hero = {
  // A personal brand statement — confident, specific, not a cliché.
  statement:
    "I keep operations running quietly and reliably — so teams ship faster, customers stay happy, and nothing falls through the cracks.",
  intro:
    "For more than 15 years I have worked at the intersection of operations, logistics and customer support. My work is the kind people notice only when it is missing: orders that arrive on time, customers who feel heard, fleets that stay coordinated, and records that are accurate when an audit comes knocking.",
};

/* --------------------------- CAREER HIGHLIGHTS -------------------------- */
/* Short, scannable proof points. REPLACE figures with your real numbers. */

export type Stat = {
  value: string;
  label: string;
};

export const stats: Stat[] = [
  { value: "15+", label: "Years of experience" },
  { value: "10k+", label: "Customer interactions handled" },
  { value: "98%", label: "Documentation accuracy" },
  { value: "24/7", label: "Operations supported" },
];

/* -------------------------- PROFESSIONAL SUMMARY ------------------------ */

export const summary = {
  heading: "A steady hand for the work that holds a business together",
  paragraphs: [
    "I specialise in the operational core of a company — coordinating logistics and fleets, supporting customers across channels, and keeping administration, compliance and reporting in good order. The common thread is reliability: clear processes, careful records, and follow-through that people can depend on.",
    "Over the years I have learned that good operations are mostly about communication and detail. I am comfortable owning a queue of customer issues, reconciling shipment records, preparing reports for management, and tightening the small processes that quietly save hours every week.",
    "More recently I have folded modern tools into that work — CRMs to keep customer history in one place, structured data entry to keep records clean, and AI assistants to speed up routine writing, research and summarising without losing accuracy.",
  ],
};

/* ------------------------------- ABOUT --------------------------------- */

export const about = {
  lead:
    "I am Jobaedul Islam Jewel, an operations, logistics and customer support specialist based in Bangladesh, working with teams worldwide.",
  paragraphs: [
    "My career has been built around a simple idea: a business runs well when its day-to-day operations are calm, organised and predictable. I have spent more than 15 years making that true — handling customer enquiries with patience, coordinating deliveries and fleets, and keeping the paperwork behind it all accurate and audit-ready.",
    "I work best in roles that combine people and process. On the people side, I enjoy resolving customer issues properly the first time and turning a frustrating moment into a reason to stay. On the process side, I like mapping how work actually flows, removing the friction, and writing it down so the next person can do it without guesswork.",
    "I am equally comfortable working independently and as part of a remote team across time zones. I communicate clearly, keep commitments, and treat other people's deadlines as seriously as my own.",
    "Outside of structured operations, I keep my skills current — improving my command of spreadsheets and CRMs, learning how to use AI tools responsibly for productivity, and staying curious about better ways to organise information.",
  ],
  // Short, human values rather than buzzwords.
  values: [
    {
      title: "Reliability first",
      body: "If I commit to something, it gets done. Consistency is the whole point of operations work.",
    },
    {
      title: "Clarity over noise",
      body: "Clear notes, clean records and plain communication save everyone time later.",
    },
    {
      title: "Care for the customer",
      body: "Behind every ticket is a person. I solve the problem and protect the relationship.",
    },
    {
      title: "Always improving",
      body: "I look for the small fixes that compound — a tidier process, a faster tool, a clearer report.",
    },
  ],
};

/* ----------------------------- EXPERIENCE ------------------------------ */
/* A clean vertical timeline. REPLACE company names and dates. */

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Operations & Logistics Coordinator",
    company: "[Company Name]",
    period: "[20XX] – Present",
    location: "Remote / Bangladesh",
    summary:
      "Coordinate daily logistics, fleet movements and supplier communication while keeping operational records accurate and reporting on time.",
    achievements: [
      "Coordinate scheduling and fleet movements so deliveries stay on time and routes stay efficient.",
      "Maintain operational records and prepare regular reports that managers rely on for decisions.",
      "Act as the link between customers, drivers and suppliers to resolve issues before they escalate.",
      "Document recurring processes so the team can work consistently and onboard faster.",
    ],
  },
  {
    role: "Customer Support Specialist",
    company: "[Company Name]",
    period: "[20XX] – [20XX]",
    location: "Remote",
    summary:
      "Owned a high volume of customer enquiries across email, chat and phone, resolving issues with care and keeping CRM records complete.",
    achievements: [
      "Handled customer enquiries across multiple channels while keeping response times low.",
      "Logged every interaction in the CRM so the whole team had accurate, up-to-date history.",
      "Turned complaints into resolutions by listening first and following through to closure.",
      "Wrote and refined response templates to keep support consistent and on-brand.",
    ],
  },
  {
    role: "Administration & Compliance Support",
    company: "[Company Name]",
    period: "[20XX] – [20XX]",
    location: "Bangladesh",
    summary:
      "Supported administration, documentation and compliance — keeping files organised, accurate and ready for review at any time.",
    achievements: [
      "Maintained organised documentation and filing so records were easy to find and verify.",
      "Supported compliance by keeping paperwork complete, current and audit-ready.",
      "Performed careful data entry and regular checks to keep records clean and reliable.",
      "Prepared summaries and reports that gave management a clear operational picture.",
    ],
  },
  {
    role: "Customer Service Representative",
    company: "[Company Name]",
    period: "[20XX] – [20XX]",
    location: "Bangladesh",
    summary:
      "Began building a customer-first foundation — answering questions, solving problems and learning the operational systems behind good service.",
    achievements: [
      "Supported customers with their questions and problems, day in and day out.",
      "Learned the operational systems and processes that sit behind reliable service.",
      "Built the habits — accuracy, patience, follow-through — that still define my work.",
    ],
  },
];

/* ----------------------- PROFESSIONAL HIGHLIGHTS ------------------------ */
/* Replaces a traditional portfolio with areas of demonstrated expertise. */

export type Highlight = {
  title: string;
  icon: LucideIcon;
  body: string;
};

export const highlights: Highlight[] = [
  {
    title: "Customer Service",
    icon: Headset,
    body: "Resolving enquiries across email, chat and phone with patience and clarity — protecting the relationship while solving the problem.",
  },
  {
    title: "Operations",
    icon: Settings2,
    body: "Keeping day-to-day operations calm and predictable by tightening processes and removing friction before it slows the team down.",
  },
  {
    title: "Logistics",
    icon: Truck,
    body: "Coordinating shipments, suppliers and timelines so deliveries arrive on schedule and exceptions are handled early.",
  },
  {
    title: "Fleet Coordination",
    icon: Route,
    body: "Scheduling and tracking fleet movements, balancing routes and availability to keep operations efficient and on time.",
  },
  {
    title: "Administration",
    icon: ClipboardList,
    body: "Running the administrative engine — scheduling, correspondence and organised filing that keeps everything findable.",
  },
  {
    title: "Compliance",
    icon: ShieldCheck,
    body: "Keeping documentation complete and current so the business stays audit-ready and nothing slips through procedural gaps.",
  },
  {
    title: "Reporting",
    icon: BarChart3,
    body: "Turning operational activity into clear, regular reports that managers can actually use to make decisions.",
  },
  {
    title: "Documentation",
    icon: FileText,
    body: "Writing process notes and records that are accurate, organised and easy for the next person to follow.",
  },
  {
    title: "CRM",
    icon: Users2,
    body: "Maintaining clean customer records so history, context and next steps are always one click away for the whole team.",
  },
  {
    title: "Data Entry",
    icon: Database,
    body: "Fast, accurate data handling with the checks and discipline that keep records trustworthy over time.",
  },
  {
    title: "AI Productivity",
    icon: Sparkles,
    body: "Using AI assistants responsibly to speed up routine writing, summarising and research — without trading away accuracy.",
  },
  {
    title: "Market Research",
    icon: Search,
    body: "Gathering and organising information into clear summaries that support better operational and commercial decisions.",
  },
];

/* -------------------------------- SKILLS -------------------------------- */

export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Operations & Logistics",
    skills: [
      "Operations Coordination",
      "Logistics & Shipping",
      "Fleet Coordination",
      "Scheduling",
      "Supplier Communication",
      "Process Improvement",
    ],
  },
  {
    title: "Customer Support",
    skills: [
      "Email, Chat & Phone Support",
      "Complaint Resolution",
      "CRM Management",
      "Ticketing & Follow-up",
      "Support Templates",
      "Client Relationships",
    ],
  },
  {
    title: "Administration & Compliance",
    skills: [
      "Documentation",
      "Compliance Support",
      "Records Management",
      "Reporting",
      "Data Entry & Verification",
      "Audit Readiness",
    ],
  },
  {
    title: "Tools & Productivity",
    skills: [
      "Spreadsheets (Excel / Sheets)",
      "CRM Platforms",
      "Office & Docs Suites",
      "AI Productivity Tools",
      "Market Research",
      "Email & Calendar Tools",
    ],
  },
  {
    title: "Working Style",
    skills: [
      "Remote Collaboration",
      "Clear Communication",
      "Attention to Detail",
      "Time Management",
      "Reliability",
      "Problem Solving",
    ],
  },
];

/* ----------------------------- CERTIFICATIONS --------------------------- */
/* REPLACE with your real certifications, issuers and years. */

export type Certification = {
  title: string;
  issuer: string;
  year: string;
  description: string;
};

export const certifications: Certification[] = [
  {
    title: "[Customer Service / Support Certification]",
    issuer: "[Issuing Organisation]",
    year: "[20XX]",
    description:
      "Foundations of professional customer support — communication, complaint handling and service standards.",
  },
  {
    title: "[Logistics / Supply Chain Certification]",
    issuer: "[Issuing Organisation]",
    year: "[20XX]",
    description:
      "Principles of logistics, shipping coordination and supply chain operations.",
  },
  {
    title: "[Administration / Office Productivity Certification]",
    issuer: "[Issuing Organisation]",
    year: "[20XX]",
    description:
      "Administrative best practices, documentation and office productivity tools.",
  },
  {
    title: "[Data Entry / Spreadsheet Certification]",
    issuer: "[Issuing Organisation]",
    year: "[20XX]",
    description:
      "Accurate data handling and spreadsheet skills for reporting and record-keeping.",
  },
];

/* --------------------------- RESUME / EDUCATION ------------------------- */

export type EducationItem = {
  qualification: string;
  institution: string;
  year: string;
};

export const education: EducationItem[] = [
  {
    qualification: "[Your Degree / Qualification]",
    institution: "[Institution Name]",
    year: "[20XX]",
  },
];

export const languages: { language: string; level: string }[] = [
  { language: "Bengali", level: "Native" },
  { language: "English", level: "Professional working proficiency" },
];

/* -------------------------------- CONTACT ------------------------------- */

export const contact = {
  heading: "Let’s talk about how I can help",
  body: "Whether you are hiring for a role, building a remote team, or need an extra reliable pair of hands for operations and support, I would be glad to hear from you. The fastest way to reach me is email — or use the form and I will reply promptly.",
};
