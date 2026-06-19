"use client";

import { useState, useCallback } from "react";
import { useLocale, useTranslations } from "next-intl";
import { SearchX } from "lucide-react";
import { Breadcrumb } from "@shared/ui/breadcrumb";
import { PageContent } from "@shared/ui/page-content";
import { ProductCard } from "@widgets/product-card";
import { ProductTypeFilter, PRODUCT_TYPE_SLUGS } from "@features/product-filter";
import type { ProductTypeValue } from "@features/product-filter";
import { ProductSearchInput } from "@features/product-search";
import { CompareTray } from "@features/compare";
import { Footer } from "@widgets/footer";
import { getAllProducts } from "@entities/product";
import { getAllCategories } from "@entities/category";
import type { Locale } from "@shared/config/locales";
import type { Product } from "@entities/product";

const ALL_PRODUCTS = getAllProducts();
const ALL_CATEGORIES = getAllCategories();

function filterProducts(
  products: Product[],
  query: string,
  type: ProductTypeValue,
  locale: Locale,
): Product[] {
  let result = products;

  if (type !== "all") {
    const slugs = PRODUCT_TYPE_SLUGS[type];
    result = result.filter((p) => slugs.includes(p.categorySlug));
  }

  const q = query.toLowerCase().trim();
  if (q) {
    result = result.filter((p) => {
      const i18n = p.i18n[locale];
      return (
        p.modelCode.toLowerCase().includes(q) ||
        i18n.name.toLowerCase().includes(q) ||
        i18n.shortName.toLowerCase().includes(q) ||
        i18n.tagline.toLowerCase().includes(q) ||
        p.categorySlug.toLowerCase().includes(q)
      );
    });
  }

  return result;
}

export function ProductsPage() {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const [query, setQuery] = useState("");
  const [activeType, setActiveType] = useState<ProductTypeValue>("all");

  const handleQueryChange = useCallback((q: string) => setQuery(q), []);

  const categoryMap = Object.fromEntries(ALL_CATEGORIES.map((c) => [c.slug, c.i18n[locale].name]));

  const products = filterProducts(ALL_PRODUCTS, query, activeType, locale);

  return (
    <>
      <main className="bg-background pt-24 pb-32" id="main-content">
        <PageContent className="space-y-3 pb-8 lg:pb-10">
          <Breadcrumb
            items={[{ label: t("nav.home"), href: "/" }, { label: t("products.title") }]}
          />
          <h1 className="font-headline text-on-surface text-4xl font-extrabold tracking-tight lg:text-5xl">
            {t("products.title")}
          </h1>
          <div className="bg-primary-container h-1 w-16 rounded-full lg:w-20" aria-hidden />
          <p className="text-on-surface-variant max-w-xl text-lg leading-relaxed">
            {t("products.subtitle")}
          </p>
        </PageContent>

        <PageContent className="pb-2">
          <ProductSearchInput products={ALL_PRODUCTS} onQueryChange={handleQueryChange} />
        </PageContent>

        <PageContent>
          <ProductTypeFilter active={activeType} onChange={setActiveType} />
        </PageContent>

        <PageContent className="pt-4">
          <section aria-labelledby="products-heading">
            <h2 id="products-heading" className="sr-only">
              {t("products.title")}
            </h2>

            {products.length > 0 ? (
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                {products.map((product, idx) => (
                  <li key={product.slug}>
                    <ProductCard
                      product={product}
                      priority={idx < 3}
                      categorySlug={product.categorySlug}
                      categoryName={categoryMap[product.categorySlug]}
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex flex-col items-center gap-4 py-20 text-center">
                <SearchX size={48} className="text-outline/40" aria-hidden />
                <p className="font-headline text-on-surface text-xl font-bold">
                  {t("products.noResults")}
                </p>
                {query ? <p className="text-outline text-sm">&ldquo;{query}&rdquo;</p> : null}
              </div>
            )}
          </section>
        </PageContent>
      </main>
      <CompareTray />
      <Footer />
    </>
  );
}
