import { defineRouting } from "next-intl/routing";
import { LOCALES, DEFAULT_LOCALE } from "@shared/config/locales";

export const routing = defineRouting({
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  localePrefix: "always",
  /** Always default to Uzbek unless the user explicitly picks RU/EN (cookie / URL). */
  localeDetection: false,
});
