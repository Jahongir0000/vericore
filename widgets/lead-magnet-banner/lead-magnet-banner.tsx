"use client";

import { useTranslations } from "next-intl";
import { LeadMagnetForm } from "./lead-magnet-form";

export function LeadMagnetBanner() {
  const t = useTranslations("home");

  return (
    <section
      id="lead-form"
      className="bg-ink-dark py-10"
      aria-labelledby="lead-magnet-heading"
    >
      <div className="from-primary/20 to-primary-container/10 border-primary/20 mx-auto w-full max-w-7xl space-y-6 rounded-3xl border bg-gradient-to-br p-8 px-6 lg:px-8">
        <header className="space-y-2">
          <h2 id="lead-magnet-heading" className="font-headline text-2xl font-extrabold text-white">
            {t("leadMagnetTitle")}
          </h2>
          <p className="text-sm text-slate-400">{t("leadMagnetSubtitle")}</p>
        </header>
        <LeadMagnetForm />
      </div>
    </section>
  );
}
