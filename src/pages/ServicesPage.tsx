import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { CtaSection } from "@/components/site/CtaSection";
import { services, serviceCategories } from "@/data/services";
import { useSEO, getSiteUrl, breadcrumbs } from "@/lib/seo";

export function ServicesPage() {
  const siteUrl = getSiteUrl();

  useSEO({
    title: "Services & Capabilities — Web, App, Software, Cloud & SEO | NxtQuik",
    description:
      "Full-cycle digital product and growth services: custom web and app development, enterprise software, cloud solutions, technical SEO, and performance marketing.",
    path: "/services",
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ItemList",
          name: "NxtQuik Technology & Growth Services",
          itemListElement: services.map((s, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: s.name,
            url: `${siteUrl}/services/${s.slug}`,
          })),
        },
        breadcrumbs([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]),
      ],
    },
  });

  return (
    <div>
      <Nav />
      <main>
        <PageHero eyebrow="What We Do" title="Technology and growth, under one roof.">
          Every engagement starts with the business problem, not the technology. Below is the full
          range of work we take on.
        </PageHero>

        {serviceCategories.map((cat) => (
          <section key={cat.key} className="border-b border-border">
            <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
              <Reveal>
                <div className="flex items-baseline gap-5">
                  <span className="font-display text-3xl tracking-tight text-border">{cat.no}</span>
                  <div>
                    <p className="eyebrow text-primary">{cat.title}</p>
                    <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{cat.headline}</h2>
                  </div>
                </div>
              </Reveal>
              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {services
                  .filter((s) => s.category === cat.key)
                  .map((s, i) => (
                    <Reveal key={s.slug} delay={(i % 3) * 0.06}>
                      <Link
                        to={`/services/${s.slug}`}
                        className="card-premium group block h-full rounded-2xl p-7"
                      >
                        <h3 className="flex items-start justify-between gap-4 text-lg font-semibold">
                          {s.name}
                          <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                        </h3>
                        <p className="mt-3 text-sm text-muted-foreground">{s.headline}</p>
                      </Link>
                    </Reveal>
                  ))}
              </div>
            </div>
          </section>
        ))}

        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
