"use client";

import { photoAt } from "@shared/config/site-photos";
import Image from "next/image";
import { Quote } from "lucide-react";
import { useTranslations } from "next-intl";

export function TrustBlock() {
  const t = useTranslations("product");

  return (
    <section className="bg-ink-dark -mx-6 rounded-2xl px-6 py-12 text-white lg:-mx-8 lg:rounded-3xl lg:px-8 lg:py-14">
      <div className="space-y-4">
        <Quote size={32} className="text-primary-container" aria-hidden />
        <blockquote className="space-y-3">
          <p className="font-headline text-2xl leading-tight font-extrabold">
            &ldquo;{t("trustQuote")}&rdquo;
          </p>
          <p className="text-sm leading-relaxed text-slate-300">{t("trustBody")}</p>
        </blockquote>
        <div className="flex items-center gap-3 pt-2">
          <div className="bg-surface-container-high relative h-10 w-10 overflow-hidden rounded-full">
            <Image src={photoAt(16)} alt="" fill sizes="40px" className="object-cover" />
          </div>
          <div className="text-xs">
            <p className="font-bold text-white">Verikore Construction</p>
            <p className="text-slate-400">Tashkent, Uzbekistan</p>
          </div>
        </div>
      </div>
    </section>
  );
}
