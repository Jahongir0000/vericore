"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@shared/i18n/navigation";
import { Button } from "@shared/ui/button";
import { getHomePopularProducts } from "@entities/product";
import { formatPrice } from "@shared/lib/format";
import type { Locale } from "@shared/config/locales";
import { PageContent } from "@shared/ui/page-content";

export function FeaturedProductsCarousel() {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const products = getHomePopularProducts(8);

  return (
    <section
      className="bg-surface-container-low py-10 lg:py-14"
      aria-labelledby="featured-heading"
    >
      <PageContent>
        <div className="mb-7">
          <h2
            id="featured-heading"
            className="font-headline text-on-surface text-2xl font-extrabold tracking-tight lg:text-3xl"
          >
            {t("home.featuredTitle")}
          </h2>
          <div className="bg-primary-container mt-3 h-1 w-20 rounded-full" aria-hidden />
        </div>

        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5 lg:gap-6">
          {products.map((product, idx) => {
            const i18n = product.i18n[locale];
            return (
              <li key={product.slug} className="min-w-0">
                <Link
                  href={`/mahsulot/${product.slug}`}
                  className="border-outline-variant/15 bg-surface-container-lowest hover:border-primary-container/35 group flex h-full flex-col overflow-hidden rounded-2xl border shadow-sm transition-colors"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={product.images[0] ?? ""}
                      alt={i18n.name}
                      fill
                      sizes="(max-width: 768px) 45vw, 22vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      priority={idx < 4}
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-4">
                    <span className="font-label text-outline text-[10px] font-bold tracking-wider uppercase">
                      {product.modelCode}
                    </span>
                    <h3 className="font-headline text-on-surface line-clamp-2 min-h-[2.5rem] text-sm leading-snug font-bold lg:min-h-[2.75rem] lg:text-base">
                      {i18n.shortName}
                    </h3>
                    <p className="font-label text-secondary mt-auto text-base font-bold">
                      {formatPrice(product.commercial.priceUsdExw)}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-7 flex justify-center md:mt-8">
          <Button asChild variant="outline" size="lg" className="min-w-[14rem] gap-2">
            <Link href="/mahsulotlar">
              {t("home.featuredCatalogCta")}
              <ArrowRight size={18} aria-hidden className="shrink-0" />
            </Link>
          </Button>
        </div>
      </PageContent>
    </section>
  );
}
