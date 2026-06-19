"use client";

import { useTranslations } from "next-intl";
import { LayoutGrid, Package } from "lucide-react";
import { Breadcrumb } from "@shared/ui/breadcrumb";
import { PageContent } from "@shared/ui/page-content";
import { Footer } from "@widgets/footer";
import { getAllCategories } from "@entities/category";
import { CategoryCatalogCard } from "@widgets/category-catalog-card";

const ALL_CATEGORIES = getAllCategories().filter((c) => c.id !== 27);

export function CatalogPage() {
  const t = useTranslations();

  return (
    <>
      <main className="bg-background min-h-screen pt-6 pb-16" id="main-content">

        {/* ── Hero strip ─────────────────────────────────────── */}
        <div className="bg-[#0b1219] border-b border-white/5">
          <PageContent className="py-10 lg:py-14">
            <Breadcrumb
              items={[{ label: t("nav.home"), href: "/" }, { label: t("catalog.title") }]}
            />
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h1 className="font-headline text-white text-3xl font-extrabold tracking-tight lg:text-4xl xl:text-5xl">
                  {t("catalog.title")}
                </h1>
                <div className="bg-primary mt-3 h-1 w-14 rounded-full" aria-hidden />
                <p className="text-white/50 mt-3 max-w-lg text-base leading-relaxed">
                  {t("catalog.subtitle")}
                </p>
              </div>
              <div className="flex items-center gap-2 rounded-2xl bg-white/5 px-4 py-2.5 ring-1 ring-white/10 shrink-0">
                <Package size={16} className="text-primary" aria-hidden />
                <span className="text-white/70 text-sm font-medium">
                  {ALL_CATEGORIES.length} {t("nav.equipmentCategories").toLowerCase()}
                </span>
              </div>
            </div>
          </PageContent>
        </div>

        {/* ── Category grid ──────────────────────────────────── */}
        <PageContent className="pt-6 pb-6">
          <div className="mb-6 flex items-center gap-3">
            <LayoutGrid size={18} className="text-primary" aria-hidden />
            <h2 className="font-headline text-on-surface text-xl font-extrabold tracking-tight">
              {t("catalog.browseCategories")}
            </h2>
          </div>
          <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
            {ALL_CATEGORIES.map((category, idx) => (
              <li key={category.slug}>
                <CategoryCatalogCard category={category} priority={idx < 4} />
              </li>
            ))}
          </ul>
        </PageContent>
      </main>
      <Footer />
    </>
  );
}
