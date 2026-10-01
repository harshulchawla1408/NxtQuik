import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { services, serviceAliases, serviceTitles, type Service } from "@/data/services";
import { projects } from "@/data/site";
import { useSEO, serviceSchema, breadcrumbs } from "@/lib/seo";
import { NotFoundPage } from "./NotFoundPage";

function ServiceDetailContent({ s }: { s: Service }) {
  const path = `/services/${s.slug}`;
  const title = serviceTitles[s.slug] ?? `${s.name} Services | NxtQuik`;
  const description = `${s.headline} ${s.solution}`.slice(0, 158);

  useSEO({
    title,
    description,
    path,
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        serviceSchema({
          name: s.name,
          description: s.solution,
          path,
          category: s.category,
        }),
        breadcrumbs([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: s.name, path },
        ]),
      ],
    },
  });

  return (
    <div>
      <Nav />
      <main>
        <section className="surface-navy relative overflow-hidden">
          <div className="rule-grid absolute inset-0 opacity-25" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-36 md:px-8 md:pb-28 md:pt-44">
            <nav aria-label="Breadcrumb" className="text-sm text-navy-muted">
              <Link to="/" className="hover:text-navy-foreground">
                Home
              </Link>
              <span className="px-2">/</span>
              <Link to="/services" className="hover:text-navy-foreground">
                Services
              </Link>
              <span className="px-2">/</span>
              <span className="text-navy-foreground">{s.name}</span>
            </nav>
            <p className="eyebrow mt-8 text-[color-mix(in_oklab,var(--cyan)_85%,white)]">
              {s.name}
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold md:text-6xl">{s.headline}</h1>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-base btn-primary">
                Start a Project <ArrowRight className="size-4" />
              </Link>
              <Link to="/services" className="btn-base btn-onnavy">
                All Services
              </Link>
            </div>
          </div>
        </section>

        {/* PROBLEM / SOLUTION */}
        <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-28">
          <div className="grid gap-12 md:grid-cols-2">
            <Reveal>
              <p className="eyebrow text-muted-foreground">The problem</p>
              <p className="mt-5 text-xl leading-relaxed md:text-2xl">{s.problem}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="eyebrow text-primary">Our approach</p>
              <p className="mt-5 text-xl leading-relaxed md:text-2xl">{s.solution}</p>
            </Reveal>
          </div>
        </section>

        {/* OFFERINGS + PROCESS */}
        <section className="border-y border-border bg-soft">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 md:px-8 md:py-28 lg:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <h2 className="text-3xl font-semibold md:text-4xl">What's included</h2>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {s.offerings.map((o) => (
                  <li key={o} className="flex items-start gap-3 rounded-xl bg-background p-4">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-sm">{o}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-3xl font-semibold md:text-4xl">How it runs</h2>
              <ol className="mt-8">
                {s.flow.map((step, i) => (
                  <li key={step} className="relative pl-8">
                    <span className="absolute left-0 top-1.5 size-2.5 rounded-full bg-primary" />
                    {i < s.flow.length - 1 && (
                      <span className="absolute left-[4.5px] top-4 h-full w-px bg-border" />
                    )}
                    <span className="block pb-7 font-medium">{step}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </section>

        {/* TECHNOLOGY */}
        <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-28">
          <Reveal>
            <h2 className="text-3xl font-semibold md:text-4xl">Technology we use</h2>
            <div className="mt-8 flex flex-wrap gap-2">
              {s.technology.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-20 text-3xl font-semibold md:text-4xl">Related work</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {projects.map((p) => (
                <Link
                  key={p.slug}
                  to={`/work/${p.slug}`}
                  className="card-premium block rounded-2xl p-8"
                >
                  <p className="eyebrow text-muted-foreground">{p.categories.join(" · ")}</p>
                  <h3 className="mt-4 text-2xl font-semibold">{p.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{p.summary}</p>
                </Link>
              ))}
            </div>
          </Reveal>
        </section>

        {/* FAQ */}
        <section className="border-t border-border bg-soft">
          <div className="mx-auto max-w-4xl px-5 py-24 md:px-8 md:py-28">
            <Reveal>
              <h2 className="text-3xl font-semibold md:text-4xl">Frequently asked</h2>
            </Reveal>
            <div className="mt-10 divide-y divide-border border-y border-border">
              {s.faq.map((f) => (
                <details key={f.q} className="group py-6">
                  <summary className="cursor-pointer list-none font-display text-lg tracking-tight transition-colors group-open:text-primary">
                    {f.q}
                  </summary>
                  <p className="mt-4 text-muted-foreground">{f.a}</p>
                </details>
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

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  // Handle service aliases (e.g. /services/development -> /services/web-development)
  if (slug && serviceAliases[slug]) {
    return <Navigate to={`/services/${serviceAliases[slug]}`} replace />;
  }

  const s = services.find((srv) => srv.slug === slug);

  if (!s) {
    return <NotFoundPage />;
  }

  return <ServiceDetailContent s={s} />;
}
