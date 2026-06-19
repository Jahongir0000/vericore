import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@shared/config/site";
import { LOCALES } from "@shared/config/locales";
import { getAllCategories } from "@entities/category";
import { getAllProducts } from "@entities/product";
import { getAllProjects } from "@entities/project";

const STATIC_PATHS = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/katalog", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/qanday-ishlaymiz", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/kontakt", priority: 0.6, changeFrequency: "yearly" as const },
  { path: "/biz-haqimizda", priority: 0.55, changeFrequency: "monthly" as const },
  { path: "/loyihalar", priority: 0.65, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    for (const item of STATIC_PATHS) {
      entries.push({
        url: `${SITE_CONFIG.url}/${locale}${item.path}`,
        lastModified,
        changeFrequency: item.changeFrequency,
        priority: item.priority,
      });
    }

    for (const category of getAllCategories()) {
      entries.push({
        url: `${SITE_CONFIG.url}/${locale}/katalog/${category.slug}`,
        lastModified,
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }

    for (const product of getAllProducts()) {
      entries.push({
        url: `${SITE_CONFIG.url}/${locale}/mahsulot/${product.slug}`,
        lastModified,
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }

    for (const project of getAllProjects()) {
      entries.push({
        url: `${SITE_CONFIG.url}/${locale}/loyihalar/${project.slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
