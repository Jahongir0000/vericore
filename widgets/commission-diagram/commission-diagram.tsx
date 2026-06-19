"use client";

import { User, Factory, Handshake, ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { PageContent } from "@shared/ui/page-content";

export function CommissionDiagram() {
  const t = useTranslations("howWeWork");

  return (
    <section
      className="bg-on-surface py-8 lg:py-10"
      aria-labelledby="commission-heading"
    >
      <PageContent>
        <div className="mx-auto max-w-2xl">
          {/* Header */}
          <header className="mb-7 text-center">
            <span className="font-label text-primary-container/70 mb-2 block text-[11px] font-bold tracking-[0.18em] uppercase">
              {t("commissionEyebrow")}
            </span>
            <h2
              id="commission-heading"
              className="font-headline text-surface text-3xl font-extrabold tracking-tight lg:text-4xl"
            >
              {t("commissionTitle")}
            </h2>
          </header>

          {/* Flow diagram */}
          <div className="flex flex-col items-center gap-0">

            {/* Customer */}
            <div className="border-surface/10 bg-surface/5 flex w-full max-w-sm items-center gap-4 rounded-2xl border px-5 py-4">
              <span className="bg-surface/10 text-surface flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                <User size={22} aria-hidden />
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-headline text-surface text-sm font-bold">
                  {t("commissionFlowCustomer")}
                </p>
                <p className="text-surface/50 text-xs">{t("commissionFlowCustomerLabel")}</p>
              </div>
              <span className="font-label text-primary-container bg-primary-container/15 rounded-lg px-2.5 py-1 text-xs font-bold">
                {t("commissionFlowCustomerValue")}
              </span>
            </div>

            {/* Arrow down */}
            <div className="flex flex-col items-center py-2">
              <div className="bg-surface/15 h-6 w-px" />
              <ChevronDown size={16} className="text-surface/30" aria-hidden />
            </div>

            {/* Verikore (center highlight) */}
            <div className="border-primary/40 bg-primary/10 flex w-full max-w-sm items-center gap-4 rounded-2xl border-2 px-5 py-4 shadow-[0_0_0_4px_rgba(var(--color-primary-rgb,0,128,128),0.07)]">
              <span className="bg-primary text-on-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-xl shadow-sm">
                <Handshake size={22} aria-hidden />
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-headline text-primary-container text-sm font-extrabold">
                  {t("commissionFlowVeriCore")}
                </p>
                <p className="text-surface/50 text-xs">{t("commissionFlowVeriCoreLabel")}</p>
              </div>
              <span className="font-label text-tertiary-container bg-tertiary/15 rounded-lg px-2.5 py-1 text-xs font-bold">
                +5–8%
              </span>
            </div>

            {/* Arrow down */}
            <div className="flex flex-col items-center py-2">
              <div className="bg-surface/15 h-6 w-px" />
              <ChevronDown size={16} className="text-surface/30" aria-hidden />
            </div>

            {/* Factory */}
            <div className="border-surface/10 bg-surface/5 flex w-full max-w-sm items-center gap-4 rounded-2xl border px-5 py-4">
              <span className="bg-surface/10 text-surface flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                <Factory size={22} aria-hidden />
              </span>
              <p className="font-headline text-surface flex-1 text-sm font-bold">
                {t("commissionFlowFactory")}
              </p>
            </div>

            {/* Note */}
            <p className="text-surface/40 mt-5 text-center text-xs italic">
              {t("commissionFlowVeriCoreNote")}
            </p>
          </div>

          {/* Explain */}
          <p className="text-surface/60 mt-8 text-center text-sm leading-relaxed lg:text-base">
            {t("commissionExplain")}
          </p>
        </div>
      </PageContent>
    </section>
  );
}
