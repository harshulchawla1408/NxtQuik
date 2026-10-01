import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight } from "lucide-react";

type Row = { name: string; desc: string; slug?: string };
type Pillar = {
  no: string;
  key: string;
  title: string;
  headline: string;
  process: string[];
  rows: Row[];
};

const pillars: Pillar[] = [
  {
    no: "01",
    key: "build",
    title: "Digital Product Development",
    headline: "Build digital experiences that work.",
    process: ["Discover", "Design", "Prototype", "Build", "Test", "Launch", "Iterate"],
    rows: [
      {
        name: "Web Development",
        desc: "Websites engineered to perform, convert and scale.",
        slug: "web-development",
      },
      {
        name: "App Development",
        desc: "Mobile products people actually keep on their home screen.",
        slug: "app-development",
      },
      {
        name: "Custom Software Development",
        desc: "Software shaped around how your business actually works.",
        slug: "custom-software",
      },
      {
        name: "UI/UX Design",
        desc: "Interfaces designed to reduce friction and increase action.",
        slug: "ui-ux",
      },
      {
        name: "E-commerce Development",
        desc: "Commerce experiences built to convert, not just display.",
        slug: "ecommerce",
      },
    ],
  },
  {
    no: "02",
    key: "transform",
    title: "Cloud & Digital Transformation",
    headline: "Modernize. Connect. Scale.",
    process: ["Assess", "Architect", "Migrate", "Integrate", "Optimize", "Scale"],
    rows: [
      {
        name: "Cloud Solutions",
        desc: "Infrastructure that scales without unnecessary complexity.",
        slug: "cloud-solutions",
      },
      {
        name: "Digital Transformation",
        desc: "Modernize the systems that hold your business back.",
        slug: "digital-transformation",
      },
      {
        name: "Technology Consulting",
        desc: "Clear technical direction for complex business decisions.",
        slug: "technology-consulting",
      },
      { name: "DevOps & Infrastructure", desc: "Reliable systems built for continuous delivery." },
      {
        name: "Automation & Systems Integration",
        desc: "Connect tools, data and workflows into one intelligent system.",
      },
    ],
  },
  {
    no: "03",
    key: "grow",
    title: "Digital Growth",
    headline: "Turn digital presence into measurable growth.",
    process: ["Research", "Strategize", "Launch", "Measure", "Optimize", "Scale"],
    rows: [
      { name: "SEO", desc: "Build visibility where your customers are searching.", slug: "seo" },
      {
        name: "Digital Marketing",
        desc: "Campaigns designed around attention, action and results.",
        slug: "digital-marketing",
      },
      {
        name: "Performance Marketing",
        desc: "Data-driven campaigns optimized for measurable outcomes.",
        slug: "performance-marketing",
      },
      {
        name: "Lead Generation",
        desc: "Turn traffic and intent into qualified opportunities.",
        slug: "lead-generation",
      },
      { name: "Conversion Optimization", desc: "Turn more visitors into customers." },
      {
        name: "Analytics & Growth Strategy",
        desc: "Know what is working and where to scale next.",
      },
    ],
  },
];

