import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@shared/seo/generate-metadata";
import { getOrderById } from "@entities/order";
import { OrderTrackingPageClient } from "./order-tracking-page-client";

interface PageProps {
  params: Promise<{ locale: string; orderId: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    title: "Buyurtma kuzatuvi | Verikore Global",
    description: "Order tracking page",
    locale,
    path: "/buyurtma",
    noIndex: true,
  });
}

export default async function Page({ params }: PageProps) {
  const { locale, orderId } = await params;
  setRequestLocale(locale);
  if (!getOrderById(orderId)) notFound();
  return <OrderTrackingPageClient orderId={orderId} />;
}
