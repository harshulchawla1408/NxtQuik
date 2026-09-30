import { pageHead, breadcrumbs } from "@/lib/seo";
import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { DataPulses } from "@/components/site/DataPulses";
import { ProjectVisual } from "@/components/site/SelectedWork";
import { caseStudies, type CaseStudy } from "@/data/caseStudies";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    if (params.slug === "gabrulooks")
      throw redirect({ to: "/work/$slug", params: { slug: "gabru-looks" }, statusCode: 301 });
    const c = caseStudies[params.slug as CaseStudy["slug"]];
    if (!c) throw notFound();
    return c;
  },
  head: ({ loaderData: c, params }) => {
    if (!c)
      return {
        meta: [{ title: "Case study not found | NxtQuik" }, { name: "robots", content: "noindex" }],
      };
    const path = `/work/${params.slug}`;
    const title =
      c.slug === "scalvea"
        ? "NxtQuik × Scalvea — E-Commerce & Digital Growth Case Study"
        : "NxtQuik × Gabru Looks — Salon Technology Case Study";
    return {
      ...pageHead({ title, description: c.description.slice(0, 158), path, type: "article" }),
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: title,
            about: { "@type": "Organization", name: c.name, url: c.url },
            creator: { "@type": "Organization", name: "NxtQuik" },
            description: c.description,
          }),
        },
        breadcrumbs([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
          { name: c.name, path },
        ]),
      ],
    };
  },
  component: CasePage,
});

function VerticalFlow({ steps }: { steps: CaseStudy["approach"] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <div ref={ref} className="relative pl-10">
      <div className="absolute bottom-2 left-[11px] top-2 w-px bg-[color-mix(in_oklab,var(--primary)_20%,transparent)]" />
      <motion.div
        style={{ scaleY }}
        className="absolute bottom-2 left-[11px] top-2 w-px origin-top bg-[linear-gradient(180deg,var(--primary),var(--cyan))] shadow-[0_0_10px_var(--cyan)]"
      />
      <ol className="space-y-10">
        {steps.map((s, i) => (
          <li key={s.title} className="relative">
            <span className="absolute -left-10 top-1 grid size-6 place-items-center rounded-full border border-primary bg-background text-[10px] font-bold text-primary">
              {i + 1}
            </span>
            <h3 className="text-2xl font-semibold uppercase tracking-tight md:text-3xl">
              {s.title}
            </h3>
            <p className="mt-2 max-w-xl text-muted-foreground">{s.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function CasePage() {
  const c = Route.useLoaderData();
  const next = caseStudies[c.next];
  const salon = c.slug === "gabru-looks";

  return (
    <div>
      <Nav />
      <main>
        {/* HERO */}
        <section className="surface-navy relative overflow-hidden">
          <div className="rule-grid absolute inset-0 opacity-25" aria-hidden />
          <DataPulses />
          <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-36 md:px-8 md:pb-28 md:pt-44">
            <Link to="/work" className="text-sm text-navy-muted hover:text-navy-foreground">
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
            <Link
              to="/work/$slug"
              params={{ slug: next.slug }}
              className="card-premium group rounded-2xl p-8 md:p-10"
            >
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
