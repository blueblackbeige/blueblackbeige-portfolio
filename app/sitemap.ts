import { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://blueblackbeige.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { url: string; changeFrequency: "weekly" | "monthly"; priority: number }[] = [
    { url: "",                      changeFrequency: "weekly",  priority: 1.0 },
    { url: "/services",             changeFrequency: "monthly", priority: 0.9 },
    { url: "/work",                 changeFrequency: "weekly",  priority: 0.8 },
    { url: "/work/atelier-norden",  changeFrequency: "monthly", priority: 0.7 },
  ];

  return routes.map((route) => ({
    url:             `${SITE_URL}${route.url}`,
    lastModified:    new Date(),
    changeFrequency: route.changeFrequency,
    priority:        route.priority,
  }));
}
