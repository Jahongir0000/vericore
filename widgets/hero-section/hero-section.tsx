"use client";

import { DEFAULT_OG_IMAGE } from "@shared/config/site-photos";
import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@shared/i18n/navigation";
import { Button } from "@shared/ui/button";
import { cn } from "@shared/lib/cn";

export function HeroSection() {
  const t = useTranslations("home");

  return (
    <section className="relative flex min-h-[min(78dvh,700px)] flex-col justify-end overflow-hidden pt-24 pb-10 sm:pb-12 lg:justify-end lg:pt-28 lg:pb-16 xl:min-h-[min(70dvh,660px)] xl:pt-32 xl:pb-18">
      <div className="absolute inset-0 -z-10">
        <Image
          src={DEFAULT_OG_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-[center_40%]"
        />
        <div
          className="from-on-background via-on-background/50 to-on-background/15 lg:via-on-background/40 absolute inset-0 bg-gradient-to-t"
          aria-hidden
        />
        <div
          className="from-on-background/88 via-on-background/35 absolute inset-0 hidden bg-gradient-to-r to-transparent lg:block"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="max-w-xl space-y-4 sm:space-y-5 lg:max-w-2xl xl:max-w-[40rem] xl:space-y-6">
          <span
            className={cn(
              "border-primary-container/35 bg-primary-container/15 inline-flex items-center gap-2 rounded-full border px-3 py-1 backdrop-blur-md",
              "lg:px-4 lg:py-1.5",
            )}
          >
            <ShieldCheck size={14} className="text-primary-container lg:size-4" aria-hidden />
            <span className="font-label text-primary-container text-[10px] font-bold tracking-[0.2em] uppercase lg:text-[11px]">
              {t("heroBadge")}
            </span>
          </span>

          <div className="space-y-4 lg:space-y-5">
            <h1 className="font-headline text-[clamp(1.875rem,4vw+1rem,3.75rem)] leading-[1.08] font-extrabold tracking-tight text-balance text-white xl:leading-[1.06]">
              {t("heroTitle")}
            </h1>
            <p className="font-body max-w-md text-base leading-relaxed text-slate-200/95 lg:max-w-xl lg:text-lg lg:leading-relaxed xl:text-xl xl:leading-relaxed">
              {t("heroSubtitle")}
            </p>
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center lg:gap-4 lg:pt-4">
            <Button
              variant="primary"
              size="xl"
              className="w-full gap-2 shadow-lg shadow-black/20 sm:w-auto sm:min-w-[13.5rem]"
              onClick={() =>
                document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t("heroCtaPrimary")}
              <ArrowRight size={20} aria-hidden className="shrink-0" />
            </Button>
            <Button
              asChild
              variant="outlineLight"
              size="xl"
              className="w-full sm:w-auto sm:min-w-[11rem]"
            >
              <Link href="/katalog">{t("heroCtaSecondary")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
