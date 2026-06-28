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
  ShieldCheck,
  Handshake,
  ClipboardCheck,
  UsersRound,
  MessagesSquare,
  Database,
  LineChart,
  Languages,
  TrendingUp,
} from "lucide-react";

/* ----------------------------- HERO / HOME ----------------------------- */

export const hero = {
  // A personal brand statement — confident, specific, not a cliché.
  statement:
    "I keep operations running quietly and reliably — so teams stay coordinated, customers stay heard, and nothing falls through the cracks.",
  intro:
    "For more than 15 years I have worked at the intersection of operations, logistics, and customer service — across financial services, fleet management, and remittance banking in the KSA market. My work is the kind people notice only when it is missing: fleets that stay coordinated, compliance records that hold up under audit, and customers who feel genuinely resolved rather than just closed. I bring that same reliability whether the role is based in the KSA market, Bangladesh, or fully remote.",
};

/* --------------------------- CAREER HIGHLIGHTS -------------------------- */

export type Stat = {
  value: string;
  label: string;
};

export const stats: Stat[] = [
  { value: "15+", label: "Years of Experience" },
  { value: "10K+", label: "Customer Interactions Handled" },
  { value: "3", label: "Industries Served" },
  { value: "4", label: "Languages Spoken" },
];

/* -------------------------- PROFESSIONAL SUMMARY ------------------------ */

export const summary = {
  heading: "A steady hand for the work that holds a business together",
  paragraphs: [
    "I specialise in the operational core of a business — the coordination, compliance, and communication work that keeps everything else moving. Over 15 years across financial services, automotive fleet management, and remittance banking in Saudi Arabia, I have built a track record of being the person teams rely on when accuracy and follow-through are non-negotiable.",
    "My experience spans both customer-facing and back-office work. On the customer side, I have handled high volumes of complex enquiries — disputed transactions, delayed transfers, escalated complaints — and resolved them in ways that retain trust rather than just close tickets. On the operational side, I have managed fleet scheduling, vendor coordination, compliance documentation, and branch reporting across demanding, fast-moving environments.",
    "More recently I have invested in formal upskilling — completing a Supply Chain Management Specialization from Rutgers University, Google AI Essentials, and an Inventory Management certification — to pair hands-on field experience with modern operational thinking. I am multilingual in English, Arabic, Bengali, and Hindi/Urdu, and comfortable working across diverse teams, time zones, and client bases.",
  ],
};

/* ------------------------------- ABOUT --------------------------------- */

export const about = {
  lead:
    "I am Jobaedul Islam Jewel — an operations, logistics, and customer service professional with 15+ years of experience built almost entirely in the KSA market across Jeddah and Riyadh.",
  paragraphs: [
    "My career has spanned three distinct industries: remittance banking, automotive fleet management, and financial services compliance. What connects them is the same underlying work — keeping records accurate, keeping customers calm, keeping processes tight, and flagging problems before they become crises. I have managed vehicle fleets, supervised driver teams, enforced KYC and AML protocols, resolved high-stakes transaction disputes, and prepared audit-ready documentation — often across all of these in a single working week.",
    "I work best in roles where reliability is the standard, not the exception. I am the person who reads the SOP before asking questions, keeps the maintenance log updated without being reminded, and de-escalates a frustrated customer before they become a complaint on record. I am comfortable owning a process end-to-end and equally comfortable supporting a larger team where my contribution is one well-executed piece of a bigger operation.",
    "I am open to roles across the KSA market and beyond. I have recently completed formal certifications in supply chain management, AI tools, and inventory management — because I believe that experience without continued learning starts to quietly go stale.",
  ],
  // Short, human values rather than buzzwords.
  values: [
    {
      title: "Reliability first",
      body: "I treat other people’s deadlines as seriously as my own. If I commit to something, it gets done — without reminders and without shortcuts.",
    },
    {
      title: "Accuracy over speed",
      body: "Clean records, complete documentation, and careful data entry are not overhead — they are the job. I would rather take an extra ten minutes and get it right than create a problem for the audit two months later.",
    },
    {
      title: "Calm under pressure",
      body: "Operational emergencies, difficult customers, and sudden process changes do not throw me. I have handled all three, usually at the same time, and the response is always the same: stay organised, communicate clearly, resolve first.",
    },
    {
      title: "Always improving",
      body: "I look for the small fixes that quietly compound — a cleaner process, a faster tool, a clearer report format. And when a formal course will sharpen something I already do, I take it.",
    },
  ],
};

/* ----------------------------- EXPERIENCE ------------------------------ */

