import type { Metadata } from "next";
import { SITE_CONFIG } from "@shared/config/site";
import { DEFAULT_LOCALE, LOCALES, type Locale } from "@shared/config/locales";

interface BuildMetadataInput {
  title: string;
  description: string;
  locale: string;
  path: string;
  image?: string;
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description,
  locale,
  path,
  image,
  noIndex,
}: BuildMetadataInput): Metadata {
  const loc = locale as Locale;
  const url = `${SITE_CONFIG.url}/${locale}${path === "/" ? "" : path}`;
  const ogImage = image ?? SITE_CONFIG.ogImage;
  const ogLocale = localeToOg(loc);
  const ogAlternateLocales = LOCALES.filter((l) => l !== loc).map((l) => localeToOg(l));

  const languages: Record<string, string> = {};
  for (const l of LOCALES) {
    languages[l] = `${SITE_CONFIG.url}/${l}${path === "/" ? "" : path}`;
  }
  languages["x-default"] = `${SITE_CONFIG.url}/${DEFAULT_LOCALE}${path === "/" ? "" : path}`;

  return {
    metadataBase: new URL(SITE_CONFIG.url),
    applicationName: SITE_CONFIG.name,
    title,
    description,
    alternates: {
      canonical: url,
      languages,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: SITE_CONFIG.name,
      locale: ogLocale,
      alternateLocale: ogAlternateLocales,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@vericoreglobal",
      creator: "@vericoreglobal",
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
  };
}

function localeToOg(locale: Locale): string {
  switch (locale) {
    case "uz":
      return "uz_UZ";
    case "ru":
      return "ru_RU";
    case "en":
      return "en_US";
  }
}
