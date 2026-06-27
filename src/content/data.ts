/**
 * ------------------------------------------------------------------
 * WEBSITE CONTENT
 * ------------------------------------------------------------------
 * All written copy lives here so it is easy to edit without touching
 * components.
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
    "For more than 15 years — most of them in Saudi Arabia’s fast-moving remittance, car-rental and banking sectors — I have worked at the meeting point of operations, logistics and customer support. Now based in Chattogram, I bring that same discipline to teams remotely: accurate records, compliant processes, and customers who feel genuinely looked after.",
};

/* --------------------------- CAREER HIGHLIGHTS -------------------------- */

export type Stat = {
  value: string;
  label: string;
};

export const stats: Stat[] = [
  { value: "15+", label: "Years of experience" },
  { value: "KSA", label: "Market specialist" },
  { value: "3", label: "Industries served" },
  { value: "4", label: "Languages spoken" },
];

/* -------------------------- PROFESSIONAL SUMMARY ------------------------ */

export const summary = {
  heading: "A steady hand for the work that holds a business together",
  paragraphs: [
    "I specialise in the operational core of a company — supporting customers across channels, coordinating fleets and logistics, and keeping documentation, compliance and reporting in good order. The common thread is reliability: clear processes, careful records, and follow-through people can count on.",
    "Much of my experience comes from regulated, high-volume environments. In remittance and banking I worked to strict KYC/AML standards and central-bank rules; in fleet operations I managed scheduling, maintenance and the full rental lifecycle for corporate clients. In every role, accuracy and trust were non-negotiable.",
    "I also keep my toolkit current — CRM and ERP/Oracle systems to keep records clean, spreadsheets for reporting and analysis, and AI tools used responsibly to speed up routine writing, research and summarising without losing accuracy.",
  ],
};

/* ------------------------------- ABOUT --------------------------------- */

export const about = {
  lead:
    "I am Jobaedul Islam Jewel — an operations, logistics and customer support specialist. I spent more than 15 years in the Saudi Arabian market and now work with teams remotely from Chattogram, Bangladesh.",
  paragraphs: [
    "My career has been built around a simple idea: a business runs well when its day-to-day operations are calm, organised and predictable. I have spent more than 15 years making that true — handling customer enquiries with patience, coordinating fleets and processing thousands of transactions, and keeping the paperwork behind it all accurate and audit-ready.",
    "Much of that work was in Saudi Arabia, across three demanding industries. At a money-transfer company I processed international remittances under strict KYC/AML and central-bank compliance. At a car-rental firm I coordinated a large corporate fleet end to end. And in banking I supported customers and sales teams in a high-volume remittance environment. Each taught me how much reliable operations depend on getting the details right.",
    "I work best where people and process meet. On the people side, I enjoy resolving issues properly the first time and turning a frustrating moment into a reason to stay. On the process side, I like mapping how work actually flows, removing the friction, and writing it down so the next person can do it without guesswork.",
    "I work comfortably across languages and time zones — English, Bengali, Arabic and Hindi/Urdu — and I treat other people’s deadlines as seriously as my own. Lately I have been deepening my command of spreadsheets, ERP/CRM systems and AI productivity tools to do all of this faster and better.",
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
      title: "Compliance as a habit",
      body: "Years in regulated remittance and banking taught me to keep work accurate and audit-ready by default.",
    },
  ],
};

