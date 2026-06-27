# Jobaedul Islam Jewel — Personal Branding Website

A premium, Apple-inspired personal branding website and digital CV for
**Jobaedul Islam Jewel**, _Operations, Logistics & Customer Support Specialist_.

Built to help recruiters, hiring managers, employers and potential clients
quickly understand who he is, what he has done, and the value he brings.

---

## ✨ Features

- **Apple-inspired minimalist design** — clean, elegant, plenty of whitespace, excellent typography.
- **Light & dark mode** — system-aware, with a manual toggle (persists per visitor).
- **Fully responsive** — looks sharp from small phones to large desktops.
- **Subtle, tasteful motion** — gentle fade/rise on scroll, respects `prefers-reduced-motion`.
- **Nine pages** — Home, About, Experience, Highlights, Skills, Certifications, Resume, Contact, Privacy Policy, plus a custom 404.
- **SEO-ready** — per-page metadata, Open Graph + Twitter cards, Schema.org JSON-LD, dynamic sitemap & robots, web manifest.
- **Accessible** — semantic HTML, skip link, keyboard focus styles, ARIA labels, WCAG-minded contrast.
- **Performance-focused** — static rendering, system fonts via `next/font`, no heavy images, small JS payload.

---

## 🧱 Tech Stack

| Concern        | Choice                          |
| -------------- | ------------------------------- |
| Framework      | Next.js 15 (App Router)         |
| Language       | TypeScript                      |
| UI library     | React 18                        |
| Styling        | Tailwind CSS                    |
| Animation      | Framer Motion                   |
| Icons          | Lucide                          |
| Theming        | next-themes                     |

---

## 🚀 Getting Started

> Requires **Node.js 18.18+** (Node 20+ recommended).

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
# open http://localhost:3000

# 3. Production build (optional, to verify locally)
npm run build
npm run start
```

Other scripts:

```bash
npm run lint     # ESLint
```

---

## 📁 Project Structure

```
.
├── public/
│   ├── images/
│   │   └── profile-placeholder.svg   # 🔧 replace with your photo
│   └── jobaedul-islam-jewel-cv.pdf   # 🔧 replace with your real CV
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Root layout, metadata, theme, nav/footer
│   │   ├── page.tsx                  # Home
│   │   ├── about/                    # About
│   │   ├── experience/               # Experience (timeline)
│   │   ├── highlights/               # Professional Highlights
│   │   ├── skills/                   # Skills
│   │   ├── certifications/           # Certifications
│   │   ├── resume/                   # Online resume + Download CV
│   │   ├── contact/                  # Contact (links + form)
│   │   ├── privacy/                  # Privacy Policy
│   │   ├── not-found.tsx             # Custom 404
│   │   ├── icon.svg                  # Favicon (auto)
│   │   ├── apple-icon.tsx            # Apple touch icon (auto-generated)
│   │   ├── opengraph-image.tsx       # Social share image (auto-generated PNG)
│   │   ├── sitemap.ts                # /sitemap.xml
│   │   ├── robots.ts                 # /robots.txt
│   │   ├── manifest.ts               # /manifest.webmanifest
│   │   └── globals.css               # Design tokens & base styles
│   ├── components/
│   │   ├── cards/                    # Highlight / Skill / Certification cards
│   │   ├── contact/ContactForm.tsx   # Contact form (client)
│   │   ├── icons/                    # Social platform icon map
│   │   ├── layout/                   # Navbar, Footer
│   │   ├── motion/Reveal.tsx         # Scroll-in animation wrapper
│   │   ├── sections/                 # Hero, Stats, CTA, Timeline
│   │   ├── seo/JsonLd.tsx            # JSON-LD injector
│   │   ├── theme/                    # ThemeProvider, ThemeToggle
│   │   └── ui/                       # Container, Section, Button, headings…
│   ├── content/data.ts               # ✍️ ALL website copy lives here
│   └── lib/
│       ├── site.ts                   # ⚙️ Site config, nav, social links
│       ├── seo.ts                    # Metadata + JSON-LD helpers
│       └── utils.ts                  # cn() class helper
├── .env.example
├── tailwind.config.ts
└── next.config.mjs
```

---

## 🔧 Replacing the Placeholders

Everything you need to personalise is in **two files** plus a couple of assets.
Search the codebase for the word **`REPLACE`** or the **`🔧`** emoji to jump to each spot.

### 1. Site configuration — `src/lib/site.ts`

| Field          | What to set                                                        |
| -------------- | ------------------------------------------------------------------ |
| `url`          | Your live domain, e.g. `https://jobaedulislam.com` (no trailing /) |
| `email`        | Your real professional email                                       |
| `phone`        | Optional phone number (leave `""` to hide)                         |
| `socialLinks`  | Replace every `"#"` with your LinkedIn, GitHub, Upwork, Freelancer, Fiverr URLs, and update the `mailto:` |

