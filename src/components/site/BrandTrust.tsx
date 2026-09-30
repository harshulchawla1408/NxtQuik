import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import medimetics from "@/assets/brand-medimetics.png";
import immortal from "@/assets/brand-immortal.png";
import astro from "@/assets/brand-astro.png";
import hyundai from "@/assets/brand-hyundai.png";
import yashodha from "@/assets/brand-yashodha.png";
import perfection from "@/assets/brand-perfection.png";
import moi from "@/assets/brand-moi.png";
import kia from "@/assets/brand-kia.png";
import newvision from "@/assets/brand-newvision.png";
import scalvea from "@/assets/brand-scalvea.png";
import gabru from "@/assets/brand-gabrulooks.png";

type Brand = {
  name: string;
  src?: string;
  dark?: boolean; // logo on dark background — inverted for the light wall
  wide?: boolean;
  slug?: string;
};

const row1: Brand[] = [
  { name: "Kia", src: kia },
  { name: "Hyundai", src: hyundai },
  { name: "Yashodha Group", src: yashodha },
  { name: "Scalvea", src: scalvea, wide: true, slug: "scalvea" },
  { name: "Masters of Immigration", src: moi, dark: true },
  { name: "Medimetics", src: medimetics, wide: true },
];
const row2: Brand[] = [
  { name: "Gabru Looks", src: gabru, slug: "gabru-looks" },
  { name: "Astro Users", src: astro, wide: true },
  { name: "Immortal Tattoos", src: immortal },
  { name: "Perfection by Eshaa", src: perfection, dark: true },
  { name: "New Vision", src: newvision, dark: true },
];

function Logo({ b }: { b: Brand }) {
  const inner = b.src ? (
    <img
      src={b.src}
      alt={b.name}
      loading="lazy"
      className={`brand-logo ${b.dark ? "brand-logo-dark" : ""} ${b.wide ? "h-12 md:h-14" : "h-16 md:h-20"} w-auto max-w-[200px] object-contain`}
    />
  ) : (
    <span className="brand-logo font-display text-2xl font-semibold tracking-tight md:text-3xl">
      {b.name}
    </span>
  );
  const cls = "brand-item group relative flex shrink-0 items-center px-8 md:px-12";
  const tip = (
    <span className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-foreground px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-background opacity-0 transition-opacity group-hover:opacity-100">
      {b.name} · {b.slug ? "Project" : "Brand / Project"}
    </span>
  );
  return b.slug ? (
    <Link
      to="/work/$slug"
      params={{ slug: b.slug as "scalvea" }}
      className={cls}
      aria-label={`${b.name} project`}
    >
      {inner}
      {tip}
    </Link>
  ) : (
    <div className={cls}>
      {inner}
      {tip}
    </div>
  );
}

function Row({
  items,
  reverse,
  duration,
}: {
  items: Brand[];
  reverse?: boolean;
  duration: number;
}) {
  const list = [...items, ...items, ...items];
  return (
    <div className="marquee-mask overflow-hidden py-6">
      <div
        className={`marquee-track flex w-max ${reverse ? "marquee-reverse" : ""}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {[list, list].map((l, k) => (
          <div key={k} className="flex" aria-hidden={k === 1}>
            {l.map((b, i) => (
              <Logo key={`${b.name}-${i}`} b={b} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function BrandTrust() {
  return (
    <section className="brand-trust relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5 pt-24 md:px-8 md:pt-28">
        <Reveal>
          <p className="eyebrow text-primary">Brands &amp; projects we've worked with</p>
          <div className="mt-5 grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-end">
            <h2 className="text-4xl font-semibold uppercase leading-[1] tracking-[-0.03em] md:text-5xl">
              Trusted by brands.
              <br />
              <span className="text-gradient">Built for what's next.</span>
            </h2>
            <p className="max-w-md text-muted-foreground md:justify-self-end">
              From growing businesses to established brands, we build digital experiences,
              technology systems and growth solutions that move businesses forward.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="relative mt-12">
        <Reveal delay={0.1}>
          <Row items={row1} duration={38} />
        </Reveal>
        <div className="relative mx-auto flex max-w-7xl items-center gap-4 px-5 md:px-8">
          <div className="data-line relative h-px flex-1" />
          <p className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Real brands. Real digital work.
          </p>
          <div className="data-line data-line-rev relative h-px flex-1" />
        </div>
        <Reveal delay={0.2}>
          <Row items={row2} reverse duration={31} />
        </Reveal>
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-5 pb-20 pt-6 md:px-8 md:pb-24">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Digital Products · Cloud &amp; Technology · E-commerce · SEO &amp; Growth · Digital
          Marketing
        </p>
      </div>
    </section>
  );
}
