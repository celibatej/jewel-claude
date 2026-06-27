import type { MetadataRoute } from "next";
import { siteConfig, navItems } from "@/lib/site";

/** Generates /sitemap.xml from the primary navigation plus the privacy page. */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...navItems.map((item) => item.href), "/privacy"];
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteConfig.url}${route === "/" ? "" : route}`,
    lastModified,
    changeFrequency: route === "/" ? "monthly" : "yearly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
