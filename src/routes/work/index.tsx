import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { CtaSection } from "@/components/site/CtaSection";
import { SelectedWork } from "@/components/site/SelectedWork";
import { BrandPortfolio } from "@/components/site/BrandPortfolio";

export const Route = createFileRoute("/work/")({
  head: () =>
    pageHead({
      title: "NxtQuik Work — Digital Products & Technology Projects",
      description:
        "Case studies and brand work from NxtQuik: Scalvea, Gabru Looks, and content and digital marketing for brands like Kia, Hyundai and Yashodha Group.",
      path: "/work",
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
