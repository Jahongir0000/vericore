"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@shared/i18n/navigation";
import { getAllCategories } from "@entities/category";
import { getAllProducts } from "@entities/product";
import { CategoryCatalogCard } from "@widgets/category-catalog-card";
import { Button } from "@shared/ui/button";
import { PageContent } from "@shared/ui/page-content";
import { ChevronRight } from "lucide-react";

export function CategoriesGrid() {
  const t = useTranslations("home");
  const allCategories = getAllCategories();
  // id=27 (Toys) removed per client request
  const categories = allCategories.filter((c) => c.id !== 27);
  const products = getAllProducts();

  const countByCategory = useMemo(
    () =>
      Object.fromEntries(
        categories.map((c) => [c.slug, products.filter((p) => p.categorySlug === c.slug).length]),
      ),
    [categories, products],
  );

  return (
    <section
      className="bg-surface py-10 sm:py-12 lg:py-16"
      aria-labelledby="categories-heading"
    >
      <PageContent>
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between lg:mb-8">
          <div>
            <h2
              id="categories-heading"
              className="font-headline text-on-surface text-3xl font-extrabold tracking-tight lg:text-4xl xl:text-[2.5rem] xl:leading-tight"
            >
              {t("categoriesTitle")}
            </h2>
            <div className="bg-primary-container mt-3 h-1 w-16 rounded-full lg:mt-4 lg:w-20" />
          </div>
          <Button asChild variant="outline" size="sm" className="shrink-0 self-start sm:self-auto">
            <Link href="/katalog">
              {t("categoriesCatalogCta")}
              <ChevronRight size={16} aria-hidden />
            </Link>
          </Button>
        </div>
        <ul className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
          {categories.map((category, idx) => (
            <li key={category.slug}>
              <CategoryCatalogCard
                category={category}
                productCount={countByCategory[category.slug] ?? 0}
                priority={idx < 4}
                compact
              />
            </li>
          ))}
        </ul>
      </PageContent>
    </section>
  );
}
