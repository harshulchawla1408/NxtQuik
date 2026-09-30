import { pageHead, breadcrumbs, getSiteUrl } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { CtaSection } from "@/components/site/CtaSection";
import { SelectedWork } from "@/components/site/SelectedWork";
import { BrandPortfolio } from "@/components/site/BrandPortfolio";

export const Route = createFileRoute("/work/")({
  head: () => ({
    ...pageHead({
      title: "Featured Work & Case Studies — Digital Products & Systems | NxtQuik",
      description:
        "Explore real-world case studies and digital systems built by NxtQuik, including Scalvea e-commerce and Gabru Looks salon technology.",
      path: "/work",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "NxtQuik Case Studies & Selected Work",
          url: `${getSiteUrl()}/work`,
          description:
            "Case studies and commercial digital solutions engineered by NxtQuik.",
        }),
      },
      breadcrumbs([
        { name: "Home", path: "/" },
        { name: "Work", path: "/work" },
      ]),
    ],
  }),
  component: Work,
});

function Work() {
  return (
    <div>
      <Nav />
      <main>
        <PageHero eyebrow="Selected Work" title="Projects that are live, used and growing.">
          We describe outcomes in plain terms. Where performance numbers aren't independently
          verified, we don't publish them.
        </PageHero>

        <SelectedWork />
        <BrandPortfolio />

        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
