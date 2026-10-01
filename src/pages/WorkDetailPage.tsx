import { useRef } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { DataPulses } from "@/components/site/DataPulses";
import { ProjectVisual } from "@/components/site/SelectedWork";
import { caseStudies, type CaseStudy } from "@/data/caseStudies";
import { useSEO, breadcrumbs } from "@/lib/seo";
import { NotFoundPage } from "./NotFoundPage";

function VerticalFlow({ steps }: { steps: CaseStudy["approach"] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative">
      <div className="absolute bottom-4 left-4 top-4 hidden w-px bg-border md:block">
        <motion.div
          style={{ scaleY }}
          className="h-full w-full origin-top bg-gradient-to-b from-primary via-[color-mix(in_oklab,var(--cyan)_75%,white)] to-primary"
        />
      </div>

      <div className="space-y-6 md:space-y-8 md:pl-12">
        {steps.map((st, i) => (
          <Reveal key={st.step} delay={i * 0.08}>
            <div className="card-premium relative rounded-2xl p-6 md:p-8">
              <span className="hidden size-8 -translate-x-[calc(3rem+1rem)] items-center justify-center rounded-full border border-border bg-background font-mono text-xs font-semibold text-primary shadow-sm md:absolute md:top-8 md:flex">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="eyebrow text-primary">
                Layer {String(i + 1).padStart(2, "0")} · {st.step}
              </p>
              <h3 className="mt-2 text-xl font-semibold md:text-2xl">{st.action}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{st.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function WorkDetailContent({ c, next }: { c: CaseStudy; next: CaseStudy }) {
  const salon = c.slug === "gabru-looks";
  const title =
    c.slug === "scalvea"
      ? "NxtQuik × Scalvea — E-Commerce & Digital Growth Case Study"
      : "NxtQuik × Gabru Looks — Salon Technology Case Study";
  const path = `/work/${c.slug}`;

  useSEO({
    title,
    description: c.description.slice(0, 158),
    path,
    type: "article",
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CreativeWork",
          name: title,
          about: { "@type": "Organization", name: c.name, url: c.url },
          creator: { "@type": "Organization", name: "NxtQuik" },
          description: c.description,
        },
        breadcrumbs([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
          { name: c.name, path },
        ]),
      ],
    },
  });

  return (
    <div>
      <Nav />
      <main>
        {/* HERO */}
        <section className="surface-navy relative overflow-hidden">
          <div className="rule-grid absolute inset-0 opacity-25" aria-hidden />
          <DataPulses />
          <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-36 md:px-8 md:pb-28 md:pt-44">
            <Link
              to="/work"
              className="text-sm font-semibold text-navy-muted transition-colors hover:text-navy-foreground"
            >
              ← Selected Work
            </Link>
            <p className="eyebrow mt-8 text-[color-mix(in_oklab,var(--cyan)_85%,white)]">
              Case Study {c.no} · {c.name}
            </p>
            <h1 className="mt-5 max-w-5xl text-5xl font-semibold uppercase leading-[0.95] tracking-[-0.04em] md:text-7xl">
              {c.heroLine[0]}
              <br />
              <span className="text-gradient">{c.heroLine[1]}</span>
            </h1>
            <div className="mt-10 flex flex-wrap gap-2">
              {c.markers.map((m) => (
                <span
                  key={m}
                  className="card-navy rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider"
                >
                  {m}
                </span>
              ))}
            </div>
            <div className="mt-14">
              <ProjectVisual c={c} large />
            </div>
          </div>
        </section>

        {/* CHALLENGE */}
        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-24 md:grid-cols-[0.8fr_1.2fr] md:px-8 md:py-32">
          <Reveal>
            <p className="eyebrow text-primary">{salon ? "The Idea" : "The Challenge"}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-3xl font-semibold leading-tight md:text-5xl">{c.challengeTitle}</h2>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{c.challenge}</p>
            <p className="mt-4 max-w-2xl text-muted-foreground">{c.description}</p>
          </Reveal>
        </section>

        {/* APPROACH */}
        <section className="border-y border-border bg-soft">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-[0.8fr_1.2fr] md:px-8 md:py-32">
            <Reveal>
              <p className="eyebrow text-primary">
                {salon ? "From Physical to Digital" : "The Approach"}
              </p>
              <h2 className="mt-5 text-3xl font-semibold md:text-4xl">
                {salon ? "From the chair to the screen." : "One foundation, five layers."}
              </h2>
            </Reveal>
            <VerticalFlow steps={c.approach} />
          </div>
        </section>

        {/* WHAT WE BUILT */}
        <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <Reveal>
            <p className="eyebrow text-primary">What NxtQuik Built</p>
            <h2 className="mt-5 max-w-3xl text-3xl font-semibold md:text-5xl">{c.statement}</h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {c.built.map((b, i) => (
              <Reveal key={b} delay={(i % 4) * 0.04}>
                <div className="group h-full bg-background p-6 transition-colors hover:bg-soft">
                  <span className="text-xs font-semibold text-muted-foreground group-hover:text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 font-semibold">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* TECH */}
        <section className="surface-navy relative overflow-hidden">
          <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
            <Reveal>
              <p className="eyebrow text-[color-mix(in_oklab,var(--cyan)_85%,white)]">
                {salon ? "The Technology" : "Tech Stack"}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {c.tech.map((t) => (
                  <span key={t} className="card-navy rounded-xl px-5 py-3 text-base font-semibold">
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* GROWTH */}
        <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <Reveal>
            <p className="eyebrow text-primary">
              {salon ? "Growth Layer" : "From Launch to Growth"}
            </p>
            <h2 className="mt-5 max-w-3xl text-3xl font-semibold md:text-5xl">
              Launch is the start, not the finish.
            </h2>
          </Reveal>
          <div className="mt-12 flex flex-wrap items-center gap-3">
            {c.growth.map((g, i) => (
              <Reveal key={g} delay={i * 0.05}>
                <span className="inline-flex items-center gap-3">
                  <span className="cs-chip rounded-full px-5 py-2.5 text-sm font-semibold">
                    {g}
                  </span>
                  {i < c.growth.length - 1 && <span className="journey-dot" aria-hidden />}
                </span>
              </Reveal>
            ))}
          </div>
        </section>

        {/* LIVE + NEXT */}
        <section className="border-t border-border bg-soft">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-20 md:grid-cols-2 md:px-8">
            <a
              href={c.url}
              target="_blank"
              rel="noreferrer noopener"
              className="card-premium group rounded-2xl p-8 md:p-10"
            >
              <p className="eyebrow text-primary">Live Project</p>
              <p className="mt-4 flex items-center justify-between text-3xl font-semibold">
                Visit {c.name}
                <ArrowUpRight className="size-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </p>
            </a>
            <Link to={`/work/${next.slug}`} className="card-premium group rounded-2xl p-8 md:p-10">
              <p className="eyebrow text-muted-foreground">Next Project</p>
              <p className="mt-4 flex items-center justify-between text-3xl font-semibold">
                {next.name}
                <ArrowRight className="size-6 transition-transform group-hover:translate-x-1" />
              </p>
            </Link>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export function WorkDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  // Redirect legacy /work/gabrulooks -> /work/gabru-looks
  if (slug === "gabrulooks") {
    return <Navigate to="/work/gabru-looks" replace />;
  }

  const c = slug ? caseStudies[slug as CaseStudy["slug"]] : undefined;

  if (!c) {
    return <NotFoundPage />;
  }

  const next: CaseStudy =
    c.slug === "scalvea" ? caseStudies["gabru-looks"] : caseStudies["scalvea"];

  return <WorkDetailContent c={c} next={next} />;
}
