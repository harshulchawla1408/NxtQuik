export const site = {
  name: "NxtQuik",
  tagline: "Technology for What's Next.",
  founder: "Shubham Sonwal",
  phone: "+91 94786 69360",
  phoneHref: "tel:+919478669360",
  email: "nxtquik@gmail.com",
  office: "Patiala, Punjab, India",
  linkedin: "https://www.linkedin.com/company/ugcnxtquik/",
  instagram: "https://www.instagram.com/nxtquik/",
};

export const nav = [
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
] as const;

export const projects = [
  {
    slug: "scalvea",
    name: "Scalvea",
    url: "https://www.scalvea.com/",
    categories: ["E-commerce", "Web Development", "Digital Experience"],
    summary:
      "A commerce experience built around clarity: fast browsing, confident product storytelling and a checkout path that stays out of the way.",
    challenge:
      "Scalvea needed an online storefront that felt considered rather than templated, and that could grow its catalogue without the experience degrading.",
    approach:
      "We mapped the buying journey first, then defined a layout system for categories, product detail and checkout that stays consistent as the catalogue expands.",
    build:
      "A responsive storefront with structured product pages, clean navigation, optimised media and a mobile-first checkout flow.",
    technology: [
      "Headless commerce",
      "Responsive front-end",
      "Performance optimisation",
      "Technical SEO",
    ],
    outcome:
      "A storefront that loads quickly, reads clearly on mobile and gives the team a structure they can extend product by product.",
  },
  {
    slug: "gabru-looks",
    name: "Gabru Looks",
    url: "https://www.gabrulooks.com.au/",
    categories: ["Salon Technology", "Digital Experience", "Growth"],
    summary:
      "Where salon experience meets modern technology: brand, website, custom salon management system and local growth for an Australian salon.",
    challenge:
      "A growing apparel catalogue was hard to navigate, and the brand needed a storefront that felt credible to international buyers.",
    approach:
      "We restructured the catalogue taxonomy, simplified collection navigation and rebuilt product pages around imagery and sizing confidence.",
    build:
      "A commerce front-end with refined collection pages, richer product detail, optimised imagery and a streamlined mobile purchase flow.",
    technology: [
      "E-commerce platform",
      "Responsive front-end",
      "Image optimisation",
      "On-page SEO",
    ],
    outcome:
      "Clearer product discovery, a more coherent brand presentation and a storefront the team can merchandise without developer help.",
  },
] as const;

export const insights = [
  { title: "How AI Is Changing Modern Business", category: "AI", read: "6 min" },
  { title: "A Practical Technical SEO Checklist", category: "SEO", read: "9 min" },
  { title: "How to Build a Scalable Web Application", category: "Software", read: "8 min" },
  { title: "Cloud Migration for Growing Businesses", category: "Cloud", read: "7 min" },
  { title: "SEO vs Paid Advertising", category: "Growth", read: "5 min" },
  { title: "How Website Speed Impacts Conversion", category: "Web Development", read: "6 min" },
  { title: "Building a Digital Transformation Strategy", category: "Technology", read: "10 min" },
  {
    title: "How Businesses Can Generate Better Leads",
    category: "Digital Marketing",
    read: "7 min",
  },
] as const;

export const techStack = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript"] },
  { group: "Backend", items: ["Node.js", "Python", "Java", ".NET"] },
  { group: "Database", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"] },
  { group: "Cloud", items: ["AWS", "Azure", "Google Cloud"] },
  { group: "DevOps", items: ["Docker", "Kubernetes", "CI/CD"] },
  { group: "Commerce", items: ["Shopify", "WooCommerce", "Headless Commerce"] },
] as const;

export const processSteps = [
  { no: "01", title: "Discover", body: "Understand your business, goals and challenges." },
  { no: "02", title: "Strategize", body: "Define the right technology and growth approach." },
  { no: "03", title: "Design", body: "Create the experience and the architecture." },
  { no: "04", title: "Build", body: "Develop, integrate and test." },
  { no: "05", title: "Launch", body: "Deploy and implement." },
  { no: "06", title: "Grow", body: "Optimize, measure and scale." },
] as const;
