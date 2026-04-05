import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import TechIconComponent from "@/components/TechIcon";

const categories = [
  {
    title: "Frontend – Core",
    glow: "glow-blue",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
  },
  {
    title: "Frameworks & Libraries",
    glow: "glow-blue",
    items: ["React.js", "Next.js", "Angular"],
  },
  {
    title: "Styling",
    glow: "glow-cyan",
    items: ["Tailwind CSS", "Material UI", "ShadCN UI", "Styled Components"],
  },
  {
    title: "Animations & UI Effects",
    glow: "glow-purple",
    items: ["Framer Motion", "GSAP", "Anime.js", "Three.js", "Lottie Animations"],
  },
  {
    title: "Charts & Data Visualization",
    glow: "glow-cyan",
    items: ["Chart.js", "D3.js"],
  },
  {
    title: "Backend Development",
    glow: "glow-purple",
    items: ["Node.js", "Express.js", "REST API", "GraphQL", "WebSockets"],
  },
  {
    title: "Databases",
    glow: "glow-blue",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase Firestore", "Supabase"],
  },
  {
    title: "Cloud & Hosting",
    glow: "glow-cyan",
    items: ["AWS", "DigitalOcean", "Vercel", "Netlify", "Hostinger VPS", "Railway", "Render", "Cloudinary", "Firebase Storage", "Supabase Storage"],
  },
  {
    title: "Mobile App Development",
    glow: "glow-purple",
    items: ["React Native", "Flutter"],
  },
  {
    title: "Authentication & Security",
    glow: "glow-blue",
    items: ["Firebase Auth", "Supabase Auth", "JWT Authentication", "Clerk Auth", "NextAuth"],
  },
  {
    title: "Payments Integration",
    glow: "glow-cyan",
    items: ["Stripe", "Razorpay", "PayPal"],
  },
  {
    title: "CMS & Content Platforms",
    glow: "glow-purple",
    items: ["WordPress", "Strapi", "Sanity"],
  },
  {
    title: "Design & Collaboration",
    glow: "glow-blue",
    items: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Canva", "Notion", "Slack", "Trello", "Jira"],
  },
  {
    title: "Version Control",
    glow: "glow-cyan",
    items: ["Git", "GitHub"],
  },
  {
    title: "AI & Modern Technologies",
    glow: "glow-purple",
    items: ["OpenAI API", "Gemini API", "Chatbots"],
  },
];

const TechCategory = ({ title, items, glow }: { title: string; items: string[]; glow: string }) => (
  <div>
    <h3 className="text-xl font-bold mb-6 gradient-text">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {items.map((name, i) => (
        <Card
          key={name}
          className={`glass rounded-2xl border-0 hover:${glow} hover:-translate-y-1 transition-all duration-300 group gradient-border`}
          style={{ animationDelay: `${i * 50}ms` }}
        >
          <CardContent className="p-5 text-center flex flex-col items-center gap-3">
            <div className="text-muted-foreground group-hover:text-primary transition-colors group-hover:scale-110 transition-transform">
              <TechIconComponent name={name} />
            </div>
            <div className="text-sm font-medium text-foreground">{name}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

const TechStackPage = () => (
  <Layout>
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px] -translate-x-1/2" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">Technology</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-6">
            Our <span className="gradient-text">Tech Stack</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We use the best-in-class tools and technologies to build scalable, performant, and beautiful products.
          </p>
        </div>
      </div>
    </section>

    <SectionWrapper>
      <div className="container mx-auto px-4 space-y-16">
        {categories.map((cat) => (
          <TechCategory key={cat.title} title={cat.title} items={cat.items} glow={cat.glow} />
        ))}
      </div>
    </SectionWrapper>
  </Layout>
);

export default TechStackPage;
