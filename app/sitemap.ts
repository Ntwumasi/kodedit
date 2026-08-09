import type { MetadataRoute } from "next";
import { NOTES } from "@/content/notes";
import { SITE } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "/", priority: 1 },
    { path: "/work", priority: 0.9 },
    { path: "/work/medsys", priority: 0.9 },
    { path: "/lab", priority: 0.8 },
    { path: "/studio", priority: 0.8 },
    { path: "/contact", priority: 0.7 },
    { path: "/intake", priority: 0.4 },
    { path: "/privacy", priority: 0.2 },
    { path: "/terms", priority: 0.2 },
  ];

  return [
    ...staticRoutes.map((r) => ({
      url: `${SITE.url}${r.path}`,
      changeFrequency: "monthly" as const,
      priority: r.priority,
    })),
    ...NOTES.map((n) => ({
      url: `${SITE.url}/lab/${n.slug}`,
      lastModified: new Date(n.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
