import { Link } from "@tanstack/react-router";
import { Wordmark } from "./Brand";
import { site } from "@/data/site";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Work", to: "/work" },
      { label: "Insights", to: "/insights" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Technology",
    links: [
      { label: "Web Development", slug: "web-development" },
      { label: "App Development", slug: "app-development" },
      { label: "Software", slug: "custom-software" },
      { label: "Cloud", slug: "cloud-solutions" },
      { label: "Consulting", slug: "technology-consulting" },
    ],
  },
  {
    title: "Growth",
    links: [
      { label: "SEO", slug: "seo" },
      { label: "Digital Marketing", slug: "digital-marketing" },
      { label: "Lead Generation", slug: "lead-generation" },
      { label: "Performance Marketing", slug: "performance-marketing" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-soft">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2.6fr]">
          <div>
            <Wordmark className="h-12 md:h-14" />
            <p className="mt-5 max-w-xs font-display text-lg tracking-tight text-foreground">
              {site.tagline}
            </p>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Technology, transformation and growth for businesses building what comes next.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="eyebrow text-muted-foreground">{col.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        {...("slug" in l
                          ? { to: "/services/$slug" as const, params: { slug: l.slug } }
                          : { to: l.to })}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="eyebrow text-muted-foreground">Connect</h3>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} NxtQuik. All rights reserved.</p>
          <p>
            {site.office} ·{" "}
            <a className="hover:text-primary" href={site.phoneHref}>
              {site.phone}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
