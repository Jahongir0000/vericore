"use client";

import { Truck } from "lucide-react";
import { useTranslations } from "next-intl";

import { CentralAsiaMapSvg } from "./central-asia-map-svg";

const COUNTRIES = [
  { id: "kazakhstan",  color: "bg-sky-300/70",      label: "Qozog'iston" },
  { id: "uzbekistan",  color: "bg-primary/35",       label: "O'zbekiston" },
  { id: "kyrgyzstan",  color: "bg-emerald-300/70",   label: "Qirg'iziston" },
  { id: "tajikistan",  color: "bg-violet-300/70",    label: "Tojikiston" },
  { id: "afghanistan", color: "bg-amber-300/70",     label: "Afgʻoniston" },
];

export function UzbekistanLogisticsMap() {
  const t = useTranslations("howWeWork");

  return (
    <section
      className="bg-surface-container-low py-10 lg:py-12"
      aria-labelledby="logistics-heading"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <header className="mb-8 space-y-3 text-center lg:mb-10">
          <Truck size={32} className="text-primary mx-auto" aria-hidden />
          <h2
            id="logistics-heading"
            className="font-headline text-on-surface text-3xl font-extrabold tracking-tight lg:text-4xl"
          >
            {t("logisticsTitle")}
          </h2>
          <p className="text-on-surface-variant mx-auto max-w-lg leading-relaxed lg:text-lg">
            {t("logisticsBody")}
          </p>
        </header>

        <div className="from-surface-container-low via-surface-container-lowest to-primary-fixed/15 border-outline-variant/10 shadow-soft overflow-hidden rounded-3xl border bg-gradient-to-br p-4 sm:p-6 lg:p-8">
          <CentralAsiaMapSvg
            ariaLabel={`${t("logisticsTitle")}. ${t("logisticsCoverage")}`}
            officeLabel={t("officeMarkerLabel")}
          />

          <p className="font-label text-on-surface-variant mt-6 text-center text-xs font-bold tracking-widest uppercase lg:mt-8">
            {t("logisticsCoverage")}
          </p>

          <ul className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2">
            {COUNTRIES.map((c) => (
              <li key={c.id} className="text-on-surface-variant flex items-center gap-2 text-xs">
                <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${c.color}`} aria-hidden />
                <span className="text-on-surface font-semibold">{c.label}</span>
              </li>
            ))}
            <li className="text-on-surface-variant flex items-center gap-2 text-xs">
              <span className="bg-tertiary h-2.5 w-2.5 shrink-0 rotate-45" aria-hidden />
              <span className="text-on-surface font-semibold">{t("officeMarkerLabel")}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
