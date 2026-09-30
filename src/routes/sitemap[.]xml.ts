import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/data/services";
import { caseStudyList } from "@/data/caseStudies";
import { getSiteUrl } from "@/lib/seo";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const configuredBase = getSiteUrl();
        const requestOrigin = new URL(request.url).origin;
        // Use configured site URL in production unless running on localhost with no env set
        const base =
          configuredBase !== "https://nxtquik.com"
            ? configuredBase
            : requestOrigin.includes("localhost") || requestOrigin.includes("127.0.0.1")
              ? requestOrigin
              : configuredBase;

        const today = new Date().toISOString().split("T")[0];

        const entries: { path: string; priority: string; changefreq: string }[] = [
          { path: "/", priority: "1.0", changefreq: "weekly" },
          { path: "/services", priority: "0.9", changefreq: "weekly" },
          ...services.map((s) => ({
            path: `/services/${s.slug}`,
            priority: "0.8",
            changefreq: "monthly",
          })),
          { path: "/work", priority: "0.9", changefreq: "weekly" },
          ...caseStudyList.map((c) => ({
            path: `/work/${c.slug}`,
            priority: "0.8",
            changefreq: "monthly",
          })),
          { path: "/about", priority: "0.7", changefreq: "monthly" },
          { path: "/insights", priority: "0.7", changefreq: "weekly" },
          { path: "/contact", priority: "0.8", changefreq: "monthly" },
        ];

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) => `  <url>
    <loc>${base}${e.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=86400",
          },
        });
      },
    },
  },
});
