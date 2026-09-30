export const SITE_NAME = "NxtQuik";
export const DEFAULT_SITE_URL = "https://nxtquik.com";
export const OG_IMAGE = "/og-image.png";

/**
 * Returns the configured production site URL or fallback.
 */
export function getSiteUrl(): string {
  if (typeof process !== "undefined" && process.env) {
    const envUrl = process.env["VITE_SITE_URL"] || process.env["SITE_URL"];
    if (envUrl && typeof envUrl === "string") {
      return envUrl.replace(/\/$/, "");
    }
  }
  return DEFAULT_SITE_URL;
}

/**
 * Converts a relative path into a fully qualified absolute URL.
 */
export function absoluteUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }
  const base = getSiteUrl();
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalizedPath}`;
}

export type PageMeta = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
  noindex?: boolean;
};

/**
 * Generates comprehensive, unique per-page SEO metadata adhering to Search Engine,
 * OpenGraph, and Twitter/X card standards with absolute canonical URLs.
 */
export function pageHead({
  title,
  description,
  path,
  type = "website",
  image = OG_IMAGE,
  noindex = false,
}: PageMeta) {
  const canonicalUrl = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const robots = noindex
    ? "noindex, nofollow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: robots },
      { name: "googlebot", content: robots },
      { name: "theme-color", content: "#080d1a" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: canonicalUrl },
      { property: "og:image", content: imageUrl },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: `${SITE_NAME} — Technology for What's Next.` },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: imageUrl },
      { name: "twitter:image:alt", content: `${SITE_NAME} — Technology for What's Next.` },
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
  };
}

/**
 * Structured BreadcrumbList schema (JSON-LD)
 */
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
        item: absoluteUrl(it.path),
      })),
    }),
  };
}

/**
 * Structured Service schema (JSON-LD)
 */
export function serviceSchema({
  name,
  description,
  path,
  category,
}: {
  name: string;
  description: string;
  path: string;
  category?: string;
}) {
  return {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name,
      description,
      serviceType: category || name,
      provider: {
        "@type": "ProfessionalService",
        name: SITE_NAME,
        url: getSiteUrl(),
        telephone: "+91 94786 69360",
        email: "nxtquik@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Patiala",
          addressRegion: "Punjab",
          addressCountry: "IN",
        },
      },
      url: absoluteUrl(path),
    }),
  };
}
