import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type Tech = { name: string; role: string; icon?: string | undefined };
type Cat = { key: string; label: string; items: Tech[] };

const t = (name: string, role: string, icon?: string): Tech => ({ name, role, icon });

const cats: Cat[] = [
  {
    key: "frontend",
    label: "Frontend",
    items: [
      t("React", "Frontend framework", "react"),
      t("Next.js", "React framework", "nextdotjs"),
      t("TypeScript", "Typed JavaScript", "typescript"),
      t("Tailwind CSS", "Styling system", "tailwindcss"),
      t("JavaScript", "Web language", "javascript"),
      t("Vite", "Build tooling", "vite"),
      t("Vue.js", "Frontend framework", "vuedotjs"),
      t("Angular", "Frontend framework", "angular"),
      t("HTML5", "Web markup", "html5"),
      t("CSS3", "Web styling", "css"),
    ],
  },
  {
    key: "backend",
    label: "Backend",
    items: [
      t("Node.js", "JavaScript runtime", "nodedotjs"),
      t("Python", "Backend language", "python"),
      t("FastAPI", "Python APIs", "fastapi"),
      t("Java", "Enterprise backend"),
      t(".NET", "Microsoft platform", "dotnet"),
      t("Express", "Node framework", "express"),
      t("Django", "Python framework", "django"),
      t("Spring Boot", "Java framework", "springboot"),
      t("Laravel", "PHP framework", "laravel"),
      t("Go", "Systems language", "go"),
    ],
  },
  {
    key: "database",
    label: "Database",
    items: [
      t("PostgreSQL", "Relational database", "postgresql"),
      t("MongoDB", "Document database", "mongodb"),
      t("Supabase", "Backend platform", "supabase"),
      t("Firebase", "App platform", "firebase"),
      t("Redis", "In-memory store", "redis"),
      t("MySQL", "Relational database", "mysql"),
      t("SQLite", "Embedded database", "sqlite"),
      t("MariaDB", "Relational database", "mariadb"),
    ],
  },
  {
    key: "cloud",
    label: "Cloud",
    items: [
      t("AWS", "Cloud platform"),
      t("Microsoft Azure", "Cloud platform"),
      t("Google Cloud", "Cloud platform", "googlecloud"),
      t("Vercel", "Frontend cloud", "vercel"),
      t("Cloudflare", "Edge network", "cloudflare"),
      t("DigitalOcean", "Cloud hosting", "digitalocean"),
    ],
  },
  {
    key: "devops",
    label: "DevOps",
    items: [
      t("Docker", "Containers", "docker"),
      t("Kubernetes", "Orchestration", "kubernetes"),
      t("GitHub Actions", "CI/CD", "githubactions"),
      t("Terraform", "Infrastructure as code", "terraform"),
      t("Nginx", "Web server", "nginx"),
      t("GitLab CI", "CI/CD", "gitlab"),
      t("Jenkins", "Automation server", "jenkins"),
      t("Linux", "Server OS", "linux"),
    ],
  },
  {
    key: "mobile",
    label: "Mobile",
    items: [
      t("React Native", "Cross-platform apps", "react"),
      t("Flutter", "Cross-platform apps", "flutter"),
      t("Swift", "iOS development", "swift"),
      t("Kotlin", "Android development", "kotlin"),
      t("Android", "Mobile platform", "android"),
      t("iOS", "Mobile platform", "apple"),
    ],
  },
  {
    key: "commerce",
    label: "E-commerce",
    items: [
      t("Shopify", "Commerce platform", "shopify"),
      t("WooCommerce", "WordPress commerce", "woocommerce"),
      t("WordPress", "Content platform", "wordpress"),
      t("Stripe", "Payments", "stripe"),
      t("Razorpay", "Payments", "razorpay"),
      t("PayU", "Payments"),
      t("Shiprocket", "Shipping & logistics"),
    ],
  },
  {
    key: "growth",
    label: "Growth & SEO",
    items: [
      t("Google Ads", "Search advertising", "googleads"),
      t("Meta Ads", "Social advertising", "meta"),
      t("Google Analytics", "Web analytics", "googleanalytics"),
      t("Search Console", "Search visibility", "googlesearchconsole"),
      t("Tag Manager", "Tracking", "googletagmanager"),
      t("HubSpot", "CRM & marketing", "hubspot"),
      t("Semrush", "SEO research", "semrush"),
      t("Ahrefs", "SEO research"),
      t("Mailchimp", "Email marketing", "mailchimp"),
      t("Klaviyo", "Email & SMS", "klaviyo"),
    ],
  },
  {
    key: "design",
    label: "Design",
    items: [
      t("Figma", "Product design", "figma"),
      t("Framer", "Interactive design", "framer"),
      t("Photoshop", "Image editing", "dv:photoshop/photoshop-original"),
      t("Illustrator", "Vector design", "dv:illustrator/illustrator-plain"),
      t("After Effects", "Motion graphics", "dv:aftereffects/aftereffects-original"),
      t("Premiere Pro", "Video editing", "dv:premierepro/premierepro-original"),
      t("Adobe XD", "UI prototyping", "dv:xd/xd-original"),
      t("Canva", "Brand content", "dv:canva/canva-original"),
    ],
  },
  {
    key: "3d",
    label: "3D & Content",
    items: [
      t("Blender", "3D modelling & rendering", "blender"),
      t("Cinema 4D", "3D motion design", "cinema4d"),
      t("Autodesk Maya", "3D animation", "autodeskmaya"),
      t("Houdini", "3D effects", "houdini"),
      t("Unreal Engine", "Real-time 3D", "unrealengine"),
      t("Unity", "Real-time 3D", "dv:unity/unity-original"),
      t("Three.js", "3D on the web", "threedotjs"),
      t("Sketchfab", "3D publishing", "sketchfab"),
    ],
  },
  {
    key: "ai",
    label: "AI & Automation",
    items: [
      t("OpenAI", "AI models"),
      t("Gemini", "AI models", "googlegemini"),
      t("Claude", "AI models", "claude"),
      t("LangChain", "AI orchestration", "langchain"),
      t("n8n", "Workflow automation", "n8n"),
      t("Zapier", "Automation", "zapier"),
      t("Make", "Automation", "make"),
      t("Hugging Face", "AI models", "huggingface"),
    ],
  },
];

