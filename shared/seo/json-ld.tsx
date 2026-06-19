import { SITE_CONFIG } from "@shared/config/site";
import type { Product } from "@entities/product";
import type { Locale } from "@shared/config/locales";

function JsonLdScript({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      suppressHydrationWarning
    />
  );
}

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/brand/vericore-logo-light.png`,
    foundingDate: String(SITE_CONFIG.founded),
    contactPoint: SITE_CONFIG.contact.phones.map((p) => ({
      "@type": "ContactPoint",
      telephone: p.display,
      contactType: "customer service",
      availableLanguage: ["uz", "ru", "en"],
      areaServed: "UZ",
    })),
    address: {
      "@type": "PostalAddress",
      addressCountry: SITE_CONFIG.address.country,
      addressLocality: SITE_CONFIG.address.locality,
      addressRegion: SITE_CONFIG.address.region,
      streetAddress: SITE_CONFIG.address.addressLine,
      postalCode: SITE_CONFIG.address.postalCode,
    },
    sameAs: [
      SITE_CONFIG.social.telegram,
      SITE_CONFIG.social.facebook,
      SITE_CONFIG.social.youtube,
      SITE_CONFIG.social.instagram,
    ],
  };
  return <JsonLdScript data={data} />;
}

export function LocalBusinessJsonLd({ locale }: { locale: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_CONFIG.url}/${locale}/kontakt`,
    name: SITE_CONFIG.name,
    image: `${SITE_CONFIG.url}/brand/vericore-logo-light.png`,
    telephone: SITE_CONFIG.contact.phones.map((p) => p.display),
    email: SITE_CONFIG.contact.email,
    url: `${SITE_CONFIG.url}/${locale}`,
    address: {
      "@type": "PostalAddress",
      addressCountry: SITE_CONFIG.address.country,
      addressLocality: SITE_CONFIG.address.locality,
      addressRegion: SITE_CONFIG.address.region,
      streetAddress: SITE_CONFIG.address.addressLine,
      postalCode: SITE_CONFIG.address.postalCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.address.geo.lat,
      longitude: SITE_CONFIG.address.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$",
  };
  return <JsonLdScript data={data} />;
}

export function ProductJsonLd({ product, locale }: { product: Product; locale: Locale }) {
  const i18n = product.i18n[locale];
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: i18n.name,
    description: i18n.description,
    sku: product.modelCode,
    brand: { "@type": "Brand", name: SITE_CONFIG.name },
    category: product.categorySlug,
    image: product.images,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: product.commercial.priceUsdExw,
      availability:
        product.status === "in-stock"
          ? "https://schema.org/InStock"
          : "https://schema.org/PreOrder",
      url: `${SITE_CONFIG.url}/${locale}/mahsulot/${product.slug}`,
      seller: { "@type": "Organization", name: SITE_CONFIG.name },
    },
  };
  return <JsonLdScript data={data} />;
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return <JsonLdScript data={data} />;
}

export function FaqJsonLd({ items }: { items: { question: string; answer: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  return <JsonLdScript data={data} />;
}
