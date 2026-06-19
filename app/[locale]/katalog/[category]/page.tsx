import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { CategoryPage } from "@pages-segments/category";
import { getAllCategories, getCategoryBySlug } from "@entities/category";
import { routing } from "@shared/i18n/routing";
import { buildMetadata } from "@shared/seo/generate-metadata";
import { BreadcrumbJsonLd } from "@shared/seo/json-ld";
import { notFound } from "next/navigation";
import { SITE_CONFIG } from "@shared/config/site";
import type { Locale } from "@shared/config/locales";

interface PageProps {
  params: Promise<{ locale: string; category: string }>;
}

export function generateStaticParams() {
  const categories = getAllCategories();
  return routing.locales.flatMap((locale) =>
    categories.map((category) => ({ locale, category: category.slug })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) return {};
  const i18n = category.i18n[locale as Locale];
  return buildMetadata({
    title: `${i18n.name} | Verikore Global`,
    description: i18n.description,
    locale,
    path: `/katalog/${categorySlug}`,
  });
}

export default async function Page({ params }: PageProps) {
  const { locale, category } = await params;
  setRequestLocale(locale);
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();
  const t = await getTranslations({ locale, namespace: "nav" });
  const i18n = cat.i18n[locale as Locale];
  const base = `${SITE_CONFIG.url}/${locale}`;
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: t("home"), url: base },
          { name: t("catalog"), url: `${base}/katalog` },
          { name: i18n.name, url: `${base}/katalog/${category}` },
        ]}
      />
      <CategoryPage categorySlug={category} />
    </>
  );
}
