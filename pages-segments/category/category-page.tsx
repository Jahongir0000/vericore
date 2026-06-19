"use client";

import { useCallback, useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { SearchX, PackageSearch } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@shared/ui/breadcrumb";
import { PageContent } from "@shared/ui/page-content";
import { ProductCard } from "@widgets/product-card";
import {
  ProductFilter,
  filterProductsByQuery,
  sortProducts,
  type ProductSortValue,
} from "@features/product-filter";
import { ProductSearchInput } from "@features/product-search";
import { CompareTray } from "@features/compare";
import { Footer } from "@widgets/footer";
import { getCategoryBySlug } from "@entities/category";
import { getProductsByCategory } from "@entities/product";
import { getCategoryImage } from "@shared/mock-data/categories";
import type { Locale } from "@shared/config/locales";
import type { LucideIcon } from "lucide-react";

interface CategoryPageProps {
  categorySlug: string;
}

export function CategoryPage({ categorySlug }: CategoryPageProps) {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const category = getCategoryBySlug(categorySlug);
  if (!category) notFound();

  const categoryProducts = useMemo(() => getProductsByCategory(categorySlug), [categorySlug]);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<ProductSortValue>("popular");
  const handleQueryChange = useCallback((q: string) => setQuery(q), []);

  const products = useMemo(() => {
    const filtered = filterProductsByQuery(categoryProducts, query, locale);
    return sortProducts(filtered, sort);
  }, [categoryProducts, query, sort, locale]);

  const Icon = category.icon as LucideIcon;
  const imageSrc = getCategoryImage(category.imageKey);
  const name = category.i18n[locale].name;
  const description = category.i18n[locale].description;

  return (
    <>
      <main className="bg-background min-h-screen pb-16" id="main-content">

        {/* ── Hero banner ─────────────────────────────────────── */}
        <div className="relative h-56 overflow-hidden sm:h-64 lg:h-80">
          <Image
            src={imageSrc}
            alt={name}
            fill
            unoptimized
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070d13] via-[#070d13]/60 to-[#070d13]/20" />

          <div className="absolute inset-x-0 bottom-0">
            <PageContent className="pb-6 pt-4">
              <Breadcrumb
                items={[
                  { label: t("nav.home"), href: "/" },
                  { label: t("catalog.title"), href: "/katalog" },
                  { label: name },
                ]}
                className="[&_li]:text-white/60 [&_a]:text-white/60 [&_a:hover]:text-white [&_.text-outline]:text-white/30"
              />
              <div className="mt-3 flex items-end gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/20 backdrop-blur-sm ring-1 ring-primary/30 lg:size-14">
                  <Icon size={22} className="text-primary" aria-hidden />
                </div>
                <div>
                  <h1 className="font-headline text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
                    {name}
                  </h1>
                  {categoryProducts.length > 0 && (
                    <p className="text-primary mt-1 text-xs font-bold tracking-wider uppercase">
                      {t("catalog.modelsCount", { count: categoryProducts.length })}
                    </p>
                  )}
                </div>
              </div>
            </PageContent>
          </div>
        </div>

        {/* ── Description strip ──────────────────────────────── */}
        <div className="border-b border-white/5 bg-[#0b1219]">
          <PageContent className="py-4">
            <p className="text-white/60 max-w-2xl text-sm leading-relaxed">{description}</p>
          </PageContent>
        </div>

        {/* ── Filter bar ─────────────────────────────────────── */}
        <PageContent className="pt-6 pb-2">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <ProductSearchInput products={categoryProducts} onQueryChange={handleQueryChange} />
            <div className="shrink-0">
              <ProductFilter active={sort} onSortChange={setSort} />
            </div>
          </div>
        </PageContent>

        {/* ── Products grid ───────────────────────────────────── */}
        <PageContent className="pt-4">
          <section aria-labelledby="cat-products">
            <h2 id="cat-products" className="sr-only">{name}</h2>

            {products.length > 0 ? (
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 xl:grid-cols-4">
                {products.map((product, idx) => (
                  <li key={product.slug}>
                    <ProductCard product={product} priority={idx < 4} />
                  </li>
                ))}
              </ul>
            ) : categoryProducts.length === 0 ? (
              <div className="flex flex-col items-center gap-4 py-24 text-center">
                <PackageSearch size={52} className="text-outline/30" aria-hidden />
                <p className="font-headline text-on-surface text-xl font-bold">
                  {t("catalog.noProducts")}
                </p>
                <p className="text-outline text-sm max-w-xs">
                  {t("contact.subtitle")}
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4 py-24 text-center">
                <SearchX size={48} className="text-outline/30" aria-hidden />
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
