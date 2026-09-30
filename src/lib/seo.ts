export const SITE_NAME = "NxtQuik";
/** Share image (relative / local; swap to absolute custom domain once connected). */
export const OG_IMAGE = "/og-image.png";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
};

/** Unique per-page SEO: title, description, OG/Twitter, og:url + canonical (relative until a domain is set). */
export function pageHead({ title, description, path, type = "website" }: PageMeta) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: path },
      { property: "og:site_name", content: SITE_NAME },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: it.name,
        item: it.path,
      })),
    }),
  };
}
