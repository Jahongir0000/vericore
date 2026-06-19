"use client";

import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@shared/i18n/navigation";
import { getCategoryImage } from "@shared/mock-data/categories";
import type { Category } from "@entities/category";
import type { Locale } from "@shared/config/locales";

interface CategoryCatalogCardProps {
  category: Category;
  priority?: boolean;
  productCount?: number;
  compact?: boolean;
}

export function CategoryCatalogCard({
  category,
  priority = false,
  productCount: productCountProp,
  compact = false,
}: CategoryCatalogCardProps) {
  const t = useTranslations("catalog");
  const locale = useLocale() as Locale;
  const name = category.i18n[locale].name;
  const description = category.i18n[locale].description;
  const imageSrc = getCategoryImage(category.imageKey);
  const Icon = category.icon as LucideIcon;
  const productCount = productCountProp ?? category.productCount;

  return (
    <Link
      href={`/katalog/${category.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-[#0f1923] shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={imageSrc}
          alt={name}
          fill
          unoptimized
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          priority={priority}
          className="object-cover opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105"
        />
        {/* dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1923] via-[#0f1923]/40 to-transparent" />

        {/* icon badge */}
        <div className="absolute top-2.5 right-2.5 flex size-8 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20">
          <Icon size={16} className="text-white/90" aria-hidden />
        </div>

        {/* product count pill */}
        {productCount > 0 && (
          <div className="absolute top-2.5 left-2.5">
            <span className="rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-white uppercase shadow">
              {t("modelsCount", { count: productCount })}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-1.5 px-3.5 py-3 sm:px-4 sm:py-3.5">
        <h3 className="font-headline line-clamp-2 text-sm font-extrabold leading-snug text-white sm:text-base sm:leading-tight">
          {name}
        </h3>

        {!compact && (
          <p className="line-clamp-2 text-[11px] leading-relaxed text-white/50 sm:text-xs">
            {description}
          </p>
        )}

        <div className="mt-auto flex items-center gap-1 pt-2 text-xs font-semibold text-primary transition-colors group-hover:text-primary/80">
          <span>{t("viewCategory")}</span>
          <ArrowRight
            size={13}
            className="transition-transform group-hover:translate-x-1"
            aria-hidden
          />
        </div>
      </div>
    </Link>
  );
}
