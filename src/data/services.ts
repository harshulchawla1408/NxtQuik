export type Service = {
  slug: string;
  name: string;
  category: "Build" | "Transform" | "Consult" | "Grow";
  headline: string;
  problem: string;
  solution: string;
  offerings: string[];
  flow: string[];
  technology: string[];
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    name: "Web Development",
    category: "Build",
    headline: "Websites that carry their weight commercially.",
    problem:
      "Most business websites are built as brochures. They look acceptable, load slowly, and do very little to move a visitor towards an enquiry or a purchase.",
    solution:
      "We design and build websites around the decisions your customer actually makes, then engineer them for speed, search visibility and easy editing.",
    offerings: [
      "Corporate and marketing websites",
      "Landing pages and campaign sites",
      "Web platforms and portals",
      "Headless CMS integration",
      "Performance and Core Web Vitals work",
      "Accessibility and SEO foundations",
    ],
    flow: ["Strategy", "UX/UI", "Development", "Testing", "Deployment", "Optimization"],
    technology: ["React", "Next.js", "TypeScript", "Node.js", "Headless CMS", "Vercel / AWS"],
    faq: [
      {
        q: "How long does a website project take?",
        a: "A focused marketing site typically runs four to eight weeks. Larger platforms depend on scope, and we agree a phased plan before anything is built.",
      },
      {
        q: "Can our team edit the content afterwards?",
        a: "Yes. We build editable content structures and hand over documentation so your team can publish without developer involvement.",
      },
      {
        q: "Do you handle SEO during the build?",
        a: "Technical SEO is part of the build, not an afterthought: structure, metadata, performance, schema and internal linking are in scope from the start.",
      },
    ],
  },
  {
    slug: "app-development",
    name: "App Development",
    category: "Build",
    headline: "Mobile products people keep on their home screen.",
    problem:
      "Apps fail when they are built before the core use case is clear, leaving businesses with an expensive product nobody opens twice.",
    solution:
      "We define the single job the app must do, prototype it, then build across iOS, Android or cross-platform with a release process you can maintain.",
    offerings: [
      "iOS and Android applications",
      "Cross-platform apps",
      "Progressive web apps",
      "App modernisation",
      "Release and store management",
      "Analytics and crash monitoring",
    ],
    flow: ["Discovery", "Prototype", "Build", "Test", "Release", "Iterate"],
    technology: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "Firebase", "CI/CD"],
    faq: [
      {
        q: "Native or cross-platform?",
        a: "It depends on the hardware features and performance profile you need. We make the recommendation during discovery, with the trade-offs written down.",
      },
      {
        q: "Can you start from an MVP?",
        a: "Yes, and we usually recommend it: ship the core flow, learn from real usage, then invest in the rest.",
      },
    ],
  },
  {
    slug: "custom-software",
    name: "Custom Software Development",
    category: "Build",
    headline: "Software shaped around how your business actually runs.",
    problem:
      "Off-the-shelf tools force teams into workarounds, spreadsheets and duplicate data entry that quietly cost hours every week.",
    solution:
      "We map the operational process, then build the system that removes the manual steps and gives you a single reliable source of data.",
    offerings: [
      "SaaS products",
      "Internal business systems",
      "Workflow and process automation",
      "Reporting and dashboards",
      "Legacy system replacement",
      "Enterprise applications",
    ],
    flow: ["Process mapping", "Architecture", "Build", "Integrate", "Rollout", "Support"],
    technology: ["TypeScript", "Node.js", "Python", ".NET", "PostgreSQL", "Docker"],
    faq: [
      {
        q: "Is custom software worth it over a subscription tool?",
        a: "When the process is a competitive advantage or the licence and workaround costs keep climbing, custom usually wins. We will tell you when it does not.",
      },
      {
        q: "Who owns the code?",
        a: "You do, in full, in your own repository.",
      },
    ],
  },
  {
    slug: "cloud-solutions",
    name: "Cloud Solutions",
    category: "Transform",
    headline: "Infrastructure that scales without drama.",
    problem:
      "Ageing infrastructure produces surprise outages, unpredictable bills and deployments the team is afraid to run.",
    solution:
      "We assess what you have, design a target architecture, and migrate in stages so the business keeps operating throughout.",
    offerings: [
      "Cloud consulting and architecture",
      "Cloud migration",
      "Infrastructure as code",
      "DevOps and CI/CD pipelines",
      "Cost optimisation",
      "Monitoring and reliability",
    ],
    flow: ["Assess", "Architect", "Migrate", "Optimize", "Scale"],
    technology: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
    faq: [
      {
        q: "Will migration cause downtime?",
        a: "We plan for staged cutover with rollback. Brief planned windows are sometimes needed, and they are agreed with you in advance.",
      },
      {
        q: "Can you reduce our cloud bill?",
        a: "Often, yes. Right-sizing, storage tiering and removing idle resources are the usual starting points, and we report the before and after.",
      },
    ],
  },
  {
    slug: "digital-transformation",
    name: "Digital Transformation",
    category: "Transform",
    headline: "Modernise the parts that hold the business back.",
    problem:
      "Disconnected tools and manual handoffs slow everything down, and nobody has a full picture of what is happening.",
    solution:
      "We prioritise the processes worth changing first, connect the systems around them, and automate the repetitive work between them.",
    offerings: [
      "Systems and API integration",
      "Process automation",
      "Data consolidation",
      "IT modernisation",
      "Change and rollout planning",
      "Operational reporting",
    ],
    flow: ["Audit", "Prioritise", "Integrate", "Automate", "Measure"],
    technology: ["REST / GraphQL APIs", "Node.js", "Python", "PostgreSQL", "Cloud services"],
    faq: [
      {
        q: "Where should we start?",
        a: "With the process that costs the most time and causes the most errors. We run a short audit and come back with a ranked list.",
      },
      {
        q: "Do we have to replace everything?",
        a: "No. Most transformation work is integration and automation around systems that stay exactly where they are.",
      },
    ],
  },
  {
    slug: "technology-consulting",
    name: "Technology Consulting",
    category: "Consult",
    headline: "Strategy before execution.",
    problem:
      "Technology decisions get made under pressure, and the cost of the wrong architecture or the wrong platform surfaces a year later.",
    solution:
      "We review what exists, model the options against your business plan, and give you a roadmap you can budget and act on.",
    offerings: [
      "Technology and product strategy",
      "Technical audits",
      "Architecture consulting",
      "Technology roadmapping",
      "Product discovery",
      "Process optimisation",
    ],
    flow: ["Review", "Analyse", "Recommend", "Roadmap", "Support"],
    technology: ["Architecture review", "Code audit", "Security review", "Performance profiling"],
    faq: [
      {
        q: "Do you consult without doing the build?",
        a: "Yes. Plenty of engagements end with a roadmap your existing team delivers.",
      },
      {
        q: "How long is a technical audit?",
        a: "Typically one to three weeks depending on system size, ending in a written report and a working session.",
      },
    ],
  },
  {
    slug: "ui-ux",
    name: "UI/UX Design",
    category: "Build",
    headline: "Interfaces that reduce hesitation.",
    problem:
      "Users abandon products at the exact moments the interface asks them to think too hard.",
    solution:
      "We design the flows around real intent, prototype the difficult screens early, and hand over a design system engineering can build from.",
    offerings: [
      "UX research and flows",
      "Wireframing and prototyping",
      "Interface design",
      "Design systems",
      "Usability review",
      "Accessibility review",
    ],
    flow: ["Research", "Flows", "Prototype", "Interface", "Design system", "Handover"],
    technology: ["Figma", "Design tokens", "Component libraries", "WCAG"],
    faq: [
      {
        q: "Can you redesign without rebuilding?",
        a: "Often yes. An interface refresh on top of a sound architecture is a common and cost-effective route.",
      },
    ],
  },
  {
    slug: "ecommerce",
    name: "E-commerce Development",
    category: "Build",
    headline: "Storefronts built to convert, not just to display.",
    problem:
      "Traffic arrives, browses and leaves, because product discovery is confusing and the checkout asks for too much.",
    solution:
      "We restructure the catalogue, rebuild the product and checkout experience, and make the whole thing fast on mobile.",
    offerings: [
      "Custom and headless storefronts",
      "Catalogue and taxonomy structure",
      "Checkout optimisation",
      "Payment and logistics integration",
      "E-commerce SEO",
      "Conversion rate optimisation",
    ],
    flow: ["Audit", "Structure", "Design", "Build", "Launch", "Optimise"],
    technology: ["Shopify", "WooCommerce", "Headless Commerce", "Next.js", "Payment gateways"],
    faq: [
      {
        q: "Do you work with existing stores?",
        a: "Yes. We frequently start with a conversion and performance audit of a live store before proposing any rebuild.",
      },
    ],
  },
  {
    slug: "seo",
    name: "SEO",
    category: "Grow",
    headline: "Be found where your customers search.",
    problem:
      "The business is invisible for the searches that matter, and the traffic it does get rarely turns into enquiries.",
    solution:
      "We fix the technical foundation, build content around commercial intent, and earn the authority that makes rankings stick.",
    offerings: [
      "Technical SEO",
      "On-page and off-page SEO",
      "Local, enterprise and international SEO",
      "E-commerce SEO",
      "SEO audits and keyword strategy",
      "Content strategy and reporting",
    ],
    flow: ["Audit", "Technical SEO", "Content", "Authority", "Traffic", "Leads"],
    technology: ["Google Search Console", "Analytics", "Schema markup", "Core Web Vitals"],
    faq: [
      {
        q: "How soon does SEO work?",
        a: "Technical fixes can move things in weeks. Competitive rankings generally take a few months, and we report progress monthly rather than promising positions.",
      },
      {
        q: "Do you guarantee a number one ranking?",
        a: "No, and neither should anyone else. We commit to the work, the reporting and the direction of travel.",
      },
    ],
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    category: "Grow",
    headline: "Campaigns measured by pipeline, not impressions.",
    problem:
      "Spend is spread across channels with no clear view of what actually produced an enquiry.",
    solution:
      "We build the tracking first, concentrate budget on the channels that convert, and report on cost per qualified lead.",
    offerings: [
      "Channel strategy",
      "Social media marketing",
      "Content marketing",
      "Marketing automation",
      "Analytics and attribution",
      "Reporting dashboards",
    ],
    flow: ["Track", "Plan", "Launch", "Measure", "Scale"],
    technology: ["GA4", "Meta Ads", "LinkedIn Ads", "Automation platforms"],
    faq: [
      {
        q: "What budget do we need?",
        a: "Enough to gather real data on one or two channels rather than a thin spread across five. We size it against your average deal value.",
      },
    ],
  },
  {
    slug: "performance-marketing",
    name: "Performance Marketing",
    category: "Grow",
    headline: "Paid media held to a number.",
    problem: "Ad accounts drift: broad targeting, tired creative and no honest view of return.",
    solution:
      "We rebuild account structure, test creative systematically and optimise towards the conversion that has commercial value.",
    offerings: [
      "Google Ads and PPC",
      "Paid social",
      "Shopping and retargeting",
      "Landing page testing",
      "Creative testing",
      "ROAS reporting",
    ],
    flow: ["Structure", "Creative", "Test", "Optimise", "Scale"],
    technology: ["Google Ads", "Meta Ads", "GA4", "Conversion tracking"],
    faq: [
      {
        q: "Do you manage the landing pages too?",
        a: "Yes. Paid traffic is usually wasted on a page that was not built for it, so we treat the two as one job.",
      },
    ],
  },
  {
    slug: "lead-generation",
    name: "Lead Generation",
    category: "Grow",
    headline: "Traffic is only the beginning.",
    problem:
      "Visits go up and the sales team notices nothing, because nothing connects visibility to a qualified conversation.",
    solution:
      "We build the full path: the offer, the landing experience, the qualification and the handover into your sales process.",
    offerings: [
      "B2B lead generation",
      "Landing page systems",
      "Conversion rate optimisation",
      "Lead qualification and routing",
      "CRM integration",
      "Nurture automation",
    ],
    flow: ["Visibility", "Traffic", "Engagement", "Leads", "Customers"],
    technology: ["CRM integration", "Analytics", "Automation", "A/B testing"],
    faq: [
      {
        q: "Do you buy lead lists?",
        a: "No. We build systems that generate first-party enquiries from people actively looking for what you do.",
      },
    ],
  },
];

