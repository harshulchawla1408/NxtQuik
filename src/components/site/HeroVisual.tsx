import { useState } from "react";
import { Mark } from "./Brand";

type Ring = {
  key: string;
  label: string;
  items: string[];
  r: number;
  dur: number;
  reverse?: boolean;
};

const rings: Ring[] = [
  { key: "build", label: "Build", items: ["Web", "Apps", "Software"], r: 20, dur: 40 },
  {
    key: "transform",
    label: "Transform",
    items: ["Cloud", "Consulting", "Automation"],
    r: 30,
    dur: 60,
    reverse: true,
  },
  { key: "grow", label: "Grow", items: ["SEO", "Marketing", "Leads"], r: 40, dur: 80 },
];

export function HeroVisual() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="card-navy relative aspect-square w-full overflow-hidden rounded-3xl">
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--primary) 30%, transparent), transparent 55%)",
        }}
      />

      {rings.map((ring, ri) => {
        const dim = active && active !== ring.key;
        return (
          <div
            key={ring.key}
            className="orbit-ring absolute left-1/2 top-1/2 rounded-full border transition-opacity duration-500"
            style={{
              width: `${ring.r * 2}%`,
              height: `${ring.r * 2}%`,
              translate: "-50% -50%",
              borderColor: `color-mix(in oklab, var(--cyan) ${active === ring.key ? 60 : 18}%, transparent)`,
              opacity: dim ? 0.35 : 1,
              animationDuration: `${ring.dur}s`,
              animationDirection: ring.reverse ? "reverse" : "normal",
            }}
            onMouseEnter={() => setActive(ring.key)}
            onMouseLeave={() => setActive(null)}
          >
            {ring.items.map((item, i) => {
              const angle = ((360 / ring.items.length) * i + ri * 40) * (Math.PI / 180);
              const x = 50 + 50 * Math.cos(angle);
              const y = 50 + 50 * Math.sin(angle);
              return (
                <span
                  key={item}
                  className="orbit-chip absolute whitespace-nowrap rounded-full border px-3 py-1 text-xs font-semibold text-navy-foreground"
                  style={{
                    left: `${x.toFixed(3)}%`,
                    top: `${y.toFixed(3)}%`,
                    translate: "-50% -50%",
                    borderColor: "color-mix(in oklab, var(--cyan) 40%, transparent)",
                    background: "color-mix(in oklab, var(--navy) 85%, var(--primary))",
                    animationDuration: `${ring.dur}s`,
                    animationDirection: ring.reverse ? "normal" : "reverse",
                  }}
                >
                  <span
                    className="mr-1.5 inline-block size-1.5 rounded-full align-middle"
                    style={{ background: "var(--cyan)", boxShadow: "0 0 8px var(--cyan)" }}
                  />
                  {item}
                </span>
              );
            })}
          </div>
        );
      })}

      {/* Core */}
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        <div className="orbit-core flex size-20 items-center justify-center rounded-full bg-background md:size-24">
          <Mark transparent className="h-10 md:h-12" />
        </div>
      </div>

      {/* Legend */}
      <div className="absolute inset-x-4 bottom-4 flex justify-center gap-2">
        {rings.map((ring) => (
          <button
            key={ring.key}
            type="button"
            onMouseEnter={() => setActive(ring.key)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(ring.key)}
            onBlur={() => setActive(null)}
            className={`eyebrow rounded-full border px-3 py-1.5 transition-colors ${
              active === ring.key ? "text-navy-foreground" : "text-navy-muted"
            }`}
            style={{
              borderColor: `color-mix(in oklab, var(--cyan) ${active === ring.key ? 60 : 20}%, transparent)`,
            }}
          >
            {ring.label}
          </button>
        ))}
      </div>
    </div>
  );
}
