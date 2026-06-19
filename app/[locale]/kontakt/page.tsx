import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { ContactPage } from "@pages-segments/contact";
import { buildMetadata } from "@shared/seo/generate-metadata";
import { FaqJsonLd, LocalBusinessJsonLd } from "@shared/seo/json-ld";
import { getAllFaqs } from "@entities/faq";
import type { Locale } from "@shared/config/locales";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return buildMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    locale,
    path: "/kontakt",
  });
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const lc = locale as Locale;
  const faqItems = getAllFaqs().map((f) => ({
    question: f.i18n[lc].question,
    answer: f.i18n[lc].answer,
  }));
  return (
    <>
      <LocalBusinessJsonLd locale={locale} />
      <FaqJsonLd items={faqItems} />
      <ContactPage />
    </>
  );
}
