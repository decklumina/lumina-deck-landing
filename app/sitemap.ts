import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://luminadeck.com.br/",
      lastModified: new Date("2026-08-25"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
