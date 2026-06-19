"use client";

import { useLocale, useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@shared/ui/breadcrumb";
import { Badge } from "@shared/ui/badge";
import { PageContent } from "@shared/ui/page-content";
import { ProductGallery } from "@widgets/product-gallery";
import { QuickSpecsGrid } from "@widgets/quick-specs-grid";
import { PriceCard } from "@widgets/price-card";
import { ProductTabs } from "@widgets/product-tabs";
import { TrustBlock } from "@widgets/trust-block";
import { FaqAccordion } from "@widgets/faq-accordion";
import { OrderTrackingTimeline } from "@widgets/order-tracking-timeline";
import { Footer } from "@widgets/footer";
import { LeadForm } from "@features/lead-form";
import { getProductBySlug, getRelatedProducts } from "@entities/product";
import { getCategoryBySlug } from "@entities/category";
import { ProductCard } from "@widgets/product-card";
import type { Locale } from "@shared/config/locales";

interface ProductDetailPageProps {
  slug: string;
}

export function ProductDetailPage({ slug }: ProductDetailPageProps) {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const category = getCategoryBySlug(product.categorySlug);
  const related = getRelatedProducts(slug, 2);
  const i18n = product.i18n[locale];

  return (
    <>
      <ProductGallery
        images={product.images}
        alt={i18n.name}
        status={product.status}
        inStockLabel={t("catalog.inStock")}
        preorderLabel={t("catalog.preorder")}
      />

      <main className="bg-background pb-14" id="main-content">
        <PageContent className="space-y-3 pt-6 lg:space-y-4 lg:pt-8">
          <Breadcrumb
            items={[
              { label: t("nav.home"), href: "/" },
              { label: t("catalog.title"), href: "/katalog" },
              ...(category
                ? [{ label: category.i18n[locale].name, href: `/katalog/${category.slug}` }]
                : []),
              { label: product.modelCode },
            ]}
          />
          <span className="font-label text-primary text-xs font-bold tracking-widest uppercase">
            {product.modelCode}
          </span>
          <h1 className="font-headline text-on-surface text-4xl font-extrabold tracking-tight lg:text-5xl">
            {i18n.name}
          </h1>
          <div className="bg-primary-container h-1 w-14 rounded-full lg:w-16" aria-hidden />
          <p className="text-on-surface-variant max-w-prose text-lg leading-relaxed">
            {i18n.tagline}
          </p>
        </PageContent>

        <PageContent className="pb-4 lg:pb-5">
          <QuickSpecsGrid spec={product.spec} />
        </PageContent>

        <PageContent>
          <PriceCard commercial={product.commercial} warranty={product.warranty} />
        </PageContent>

        <PageContent className="py-4 lg:py-5">
          <ProductTabs product={product} description={i18n.description} />
        </PageContent>

        <PageContent>
          <TrustBlock />
        </PageContent>

        <PageContent className="py-8 lg:py-10">
          <section className="space-y-4">
            <h2 className="font-headline text-xl font-extrabold lg:text-2xl">
              {t("product.timelineTitle")}
            </h2>
            <OrderTrackingTimeline currentStep={3} variant="vertical" />
          </section>
        </PageContent>

        <PageContent className="py-3 lg:py-4">
          <FaqAccordion limit={4} />
        </PageContent>

        {related.length > 0 ? (
          <PageContent className="py-8 lg:py-10">
            <section className="space-y-5">
              <h2 className="font-headline text-xl font-extrabold lg:text-2xl">
                {t("product.compareTitle")}
              </h2>
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
                {related.map((p) => (
                  <li key={p.slug}>
                    <ProductCard product={p} />
                  </li>
                ))}
              </ul>
            </section>
          </PageContent>
        ) : null}

        <PageContent className="space-y-4 py-7 lg:py-8">
          <header className="space-y-2">
            <Badge tone="primary">{t("product.bottomFormTitle")}</Badge>
            <p className="text-on-surface-variant max-w-xl text-sm leading-relaxed lg:text-base">
              {t("product.bottomFormSubtitle")}
            </p>
          </header>
          <LeadForm />
        </PageContent>
      </main>
      <Footer />
    </>
  );
}
