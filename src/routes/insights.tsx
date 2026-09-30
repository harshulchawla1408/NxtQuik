import { pageHead, breadcrumbs, getSiteUrl } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { CtaSection } from "@/components/site/CtaSection";
import { insights } from "@/data/site";

export const Route = createFileRoute("/insights")({
  head: () => ({
    ...pageHead({
      title: "Technology & Growth Insights — Architecture, Cloud, SEO | NxtQuik",
      description:
        "Practical engineering and growth insights on web development, custom software, cloud solutions, conversion optimization, and lead generation.",
      path: "/insights",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "NxtQuik Insights",
          url: `${getSiteUrl()}/insights`,
          description:
            "Practical notes on technology, cloud architecture, software engineering, and digital growth from the NxtQuik team.",
        }),
      },
      breadcrumbs([
        { name: "Home", path: "/" },
        { name: "Insights", path: "/insights" },
      ]),
    ],
  }),
  component: Insights,
});

function Insights() {
  return (
    <div>
      <Nav />
      <main>
        <PageHero eyebrow="Insights" title="Notes on building, transforming and growing.">
          Writing for people making technology decisions with real budgets and real deadlines.
          Articles are published here as they're released.
        </PageHero>

        <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-28">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {insights.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 0.06}>
                <article className="card-premium flex h-full flex-col justify-between rounded-2xl p-8">
                  <div>
                    <p className="eyebrow text-primary">{a.category}</p>
                    <h2 className="mt-5 text-xl font-semibold">{a.title}</h2>
                  </div>
                  <p className="mt-8 text-sm text-muted-foreground">{a.read} read · Coming soon</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