export type ExperienceItem = {
  role: string;
  company: string;
  companyUrl?: string;
  companyLogo?: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Career Break & Professional Development",
    company: "",
    period: "2023 – Present",
    location: "",
    summary:
      "Took a planned career break while actively upskilling. Completed certifications in Supply Chain Management (Rutgers University), Google AI Essentials, and Inventory Management (HP LIFE). Now actively pursuing full-time opportunities across operations, logistics, customer service, and administration.",
    achievements: [],
  },
  {
    role: "Customer Service Executive",
    company: "ERSAL Money Transfer",
    companyUrl: "https://ersal.sa/",
    companyLogo: "/images/ersal.png",
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
    companyUrl: "https://bestrentacar.com.sa/",
    companyLogo: "/images/best-rent-a-car.png",
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
    companyUrl: "https://anb.com.sa/web/anb/telemoney",
    companyLogo: "/images/telemoney.jpg",
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
    companyUrl: "https://anb.com.sa/web/anb/telemoney",
    companyLogo: "/images/telemoney.jpg",
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
    body: "Managing high volumes of customer enquiries across banking, remittance, and fleet rental — resolving disputes, retaining trust, and keeping CRM records complete and accurate.",
  },
  {
    title: "Operations Coordination",
    icon: Settings2,
    body: "Overseeing day-to-day branch and fleet operations across multiple roles — tracking workflows, flagging bottlenecks, and keeping everything aligned with head office SOPs.",
  },
  {
    title: "Logistics & Fleet Management",
    icon: Truck,
    body: "Scheduling and tracking a large corporate vehicle fleet across Jeddah — maximising utilisation, coordinating maintenance, and dispatching drivers dynamically based on real-time demand.",
  },
  {
    title: "KYC & AML Compliance",
    icon: ShieldCheck,
    body: "Enforcing strict identity verification and transaction monitoring protocols in regulated remittance and banking environments, in full alignment with central bank requirements.",
  },
  {
    title: "Vendor & Supplier Coordination",
    icon: Handshake,
    body: "Negotiating with external workshops and service providers, managing vendor documentation, and controlling operating costs across maintenance, insurance, and billing.",
  },
  {
    title: "Documentation & Audit Readiness",
    icon: ClipboardCheck,
    body: "Maintaining complete, accurate records across compliance reports, rental agreements, insurance claims, and vehicle logs — always audit-ready and aligned with SOPs.",
  },
  {
    title: "Driver & Team Supervision",
    icon: UsersRound,
    body: "Scheduling and managing shift rosters for driver teams, dispatching tasks based on location and urgency, and maintaining operational continuity during peak periods.",
  },
  {
    title: "Dispute Resolution",
    icon: MessagesSquare,
    body: "De-escalating complex customer complaints — including delayed international transfers, transaction blocks, and billing disputes — using structured, calm resolution techniques.",
  },
  {
    title: "Data Entry & Records Management",
    icon: Database,
    body: "Maintaining high-accuracy records across branch operations, fleet management systems, and customer databases — with careful attention to data integrity and audit trails.",
  },
  {
    title: "Market Research & Competitor Analysis",
    icon: LineChart,
    body: "Collecting and analysing competitor pricing and service data in the remittance sector, delivering actionable insights to support management decisions and service positioning.",
  },
  {
    title: "Multilingual Client Communication",
    icon: Languages,
    body: "Communicating fluently with customers and colleagues in English, Arabic, Bengali, and Hindi/Urdu — bridging language gaps in diverse, multinational teams across the KSA market.",
  },
  {
    title: "Process Improvement",
    icon: TrendingUp,
    body: "Identifying and flagging operational inefficiencies, contributing to workflow improvements that reduced friction, improved reporting accuracy, and kept teams aligned.",
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
      "Team Coordination",
      "Problem Solving",
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
      "Arabic — Professional",
      "Bengali — Native",
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
  image: string;
};

export const certifications: Certification[] = [
  {
    title: "Supply Chain Management Specialization",
    issuer: "Rutgers University (via Coursera)",
    year: "2026",
    description:
      "Core focus on logistics networks, procurement strategies, inventory management models and global supply chain operations.",
    image: "/images/supply-chain-management.jpg",
  },
  {
    title: "Google AI Essentials Specialization",
    issuer: "Google (via Coursera)",
    year: "Nov 2025",
    description:
      "Foundational AI applications, prompt engineering techniques and responsible use of AI tools to maximise productivity and streamline workflows.",
    image: "/images/google-ai-essentials.jpg",
  },
  {
    title: "Inventory Management Certification",
    issuer: "HP LIFE (HP Foundation)",
    year: "Dec 2025",
    description:
      "Specialised knowledge in inventory tracking, stock optimisation, lead-time management and minimising supply chain waste.",
    image: "/images/inventory-management.jpg",
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
  { language: "Arabic", level: "Professional — read, write, speak" },
  { language: "Bengali", level: "Native / bilingual" },
  { language: "Hindi / Urdu", level: "Fluent (spoken)" },
];

/* -------------------------------- CONTACT ------------------------------- */

export const contact = {
  heading: "Let’s talk about how I can help",
  body: "Whether you are hiring for a role, building a remote team, or need an extra reliable pair of hands for operations and support, I would be glad to hear from you. The fastest way to reach me is email — or use the form and I will reply promptly.",
};
