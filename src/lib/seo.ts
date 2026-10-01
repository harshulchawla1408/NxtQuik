import { useEffect } from "react";

export const SITE_NAME = "NxtQuik";
export const DEFAULT_SITE_URL = "https://www.nxtquik.com";
export const OG_IMAGE = "/og-image.png";

/**
 * Returns the configured production site URL or fallback.
 */
export function getSiteUrl(): string {
  if (typeof import.meta !== "undefined" && import.meta.env) {
    const envUrl = import.meta.env.VITE_SITE_URL as string | undefined;
    if (envUrl && typeof envUrl === "string") {
      return envUrl.replace(/\/$/, "");
    }
  }
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
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
};

/**
 * Client-side React hook to update page title, meta description, canonical link,
 * OpenGraph, Twitter tags, and structured JSON-LD data on route change.
 */
export function useSEO({
  title,
  description,
  path,
  type = "website",
  image = OG_IMAGE,
  noindex = false,
  schema,
}: PageMeta) {
  useEffect(() => {
    // 1. Title
    document.title = title;

    // Helper to set or create a meta tag
    const setMeta = (attribute: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attribute}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attribute, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Helper to set or create a link tag
    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    const canonicalUrl = absoluteUrl(path);
    const imageUrl = absoluteUrl(image);
    const robots = noindex
      ? "noindex, nofollow"
      : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

    // 2. Standard Meta
    setMeta("name", "description", description);
    setMeta("name", "robots", robots);
    setMeta("name", "googlebot", robots);
    setMeta("name", "theme-color", "#080d1a");

    // 3. Canonical Link
    setLink("canonical", canonicalUrl);

    // 4. OpenGraph
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", type);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:image", imageUrl);

    // 5. Twitter Card
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", imageUrl);

    // 6. JSON-LD Schema (if provided)
    let scriptEl = document.getElementById("page-structured-data") as HTMLScriptElement | null;
    if (schema) {
      if (!scriptEl) {
        scriptEl = document.createElement("script");
        scriptEl.id = "page-structured-data";
        scriptEl.type = "application/ld+json";
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(schema);
    } else if (scriptEl) {
      scriptEl.remove();
    }
  }, [title, description, path, type, image, noindex, schema]);
}

/**
 * Structured BreadcrumbList schema helper (JSON-LD)
 */
export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

/**
 * Structured Service schema helper (JSON-LD)
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
  };
}
