import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { AboutPage } from "@pages-segments/about";
import { buildMetadata } from "@shared/seo/generate-metadata";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return buildMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    locale,
    path: "/biz-haqimizda",
  });
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AboutPage />;
}