export const serviceCategories = [
  {
    no: "01",
    key: "Build" as const,
    title: "Digital Product Development",
    headline: "Build digital experiences that work.",
    cta: "Explore Development",
  },
  {
    no: "02",
    key: "Transform" as const,
    title: "Cloud & Digital Transformation",
    headline: "Modernize. Connect. Scale.",
    cta: "Explore Transformation",
  },
  {
    no: "03",
    key: "Consult" as const,
    title: "Technology Consulting",
    headline: "Strategy before execution.",
    cta: "Talk to a Consultant",
  },
  {
    no: "04",
    key: "Grow" as const,
    title: "Digital Growth",
    headline: "Get found. Get chosen. Get results.",
    cta: "Explore Growth",
  },
];

export const solutions = [
  {
    title: "Need a New Website?",
    items: ["Corporate websites", "Landing pages", "E-commerce", "Web platforms"],
    slug: "web-development",
  },
  {
    title: "Need an App?",
    items: ["iOS", "Android", "Cross-platform", "Web apps"],
    slug: "app-development",
  },
  {
    title: "Need Custom Software?",
    items: ["SaaS", "Internal systems", "Business applications", "Automation"],
    slug: "custom-software",
  },
  {
    title: "Need to Modernize?",
    items: ["Cloud", "Digital transformation", "Infrastructure", "Integrations"],
    slug: "cloud-solutions",
  },
  {
    title: "Need More Customers?",
    items: ["SEO", "Digital marketing", "Paid advertising", "Lead generation"],
    slug: "seo",
  },
  {
    title: "Need Technical Direction?",
    items: ["Technology consulting", "Architecture", "Product strategy", "Technical audits"],
    slug: "technology-consulting",
  },
];

/** Friendly/brief URLs that map to an existing service page (301). */
export const serviceAliases: Record<string, string> = {
  "cloud-digital-transformation": "cloud-solutions",
  "seo-digital-growth": "seo",
};

export const serviceTitles: Record<string, string> = {
  "web-development": "Web Development Company | NxtQuik",
  "app-development": "App Development Services | NxtQuik",
  "custom-software": "Custom Software Development | NxtQuik",
  "cloud-solutions": "Cloud Solutions & Digital Transformation | NxtQuik",
  "technology-consulting": "Technology Consulting Services | NxtQuik",
  seo: "SEO & Digital Growth Services | NxtQuik",
};
