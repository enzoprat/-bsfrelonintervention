import type { MetadataRoute } from "next";
import { site } from "@/lib/config";
import { routes } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes
    // Le plan du site HTML et les pages légales restent dans le sitemap
    // mais on retire les pages non indexables si besoin (ici on garde tout sauf le plan HTML).
    .filter((r) => r.path !== "/plan-du-site")
    .map((r) => ({
      url: r.path === "/" ? site.domain : `${site.domain}${r.path}`,
      lastModified: now,
      changeFrequency: r.priority >= 0.8 ? "weekly" : "monthly",
      priority: r.priority,
    }));
}
