import medimetics from "@/assets/brand-medimetics.png";
import immortal from "@/assets/brand-immortal.png";
import astro from "@/assets/brand-astro.png";
import hyundai from "@/assets/brand-hyundai.png";
import yashodha from "@/assets/brand-yashodha.png";
import perfection from "@/assets/brand-perfection.png";
import moi from "@/assets/brand-moi.png";
import kia from "@/assets/brand-kia.png";
import newvision from "@/assets/brand-newvision.png";
import { Reveal } from "./Reveal";

type B = { name: string; src: string; sector: string; about: string; work: string[] };

const featured: B[] = [
  {
    name: "Kia",
    src: kia,
    sector: "Automotive",
    about: "Global automotive brand known for design-led cars and SUVs.",
    work: ["Content Creation", "Digital Marketing", "Social Media"],
  },
  {
    name: "Hyundai",
    src: hyundai,
    sector: "Automotive",
    about: "One of the world's leading automotive brands.",
    work: ["Content Creation", "Digital Marketing", "Social Media"],
  },
  {
    name: "Yashodha Group",
    src: yashodha,
    sector: "Group of businesses",
    about: "A multi-business group building a strong regional presence.",
    work: ["Content Creation", "Digital Marketing", "Brand Communication"],
  },
];

const others: B[] = [
  {
    name: "Medimetics",
    src: medimetics,
    sector: "Healthcare",
    about: "Healthcare and wellness brand.",
    work: ["Digital Presence"],
  },
  {
    name: "Masters of Immigration",
    src: moi,
    sector: "Immigration services",
    about: "Immigration and visa consultancy.",
    work: ["Digital Presence"],
  },
  {
    name: "Immortal Tattoos",
    src: immortal,
    sector: "Tattoo studio",
    about: "Tattoo and body-art studio.",
    work: ["Digital Presence"],
  },
  {
    name: "Perfection by Eshaa",
    src: perfection,
    sector: "Beauty",
    about: "Beauty and makeup brand.",
    work: ["Digital Presence"],
  },
];

const progress: B[] = [
  {
    name: "Astro Users",
    src: astro.url,
    sector: "Astrology platform",
    about: "Digital platform currently being built.",
    work: ["In progress"],
  },
  {
    name: "New Vision",
    src: newvision.url,
    sector: "Brand",
    about: "Brand work currently underway.",
    work: ["In progress"],
  },
];

function Logo({ b, big }: { b: B; big?: boolean }) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl bg-secondary/60 ${big ? "h-32" : "h-24"}`}
    >
      <img
        src={b.src}
        alt={`${b.name} logo`}
        loading="lazy"
        className={`${big ? "max-h-20" : "max-h-14"} max-w-[70%] object-contain`}
      />
    </div>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((t) => (
        <span
          key={t}
          className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

export function BrandPortfolio() {
  return (
    <section className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="eyebrow">Brand Partnerships</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl">
            Content & growth for leading brands.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            We handle content creation and digital marketing for these brands.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((b, i) => (
            <Reveal key={b.name} delay={i * 0.08}>
              <article className="card-premium h-full rounded-2xl p-6 transition-transform hover:-translate-y-1">
                <Logo b={b} big />
                <p className="eyebrow mt-6">{b.sector}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold">{b.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.about}</p>
                <Tags items={b.work} />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h2 className="mt-24 font-display text-2xl font-semibold tracking-tight md:text-3xl">
            More brands we've worked with
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((b) => (
            <article key={b.name} className="card-premium rounded-2xl p-5">
              <Logo b={b} />
              <p className="eyebrow mt-5">{b.sector}</p>
              <h3 className="mt-1 font-display text-lg font-semibold">{b.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{b.about}</p>
            </article>
          ))}
        </div>

        <Reveal>
          <div className="mt-24 flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
            </span>
            <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
              Brands in progress
            </h2>
          </div>
          <p className="mt-3 text-muted-foreground">Projects currently being built with NxtQuik.</p>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {progress.map((b) => (
            <article
              key={b.name}
              className="card-premium flex flex-col items-start gap-5 rounded-2xl border-dashed p-5 sm:flex-row sm:items-center sm:gap-6"
            >
              <div className="w-full shrink-0 sm:w-40">
                <Logo b={b} />
              </div>
              <div>
                <p className="eyebrow">{b.sector}</p>
                <h3 className="mt-1 font-display text-lg font-semibold">{b.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{b.about}</p>
                <span className="mt-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Work in progress
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
