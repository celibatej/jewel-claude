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
    "I keep fleets, documents and customers organised, so teams stay coordinated and nothing falls through the cracks.",
  intro:
    "I have more than 15 years of experience in administration, fleet and logistics coordination and customer service in the KSA market, including financial services and remittance. My work covers vehicle scheduling, driver dispatch, maintenance tracking, vendor coordination and handling of contracts, insurance and registration records, along with calendar management, correspondence and filing as an executive assistant. I serve customers and corporate clients in English, Arabic and Hindi/Urdu. I also hold certifications in Oracle Aconex, administrative assistance, SAP, inventory management and supply chain. I bring the same reliability to any administrative, document control, fleet or logistics role in Saudi Arabia.",
};

/* --------------------------- CAREER HIGHLIGHTS -------------------------- */

export type Stat = {
  value: string;
  label: string;
};

export const stats: Stat[] = [
  { value: "15+", label: "Years of Experience" },
  { value: "10K+", label: "Customer Interactions Handled" },
  { value: "4", label: "Industries Served" },
  { value: "5", label: "Languages Spoken" },
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
    "I am Jobaedul Islam Jewel, a fleet, logistics, administration and customer service professional with 15+ years of experience built almost entirely in the KSA market across Jeddah and Riyadh.",
  paragraphs: [
    "My career has covered remittance banking, automotive fleet management, financial services compliance and office administration. What connects them is the same underlying work: keeping records accurate, keeping customers calm, keeping processes tight, and flagging problems before they become crises. I have coordinated vehicle fleets, scheduled and supervised drivers, managed contracts, insurance and registration documents, supported executive calendars and correspondence, enforced KYC and AML protocols, and resolved high-stakes transaction disputes.",
    "I work best in roles where reliability is the standard, not the exception. I am the person who reads the SOP before asking questions, keeps the maintenance log and document files updated without being reminded, and de-escalates a frustrated customer before they become a complaint on record. I am comfortable owning a process end-to-end and equally comfortable supporting a larger team where my contribution is one well-executed piece of a bigger operation.",
    "I am open to roles across Saudi Arabia. I have recently completed formal certifications in supply chain management, inventory management, SAP, Oracle Aconex, administrative assistance and AI tools, because I believe that experience without continued learning starts to quietly go stale.",
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
    role: "Customer Service Executive",
    company: "ERSAL Money Transfer",
    companyUrl: "https://ersal.sa/",
    companyLogo: "/images/ersal.png",
    period: "2017 – Present",
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
    role: "Executive Assistant",
    company: "FAYEZ ALI RAJAB TRADING EST",
    period: "2013 – 2014",
    location: "Jeddah, KSA",
    summary:
      "Managed executive scheduling, travel arrangements, correspondence, purchase orders, and front-desk reception while maintaining confidential physical and digital records.",
    achievements: [
      "Managed calendar, scheduling, and appointments, and coordinated travel arrangements including flight and hotel bookings.",
      "Prepared purchase orders and liaised with the sales team and other departments.",
      "Answered and transferred incoming calls to relevant departments, and managed correspondence including emails, letters, and memos, while maintaining confidentiality.",
      "Maintained physical and digital filing systems and served as front-desk point of contact for visitors and clients.",
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
      "Communication",
      "Interpersonal Skills",
      "Multilingual Communication",
      "Customer Dispute Resolution",
      "B2B & B2C Client Management",
      "Multitasking",
      "Attention to Detail",
      "Time Management",
      "Adaptability & Quick Learning",
      "Team Coordination",
      "Problem Solving",
      "Lead Generation",
      "Market Research",
    ],
  },
  {
    title: "Technical & Admin",
    skills: [
      "ERP Systems (SAP / Oracle)",
      "Oracle Aconex (Project Collaboration)",
      "CRM Systems",
      "Administrative Support",
      "Data Entry & Records Management",
      "Spreadsheets (Advanced Excel / Google Sheets)",
      "Document & Report Preparation",
      "Data Analysis & Reporting",
      "AI Tool Usage & Prompting",
    ],
  },
  {
    title: "Operations & Logistics",
    skills: [
      "Fleet Coordination",
      "Driver Scheduling & Dispatch",
      "Vehicle Assignment & Inspection",
      "Maintenance Scheduling",
      "Inventory Control",
      "Logistics Coordination",
      "Vendor Coordination",
      "Supply Chain Fundamentals",
      "Documentation & Compliance",
      "Invoicing & Reporting",
      "Cash Reconciliation & Reporting",
      "KYC & AML Compliance",
      "Branch Operations & Auditing",
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
  image?: string;
};

export const certifications: Certification[] = [
  {
    title: "Careers in Supply Chain and Operations",
    issuer: "LinkedIn Learning, CPE Sponsors & QAS",
    year: "Sep 2026",
    description:
      "Overview of supply chain and operations roles, key functions and the skills needed across planning, sourcing, logistics and delivery.",
    image: "/images/careers-in-supply-chain-and-operations.svg",
  },
  {
    title: "Career Essentials in Administrative Assistance",
    issuer: "Microsoft and LinkedIn",
    year: "Aug 2026",
    description:
      "Core administrative skills including scheduling, business communication, document handling and Microsoft 365 tools to support smooth office operations.",
    image: "/images/career-essentials-in-administrative-assistance.svg",
  },
  {
    title: "Oracle Aconex Associate",
    issuer: "Oracle",
    year: "Aug 2026",
    description:
      "Foundational knowledge of the Oracle Aconex platform for project collaboration, covering document management, correspondence tracking and workflows across project teams.",
    image: "/images/oracle-aconex-associate.svg",
  },
  {
    title: "Managing Logistics",
    issuer: "LinkedIn Learning and Project Management Institute (PMI)",
    year: "Aug 2026",
    description:
      "Fundamentals of logistics management, covering transportation, warehousing, inventory flow and coordination from supplier to customer.",
    image: "/images/managing-logistics.svg",
  },
  {
    title: "SAP ERP Essential Training",
    issuer: "LinkedIn Learning",
    year: "Aug 2026",
    description:
      "Introduction to SAP ERP and how core business processes such as procurement, sales and inventory connect within one system.",
    image: "/images/sap-erp-essential-training.svg",
  },
  {
    title: "Microsoft Office Specialist: Excel Expert (Microsoft 365 Apps) Cert Prep",
    issuer: "LinkedIn Learning",
    year: "Aug 2026",
    description:
      "Advanced Excel skills including complex formulas, data analysis and workbook management, in preparation for the Microsoft Office Specialist Expert exam.",
    image: "/images/microsoft-office-specialist-excel-expert.svg",
  },
  {
    title: "Customer Service: Creating Customer Value",
    issuer: "LinkedIn Learning",
    year: "Aug 2026",
    description:
      "Customer-focused service techniques, professional handling of enquiries and complaints, and building lasting customer relationships.",
    image: "/images/customer-service-creating-customer-value.svg",
  },
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
