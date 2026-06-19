import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { ProductDetailPage } from "@pages-segments/product-detail";
import { getAllProducts, getProductBySlug } from "@entities/product";
import { routing } from "@shared/i18n/routing";
import { buildMetadata } from "@shared/seo/generate-metadata";
import { ProductJsonLd, BreadcrumbJsonLd } from "@shared/seo/json-ld";
import { notFound } from "next/navigation";
import { SITE_CONFIG } from "@shared/config/site";
import type { Locale } from "@shared/config/locales";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  const products = getAllProducts();
  return routing.locales.flatMap((locale) =>
    products.map((product) => ({ locale, slug: product.slug })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  const i18n = product.i18n[locale as Locale];
  return buildMetadata({
    title: `${i18n.name} | Verikore Global`,
    description: i18n.tagline,
    locale,
    path: `/mahsulot/${slug}`,
    image: product.images[0],
  });
}

export default async function Page({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const t = await getTranslations({ locale, namespace: "nav" });
  const i18n = product.i18n[locale as Locale];
  const base = `${SITE_CONFIG.url}/${locale}`;
  return (
    <>
      <ProductJsonLd product={product} locale={locale as Locale} />
      <BreadcrumbJsonLd
        items={[
          { name: t("home"), url: base },
          { name: t("catalog"), url: `${base}/katalog` },
          { name: i18n.shortName, url: `${base}/mahsulot/${slug}` },
        ]}
      />
      <ProductDetailPage slug={slug} />
    </>
  );
}
