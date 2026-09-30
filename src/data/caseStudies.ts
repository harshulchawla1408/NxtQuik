import scalveaLogo from "@/assets/brand-scalvea.png";
import gabruLogo from "@/assets/brand-gabrulooks.png";

export type CaseStudy = {
  slug: "scalvea" | "gabru-looks";
  no: string;
  name: string;
  logo: string;
  url: string;
  label: string;
  tagline: string;
  heroLine: string[];
  markers: string[];
  description: string;
  built: string[];
  tech: string[];
  journey: string[];
  statement: string;
  challengeTitle: string;
  challenge: string;
  approach: { title: string; body: string }[];
  growth: string[];
  next: "scalvea" | "gabru-looks";
};

export const caseStudies: Record<CaseStudy["slug"], CaseStudy> = {
  scalvea: {
    slug: "scalvea",
    no: "01",
    name: "Scalvea",
    logo: scalveaLogo,
    url: "https://www.scalvea.com/",
    label: "E-commerce · Technology · Brand · Growth",
    tagline: "Building a haircare brand from the ground up — digitally.",
    heroLine: ["A digital-first haircare brand", "built from the ground up."],
    markers: ["E-commerce", "Brand", "Technology", "Growth"],
    description:
      "Scalvea is a premium hair and scalp care brand built for the Australian and Indian markets. NxtQuik took the project from its digital foundation to a fully operational commerce experience — designing and developing the website, building the technology infrastructure, integrating commerce and payments, shaping the digital brand experience, and supporting the SEO and growth ecosystem around the launch.",
    built: [
      "Brand Experience",
      "E-Commerce Platform",
      "Web Development",
      "Product Experience",
      "Checkout & Payments",
      "SEO Architecture",
      "Analytics & Tracking",
      "Digital Marketing",
      "Launch Strategy",
      "Content & Promotion",
    ],
    tech: [
      "React",
      "Vite",
      "TypeScript",
      "Supabase",
      "Stripe",
      "Shiprocket",
      "Meta Pixel",
      "Google Analytics",
      "Search Console",
    ],
    journey: ["Brand", "Product", "Technology", "Commerce", "Growth"],
    statement: "A complete digital ecosystem, not just a website.",
    challengeTitle: "How do you turn a new haircare brand into a credible digital business?",
    challenge:
      "A new brand has no borrowed trust. Every page, product story and checkout step has to earn it — across two markets, from the first visit.",
    approach: [
      {
        title: "Brand",
        body: "A calm, science-led visual language that makes the product feel premium and considered.",
      },
      {
        title: "Digital Experience",
        body: "Product discovery and storytelling designed around how people actually choose haircare.",
      },
      {
        title: "Commerce",
        body: "Cart, checkout, payments and shipping flows built to stay out of the customer's way.",
      },
      {
        title: "Technology",
        body: "A modern, maintainable stack the brand can extend product by product.",
      },
      {
        title: "Growth",
        body: "SEO architecture, tracking and campaigns in place from launch day.",
      },
    ],
    growth: ["SEO", "Content", "Social", "Paid Promotion", "Analytics", "Conversion"],
    next: "gabru-looks",
  },
  "gabru-looks": {
    slug: "gabru-looks",
    no: "02",
    name: "Gabru Looks",
    logo: gabruLogo,
    url: "https://www.gabrulooks.com.au/",
    label: "Salon Technology · Digital Experience · Growth",
    tagline: "Where salon experience meets modern technology.",
    heroLine: ["Where salon experience", "meets modern technology."],
    markers: ["Australia", "Salon Technology", "Digital Experience"],
    description:
      "Gabru Looks is an Australian salon brand in Werribee for which NxtQuik built the digital experience from the ground up. The project goes beyond a conventional business website — combining the salon's brand identity, customer experience, a custom salon management system and the local growth layer that brings new clients through the door.",
    built: [
      "Brand Identity",
      "Digital Strategy",
      "Salon Website",
      "Salon Management System",
      "Customer Experience",
      "Booking Experience",
      "Service Management",
      "SEO",
      "Local Search Strategy",
      "Digital Marketing",
      "Social Media Presence",
      "Content & Promotion",
    ],
    tech: ["React", "TypeScript", "Supabase", "Database Architecture", "Analytics", "SEO"],
    journey: ["Salon", "Brand", "Website", "Custom System", "Customer", "Growth"],
    statement:
      "A salon isn't just a physical location anymore. Its digital experience is part of the brand.",
    challengeTitle: "A modern salon deserves a modern digital experience.",
    challenge:
      "The craft happens in the chair — but discovery, trust and booking now happen online. The salon needed a digital presence as strong as its in-person experience, and tools to run the business behind it.",
    approach: [
      {
        title: "Salon",
        body: "Understanding the services, the customers and the rhythm of the shop floor.",
      },
      {
        title: "Brand",
        body: "A bold identity that carries the salon's character from signage to screen.",
      },
      {
        title: "Website",
        body: "A digital front door that showcases the craft and makes booking easy.",
      },
      {
        title: "Custom System",
        body: "Salon management tools for services, appointments and customer records.",
      },
      { title: "Customer", body: "A smoother journey from first search to returning client." },
      {
        title: "Growth",
        body: "Local search, content and social presence to keep new clients arriving.",
      },
    ],
    growth: ["SEO", "Local Search", "Content", "Social", "Promotion", "Analytics"],
    next: "scalvea",
  },
};

export const caseStudyList = [caseStudies.scalvea, caseStudies["gabru-looks"]];
