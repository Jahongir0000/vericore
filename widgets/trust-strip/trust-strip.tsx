"use client";

import { useTranslations } from "next-intl";
import { TRUST_STATS } from "@shared/mock-data";
import { KpiTile } from "@shared/ui/kpi-tile";

export function TrustStrip() {
  const t = useTranslations("common");

  const labels: Record<string, string> = {
    yearsExperience: t("yearsExperience"),
    ownFactories: t("ownFactories"),
    zeroCommission: t("zeroCommission"),
    warranty: t("warranty", { months: "" }).trim(),
  };

  return (
    <section
      aria-label="Trust signals"
      className="border-outline-variant/10 bg-surface-container-low border-b py-5 lg:py-6"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ul className="hide-scrollbar flex gap-3 overflow-x-auto lg:flex-wrap lg:justify-center lg:gap-6 xl:gap-8">
          {TRUST_STATS.map((stat) => (
            <li key={stat.i18nKey} className="min-w-[140px] shrink-0 lg:min-w-0">
              <KpiTile variant="stat" value={stat.value} label={labels[stat.i18nKey] ?? ""} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
