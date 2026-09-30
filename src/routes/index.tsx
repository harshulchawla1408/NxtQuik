import { pageHead } from "@/lib/seo";
import { TechStack } from "@/components/site/TechStack";
import { BrandTrust } from "@/components/site/BrandTrust";
import { SelectedWork } from "@/components/site/SelectedWork";
import { WhatWeDo } from "@/components/site/WhatWeDo";
import { DataPulses } from "@/components/site/DataPulses";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const LINE1 = "Build what's next.";
const LINE2 = "Grow what matters.";

function TypedHeadline() {
  const [n, setN] = useState(0);
  const total = LINE1.length + LINE2.length;
  useEffect(() => {
    if (n >= total) return;
    const t = setTimeout(() => setN((v) => v + 1), n === 0 ? 400 : n === LINE1.length ? 350 : 65);
    return () => clearTimeout(t);
  }, [n, total]);
  const a = LINE1.slice(0, n);
  const b = LINE2.slice(0, Math.max(0, n - LINE1.length));
  const onFirst = n < LINE1.length;
  return (
    <h1
      aria-label={`${LINE1} ${LINE2}`}
      className="mt-6 min-h-[2em] text-5xl font-semibold uppercase leading-[0.95] tracking-[-0.04em] md:text-6xl xl:text-7xl"
    >
      <span aria-hidden>
        {a}
        {onFirst && <span className="type-caret" />}
        <br />
        <span className="text-gradient">{b}</span>
        {!onFirst && <span className="type-caret" />}
      </span>
    </h1>
  );
}
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { HeroVisual } from "@/components/site/HeroVisual";
import { services, serviceCategories, solutions } from "@/data/services";
import { site, projects, processSteps, insights } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageHead({
      title: "NxtQuik — Technology, Transformation & Growth",
      description:
        "NxtQuik builds digital products, custom software, cloud solutions and growth systems that help ambitious businesses move forward.",
      path: "/",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "NxtQuik",
          description:
            "Technology, digital transformation and growth company: web, app and custom software development, cloud, consulting, SEO and digital marketing.",
          logo: "/apple-touch-icon.png",
          email: "nxtquik@gmail.com",
          telephone: "+91 94786 69360",
          founder: { "@type": "Person", name: "Shubham Sonwal" },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Patiala",
            addressRegion: "Punjab",
            addressCountry: "IN",
          },
          sameAs: [
            "https://www.linkedin.com/company/ugcnxtquik/",
            "https://www.instagram.com/nxtquik/",
          ],
        }),
      },
    ],
  }),
  component: Home,
});

const pillars = [
  {
    key: "Build",
    title: "Build",
    sub: "Digital Products & Software",
    body: "Websites, apps, platforms and custom software designed around the decisions your customers actually make.",
    slug: "web-development",
  },
  {
    key: "Transform",
    title: "Transform",
    sub: "Cloud & Digital Transformation",
    body: "Modernise infrastructure, connect systems and automate the manual work between them.",
    slug: "digital-transformation",
  },
  {
    key: "Grow",
    title: "Grow",
    sub: "SEO & Digital Growth",
    body: "Search visibility, campaigns and conversion systems that turn attention into qualified enquiries.",
    slug: "seo",
  },
];

