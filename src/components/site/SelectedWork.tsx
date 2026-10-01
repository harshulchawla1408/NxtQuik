import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { caseStudyList, type CaseStudy } from "@/data/caseStudies";

function Journey({ steps, dark }: { steps: string[]; dark?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-sm font-semibold">
      {steps.map((s, i) => (
        <span key={s} className="inline-flex items-center gap-2">
          <span className={dark ? "text-navy-foreground" : "text-foreground"}>{s}</span>
          {i < steps.length - 1 && <span className="journey-dot" aria-hidden />}
        </span>
      ))}
    </div>
  );
}

export function ProjectVisual({ c, large }: { c: CaseStudy; large?: boolean }) {
  const dark = c.slug === "gabru-looks";
  return (
    <div
      className={`cs-visual ${dark ? "cs-visual-dark" : ""} relative overflow-hidden rounded-2xl`}
    >
      <div className="flex items-center gap-1.5 border-b border-[color-mix(in_oklab,var(--foreground)_8%,transparent)] px-4 py-3">
        <span className="size-2.5 rounded-full bg-border" />
        <span className="size-2.5 rounded-full bg-border" />
        <span className="size-2.5 rounded-full bg-border" />
        <span className="ml-3 truncate rounded-full bg-background/70 px-3 py-0.5 text-[11px] text-muted-foreground">
          {c.url.replace("https://", "").replace(/\/$/, "")}
        </span>
      </div>
      <div
        className={`relative grid place-items-center ${large ? "h-80 md:h-[26rem]" : "h-56 md:h-64"}`}
      >
        <div className="cs-glow absolute inset-0" aria-hidden />
        <img
          src={c.logo}
          alt={`${c.name} logo`}
          className={`relative w-auto object-contain ${dark ? (large ? "h-64" : "h-44") : large ? "h-32" : "h-20"}`}
        />
        <div className="absolute inset-x-6 bottom-5 flex gap-2">
          {c.markers.slice(0, 3).map((m) => (
            <span
              key={m}
              className="rounded-full bg-background/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground backdrop-blur"
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ c }: { c: CaseStudy }) {
  const dark = c.slug === "gabru-looks";
  return (
    <article
      className={`${dark ? "surface-navy" : "cs-card-light"} relative overflow-hidden rounded-3xl p-7 md:p-12`}
    >
      <div
        className={`grid gap-10 lg:items-center ${dark ? "lg:grid-cols-[1fr_1.05fr]" : "lg:grid-cols-[1.05fr_1fr]"}`}
      >
        <div className={dark ? "lg:order-2" : ""}>
          <p
            className={`eyebrow ${dark ? "text-[color-mix(in_oklab,var(--cyan)_85%,white)]" : "text-primary"}`}
          >
            {c.no} · {c.label}
          </p>
          <h3 className="mt-5 text-5xl font-semibold uppercase tracking-[-0.03em] md:text-6xl">
            {c.name}
          </h3>
          <p
            className={`mt-4 text-xl md:text-2xl ${dark ? "text-navy-foreground" : "text-foreground"}`}
          >
            {c.tagline}
          </p>
          <p
            className={`mt-5 max-w-xl text-[0.95rem] ${dark ? "text-navy-muted" : "text-muted-foreground"}`}
          >
            {c.description}
          </p>

          <p
            className={`mt-8 text-[11px] font-semibold uppercase tracking-[0.2em] ${dark ? "text-navy-muted" : "text-muted-foreground"}`}
          >
            What NxtQuik built
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {c.built.map((b) => (
              <span
                key={b}
                className={`${dark ? "card-navy" : "cs-chip"} rounded-full px-3 py-1 text-xs font-medium`}
              >
                {b}
              </span>
            ))}
          </div>

          <p
            className={`mt-7 text-[11px] font-semibold uppercase tracking-[0.2em] ${dark ? "text-navy-muted" : "text-muted-foreground"}`}
          >
            Technology
          </p>
          <p
            className={`mt-2 text-sm font-medium ${dark ? "text-navy-foreground" : "text-foreground"}`}
          >
            {c.tech.join("  ·  ")}
          </p>
        </div>

        <div className={dark ? "lg:order-1" : ""}>
          <ProjectVisual c={c} />
          <div className="mt-7">
            <p
              className={`mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] ${dark ? "text-navy-muted" : "text-muted-foreground"}`}
            >
              From concept → live business
            </p>
            <Journey steps={c.journey} dark={dark} />
          </div>
          <p
            className={`mt-6 border-l-2 border-primary pl-4 text-sm italic ${dark ? "text-navy-muted" : "text-muted-foreground"}`}
          >
            {c.statement}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to={`/work/${c.slug}`} className="btn-base btn-primary">
              Explore {c.name} Case Study <ArrowRight className="size-4" />
            </Link>
            <a
              href={c.url}
              target="_blank"
              rel="noreferrer noopener"
              className={`btn-base ${dark ? "btn-onnavy" : "btn-outline"}`}
            >
              Visit Live Website <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

const stages = ["Idea", "Design", "Build", "Launch", "Grow"];

export function ScrollLine() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 40%"] });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <div ref={ref} className="relative mx-auto my-12 max-w-3xl px-2">
      <div className="relative h-px bg-[color-mix(in_oklab,var(--primary)_22%,transparent)]">
        <motion.div
          style={{ scaleX }}
          className="absolute inset-0 origin-left bg-[linear-gradient(90deg,var(--primary),var(--cyan))] shadow-[0_0_12px_var(--cyan)]"
        />
      </div>
      <div className="mt-3 flex justify-between text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {stages.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
    </div>
  );
}

export function SelectedWork() {
  const a = caseStudyList[0]!;
  const b = caseStudyList[1]!;
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="eyebrow text-primary">Selected Work</p>
        <h2 className="mt-5 text-4xl font-semibold uppercase leading-[1] tracking-[-0.03em] md:text-6xl">
          Built from zero.
          <br />
          <span className="text-gradient">Built to grow.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          Technology, digital experiences and growth systems built for businesses ready for what's
          next.
        </p>
      </Reveal>
      <div className="mt-14">
        <Reveal>
          <ProjectCard c={a} />
        </Reveal>
        <ScrollLine />
        <Reveal>
          <ProjectCard c={b} />
        </Reveal>
      </div>
    </section>
  );
}
