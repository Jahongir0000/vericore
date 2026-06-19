"use client";

import { FileText } from "lucide-react";
import { useTranslations } from "next-intl";
import { CLIENT_DOCUMENTS, clientDocHref } from "@shared/config/client-documents";
import { cn } from "@shared/lib/cn";

export interface ClientResourcesProps {
  variant?: "default" | "compact";
  sectionId?: string;
}

export function ClientResources({
  variant = "default",
  sectionId = "client-resources",
}: ClientResourcesProps) {
  const t = useTranslations();
  const compact = variant === "compact";

  return (
    <section
      id={sectionId}
      className={cn(
        "scroll-mt-28",
        compact
          ? "border-outline-variant/15 bg-surface-container-low/50 py-10"
          : "bg-surface-container-low py-16 lg:py-20",
      )}
      aria-labelledby={`${sectionId}-heading`}
    >
      <div className="mx-auto w-full max-w-7xl space-y-8 px-6 lg:px-8">
        <header className="max-w-2xl space-y-3">
          <h2
            id={`${sectionId}-heading`}
            className="font-headline text-on-surface text-2xl font-extrabold tracking-tight lg:text-3xl"
          >
            {t("resources.sectionTitle")}
          </h2>
          <p className="text-on-surface-variant text-base leading-relaxed">
            {t("resources.sectionSubtitle")}
          </p>
        </header>

        <ul className="grid gap-5 sm:grid-cols-2 lg:gap-6">
          {CLIENT_DOCUMENTS.map((doc) => (
            <li key={doc.filename}>
              <article className="border-outline-variant/25 bg-background flex h-full flex-col rounded-2xl border p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:items-start">
                  <span
                    className="bg-primary-container/40 text-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                    aria-hidden
                  >
                    <FileText className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div className="min-w-0 flex-1 space-y-2">
                    <p className="font-label text-primary text-[11px] font-bold tracking-[0.14em] uppercase">
                      {t("resources.pdfLabel")}
                    </p>
                    <h3 className="font-headline text-on-surface text-lg leading-snug font-bold">
                      {t(doc.titleKey)}
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      {t(doc.descriptionKey)}
                    </p>
                  </div>
                </div>
                <a
                  href={clientDocHref(doc.filename)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-label bg-primary text-on-primary hover:bg-primary/92 focus-visible:ring-primary mt-5 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-colors focus-visible:ring-2 focus-visible:outline-none sm:mt-6 sm:self-start"
                >
                  {t("resources.download")}
                </a>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
