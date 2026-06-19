"use client";

import { Clock, ExternalLink, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { OFFICE_LOCATION } from "@shared/config/office-location";
import type { Locale } from "@shared/config/locales";
import { SITE_CONFIG } from "@shared/config/site";
import {
  googleMapsDirectionsUrl,
  googleMapsEmbedUrl,
  googleMapsSearchUrl,
} from "@shared/lib/google-maps";
import { Button } from "@shared/ui/button";

export function OfficeMap() {
  const t = useTranslations("contact");
  const locale = useLocale() as Locale;
  const address = OFFICE_LOCATION.address[locale];
  const embedSrc = googleMapsEmbedUrl();
  const mapsUrl = googleMapsSearchUrl();
  const directionsUrl = googleMapsDirectionsUrl();

  return (
    <section className="py-4" aria-labelledby="office-heading">
      <h2
        id="office-heading"
        className="font-headline text-on-surface mb-5 text-2xl font-extrabold"
      >
        {t("officeTitle")}
      </h2>

      {/* Card: mobile = stacked, lg = side-by-side */}
      <div className="border-outline-variant/10 bg-surface-container-low overflow-hidden rounded-3xl border shadow-md lg:grid lg:grid-cols-[320px_1fr] lg:h-[420px]">

        {/* ── Info panel ──────────────────────────────────── */}
        <div className="flex flex-col gap-6 p-7 lg:overflow-y-auto">

          {/* Address */}
          <div className="flex items-start gap-3">
            <span className="bg-primary/10 text-primary mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl">
              <MapPin size={17} aria-hidden />
            </span>
            <div>
              <p className="font-headline text-on-surface text-sm font-bold">
                {t("officeAddressLabel")}
              </p>
              <p className="text-on-surface-variant mt-1 text-sm leading-relaxed">{address}</p>
            </div>
          </div>

          {/* Contacts */}
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="bg-primary/10 text-primary flex h-9 w-9 shrink-0 items-center justify-center rounded-xl">
                <Phone size={15} aria-hidden />
              </span>
              <span className="flex flex-col gap-0.5">
                {SITE_CONFIG.contact.phones.map((p) => (
                  <a
                    key={p.digits}
                    href={`tel:${p.digits}`}
                    className="text-on-surface hover:text-primary text-sm font-semibold transition-colors"
                  >
                    {p.display}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-primary/10 text-primary flex h-9 w-9 shrink-0 items-center justify-center rounded-xl">
                <Mail size={15} aria-hidden />
              </span>
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="text-on-surface hover:text-primary text-sm font-semibold transition-colors"
              >
                {SITE_CONFIG.contact.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-primary/10 text-primary flex h-9 w-9 shrink-0 items-center justify-center rounded-xl">
                <Clock size={15} aria-hidden />
              </span>
              <span className="text-on-surface-variant text-sm">{SITE_CONFIG.contact.workingHours}</span>
            </li>
          </ul>

          {/* CTA buttons */}
          <div className="flex flex-col gap-2 mt-auto">
            <Button asChild variant="primary" size="md" className="w-full justify-center gap-2">
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={15} aria-hidden />
                {t("openInGoogleMaps")}
              </a>
            </Button>
            <Button asChild variant="outline" size="md" className="w-full justify-center gap-2">
              <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
                <Navigation size={15} aria-hidden />
                {t("getDirections")}
              </a>
            </Button>
          </div>
        </div>

        {/* ── Map ─────────────────────────────────────────── */}
        <div className="border-outline-variant/10 relative h-72 border-t sm:h-80 lg:h-full lg:border-t-0 lg:border-l">
          <iframe
            title={t("mapEmbedTitle")}
            src={embedSrc}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
