import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-contact";
import { getAllServiceSlugs } from "@/data/services";
import { getAllProjectSlugs } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = getAllServiceSlugs().map(
    (slug) => ({
      url: `${SITE_URL}/services/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  const projectRoutes: MetadataRoute.Sitemap = getAllProjectSlugs().map(
    (slug) => ({
      url: `${SITE_URL}/work/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    })
  );

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
