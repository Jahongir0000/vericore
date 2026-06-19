"use client";

import { useTranslations } from "next-intl";
import { HOW_WE_WORK_STEPS } from "@shared/mock-data";
import { cn } from "@shared/lib/cn";
import { PageContent } from "@shared/ui/page-content";
import { ArrowRight } from "lucide-react";
import { Link } from "@shared/i18n/navigation";

const STEP_COLORS = [
  { num: "text-primary", bg: "bg-primary/8 border-primary/20" },
  { num: "text-secondary", bg: "bg-secondary/8 border-secondary/20" },
  { num: "text-tertiary", bg: "bg-tertiary/8 border-tertiary/20" },
  { num: "text-primary", bg: "bg-primary/8 border-primary/20" },
  { num: "text-secondary", bg: "bg-secondary/8 border-secondary/20" },
] as const;

export function HowWeWorkTimeline() {
  const t = useTranslations();

  return (
    <section className="bg-surface-container-low py-8 lg:py-10" aria-labelledby="hww-heading">
      <PageContent>
        <div className="mb-6 flex items-end justify-between gap-4 lg:mb-7">
          <header className="max-w-lg space-y-1.5">
            <h2
              id="hww-heading"
              className="font-headline text-on-surface text-2xl font-extrabold tracking-tight lg:text-3xl"
            >
              {t("home.howWeWorkTitle")}
            </h2>
            <p className="text-on-surface-variant text-sm leading-relaxed lg:text-base">
              {t("home.howWeWorkSubtitle")}
            </p>
          </header>
          <Link
            href="/qanday-ishlaymiz"
            className="text-primary hover:text-primary/80 font-label hidden shrink-0 items-center gap-1 text-xs font-bold tracking-wide uppercase transition-colors sm:flex"
          >
            {t("common.learnMore")}
            <ArrowRight size={14} aria-hidden />
          </Link>
        </div>

        {/* Steps — horizontal scrollable on mobile, grid on desktop */}
        <ol className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-2.5">
          {HOW_WE_WORK_STEPS.map((step, idx) => {
            const c = STEP_COLORS[idx] ?? STEP_COLORS[0]!;
            return (
              <li key={step.step} className="min-w-0">
                <article
                  className={cn(
                    "border rounded-2xl p-4 h-full flex flex-col gap-2",
                    c.bg,
                  )}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className={cn("font-display text-3xl font-black leading-none opacity-25", c.num)} aria-hidden>
                      {step.step}
                    </span>
                    {step.badgeKey && (
                      <span className="bg-tertiary/15 text-tertiary font-label rounded-full px-2 py-0.5 text-[9px] font-black tracking-widest uppercase">
                        {t(step.badgeKey)}
                      </span>
                    )}
                  </div>
                  <h3 className="font-headline text-on-surface text-sm font-extrabold leading-snug lg:text-base">
                    {t(step.i18nTitleKey)}
                  </h3>
                  <p className="text-on-surface-variant grow text-xs leading-relaxed">
                    {t(step.i18nBodyKey)}
                  </p>
                  <p className={cn("font-label text-[10px] font-bold tracking-wider uppercase mt-1", c.num)}>
                    {t(step.i18nDurationKey)}
                  </p>
                </article>
              </li>
            );
          })}
        </ol>

        <div className="mt-4 flex sm:hidden">
          <Link
            href="/qanday-ishlaymiz"
            className="text-primary font-label flex items-center gap-1 text-xs font-bold tracking-wide uppercase"
          >
            {t("common.learnMore")}
            <ArrowRight size={13} aria-hidden />
          </Link>
        </div>
      </PageContent>
    </section>
  );
}
