"use client";

import Image from "next/image";
import { Gauge, Zap, ChevronRight, MessageCircle, Info } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@shared/i18n/navigation";
import { Button } from "@shared/ui/button";
import { StatusBadge } from "@shared/ui/status-badge";
import type { Product } from "@entities/product";
import type { Locale } from "@shared/config/locales";
import { CompareToggleButton } from "./compare-toggle-button";
import { resolveI18n } from "@shared/mock-data/products";

interface ProductCardProps {
  product: Product;
  variant?: "grid" | "row";
  priority?: boolean;
  categorySlug?: string;
  categoryName?: string;
}

export function ProductCard({
  product,
  variant = "grid",
  priority = false,
  categorySlug,
  categoryName,
}: ProductCardProps) {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const i18n = product.i18n[locale];

  const hasProductivity = product.spec.productivity.value > 0;
  const hasPower = product.spec.powerKw > 0;
  // Config items take priority — only fall back to spec pills when no config exists
  const configItems = (product.configuration[0]?.items ?? []).slice(0, 2);
  const useRealSpecs = (hasProductivity || hasPower) && configItems.length === 0;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-[#0f1923] shadow-md ring-1 ring-white/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">

      {/* Image */}
      <Link href={`/mahsulot/${product.slug}`} className="block">
        <div className="relative h-48 overflow-hidden sm:h-52">
          <Image
            src={product.images[0] ?? ""}
            alt={i18n.name}
            fill
            sizes={variant === "row" ? "100vw" : "(max-width: 768px) 50vw, 33vw"}
            priority={priority}
            className="object-cover opacity-90 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105"
          />
          {/* subtle bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1923]/70 via-transparent to-transparent" />

          {/* status badge */}
          <div className="absolute top-3 left-3">
            <StatusBadge
              status={product.status}
              inStockLabel={t("catalog.inStock")}
              preorderLabel={t("catalog.preorder")}
            />
          </div>

          {/* compare button */}
          <CompareToggleButton productSlug={product.slug} />

          {/* category chip */}
          {categoryName && (
            <div className="absolute bottom-3 left-3">
              <span className="rounded-full bg-black/50 px-2.5 py-0.5 text-[10px] font-semibold text-white/70 backdrop-blur-sm">
                {categoryName}
              </span>
            </div>
          )}
        </div>
      </Link>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        {/* Model code + name */}
        <div className="space-y-1">
          <span className="font-label text-primary text-[10px] font-bold tracking-widest uppercase">
            {product.modelCode}
          </span>
          <h3 className="font-headline line-clamp-2 text-sm font-extrabold leading-snug text-white sm:text-base">
            <Link href={`/mahsulot/${product.slug}`} className="hover:text-primary transition-colors">
              {i18n.name}
            </Link>
          </h3>
        </div>

        {/* Specs */}
        {useRealSpecs ? (
          <ul className="grid grid-cols-2 gap-2">
            {hasProductivity && (
              <li className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/5">
                <Gauge size={14} className="text-primary shrink-0" aria-hidden />
                <span className="font-label text-xs font-bold text-white/80">
                  {product.spec.productivity.value} {product.spec.productivity.unit}
                </span>
              </li>
            )}
            {hasPower && (
              <li className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/5">
                <Zap size={14} className="text-primary shrink-0" aria-hidden />
                <span className="font-label text-xs font-bold text-white/80">
                  {product.spec.powerKw} kW
                </span>
              </li>
            )}
          </ul>
        ) : configItems.length > 0 ? (
          <ul className="flex flex-col gap-1.5">
            {configItems.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/5"
              >
                <Info size={13} className="text-primary mt-px shrink-0" aria-hidden />
                <span className="font-label min-w-0 text-xs">
                  <span className="text-white/40">{resolveI18n(item.name, locale)}:</span>{" "}
                  <span className="font-bold text-white/80">{item.spec ?? item.quantity ?? "—"}</span>
                </span>
              </li>
            ))}
          </ul>
        ) : null}

        {/* CTA row */}
        <div className="mt-auto flex flex-col gap-2 pt-1">
          <Link
            href="/kontakt"
            className="flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:text-primary/70"
          >
            <MessageCircle size={13} aria-hidden />
            {t("products.contactForPrice")}
          </Link>

          <Button asChild variant="accent" size="sm" className="w-full justify-between">
            <Link href={`/mahsulot/${product.slug}`}>
              {t("common.more")}
              <ChevronRight size={15} aria-hidden />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
