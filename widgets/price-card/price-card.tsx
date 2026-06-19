"use client";

import { ShieldCheck, Truck, Phone, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@shared/ui/button";
import { Link } from "@shared/i18n/navigation";
import { SITE_CONFIG } from "@shared/config/site";
import type { ProductCommercial, ProductWarranty } from "@entities/product";

interface PriceCardProps {
  commercial: ProductCommercial;
  warranty: ProductWarranty;
}

export function PriceCard({ commercial, warranty }: PriceCardProps) {
  const t = useTranslations("product");

  return (
    <section className="from-primary to-primary-container -mx-6 rounded-2xl bg-gradient-to-br px-6 py-12 text-white lg:-mx-8 lg:rounded-3xl lg:px-8 lg:py-14">
      <div className="space-y-6">
        <div>
          <span className="font-label text-xs font-bold tracking-widest uppercase opacity-80">
            {t("ctaQuote")}
          </span>
          <p className="font-label mt-1 text-2xl font-bold opacity-90">{t("bottomFormSubtitle")}</p>
        </div>

        <ul className="grid grid-cols-2 gap-3">
          <li className="flex flex-col items-center gap-1.5 rounded-2xl bg-white/15 p-4 text-center backdrop-blur-sm">
            <Truck size={20} aria-hidden />
            <span className="text-xs font-bold opacity-90">{t("deliveryTimeLabel")}</span>
            <strong className="font-headline text-base font-bold">
              {t("deliveryLeadDays", { days: commercial.deliveryWorkingDays })}
            </strong>
          </li>
          <li className="flex flex-col items-center gap-1.5 rounded-2xl bg-white/15 p-4 text-center backdrop-blur-sm">
            <ShieldCheck size={20} aria-hidden />
            <span className="text-xs font-bold opacity-90">{t("warrantyLabel")}</span>
            <strong className="font-headline text-base font-bold">{warranty.months} mo</strong>
          </li>
        </ul>

        <div className="space-y-3">
          <Button asChild variant="primary" size="xl" block>
            <Link href="/kontakt">
              {t("ctaOrder")}
              <ArrowRight size={20} aria-hidden />
            </Link>
          </Button>
          <Button asChild variant="outlineLight" size="lg" block>
            <a href={`tel:${SITE_CONFIG.contact.phoneDigits}`}>
              <Phone size={18} aria-hidden />
              {t("ctaQuote")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