function DataRail({ pillar }: { pillar: Pillar }) {
  const steps = pillar.process;
  const n = steps.length;
  const [idx, setIdx] = useState(0);
  const [rush, setRush] = useState(false);

  useEffect(() => {
    setIdx(0);
    setRush(false);
  }, [pillar.key]);

  useEffect(() => {
    const t = setTimeout(
      () => {
        setIdx((i) => {
          const next = (i + 1) % n;
          return next;
        });
      },
      rush ? 260 : idx === n - 1 ? 2200 : 1700,
    );
    return () => clearTimeout(t);
  }, [idx, n, rush]);

  // Rare high-speed run, roughly every 25s
  useEffect(() => {
    const iv = setInterval(() => setRush(true), 25000);
    return () => clearInterval(iv);
  }, []);
  useEffect(() => {
    if (rush && idx === n - 1) {
      const t = setTimeout(() => setRush(false), 300);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [rush, idx, n]);

  const pos = (i: number) => (i / (n - 1)) * 100;
  const status =
    idx === n - 1 ? "Deployed" : idx === 0 ? "System initialising" : `${steps[idx]} in progress`;

  return (
    <div>
      <div className="relative mx-7 h-32">
        {/* rail */}
        <motion.div
          key={pillar.key}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-x-0 top-1/2 h-px origin-left bg-border"
        />
        {/* completed rail */}
        <motion.div
          className="absolute left-0 top-1/2 h-px"
          style={{
            background:
              "linear-gradient(90deg, color-mix(in oklab, var(--cyan) 30%, transparent), var(--primary))",
          }}
          animate={{ width: `${pos(idx)}%` }}
          transition={{ duration: idx === 0 ? 0 : rush ? 0.25 : 1.1, ease: [0.65, 0, 0.35, 1] }}
        />
        {/* stations */}
        {steps.map((s, i) => {
          const state = i === idx ? "active" : i < idx ? "done" : "wait";
          const up = i % 2 === 0;
          return (
            <motion.div
              key={pillar.key + s}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.05 }}
              className="absolute top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
              style={{ left: `${pos(i)}%` }}
            >
              <span
                className={`absolute whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.14em] transition-colors duration-300 ${
                  up ? "bottom-5" : "top-5"
                } ${state === "active" ? "text-primary" : state === "done" ? "text-foreground" : "text-muted-foreground"}`}
              >
                {s}
              </span>
              <span
                className="block size-3 rounded-full border-2 transition-all duration-300"
                style={{
                  borderColor:
                    state === "wait"
                      ? "var(--border)"
                      : state === "active"
                        ? "var(--primary)"
                        : "var(--cyan)",
                  background: state === "active" ? "var(--primary)" : "var(--background)",
                  boxShadow:
                    state === "active"
                      ? "0 0 0 6px color-mix(in oklab, var(--primary) 18%, transparent), 0 0 16px var(--primary)"
                      : state === "done"
                        ? "0 0 8px color-mix(in oklab, var(--cyan) 50%, transparent)"
                        : "none",
                  transform: state === "active" ? "scale(1.25)" : "none",
                }}
              />
            </motion.div>
          );
        })}
        {/* capsule */}
        <motion.div
          className="pointer-events-none absolute top-1/2 -translate-y-1/2"
          animate={{ left: `${pos(idx)}%` }}
          transition={{ duration: idx === 0 ? 0 : rush ? 0.25 : 1.1, ease: [0.65, 0, 0.35, 1] }}
        >
          <div className="relative -translate-x-full">
            <div
              className="absolute right-3 top-1/2 h-[3px] w-20 -translate-y-1/2 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, color-mix(in oklab, var(--primary) 55%, transparent))",
              }}
            />
            <div
              className="relative h-[9px] w-8 translate-x-1 rounded-full"
              style={{
                background: "linear-gradient(90deg, var(--deep), var(--primary) 60%, var(--cyan))",
                boxShadow: "0 0 14px color-mix(in oklab, var(--cyan) 70%, transparent)",
              }}
            >
              <span
                className="absolute right-0.5 top-1/2 size-1.5 -translate-y-1/2 rounded-full"
                style={{
                  background: "var(--primary-foreground)",
                  boxShadow: "0 0 8px var(--cyan)",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em]">
          <span className="relative flex size-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative size-2 rounded-full bg-primary" />
          </span>
          {rush ? "High-speed run" : status}
        </span>
        <span className="font-mono text-[11px] text-muted-foreground">
          PROCESS · {String(idx + 1).padStart(2, "0")}/{String(n).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

export function WhatWeDo() {
  const [key, setKey] = useState("build");
  const pillar = pillars.find((p) => p.key === key)!;

  return (
    <section id="services" className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--primary) 7%, var(--background)) 0%, color-mix(in oklab, var(--cyan) 6%, var(--background)) 55%, color-mix(in oklab, var(--primary) 4%, var(--background)) 100%)",
        }}
      />
      <div className="relative mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <p className="eyebrow text-primary">What We Do</p>
        <h2 className="mt-5 max-w-4xl text-[2.6rem] font-semibold leading-[1.05] md:text-[4.25rem]">
          Technology and growth solutions designed around{" "}
          <span className="text-gradient">real business needs.</span>
        </h2>

        <div className="mt-12 flex flex-wrap gap-3" role="tablist">
          {pillars.map((p) => {
            const on = p.key === key;
            return (
              <button
                key={p.key}
                role="tab"
                aria-selected={on}
                type="button"
                onClick={() => setKey(p.key)}
                className={`relative rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                  on
                    ? "-translate-y-0.5 border-transparent text-primary-foreground"
                    : "border-border bg-background/70 text-foreground backdrop-blur hover:border-primary/40"
                }`}
              >
                {on && (
                  <motion.span
                    layoutId="wwd-tab"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "var(--gradient-brand)",
                      boxShadow: "0 14px 30px -14px var(--primary)",
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">
                  <span className="mr-2 opacity-60">{p.no}</span>
                  {p.title}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[3fr_2fr] lg:gap-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={pillar.key}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="text-2xl font-semibold md:text-3xl">{pillar.headline}</h3>
              <ul className="mt-8 border-t border-border">
                {pillar.rows.map((r) => {
                  const inner = (
                    <>
                      <span className="font-display text-lg tracking-tight transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary">
                        {r.name}
                      </span>
                      <span className="text-sm text-muted-foreground">{r.desc}</span>
                      <ArrowRight className="hidden size-4 justify-self-end text-muted-foreground transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-primary md:block" />
                    </>
                  );
                  const cls =
                    "group relative grid gap-1 border-b border-border px-3 py-5 transition-colors duration-300 before:absolute before:inset-y-3 before:left-0 before:w-0.5 before:scale-y-0 before:bg-primary before:transition-transform hover:bg-primary/5 hover:before:scale-y-100 md:grid-cols-[1.1fr_1.6fr_40px] md:items-center md:gap-6";
                  return (
                    <li key={r.name}>
                      {r.slug ? (
                        <Link to={`/services/${r.slug}`} className={cls}>
                          {inner}
                        </Link>
                      ) : (
                        <Link to="/services" className={cls}>
                          {inner}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </AnimatePresence>

          <div className="relative h-fit lg:sticky lg:top-28">
            <span className="absolute -top-6 right-2 font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
              SYSTEM · ACTIVE
            </span>
            <div className="card-premium rounded-2xl bg-background/85 p-7 backdrop-blur md:p-8">
              <p className="eyebrow text-muted-foreground">How it runs</p>
              <p className="mt-3 font-display text-xl tracking-tight">{pillar.title}</p>
              <div className="mt-8">
                <DataRail pillar={pillar} />
              </div>
            </div>
            <span className="absolute -bottom-6 left-2 font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
              ROUTE · {pillar.no}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