function Home() {
  return (
    <div>
      <Nav />
      <main>
        {/* HERO */}
        <section className="surface-navy relative overflow-hidden">
          <div className="rule-grid absolute inset-0 opacity-30" aria-hidden />
          <DataPulses />
          <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pb-20 pt-36 md:px-8 md:pb-28 md:pt-44 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="eyebrow text-[color-mix(in_oklab,var(--cyan)_85%,white)]"
              >
                Build · Transform · Grow
              </motion.p>
              <TypedHeadline />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-7 max-w-xl text-lg text-navy-muted md:text-xl"
              >
                NxtQuik builds digital products, transforms technology and creates growth systems
                for ambitious businesses.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-10 flex flex-wrap items-center gap-3"
              >
                <Link to="/contact" className="btn-base btn-primary">
                  Start a Project <ArrowRight className="size-4" />
                </Link>
                <Link to="/services" className="btn-base btn-onnavy">
                  Explore Our Services
                </Link>
                <Link
                  to="/work"
                  className="link-underline ml-1 text-sm font-medium text-navy-muted transition-colors hover:text-navy-foreground"
                >
                  View Our Work →
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <HeroVisual />
            </motion.div>
          </div>
        </section>

        <BrandTrust />

        <WhatWeDo />

        {/* SOLUTIONS */}
        <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <Reveal>
            <h2 className="max-w-3xl text-4xl font-semibold md:text-5xl">
              What Are You Looking to Solve?
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.07}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="card-premium group block h-full rounded-2xl p-7"
                >
                  <h3 className="flex items-start justify-between gap-4 text-xl font-semibold">
                    {s.title}
                    <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                  </h3>
                  <ul className="mt-5 space-y-1.5 text-sm text-muted-foreground">
                    {s.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ADVANTAGE */}
        <section className="surface-navy relative overflow-hidden">
          <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
            <Reveal>
              <h2 className="max-w-3xl text-4xl font-semibold md:text-6xl">
                More Than Development.
                <br />
                More Than Marketing.
              </h2>
              <p className="mt-6 max-w-2xl text-lg text-navy-muted">
                NxtQuik connects technology and growth so businesses don't have to manage
                disconnected teams for every stage of their digital journey.
              </p>
            </Reveal>
            <div className="mt-16 grid gap-5 md:grid-cols-3">
              {[
                { t: "Technology", b: "Build the right digital foundation." },
                { t: "Strategy", b: "Make technology serve the business." },
                { t: "Growth", b: "Turn digital presence into measurable opportunities." },
              ].map((x, i) => (
                <Reveal key={x.t} delay={i * 0.1}>
                  <div className="card-navy h-full rounded-2xl p-8">
                    <p className="eyebrow text-[color-mix(in_oklab,var(--cyan)_85%,white)]">
                      0{i + 1}
                    </p>
                    <h3 className="mt-5 text-2xl font-semibold">{x.t}</h3>
                    <p className="mt-3 text-navy-muted">{x.b}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <SelectedWork />

        <TechStack />

        {/* GROWTH + FUNNEL */}
        <section className="surface-navy relative overflow-hidden">
          <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
            <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <Reveal>
                <h2 className="text-4xl font-semibold leading-[1.05] md:text-6xl">
                  Build Visibility.
                  <br />
                  Create Demand.
                  <br />
                  <span className="text-gradient">Drive Growth.</span>
                </h2>
                <p className="mt-6 max-w-xl text-lg text-navy-muted">
                  We help turn visibility into meaningful business opportunities through SEO,
                  digital campaigns, landing pages, conversion optimisation and lead-generation
                  systems.
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "SEO",
                    "Technical SEO",
                    "Content Strategy",
                    "Paid Ads",
                    "Social Media",
                    "Lead Generation",
                    "CRO",
                    "Analytics",
                  ].map((t) => (
                    <span
                      key={t}
                      className="card-navy rounded-full px-3.5 py-1.5 text-sm text-navy-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  to="/services/$slug"
                  params={{ slug: "seo" }}
                  className="btn-base btn-primary mt-10"
                >
                  Build My SEO Strategy <ArrowRight className="size-4" />
                </Link>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="card-navy rounded-2xl p-8">
                  <p className="eyebrow text-[color-mix(in_oklab,var(--cyan)_85%,white)]">
                    The growth funnel
                  </p>
                  <div className="mt-7 space-y-3">
                    {["Visibility", "Traffic", "Engagement", "Leads", "Customers"].map((s, i) => (
                      <motion.div
                        key={s}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        className="rounded-lg border border-[color-mix(in_oklab,var(--navy-foreground)_14%,transparent)] px-5 py-3.5 text-sm font-semibold"
                        style={{ width: `${100 - i * 11}%` }}
                      >
                        {s}
                      </motion.div>
                    ))}
                  </div>
                  <Link
                    to="/services/$slug"
                    params={{ slug: "lead-generation" }}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[color-mix(in_oklab,var(--cyan)_85%,white)]"
                  >
                    Grow My Business <ArrowRight className="size-4" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <Reveal>
            <h2 className="text-4xl font-semibold md:text-5xl">How We Work</h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((s, i) => (
              <Reveal key={s.no} delay={(i % 3) * 0.06}>
                <div className="group h-full bg-background p-8 transition-colors hover:bg-soft md:p-10">
                  <span className="font-display text-4xl tracking-tight text-border transition-colors group-hover:text-primary">
                    {s.no}
                  </span>
                  <h3 className="mt-6 text-xl font-semibold uppercase tracking-wide">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ABOUT / FOUNDER */}
        <section className="border-y border-border bg-soft">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 md:grid-cols-2 md:px-8 md:py-32">
            <Reveal>
              <div>
                <p className="eyebrow text-primary">About NxtQuik</p>
                <h2 className="mt-5 text-4xl font-semibold leading-[1.08] md:text-5xl">
                  Built for What's Next.
                </h2>
                <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                  NxtQuik is a technology, digital transformation and growth company. We work with
                  businesses that want more than a website or a campaign: a digital foundation they
                  can build on, and a growth system that keeps working after launch.
                </p>
                <p className="mt-4 max-w-xl text-muted-foreground">
                  Every engagement is run close to the client, with one team responsible for
                  strategy, build and growth. That keeps decisions fast and accountability clear.
                </p>
                <Link to="/about" className="link-underline mt-8 inline-flex text-sm font-semibold">
                  More about us
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="card-premium h-full rounded-2xl p-8 md:p-10">
                <p className="eyebrow text-primary">Founder</p>
                <h3 className="mt-5 text-2xl font-semibold">{site.founder}</h3>
                <p className="mt-4 text-muted-foreground">
                  Founder of NxtQuik, working directly with clients across product development,
                  digital transformation and growth.
                </p>
                <div className="mt-8 space-y-2 text-sm">
                  <p>
                    <a href={site.phoneHref} className="link-underline">
                      {site.phone}
                    </a>
                  </p>
                  <p>
                    <a href={`mailto:${site.email}`} className="link-underline">
                      {site.email}
                    </a>
                  </p>
                  <p className="text-muted-foreground">{site.office}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* TRUST */}
        <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <Reveal>
            <h2 className="max-w-3xl text-4xl font-semibold md:text-5xl">Built With Purpose.</h2>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              We'd rather show how we work than post badges. These are the commitments behind every
              project we take on.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Direct with the founder",
                body: "You speak to the people doing the work, not an account layer.",
              },
              {
                title: "Live, referenceable work",
                body: "Real projects you can open and use, not mockups in a deck.",
              },
              {
                title: "Honest scope",
                body: "Clear timelines and no promises we can't stand behind.",
              },
              {
                title: "Built to be handed over",
                body: "Clean, documented work your team can own and extend.",
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <div className="card-premium h-full rounded-2xl p-8">
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* INSIGHTS */}
        <section className="border-t border-border bg-soft">
          <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-6">
                <h2 className="text-4xl font-semibold md:text-5xl">NxtQuik Insights</h2>
                <Link
                  to="/insights"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  All insights <ArrowRight className="size-4" />
                </Link>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {insights.slice(0, 3).map((a, i) => (
                <Reveal key={a.title} delay={i * 0.07}>
                  <article className="card-premium h-full rounded-2xl p-8">
                    <p className="eyebrow text-primary">{a.category}</p>
                    <h3 className="mt-5 text-xl font-semibold">{a.title}</h3>
                    <p className="mt-4 text-sm text-muted-foreground">{a.read} read</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
