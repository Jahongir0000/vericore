import type { Product } from "@entities/product";
import type { Locale } from "@shared/config/locales";

export type ProductSortValue = "popular" | "price-asc" | "price-desc" | "newest";

export function filterProductsByQuery(
  products: Product[],
  query: string,
  locale: Locale,
): Product[] {
  const q = query.toLowerCase().trim();
  if (!q) return products;

  return products.filter((p) => {
    const i18n = p.i18n[locale];
    return (
      p.modelCode.toLowerCase().includes(q) ||
      i18n.name.toLowerCase().includes(q) ||
      i18n.shortName.toLowerCase().includes(q) ||
      i18n.tagline.toLowerCase().includes(q) ||
      p.slug.toLowerCase().includes(q)
    );
  });
}

export function sortProducts(products: Product[], sort: ProductSortValue): Product[] {
  const list = [...products];

  switch (sort) {
    case "price-asc":
      return list.sort((a, b) => a.commercial.priceUsdExw - b.commercial.priceUsdExw);
    case "price-desc":
      return list.sort((a, b) => b.commercial.priceUsdExw - a.commercial.priceUsdExw);
    case "newest":
      return list.reverse();
    case "popular":
    default:
      return list.sort((a, b) => {
        const score = (p: Product) => (p.isFeatured ? 2 : 0) + (p.isPopular ? 1 : 0);
        return score(b) - score(a);
      });
  }
}
