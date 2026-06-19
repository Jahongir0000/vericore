import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { CatalogPage } from "@pages-segments/catalog";
import { buildMetadata } from "@shared/seo/generate-metadata";
import { BreadcrumbJsonLd } from "@shared/seo/json-ld";
import { SITE_CONFIG } from "@shared/config/site";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "catalog" });
  return buildMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    locale,
    path: "/katalog",
  });
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "nav" });
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: t("home"), url: `${SITE_CONFIG.url}/${locale}` },
          { name: t("catalog"), url: `${SITE_CONFIG.url}/${locale}/katalog` },
        ]}
      />
      <CatalogPage />
    </>
  );
}
