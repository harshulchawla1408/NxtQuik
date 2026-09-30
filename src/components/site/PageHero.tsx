import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-soft">
      <div className="rule-grid absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-36 md:px-8 md:pb-24 md:pt-44">
        <p className="eyebrow text-primary">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold md:text-6xl">{title}</h1>
        {children && <div className="mt-6 max-w-2xl text-lg text-muted-foreground">{children}</div>}
      </div>
    </section>
  );
}