/* ----------------------------- EXPERIENCE ------------------------------ */

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
    role: "Customer Service Executive",
    company: "ERSAL Money Transfer",
    period: "2017 – 2023",
    location: "Riyadh, KSA",
    summary:
      "Processed high-volume international remittances under strict KYC/AML and central-bank compliance, while supporting branch cash operations and audit reporting.",
    achievements: [
      "Processed high-volume international remittance transactions with full accuracy and strict regulatory compliance, serving a diverse multinational client base daily.",
      "Enforced KYC/AML protocols including rigorous identity verification (Iqama/Passport checks) and transaction monitoring in line with central bank regulations.",
      "Supported branch cash operations including vault management and cash-in-transit coordination, ensuring continuity during teller absences.",
      "Prepared internal audit reports and branch compliance documentation, ensuring full alignment with head office SOPs.",
      "Resolved complex customer disputes — delayed transfers, system errors and transaction blocks — using structured de-escalation techniques to retain client trust.",
      "Monitored branch workflows and flagged operational bottlenecks, contributing to process improvements and head office reporting.",
    ],
  },
  {
    role: "Customer Service Representative / Fleet Coordinator",
    company: "Best Rent a Car",
    period: "2014 – 2017",
    location: "Jeddah, KSA",
    summary:
      "Coordinated a large corporate vehicle fleet end to end — scheduling, maintenance, driver dispatch and the full rental lifecycle — for corporate clients.",
    achievements: [
      "Managed daily scheduling and assignment of a large corporate vehicle fleet, maximising utilisation and ensuring on-time availability for clients.",
      "Developed and maintained vehicle maintenance logs; coordinated servicing, repairs and inspections with third-party workshops to minimise fleet downtime.",
      "Supervised driver shift scheduling and dispatched tasks dynamically based on real-time location, traffic and client urgency.",
      "Handled the full rental lifecycle — bookings, agreements, payments, return inspections and damage reporting — maintaining accurate records throughout.",
      "Negotiated pricing with external vendors and managed insurance claims, registrations and billing invoices to control operating costs.",
      "Coordinated directly with corporate clients to manage account requirements, resolve service issues and sustain long-term rental agreements.",
    ],
  },
  {
    role: "Customer Service Representative",
    company: "Arab National Bank – TeleMoney",
    period: "2009 – 2012",
    location: "Jeddah, KSA",
    summary:
      "Handled customer enquiries and records in a high-volume banking and remittance environment, supporting sales targets and training new team members.",
    achievements: [
      "Handled customer enquiries, resolved service issues and maintained accurate client records within a high-volume banking and remittance environment.",
      "Supported sales-team targets through proactive follow-up, contributing to measurable improvements in customer retention and repeat business.",
      "Assisted in onboarding and training new CSR team members and contributed to the development of internal service procedures.",
      "Conducted market research and collected competitor rate data to support management in refining service offerings and pricing strategy.",
    ],
  },
  {
    role: "Sales & Marketing Representative",
    company: "Arab National Bank – TeleMoney",
    period: "2007 – 2009",
    location: "Jeddah, KSA",
    summary:
      "Promoted remittance services directly to migrant-worker communities through ground-level outreach campaigns and competitor analysis.",
    achievements: [
      "Promoted TeleMoney services directly to migrant-worker communities at labour camps and company sites, driving new customer acquisition through ground-level outreach.",
      "Prepared marketing proposals, coordinated campaigns and tracked their effectiveness to support the broader sales strategy.",
      "Developed promotional materials and conducted competitor exchange-rate analysis, delivering actionable insights to the sales manager.",
    ],
  },
];

/* ----------------------- PROFESSIONAL HIGHLIGHTS ------------------------ */

export type Highlight = {
  title: string;
  icon: LucideIcon;
  body: string;
};

export const highlights: Highlight[] = [
  {
    title: "Customer Service",
    icon: Headset,
    body: "Resolving enquiries and disputes across phone, email and in person — de-escalating with patience and protecting the relationship while solving the problem.",
  },
  {
    title: "Operations",
    icon: Settings2,
    body: "Keeping day-to-day operations calm and predictable by spotting bottlenecks and tightening processes before they slow the team down.",
  },
  {
    title: "Logistics",
    icon: Truck,
    body: "Coordinating movements, vendors and timelines so work arrives on schedule and exceptions are caught and handled early.",
  },
  {
    title: "Fleet Coordination",
    icon: Route,
    body: "Scheduling vehicle assignments, maintenance and driver dispatch so a corporate fleet stays available, efficient and fully documented.",
  },
  {
    title: "Administration",
    icon: ClipboardList,
    body: "Running the administrative engine — bookings, agreements, correspondence and organised filing that keeps everything findable.",
  },
  {
    title: "Compliance",
    icon: ShieldCheck,
    body: "Applying KYC/AML checks, identity verification and audit-ready documentation — the discipline regulated remittance and banking work demands.",
  },
  {
    title: "Reporting",
    icon: BarChart3,
    body: "Turning operational activity into clear audit and management reports that align with SOPs and support real decisions.",
  },
  {
    title: "Documentation",
    icon: FileText,
    body: "Preparing accurate records, invoices and compliance paperwork that hold up to review and are easy for the next person to follow.",
  },
  {
    title: "CRM",
    icon: Users2,
    body: "Maintaining clean customer records so history, context and next steps are always one click away for the whole team.",
  },
  {
    title: "Data Entry",
    icon: Database,
    body: "Fast, accurate data handling with the checks and discipline that keep high-volume records trustworthy over time.",
  },
  {
    title: "AI Productivity",
    icon: Sparkles,
    body: "Using AI tools and prompting responsibly to speed up routine writing, summarising and research — without trading away accuracy.",
  },
  {
    title: "Market Research",
    icon: Search,
    body: "Gathering competitor and pricing data and organising it into clear summaries that sharpen commercial decisions.",
  },
];

