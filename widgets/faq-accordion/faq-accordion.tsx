"use client";

import { useLocale, useTranslations } from "next-intl";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@shared/ui/accordion";
import { getAllFaqs } from "@entities/faq";
import type { Locale } from "@shared/config/locales";

interface FaqAccordionProps {
  limit?: number;
}

export function FaqAccordion({ limit }: FaqAccordionProps) {
  const t = useTranslations("contact");
  const locale = useLocale() as Locale;
  const faqs = getAllFaqs().slice(0, limit ?? Infinity);

  return (
    <section className="py-12" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="font-headline text-on-surface mb-8 text-2xl font-extrabold">
        {t("faqTitle")}
      </h2>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id}>
            <AccordionTrigger>{faq.i18n[locale].question}</AccordionTrigger>
            <AccordionContent>{faq.i18n[locale].answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
