"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { getFactoriesPreview } from "@entities/factory";
import { PageContent } from "@shared/ui/page-content";
import type { Locale } from "@shared/config/locales";

export function OwnFactoriesGrid() {
  const t = useTranslations("howWeWork");
  const locale = useLocale() as Locale;
  const factories = getFactoriesPreview(6);

  return (
    <section className="py-7" aria-labelledby="factories-heading">
      <PageContent>
        <h2
          id="factories-heading"
          className="font-headline mb-5 text-2xl font-extrabold tracking-tight"
        >
          {t("factoriesTitle")}
        </h2>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {factories.map((factory) => (
            <li
              key={factory.id}
              className="shadow-soft relative aspect-square overflow-hidden rounded-2xl"
            >
              <Image
                src={factory.image}
                alt={factory.i18n[locale].name}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
                loading="lazy"
              />
              <div className="from-on-surface/80 absolute inset-0 bg-gradient-to-t to-transparent" />
              <div className="absolute right-3 bottom-3 left-3 text-white">
                <p className="font-label text-[10px] font-bold tracking-widest uppercase opacity-80">
                  {factory.yearStarted}
                </p>
                <p className="font-headline text-sm leading-tight font-bold">
                  {factory.i18n[locale].name}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </PageContent>
    </section>
  );
}
