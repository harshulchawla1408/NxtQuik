import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { CtaSection } from "@/components/site/CtaSection";
import { SelectedWork } from "@/components/site/SelectedWork";
import { BrandPortfolio } from "@/components/site/BrandPortfolio";
import { useSEO, getSiteUrl, breadcrumbs } from "@/lib/seo";

export function WorkPage() {
  const siteUrl = getSiteUrl();

  useSEO({
    title: "Featured Work & Case Studies — Digital Products & Systems | NxtQuik",
    description:
      "Explore real-world case studies and digital systems built by NxtQuik, including Scalvea e-commerce and Gabru Looks salon technology.",
    path: "/work",
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CollectionPage",
          name: "NxtQuik Case Studies & Selected Work",
          url: `${siteUrl}/work`,
          description: "Case studies and commercial digital solutions engineered by NxtQuik.",
        },
        breadcrumbs([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
        ]),
      ],
    },
  });

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
