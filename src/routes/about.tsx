import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { CtaSection } from "@/components/site/CtaSection";
import { OfficeInProgress } from "@/components/site/OfficeInProgress";
import { Mark } from "@/components/site/Brand";
import { site, processSteps } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "About NxtQuik — Technology & Growth",
      description:
        "NxtQuik is a technology, digital transformation and growth company from Patiala, founded by Shubham Sonwal, helping businesses build scalable digital foundations.",
      path: "/about",
    }),
  component: About,
});

function About() {
  return (
    <div>
      <Nav />
      <main>
        <PageHero eyebrow="About" title="Built for What's Next.">
          NxtQuik helps businesses use technology and digital strategy to build stronger, more
          scalable operations — from the first line of code to the last point of conversion.
        </PageHero>

        <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-28">
          <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr]">
            <Reveal>
              <h2 className="text-3xl font-semibold md:text-4xl">
                We understand technology, but we also understand business.
              </h2>
              <div className="mt-8 space-y-5 text-lg text-muted-foreground">
                <p>
                  Most companies don't need more technology. They need the right technology, applied
                  to the parts of the business that actually decide whether it grows.
                </p>
                <p>
                  That's why every engagement starts with the business problem and ends with a
                  measurable outcome: a product that ships, a process that no longer costs hours, or
                  a channel that produces qualified enquiries.
                </p>
                <p>
                  Because we work across engineering, cloud and growth, clients don't have to
                  coordinate separate teams for each stage of the journey.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="card-premium rounded-2xl p-8">
                <Mark className="h-10" />
                <h3 className="mt-6 text-2xl font-semibold">{site.founder}</h3>
                <p className="mt-1 text-sm text-muted-foreground">Founder, NxtQuik</p>
                <p className="mt-5 text-muted-foreground">
                  Shubham leads NxtQuik's technology and growth work, staying close to client
                  strategy and delivery.
                </p>
                <dl className="mt-8 space-y-3 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Office</dt>
                    <dd>{site.office}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Email</dt>
                    <dd>
                      <a className="text-primary" href={`mailto:${site.email}`}>
                        {site.email}
                      </a>
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Phone</dt>
                    <dd>
                      <a className="text-primary" href={site.phoneHref}>
                        {site.phone}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-y border-border bg-soft">
          <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-28">
            <Reveal>
              <h2 className="text-3xl font-semibold md:text-4xl">How we work</h2>
            </Reveal>
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((s, i) => (
                <Reveal key={s.no} delay={(i % 3) * 0.06}>
                  <div className="h-full bg-background p-8 md:p-10">
                    <span className="font-display text-4xl tracking-tight text-border">{s.no}</span>
                    <h3 className="mt-6 text-xl font-semibold uppercase tracking-wide">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
        <OfficeInProgress />
      </main>
      <Footer />
    </div>
  );
}