function Logo({ tech }: { tech: Tech }) {
  const [failed, setFailed] = useState(false);
  if (!tech.icon || failed) {
    return (
      <span className="grid size-9 place-items-center rounded-lg bg-primary/10 font-display text-sm font-bold text-primary">
        {tech.name.slice(0, 2)}
      </span>
    );
  }
  const src = tech.icon.startsWith("dv:")
    ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon.slice(3)}.svg`
    : `https://cdn.simpleicons.org/${tech.icon}`;
  return (
    <img
      src={src}
      alt=""
      loading="lazy"
      onError={() => setFailed(true)}
      className="size-9 object-contain transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_color-mix(in_oklab,var(--cyan)_70%,transparent)]"
    />
  );
}

export function TechStack() {
  const [key, setKey] = useState("frontend");
  const cat = cats.find((c) => c.key === key)!;
  const no = String(cats.indexOf(cat) + 1).padStart(2, "0");

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, color-mix(in oklab, var(--primary) 4%, var(--background)), color-mix(in oklab, var(--cyan) 7%, var(--background)))",
      }}
    >
      <div className="rule-grid absolute inset-0 opacity-25" aria-hidden />
      <div className="relative mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow text-primary">Our Technology Stack</p>
            <h2 className="mt-5 text-4xl font-semibold md:text-6xl">
              Built With Modern Technology.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground lg:justify-self-end">
            Modern tools. Proven platforms. The right technology for every stage of your digital
            journey.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-2" role="tablist">
          {cats.map((c) => {
            const on = c.key === key;
            return (
              <button
                key={c.key}
                type="button"
                role="tab"
                aria-selected={on}
                onClick={() => setKey(c.key)}
                className={`relative rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  on
                    ? "border-transparent text-primary-foreground"
                    : "border-border bg-background/70 text-foreground hover:border-primary/40"
                }`}
              >
                {on && (
                  <motion.span
                    layoutId="tech-tab"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "var(--gradient-brand)",
                      boxShadow: "0 12px 26px -14px var(--primary)",
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{c.label}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 rounded-3xl border border-border bg-background/80 p-5 shadow-[var(--shadow-soft)] backdrop-blur md:p-8">
          <div className="mb-6 flex items-center justify-between">
            <p className="font-display text-lg tracking-tight">
              <span className="mr-3 font-mono text-xs text-muted-foreground">{no}</span>
              {cat.label}
            </p>
            <span className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground">
              {cat.items.length} TOOLS
            </span>
          </div>
          <AnimatePresence mode="wait">
            <motion.ul
              key={cat.key}
              className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-10"
              initial="hide"
              animate="show"
              exit="hide"
              variants={{ show: { transition: { staggerChildren: 0.035 } }, hide: {} }}
            >
              {cat.items.map((tech) => (
                <motion.li
                  key={tech.name}
                  variants={{
                    hide: { opacity: 0, y: 10, scale: 0.96 },
                    show: { opacity: 1, y: 0, scale: 1 },
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    tabIndex={0}
                    aria-label={`${tech.name} — ${tech.role}`}
                    className="group relative flex h-24 flex-col md:h-28 items-center justify-center overflow-hidden rounded-2xl border border-border bg-background px-2 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_40px_-18px_var(--primary)] focus-visible:-translate-y-1"
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(circle at 50% 35%, color-mix(in oklab, var(--cyan) 18%, transparent), transparent 70%)",
                      }}
                    />
                    <span className="relative">
                      <Logo tech={tech} />
                    </span>
                    <span className="relative mt-2.5 text-[11px] font-semibold leading-tight text-foreground/80 md:text-xs">
                      {tech.name}
                    </span>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
