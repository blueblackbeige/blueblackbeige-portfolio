import type { MetadataRoute } from "next";

const BASE_URL = "https://blueblackbeige.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/about", "/work", "/blog", "/services", "/web-design-development", "/seo-organic-growth", "/digital-marketing"];
  const articles = [
    "ai-augmented-director", "predictive-optimization", "search-after-ai", "website-experience",
    "content-system", "mobile-first-accessibility", "why-businesses-need-website-2026",
    "mobile-friendly-websites-matter-2026", "mobile-app-vs-website", "digital-marketing-strategies-that-work",
  ].map((slug) => `/blog/${slug}`);
  return [...pages, ...articles].map((path) => ({ url: `${BASE_URL}${path}` }));
}
