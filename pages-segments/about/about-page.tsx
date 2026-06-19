"use client";

import Image from "next/image";
import { Building2, Factory, ShieldCheck, Percent } from "lucide-react";
import { useTranslations } from "next-intl";
import { photoAt } from "@shared/config/site-photos";
import { SITE_CONFIG } from "@shared/config/site";
import { Breadcrumb } from "@shared/ui/breadcrumb";
import { PageContent } from "@shared/ui/page-content";
import { Button } from "@shared/ui/button";
import { Link } from "@shared/i18n/navigation";

const STATS = [
  { icon: Building2, valueKey: "statFoundedValue", labelKey: "statFounded" },
  { icon: Factory, valueKey: "statFactoriesValue", labelKey: "statFactories" },
  { icon: ShieldCheck, valueKey: "statWarrantyValue", labelKey: "statWarranty" },
  { icon: Percent, valueKey: "statCommissionValue", labelKey: "statCommission" },
] as const;

const PILLARS = [
  { titleKey: "pillar1Title", bodyKey: "pillar1Body" },
  { titleKey: "pillar2Title", bodyKey: "pillar2Body" },
  { titleKey: "pillar3Title", bodyKey: "pillar3Body" },
] as const;

export function AboutPage() {
  const t = useTranslations("about");
  const tRoot = useTranslations();

  return (
    <main className="bg-background pt-8 pb-14" id="main-content">
      <PageContent className="space-y-5 pb-7 lg:pb-10">
        <Breadcrumb items={[{ label: tRoot("nav.home"), href: "/" }, { label: t("title") }]} />
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          <header className="space-y-4">
            <span className="font-label text-primary text-xs font-bold tracking-widest uppercase">
              {t("badge")}
            </span>
            <h1 className="font-headline text-on-surface text-4xl font-extrabold tracking-tight lg:text-5xl">
              {t("title")}
            </h1>
            <div className="bg-primary-container h-1 w-16 rounded-full lg:w-20" aria-hidden />
            <p className="text-on-surface-variant text-lg leading-relaxed">{t("intro")}</p>
            <p className="text-on-surface-variant leading-relaxed">{t("story")}</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild variant="accent" size="lg">
                <Link href="/loyihalar">{t("projectsCta")}</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/kontakt">{t("contactCta")}</Link>
              </Button>
            </div>
          </header>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl lg:aspect-square">
            <Image
              src={photoAt(7)}
              alt=""
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </PageContent>

      <section className="bg-surface-container-low py-8 lg:py-10" aria-labelledby="about-stats">
        <PageContent>
          <h2 id="about-stats" className="sr-only">
            {t("statsTitle")}
          </h2>
          <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {STATS.map(({ icon: Icon, valueKey, labelKey }) => (
              <li
                key={labelKey}
                className="bg-surface-container-lowest border-outline-variant/10 rounded-3xl border p-5 text-center lg:p-6"
              >
                <Icon size={28} className="text-primary mx-auto mb-3" aria-hidden />
                <p className="font-headline text-primary text-2xl font-extrabold lg:text-3xl">
                  {t(valueKey)}
                </p>
                <p className="text-on-surface-variant mt-1 text-sm">{t(labelKey)}</p>
              </li>
            ))}
          </ul>
        </PageContent>
      </section>

      <PageContent className="space-y-5 py-8 lg:py-10">
        <h2 className="font-headline text-on-surface text-3xl font-extrabold tracking-tight">
          {t("missionTitle")}
        </h2>
        <div className="bg-primary-container/15 border-primary-container/30 rounded-3xl border p-6 lg:p-8">
          <p className="text-on-surface text-lg leading-relaxed font-medium">{t("missionBody")}</p>
        </div>
      </PageContent>

      <PageContent className="pb-8 lg:pb-10">
        <h2 className="font-headline text-on-surface mb-8 text-3xl font-extrabold tracking-tight">
          {t("pillarsTitle")}
        </h2>
        <ul className="grid gap-6 lg:grid-cols-3">
          {PILLARS.map((pillar, idx) => (
            <li
              key={pillar.titleKey}
              className="bg-surface-container-lowest shadow-soft border-outline-variant/10 rounded-3xl border p-6 lg:p-8"
            >
              <span className="font-label text-primary text-xs font-bold tracking-widest">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="font-headline text-on-surface mt-3 text-xl font-extrabold">
                {t(pillar.titleKey)}
              </h3>
              <p className="text-on-surface-variant mt-3 text-sm leading-relaxed lg:text-base">
                {t(pillar.bodyKey)}
              </p>
            </li>
          ))}
        </ul>
      </PageContent>

      <section className="bg-surface-container-low py-8 lg:py-10">
        <PageContent className="grid gap-5 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-video overflow-hidden rounded-3xl">
            <Image
              src={photoAt(8)}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="font-headline text-on-surface text-2xl font-extrabold lg:text-3xl">
              {t("teamTitle")}
            </h2>
            <p className="text-on-surface-variant leading-relaxed">{t("teamBody")}</p>
            <p className="text-on-surface-variant text-sm">
              {SITE_CONFIG.contact.workingHours} · {SITE_CONFIG.contact.email}
            </p>
          </div>
        </PageContent>
      </section>
    </main>
  );
}
