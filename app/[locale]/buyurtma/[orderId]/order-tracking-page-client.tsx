"use client";

import { useLocale, useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@shared/ui/breadcrumb";
import { Badge } from "@shared/ui/badge";
import { getOrderById } from "@entities/order";
import { getProductBySlug } from "@entities/product";
import { OrderTrackingTimeline } from "@widgets/order-tracking-timeline";
import { Footer } from "@widgets/footer";
import type { Locale } from "@shared/config/locales";

interface OrderTrackingPageClientProps {
  orderId: string;
}

export function OrderTrackingPageClient({ orderId }: OrderTrackingPageClientProps) {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const order = getOrderById(orderId);
  if (!order) notFound();
  const product = getProductBySlug(order.productSlug);

  return (
    <>
      <main className="mx-auto max-w-3xl space-y-8 px-6 pt-24 pb-24" id="main-content">
        <Breadcrumb items={[{ label: t("nav.home"), href: "/" }, { label: t("order.title") }]} />
        <header className="space-y-3">
          <Badge tone="primary">#{order.id}</Badge>
          <h1 className="font-headline text-3xl font-extrabold tracking-tight">
            {t("order.title")}
          </h1>
          {product ? <p className="text-on-surface-variant">{product.i18n[locale].name}</p> : null}
        </header>
        <OrderTrackingTimeline currentStep={order.currentStep} variant="vertical" />
      </main>
      <Footer />
    </>
  );
}
