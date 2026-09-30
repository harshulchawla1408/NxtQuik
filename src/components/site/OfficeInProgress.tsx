import { Reveal } from "./Reveal";
import { Mark } from "./Brand";

/** Abstract "office rendered into existence" loop — blueprint → room → workspace → logo. */
function OfficeVisual() {
  const blue = "var(--color-primary)";
  return (
    <svg
      viewBox="0 0 400 280"
      className="office-anim h-full w-full"
      role="img"
      aria-label="Animated blueprint of the NxtQuik Patiala office taking shape"
    >
      <defs>
        <linearGradient id="oiFloor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="oklch(0.32 0.08 255)" />
          <stop offset="1" stopColor="oklch(0.2 0.06 258)" />
        </linearGradient>
        <linearGradient id="oiWall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="oklch(0.3 0.09 255)" />
          <stop offset="1" stopColor="oklch(0.24 0.07 258)" />
        </linearGradient>
        <radialGradient id="oiGlow">
          <stop offset="0" stopColor="oklch(0.78 0.14 220)" stopOpacity="0.55" />
          <stop offset="1" stopColor="oklch(0.78 0.14 220)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* solid room */}
      <g className="oi-solid">
        <polygon points="0,0 400,0 260,90 140,90" fill="oklch(0.27 0.08 256)" />
        <polygon points="0,0 140,90 140,190 0,280" fill="url(#oiWall)" />
        <polygon points="400,0 260,90 260,190 400,280" fill="url(#oiWall)" />
        <rect x="140" y="90" width="120" height="100" fill="oklch(0.29 0.09 255)" />
        <polygon points="140,190 260,190 400,280 0,280" fill="url(#oiFloor)" />
        {[0.25, 0.5, 0.75].map((t) => (
          <circle
            key={t}
            cx={200}
            cy={20 + t * 60}
            r={2.2}
            fill="oklch(0.9 0.08 210)"
            className="oi-light"
          />
        ))}
      </g>

      {/* blueprint wireframe */}
      <g className="oi-wire" fill="none" stroke={blue} strokeWidth="1" strokeOpacity="0.85">
        <rect x="140" y="90" width="120" height="100" pathLength={1} />
        <path d="M0 0 L140 90 M400 0 L260 90 M0 280 L140 190 M400 280 L260 190" pathLength={1} />
        {/* ceiling coffers */}
        <path
          d="M60 38.6 H340 M100 64.3 H300 M200 0 V90 M110 0 L170 90 M290 0 L230 90"
          pathLength={1}
          strokeOpacity="0.45"
        />
        {/* floor grid */}
        <path
          d="M60 241.4 H340 M100 215.7 H300 M200 190 V280 M170 190 L110 280 M230 190 L290 280"
          pathLength={1}
          strokeOpacity="0.4"
        />
      </g>

      {/* measurement marks */}
      <g
        className="oi-marks"
        stroke="oklch(0.82 0.13 215)"
        strokeWidth="0.7"
        fill="oklch(0.82 0.13 215)"
      >
        <path d="M140 82 H260 M140 79 V85 M260 79 V85" />
        <text x="200" y="77" fontSize="6" textAnchor="middle" stroke="none" fontFamily="monospace">
          4.2 m
        </text>
        <path d="M268 90 V190 M265 90 H271 M265 190 H271" />
        {[
          [140, 90],
          [260, 90],
          [140, 190],
          [260, 190],
        ].map(([x, y]) => (
          <circle key={`${x}${y}`} cx={x} cy={y} r="2" stroke="none" />
        ))}
      </g>

      {/* workspace */}
      <g className="oi-desk">
        <polygon points="165,196 235,196 250,214 150,214" fill="oklch(0.93 0.02 240)" />
        <rect x="152" y="214" width="3" height="18" fill="oklch(0.75 0.03 240)" />
        <rect x="245" y="214" width="3" height="18" fill="oklch(0.75 0.03 240)" />
        <rect
          x="183"
          y="172"
          width="34"
          height="22"
          rx="2"
          fill="oklch(0.18 0.05 258)"
          stroke={blue}
          strokeWidth="1"
        />
        <rect x="186" y="175" width="28" height="16" rx="1" fill={blue} opacity="0.35" />
        <rect x="198" y="194" width="4" height="3" fill="oklch(0.75 0.03 240)" />
        <path
          d="M188 228 h24 v-12 a4 4 0 0 0 -4 -4 h-16 a4 4 0 0 0 -4 4 z"
          fill="oklch(0.22 0.06 258)"
        />
        <rect x="199" y="228" width="2" height="12" fill="oklch(0.5 0.05 250)" />
      </g>

      {/* logo */}
      <g className="oi-logo">
        <circle cx="200" cy="130" r="34" fill="url(#oiGlow)" />
        <foreignObject x="182" y="112" width="36" height="36">
          <Mark className="h-9" />
        </foreignObject>
      </g>

      {/* energy line: wall → ceiling → workstation → logo */}
      <path
        className="oi-energy"
        d="M10 260 L10 20 L140 90 L140 190 L200 196 L200 150"
        fill="none"
        stroke="oklch(0.85 0.14 210)"
        strokeWidth="1.8"
        strokeLinecap="round"
        pathLength={1}
      />
    </svg>
  );
}

const stages = ["Foundation", "Workspace", "Coming soon"];

export function OfficeInProgress() {
  return (
    <section className="py-24 md:py-32" aria-labelledby="office-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="eyebrow">NxtQuik · Patiala</p>
          <h2
            id="office-heading"
            className="mt-4 font-display text-4xl font-semibold uppercase leading-[1.05] tracking-tight md:text-6xl"
          >
            Building our home.
            <br />
            <span className="text-gradient">Building what's next.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Our first home in Patiala is taking shape — just like everything we're building at
            NxtQuik.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs uppercase tracking-[0.18em]">
            <span className="flex items-center gap-2 text-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Currently in progress
            </span>
            <span className="text-muted-foreground">Patiala · Punjab · India</span>
          </div>

          <div
            className="mt-8 max-w-sm"
            aria-label="Progress: foundation complete, workspace in progress"
          >
            <div className="relative h-px bg-border">
              <div className="absolute inset-y-0 left-0 w-1/2 bg-primary" />
              <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_10px_var(--color-primary)]" />
            </div>
            <div className="mt-3 flex justify-between text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              {stages.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="surface-navy relative overflow-hidden rounded-3xl border border-primary/25 p-3 shadow-[0_30px_80px_-30px_color-mix(in_oklab,var(--color-primary)_55%,transparent)]">
            <div className="rule-grid pointer-events-none absolute inset-0 opacity-30" />
            <div className="relative h-[300px] md:h-[400px]">
              <OfficeVisual />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
