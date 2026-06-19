"use client";

import { Globe } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@shared/i18n/navigation";
import { LOCALES, LOCALE_SHORT, type Locale } from "@shared/config/locales";
import { useTransition } from "react";
import { cn } from "@shared/lib/cn";

type LanguageSwitcherProps = {
  /** Over hero imagery — frosted light pill for contrast */
  variant?: "default" | "onDark";
  className?: string;
};

export function LanguageSwitcher({ variant = "default", className }: LanguageSwitcherProps) {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("nav");
  const [isPending, startTransition] = useTransition();
  const onDark = variant === "onDark";

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-2 text-xs font-bold",
        "transition-[background-color,border-color,box-shadow] duration-300",
        onDark
          ? "border-white/50 bg-white/95 shadow-[0_2px_12px_rgba(0,0,0,0.12)] backdrop-blur-md"
          : "border-outline-variant/30 bg-surface-container-lowest shadow-sm shadow-black/[0.04]",
        className,
      )}
      role="group"
      aria-label={t("language")}
    >
      <Globe
        size={16}
        className={cn("shrink-0", onDark ? "text-on-surface-variant" : "text-outline")}
        aria-hidden
      />
      {LOCALES.map((l, idx) => (
        <span key={l} className="inline-flex items-center">
          <button
            type="button"
            disabled={isPending}
            onClick={() => {
              startTransition(() => {
                router.replace(pathname, { locale: l });
              });
            }}
            className={cn(
              "min-w-[1.75rem] rounded-md px-1 py-0.5 transition-colors",
              l === locale
                ? "text-primary-container font-extrabold"
                : onDark
                  ? "text-on-surface-variant hover:text-primary"
                  : "text-on-surface-variant hover:text-primary",
            )}
            aria-current={l === locale ? "true" : undefined}
          >
            {LOCALE_SHORT[l]}
          </button>
          {idx < LOCALES.length - 1 ? (
            <span
              className={cn(
                "mx-0.5 font-normal opacity-60 select-none",
                onDark ? "text-on-surface-variant" : "text-outline-variant",
              )}
              aria-hidden
            >
              /
            </span>
          ) : null}
        </span>
      ))}
    </div>
  );
}
