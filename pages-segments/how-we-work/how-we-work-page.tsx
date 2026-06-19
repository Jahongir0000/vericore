"use client";

import { useTranslations } from "next-intl";
import { Breadcrumb } from "@shared/ui/breadcrumb";
import { Button } from "@shared/ui/button";
import { PageContent } from "@shared/ui/page-content";
import { Link } from "@shared/i18n/navigation";
import { ArrowRight, Zap } from "lucide-react";
import { HowWeWorkNarrative } from "@widgets/how-we-work-narrative";
import { CommissionDiagram } from "@widgets/commission-diagram";
import { OwnFactoriesGrid } from "@widgets/own-factories-grid";
import { UzbekistanLogisticsMap } from "@widgets/uzbekistan-logistics-map";
import { Footer } from "@widgets/footer";

export function HowWeWorkPage() {
  const t = useTranslations();

  return (
    <>
      <main className="bg-background" id="main-content">
        {/* Hero */}
        <div className="from-primary/6 via-background to-background bg-gradient-to-b pb-2 pt-6 lg:pt-8">
          <PageContent className="space-y-3 pb-4 lg:pb-6">
            <Breadcrumb
              items={[{ label: t("nav.home"), href: "/" }, { label: t("howWeWork.title") }]}
            />
            <header className="max-w-2xl space-y-4">
              <div className="border-primary/20 bg-primary/8 text-primary font-label inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold tracking-wide">
                <Zap size={12} aria-hidden />
                {t("howWeWork.subtitle")}
              </div>
              <h1 className="font-headline text-on-surface text-4xl font-extrabold tracking-tight lg:text-5xl xl:text-6xl">
                {t("howWeWork.title")}
              </h1>
              <div className="bg-primary h-1 w-14 rounded-full" aria-hidden />
            </header>
          </PageContent>
        </div>

        <HowWeWorkNarrative />
        <CommissionDiagram />
        <OwnFactoriesGrid />
        <UzbekistanLogisticsMap />

        {/* Final CTA */}
        <div className="from-primary/5 to-background bg-gradient-to-b py-8 lg:py-10">
          <PageContent className="text-center">
            <section className="mx-auto max-w-lg space-y-5">
              <h2 className="font-headline text-on-surface text-3xl font-extrabold tracking-tight lg:text-4xl">
                {t("howWeWork.finalCtaTitle")}
              </h2>
              <p className="text-on-surface-variant mx-auto max-w-sm leading-relaxed lg:text-lg">
                {t("howWeWork.finalCtaBody")}
              </p>
              <div className="flex justify-center pt-1">
                <Button asChild variant="primary" size="xl">
                  <Link href="/kontakt">
                    {t("common.freeConsultation")}
                    <ArrowRight size={20} aria-hidden />
                  </Link>
                </Button>
              </div>
            </section>
          </PageContent>
        </div>
      </main>
      <Footer />
    </>
  );
}
