"use client";

import { photoAt } from "@shared/config/site-photos";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@shared/i18n/navigation";
import { Button } from "@shared/ui/button";
import { PageContent } from "@shared/ui/page-content";

const REASONS = [
  { image: photoAt(9), titleKey: "whyUs1Title", bodyKey: "whyUs1Body" },
  { image: photoAt(10), titleKey: "whyUs2Title", bodyKey: "whyUs2Body" },
  { image: photoAt(11), titleKey: "whyUs3Title", bodyKey: "whyUs3Body" },
  { image: photoAt(12), titleKey: "whyUs4Title", bodyKey: "whyUs4Body" },
] as const;

export function WhyUs() {
  const t = useTranslations("home");

  return (
    <section className="py-10 lg:py-14" aria-labelledby="why-us-heading">
      <PageContent>
        <h2
          id="why-us-heading"
          className="font-headline text-on-surface text-3xl font-extrabold tracking-tight"
        >
          {t("whyUsTitle")}
        </h2>
        <div className="bg-primary-container mt-3 h-1 w-20 rounded-full" />

        <div className="mt-7 grid grid-cols-1 gap-6 lg:grid-cols-4 lg:gap-5">
          {REASONS.map((reason) => (
            <article key={reason.titleKey} className="flex flex-col gap-4">
              <div className="relative aspect-video overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={reason.image}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-headline text-on-surface mb-2 text-lg font-bold lg:text-xl">
                  {t(reason.titleKey)}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed lg:text-base">
                  {t(reason.bodyKey)}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center lg:mt-10">
          <Button asChild variant="outline" size="lg" className="min-w-[12rem]">
            <Link href="/biz-haqimizda">{t("whyUsAboutCta")}</Link>
          </Button>
        </div>
      </PageContent>
    </section>
  );
}
