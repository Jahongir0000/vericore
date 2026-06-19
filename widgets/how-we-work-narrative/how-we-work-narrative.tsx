"use client";

import { useTranslations } from "next-intl";
import { HOW_WE_WORK_STEPS } from "@shared/mock-data";
import { cn } from "@shared/lib/cn";
import { PageContent } from "@shared/ui/page-content";
import { Clock, CheckCircle } from "lucide-react";

const ACCENT_COLORS = [
  "border-primary bg-primary/8",
  "border-secondary bg-secondary/8",
  "border-tertiary bg-tertiary/8",
  "border-primary bg-primary/8",
  "border-secondary bg-secondary/8",
] as const;

const NUMBER_COLORS = [
  "text-primary",
  "text-secondary",
  "text-tertiary",
  "text-primary",
  "text-secondary",
] as const;

export function HowWeWorkNarrative() {
  const t = useTranslations();

  return (
    <section className="py-5 lg:py-8" aria-labelledby="hww-narrative-heading">
      <PageContent>
        <h2 id="hww-narrative-heading" className="sr-only">
          {t("howWeWork.title")}
        </h2>

        {/* Desktop: 2-column grid; Mobile: vertical stack */}
        <div className="relative">
          {/* Vertical connector line (desktop only) */}
          <div
            className="bg-outline-variant/20 absolute top-8 bottom-8 left-[calc(theme(spacing.14)+1px)] hidden w-px lg:block"
            aria-hidden
          />

          <ol className="space-y-2 lg:space-y-0 lg:divide-y lg:divide-outline-variant/10">
            {HOW_WE_WORK_STEPS.map((step, idx) => {
              const isLast = idx === HOW_WE_WORK_STEPS.length - 1;
              return (
                <li
                  key={step.step}
                  className={cn(
                    "group relative",
                    "lg:flex lg:items-center lg:gap-6 lg:py-4",
                    isLast && "lg:pb-0",
                    idx === 0 && "lg:pt-0",
                  )}
                >
                  {/* Mobile card */}
                  <div
                    className={cn(
                      "border-l-4 rounded-xl border bg-surface-container-lowest px-4 py-3 shadow-[0_2px_8px_rgba(10,18,32,0.04)] lg:hidden",
                      ACCENT_COLORS[idx],
                    )}
                  >
                    <div className="mb-1.5 flex items-center justify-between gap-3">
                      <h3 className="font-headline text-on-surface text-base font-extrabold leading-snug">
                        <span className={cn("mr-2 font-black opacity-30", NUMBER_COLORS[idx])} aria-hidden>{step.step}</span>
                        {t(step.i18nTitleKey)}
                      </h3>
                      <div className="flex shrink-0 flex-wrap gap-1.5">
                        {step.badgeKey && (
                          <span className="bg-tertiary/15 text-tertiary font-label rounded-full px-2 py-0.5 text-[9px] font-black tracking-widest uppercase">
                            {t(step.badgeKey)}
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-on-surface-variant text-xs leading-relaxed">
                      {t(step.i18nBodyKey)}
                    </p>
                    <p className="text-outline font-label mt-1.5 flex items-center gap-1 text-[10px] font-bold tracking-wide uppercase">
                      <Clock size={10} aria-hidden />
                      {t(step.i18nDurationKey)}
                    </p>
                  </div>

                  {/* Desktop layout */}
                  <div className="hidden lg:flex lg:w-full lg:items-center lg:gap-6">
                    {/* Number badge */}
                    <div
                      className={cn(
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 font-black text-base shadow-sm transition-transform duration-200 group-hover:scale-110 font-display",
                        ACCENT_COLORS[idx],
                        NUMBER_COLORS[idx],
                      )}
                    >
                      {step.step}
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-headline text-on-surface text-base font-extrabold leading-snug lg:text-lg">
                          {t(step.i18nTitleKey)}
                        </h3>
                        {step.badgeKey && (
                          <span className="bg-tertiary/15 text-tertiary font-label rounded-full px-2.5 py-0.5 text-[10px] font-black tracking-widest uppercase">
                            {t(step.badgeKey)}
                          </span>
                        )}
                      </div>
                      <p className="text-on-surface-variant mt-0.5 text-sm leading-relaxed">
                        {t(step.i18nBodyKey)}
                      </p>
                    </div>

                    {/* Duration */}
                    <p className="text-outline font-label shrink-0 flex items-center gap-1 text-xs font-bold tracking-wide uppercase">
                      <Clock size={11} aria-hidden className="text-outline/60" />
                      {t(step.i18nDurationKey)}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </PageContent>
    </section>
  );
}