/* -------------------------------- SKILLS -------------------------------- */

export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Professional Skills",
    skills: [
      "Customer Service Excellence",
      "Communication & Interpersonal Skills",
      "Multitasking",
      "Attention to Detail",
      "Time Management",
      "Lead Generation",
      "Market Research",
    ],
  },
  {
    title: "Technical & Admin",
    skills: [
      "ERP / Oracle Systems",
      "CRM Systems",
      "Data Entry & Records Management",
      "Spreadsheets (Excel / Google Sheets)",
      "Document & Report Preparation",
      "Data Analysis & Reporting",
      "AI Tool Usage & Prompting",
      "Canva",
      "Adobe Illustrator",
    ],
  },
  {
    title: "Operations & Logistics",
    skills: [
      "Fleet Coordination",
      "Vehicle Assignment & Inspection",
      "Maintenance Scheduling",
      "Inventory Control",
      "Documentation & Compliance",
      "Invoicing & Reporting",
      "KYC & AML Compliance",
    ],
  },
  {
    title: "Languages",
    skills: [
      "English — Fluent",
      "Bengali — Native",
      "Arabic — Professional",
      "Hindi / Urdu — Fluent (spoken)",
    ],
  },
];

/* ----------------------------- CERTIFICATIONS --------------------------- */

export type Certification = {
  title: string;
  issuer: string;
  year: string;
  description: string;
};

export const certifications: Certification[] = [
  {
    title: "Supply Chain Management Specialization",
    issuer: "Rutgers University (via Coursera)",
    year: "2026",
    description:
      "Core focus on logistics networks, procurement strategies, inventory management models and global supply chain operations.",
  },
  {
    title: "Google AI Essentials Specialization",
    issuer: "Google (via Coursera)",
    year: "Nov 2025",
    description:
      "Foundational AI applications, prompt engineering techniques and responsible use of AI tools to maximise productivity and streamline workflows.",
  },
  {
    title: "Inventory Management Certification",
    issuer: "HP LIFE (HP Foundation)",
    year: "Dec 2025",
    description:
      "Specialised knowledge in inventory tracking, stock optimisation, lead-time management and minimising supply chain waste.",
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
    qualification: "Bachelor of Commerce (B.Com)",
    institution: "Govt. City College, Chattogram",
    year: "2004",
  },
  {
    qualification: "HSC (Business Studies)",
    institution: "Govt. City College, Chattogram",
    year: "2002",
  },
  {
    qualification: "SSC (Science)",
    institution: "Bagmoniram City Corp. High School, Chattogram",
    year: "2000",
  },
];

export const languages: { language: string; level: string }[] = [
  { language: "English", level: "Fluent — read, write, speak" },
  { language: "Bengali", level: "Native / bilingual" },
  { language: "Arabic", level: "Professional — read, write, speak" },
  { language: "Hindi / Urdu", level: "Fluent (spoken)" },
];

/* -------------------------------- CONTACT ------------------------------- */

export const contact = {
  heading: "Let’s talk about how I can help",
  body: "Whether you are hiring for a role, building a remote team, or need an extra reliable pair of hands for operations and support, I would be glad to hear from you. The fastest way to reach me is email — or use the form and I will reply promptly.",
};