### 2. Written content — `src/content/data.ts`

All copy is here: the hero statement, summary, about text, experience timeline,
highlights, skills, certifications, education and languages.

Look for square-bracket placeholders like `[Company Name]`, `[20XX]` and
`[Issuing Organisation]` and replace them with your real details.
The wording is original (not copied from any CV) — adjust freely to match your voice.

### 3. Your photo — `public/images/`

Replace `public/images/profile-placeholder.svg` with your real photo
(e.g. `profile.jpg`), then update `profileImage` in `src/lib/site.ts`:

```ts
profileImage: "/images/profile.jpg",
```

A portrait around **800×1000px** works best.

### 4. Your CV — `public/jobaedul-islam-jewel-cv.pdf`

Replace the placeholder file with your real PDF, keeping the same filename
(or update `resumeFile` in `src/lib/site.ts`). The "Download CV" buttons link to it.

### 5. Icons & social image (optional)

The **favicon**, **Apple touch icon** and **Open Graph share image** are generated
automatically from your name/title — no files to manage. To customise them, edit:

- `src/app/icon.svg` — favicon
- `src/app/apple-icon.tsx` — home-screen icon
- `src/app/opengraph-image.tsx` — social share preview

---

## 📨 Contact Form

By default the form uses a **zero-setup mailto fallback** — clicking _Send_ opens
the visitor's email client pre-filled to your address.

To collect submissions automatically:

1. Create an endpoint with a service such as [Formspree](https://formspree.io),
   [Resend](https://resend.com), or your own API route.
2. Copy `.env.example` to `.env.local` and set:
   ```
   NEXT_PUBLIC_FORM_ENDPOINT=https://your-form-endpoint
   ```
The form will then POST `{ name, email, message }` as JSON.

---

## ☁️ Deploying to Vercel

Vercel is the recommended host for Next.js.

### Option A — Dashboard (easiest)

1. Push this project to a GitHub / GitLab / Bitbucket repository.
2. Go to [vercel.com/new](https://vercel.com/new) and **import** the repository.
3. Vercel auto-detects Next.js — keep the defaults:
   - Build command: `next build`
   - Output: handled automatically
4. (Optional) Add the `NEXT_PUBLIC_FORM_ENDPOINT` environment variable under
   **Settings → Environment Variables**.
5. Click **Deploy**. You'll get a live `*.vercel.app` URL in ~1 minute.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

### After deploying

1. Add your **custom domain** in **Settings → Domains** and follow the DNS steps.
2. Update `url` in `src/lib/site.ts` to that domain so SEO tags, the sitemap and
   robots.txt point to the correct address, then redeploy.

---

## ♿ Accessibility & 🔍 SEO Notes

- Semantic landmarks (`header`, `main`, `nav`, `footer`), a skip-to-content link, and visible focus rings.
- Color tokens chosen for readable contrast in both themes; motion respects `prefers-reduced-motion`.
- `sitemap.xml`, `robots.txt`, canonical URLs, Open Graph/Twitter cards and Schema.org `Person` data are generated automatically.
- After deploying, submit your sitemap (`https://your-domain.com/sitemap.xml`) in
  [Google Search Console](https://search.google.com/search-console).

---

## 📄 License

Personal project for Jobaedul Islam Jewel. All content © Jobaedul Islam Jewel.
