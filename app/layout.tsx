import type { ReactNode } from "react";
import type { Metadata } from "next";
import { DEFAULT_LOCALE } from "@shared/config/locales";
import { SITE_CONFIG } from "@shared/config/site";

/**
 * Root layout (required by Next.js). Locale-specific UI lives under app/[locale]/.
 * Default metadata is Uzbek for crawlers and social previews on the bare domain.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Verikore Global — Хитойдан завод ва ускуналар",
    template: "%s | Verikore Global",
  },
  description: SITE_CONFIG.description,
  alternates: {
    canonical: `${SITE_CONFIG.url}/${DEFAULT_LOCALE}`,
    languages: {
      uz: `${SITE_CONFIG.url}/uz`,
      ru: `${SITE_CONFIG.url}/ru`,
      en: `${SITE_CONFIG.url}/en`,
      "x-default": `${SITE_CONFIG.url}/${DEFAULT_LOCALE}`,
    },
  },
  openGraph: {
    type: "website",
    url: `${SITE_CONFIG.url}/${DEFAULT_LOCALE}`,
    locale: "uz_UZ",
    alternateLocale: ["ru_RU", "en_US"],
    siteName: SITE_CONFIG.name,
    title: "Verikore Global — Хитойдан завод ва ускуналар",
    description: SITE_CONFIG.description,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630, alt: "Verikore Global" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Verikore Global — Хитойдан завод ва ускуналар",
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
