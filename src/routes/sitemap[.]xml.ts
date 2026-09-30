import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/data/services";
import { caseStudyList } from "@/data/caseStudies";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = new URL(request.url).origin;
        const paths = [
          "/",
          "/services",
          ...services.map((s) => `/services/${s.slug}`),
          "/work",
          ...caseStudyList.map((c) => `/work/${c.slug}`),
          "/about",
          "/insights",
          "/contact",
        ];
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${origin}${p}</loc></url>`).join("\n")}
</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
