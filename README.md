# NxtQuik — Technology for What's Next

> Official web platform for **NxtQuik**, a technology, digital transformation, and growth agency building high-performance digital products and systems for modern businesses.

[![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=black)](https://react.dev/)
[![TanStack Start](https://img.shields.io/badge/TanStack-Start%20%2F%20Router-ff4154?logo=react-query&logoColor=white)](https://tanstack.com/start)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite&logoColor=white)](https://vitejs.dev/)

---

## Table of Contents

- [About NxtQuik](#about-nxtquik)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Project Architecture](#project-architecture)
- [Route Structure](#route-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Production Build & Preview](#production-build--preview)
  - [Linting & Code Quality](#linting--code-quality)
- [Environment Configuration](#environment-configuration)
- [SEO & Metadata Architecture](#seo--metadata-architecture)
- [Contact & Agency Information](#contact--agency-information)

---

## About NxtQuik

NxtQuik partners with ambitious companies to design, build, and scale digital products. Rather than building static digital brochures, NxtQuik delivers end-to-end commercial solutions spanning four primary pillars:

1. **Build**: Web applications, mobile apps (iOS/Android/Cross-platform), and custom business software.
2. **Transform**: Cloud engineering, infrastructure modernisations, and legacy workflow automation.
3. **Consult**: Technical architecture, product discovery, and CTO-level advisory.
4. **Grow**: Technical SEO, high-intent digital marketing, conversion rate optimisation (CRO), and analytics.

---

## Key Features

- **Fullstack React 19 SSR**: Powered by **TanStack Start** with lightning-fast initial server rendering and hydration.
- **Type-Safe File-Based Routing**: Structured through **TanStack Router** with automated route tree generation and type safety.
- **Tailwind CSS v4 & Modern Design System**: Sleek typography (Sora and Manrope), dark navy surfaces, glowing glassmorphism accents, and responsive layouts.
- **Micro-Animations & Smooth Reveals**: Orchestrated with **Motion** (`motion/react`) for refined scroll animations and interactive states.
- **Robust SSR Error Recovery**: Integrated error boundary capture and fallback renderers in `src/server.ts` to prevent runtime crashes.
- **Dynamic XML Sitemap**: Generated on the fly at `/sitemap.xml` directly from application route data.
- **Server Functions (`createServerFn`)**: Server-side contact and enquiry processing with schema validation via **Zod**.
- **100% Standalone & Local Assets**: Fully decoupled from external sandbox builders, with brand and client assets hosted locally in `src/assets/`.

---

## Technology Stack

| Layer                 | Technologies                                                                                                                                                 |
| :-------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Framework & SSR**   | [TanStack Start](https://tanstack.com/start), [TanStack Router](https://tanstack.com/router), [TanStack Query](https://tanstack.com/query)                   |
| **Runtime & Core**    | [React 19](https://react.dev/), [TypeScript 5.8](https://www.typescriptlang.org/), [Node.js](https://nodejs.org/)                                            |
| **Styling & UI**      | [Tailwind CSS v4](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), [shadcn/ui](https://ui.shadcn.com/), [Lucide React](https://lucide.dev/) |
| **Motion & Dynamics** | [Motion](https://motion.dev/) (Framer Motion v13)                                                                                                            |
| **Form Handling**     | [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/)                                                                                     |
| **Bundler & Tooling** | [Vite 8](https://vitejs.dev/), [ESLint 9](https://eslint.org/), [Prettier 3](https://prettier.io/)                                                           |

---

## Project Architecture

```text
nxtquik/
├── public/                 # Static public assets (favicons, robots.txt, og-image.png)
├── src/
│   ├── assets/             # Brand logos, wordmarks, and client showcase PNGs
│   ├── components/
│   │   ├── site/           # Domain-specific components (Brand, Nav, Footer, HeroVisual, etc.)
│   │   └── ui/             # Reusable primitives (Buttons, Dialogs, Toaster, Accordeon, etc.)
│   ├── data/
│   │   ├── caseStudies.ts  # Deep-dive portfolio studies (Scalvea, Gabru Looks)
│   │   ├── services.ts     # Detailed service catalog, deliverables, process, and FAQs
│   │   └── site.ts         # Global company information, navigation, and client projects
│   ├── hooks/              # Custom React hooks (e.g. use-mobile)
│   ├── lib/
│   │   ├── contact.functions.ts  # TanStack Start server function for enquiry processing
│   │   ├── error-capture.ts      # Server error stack preservation and logging
│   │   ├── error-page.ts         # Catastrophic SSR error fallback page
│   │   ├── seo.ts                # Structured head metadata, OpenGraph, JSON-LD breadcrumbs
│   │   └── utils.ts              # Class name merging (clsx + tailwind-merge)
│   ├── routes/             # TanStack Router file-based route definitions
│   │   ├── __root.tsx      # Root layout, HTML document shell, and providers
│   │   ├── index.tsx       # Homepage
│   │   ├── about.tsx       # About page (Philosophy, Leadership, Approach)
│   │   ├── contact.tsx     # Interactive contact & project enquiry form
│   │   ├── insights.tsx    # Thought leadership & industry insights
│   │   ├── services/       # Services listing & dynamic slug routes ($slug.tsx)
│   │   ├── work/           # Portfolio listing & case study routes ($slug.tsx)
│   │   └── sitemap[.]xml.ts# Server route producing dynamic XML sitemap
│   ├── router.tsx          # Router instantiation with React Query client
│   ├── server.ts           # SSR server entry point with error mitigation
│   ├── start.ts            # TanStack Start initialization & client/server middleware
│   └── styles.css          # Design system root tokens and Tailwind utilities
├── AGENTS.md               # Codebase agent and architecture guidelines
├── components.json         # shadcn/ui configuration
├── eslint.config.js        # ESLint flat configuration
├── tsconfig.json           # TypeScript configuration with @/* path aliases
└── vite.config.ts          # Vite build and plugin pipeline
```

---

## Route Structure

| Route              | Path              | Description                                                                           |
| :----------------- | :---------------- | :------------------------------------------------------------------------------------ |
| **Home**           | `/`               | Hero, capabilities, tech stack, data pulses, featured work, and client trust          |
| **Services**       | `/services`       | Overview of all service categories (Build, Transform, Consult, Grow)                  |
| **Service Detail** | `/services/$slug` | Deep-dive per service (`web-development`, `app-development`, `cloud-solutions`, etc.) |
| **Work**           | `/work`           | Complete portfolio of products and systems built                                      |
| **Case Study**     | `/work/$slug`     | Comprehensive case studies (`scalvea`, `gabru-looks`)                                 |
| **About**          | `/about`          | Company background, engineering philosophy, and values                                |
| **Insights**       | `/insights`       | Articles on digital systems, technology decisions, and business growth                |
| **Contact**        | `/contact`        | Project enquiry form with server action handling                                      |
| **Sitemap**        | `/sitemap.xml`    | Dynamically generated search engine sitemap                                           |

---

## Getting Started

### Prerequisites

- **Node.js**: v20.x or v22.x LTS recommended
- **Package Manager**: `npm` (v10+)

### Installation

Clone or open the project directory and install dependencies:

```sh
npm install
```

### Development

Run the Vite development server with Hot Module Replacement (HMR):

```sh
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) (or the port reported in your terminal) in your browser.

### Production Build & Preview

Compile both client and server bundles:

```sh
npm run build
```

Preview the production build locally:

```sh
npm run preview
```

### Linting & Code Quality

Verify code quality and formatting:

```sh
# Run ESLint across the codebase
npm run lint

# Format code with Prettier
npm run format
```

---

## Environment Configuration

Configure environment variables by setting them in your deployment environment or in a local `.env` file:

| Variable              | Required | Description                                                         | Default / Fallback                          |
| :-------------------- | :------- | :------------------------------------------------------------------ | :------------------------------------------ |
| `RESEND_API_KEY`      | Optional | API key for sending enquiry emails via [Resend](https://resend.com) | Falls back to webhook or server console log |
| `CONTACT_WEBHOOK_URL` | Optional | Webhook URL (Slack, Discord, CRM) to receive lead submissions       | Logged to console if unset                  |
| `PORT`                | Optional | Port for the server to listen on                                    | `8080` (or Vite default)                    |

_Note: In development, if neither `RESEND_API_KEY` nor `CONTACT_WEBHOOK_URL` is set, enquiries submitted through `/contact` will log directly to the server terminal without error._

---

## SEO & Metadata Architecture

All page metadata is centrally managed through the `pageHead()` utility in `src/lib/seo.ts`:

- **Unique Titles & Descriptions**: Dedicated per route with consistent brand suffix.
- **OpenGraph & Twitter Cards**: Standardized image previews (`/og-image.png`), dimensions, and summary card tags.
- **Canonical URLs**: Generated dynamically to prevent duplicate content indexing.
- **Structured JSON-LD**: Breadcrumb schemas generated using `breadcrumbs()` helper for search engine rich results.
- **Dynamic Sitemap**: Built on demand from data files (`caseStudies.ts`, `services.ts`) matching the request origin.

---

## Contact & Agency Information

- **Brand**: NxtQuik
- **Tagline**: _Technology for What's Next._
- **Founder**: Shubham Sonwal
- **Email**: [nxtquik@gmail.com](mailto:nxtquik@gmail.com)
- **Phone**: [+91 94786 69360](tel:+919478669360)
- **Office Location**: Patiala, Punjab, India
- **LinkedIn**: [NxtQuik on LinkedIn](https://www.linkedin.com/company/ugcnxtquik/)
- **Instagram**: [@nxtquik](https://www.instagram.com/nxtquik/)

---

© 2026 NxtQuik. All rights reserved.
