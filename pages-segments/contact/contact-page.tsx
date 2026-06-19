"use client";

import { BadgeCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import { Breadcrumb } from "@shared/ui/breadcrumb";
import { PageContent } from "@shared/ui/page-content";
import { ChannelCards } from "@widgets/channel-cards";
import { OfficeMap } from "@widgets/office-map";
import { FaqAccordion } from "@widgets/faq-accordion";
import { Footer } from "@widgets/footer";
import { LeadForm } from "@features/lead-form";

export function ContactPage() {
  const t = useTranslations();

  return (
    <>
      <main className="bg-background pt-8 pb-14" id="main-content">
        <PageContent className="space-y-7 lg:space-y-10">
          <header className="max-w-2xl space-y-4">
            <Breadcrumb
              items={[{ label: t("nav.home"), href: "/" }, { label: t("contact.title") }]}
            />
            <span className="border-tertiary/15 bg-tertiary-container/15 text-tertiary inline-flex items-center gap-2 rounded-full border px-3 py-1 backdrop-blur-sm">
              <BadgeCheck size={14} aria-hidden className="shrink-0" />
              <span className="font-label text-xs font-bold tracking-widest uppercase">
                {t("contact.badge")}
              </span>
            </span>
            <div className="space-y-3">
              <h1 className="font-headline text-on-surface text-4xl leading-tight font-extrabold tracking-tight lg:text-5xl">
                {t("contact.title")}
              </h1>
              <div className="bg-primary-container h-1 w-16 rounded-full lg:w-20" aria-hidden />
              <p className="text-on-surface-variant max-w-xl text-lg leading-relaxed">
                {t("contact.subtitle")}
              </p>
            </div>
          </header>

          <ChannelCards />

          <section className="space-y-4">
            <h2 className="font-headline text-xl font-extrabold">{t("contact.formTitle")}</h2>
            <LeadForm />
          </section>

          <OfficeMap />
          <FaqAccordion />
        </PageContent>
      </main>
      <Footer />
    </>
  );
}
