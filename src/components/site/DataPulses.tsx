// Light pulses travelling along the static 72px rule-grid lines (grid never moves).
const G = 72;
const p = (pts: [number, number][]) =>
  pts.map(([x, y], i) => `${i ? "L" : "M"}${x * G + 0.5} ${y * G + 0.5}`).join(" ");

const paths = [
  {
    d: p([
      [0, 2],
      [6, 2],
      [6, 4],
      [12, 4],
    ]),
    dur: 9,
    delay: 0,
  },
  {
    d: p([
      [3, 11],
      [3, 6],
      [8, 6],
      [8, 1],
    ]),
    dur: 11,
    delay: 2.5,
  },
  {
    d: p([
      [20, 3],
      [14, 3],
      [14, 7],
      [9, 7],
    ]),
    dur: 10,
    delay: 5,
  },
  {
    d: p([
      [1, 0],
      [1, 5],
      [0, 5],
    ]),
    dur: 7,
    delay: 1.2,
  },
  {
    d: p([
      [10, 12],
      [10, 8],
      [16, 8],
      [16, 5],
    ]),
    dur: 12,
    delay: 6.5,
  },
  {
    d: p([
      [18, 0],
      [18, 6],
      [22, 6],
    ]),
    dur: 8,
    delay: 3.8,
  },
];

const nodes: { x: number; y: number; delay: number; dur: number }[] = [
  { x: 6, y: 2, delay: 0, dur: 9 },
  { x: 3, y: 6, delay: 2.5, dur: 11 },
  { x: 14, y: 7, delay: 5, dur: 10 },
  { x: 10, y: 8, delay: 6.5, dur: 12 },
  { x: 18, y: 6, delay: 3.8, dur: 8 },
];

export function DataPulses() {
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
      <defs>
        <filter id="pulse-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {nodes.map((n, i) => (
        <circle
          key={i}
          className="data-node"
          cx={n.x * G + 0.5}
          cy={n.y * G + 0.5}
          r={2}
          style={{ animationDuration: `${n.dur}s`, animationDelay: `${n.delay + n.dur * 0.3}s` }}
        />
      ))}
      {paths.map((path, i) => (
        <g key={i} filter="url(#pulse-glow)">
          <path
            d={path.d}
            pathLength={1000}
            className="data-pulse data-pulse-tail"
            style={{ animationDuration: `${path.dur}s`, animationDelay: `${path.delay}s` }}
          />
          <path
            d={path.d}
            pathLength={1000}
            className="data-pulse data-pulse-head"
            style={{ animationDuration: `${path.dur}s`, animationDelay: `${path.delay}s` }}
          />
        </g>
      ))}
    </svg>
  );
}
