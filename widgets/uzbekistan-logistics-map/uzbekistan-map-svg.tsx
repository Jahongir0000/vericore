"use client";

import { useId, useMemo, useState, type KeyboardEvent } from "react";
import { useLocale } from "next-intl";
import { getAllRegions } from "@entities/region";
import { OFFICE_LOCATION } from "@shared/config/office-location";
import type { Locale } from "@shared/config/locales";
import { googleMapsSearchUrl } from "@shared/lib/google-maps";
import { cn } from "@shared/lib/cn";

import {
  UZBEKISTAN_ARAL_SEA_PATH,
  UZBEKISTAN_MAP_MARKERS,
  UZBEKISTAN_MAP_VIEWBOX,
  UZBEKISTAN_REGION_PATHS,
  type UzbekistanMapMarker,
} from "./uzbekistan-map-data";

type UzbekistanMapSvgProps = {
  className?: string;
  /** Accessible label for the map graphic */
  ariaLabel: string;
  officeLabel?: string;
};

export function UzbekistanMapSvg({ className, ariaLabel, officeLabel }: UzbekistanMapSvgProps) {
  const locale = useLocale() as Locale;
  const uid = useId().replace(/:/g, "");
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [activeMarkerId, setActiveMarkerId] = useState<UzbekistanMapMarker["id"] | null>(null);

  const regionsBySlug = useMemo(() => {
    const map = new Map<string, string>();
    for (const region of getAllRegions()) {
      map.set(region.slug, region.i18n[locale]);
    }
    return map;
  }, [locale]);

  const activeMarker = activeMarkerId
    ? UZBEKISTAN_MAP_MARKERS.find((m) => m.id === activeMarkerId)
    : null;

  const activeLabel = activeMarker
    ? activeMarker.isOffice
      ? (officeLabel ?? OFFICE_LOCATION.address[locale])
      : (regionsBySlug.get(activeMarker.regionSlug) ?? activeMarker.id)
    : activeSlug
      ? regionsBySlug.get(activeSlug)
      : null;

  return (
    <figure className={cn("relative w-full", className)}>
      <svg
        viewBox={`0 0 ${UZBEKISTAN_MAP_VIEWBOX.width} ${UZBEKISTAN_MAP_VIEWBOX.height}`}
        className="h-auto max-h-[min(72vh,32rem)] w-full drop-shadow-sm"
        role="img"
        aria-label={ariaLabel}
        onMouseLeave={() => {
          setActiveSlug(null);
          setActiveMarkerId(null);
        }}
      >
        <defs>
          <linearGradient id={`${uid}-bg`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" className="[stop-color:var(--color-surface-container-low)]" />
            <stop
              offset="55%"
              className="[stop-color:var(--color-primary-fixed)]"
              stopOpacity="0.35"
            />
            <stop
              offset="100%"
              className="[stop-color:var(--color-secondary-fixed)]"
              stopOpacity="0.25"
            />
          </linearGradient>
          <linearGradient id={`${uid}-region`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              className="[stop-color:var(--color-primary-container)]"
              stopOpacity="0.55"
            />
            <stop offset="100%" className="[stop-color:var(--color-primary)]" stopOpacity="0.22" />
          </linearGradient>
          <linearGradient id={`${uid}-region-alt`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              className="[stop-color:var(--color-secondary-container)]"
              stopOpacity="0.5"
            />
            <stop
              offset="100%"
              className="[stop-color:var(--color-secondary)]"
              stopOpacity="0.18"
            />
          </linearGradient>
          <filter id={`${uid}-shadow`} x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="1.5" stdDeviation="2.5" floodOpacity="0.2" />
          </filter>
        </defs>

        <rect
          width={UZBEKISTAN_MAP_VIEWBOX.width}
          height={UZBEKISTAN_MAP_VIEWBOX.height}
          fill={`url(#${uid}-bg)`}
          rx={12}
        />

        {/* Aral Sea */}
        <path
          d={UZBEKISTAN_ARAL_SEA_PATH}
          className="fill-primary-fixed/30 stroke-primary/20"
          strokeWidth={0.75}
          pointerEvents="none"
        />

        {/* Regions — from design/uzbekistan.svg */}
        {UZBEKISTAN_REGION_PATHS.map((region, index) => {
          const isActive = activeSlug === region.slug;
          const fillUrl = index % 2 === 0 ? `url(#${uid}-region)` : `url(#${uid}-region-alt)`;

          return (
            <path
              key={region.id}
              d={region.d}
              data-slug={region.slug}
              fill={isActive ? "var(--color-primary-container)" : fillUrl}
              className={cn(
                "stroke-surface-container-lowest cursor-pointer transition-[fill,stroke,filter] duration-200",
                isActive
                  ? "stroke-primary stroke-[1.75] [filter:brightness(1.05)]"
                  : "stroke-primary/25 hover:stroke-primary/50 stroke-[0.75] hover:[filter:brightness(1.04)]",
              )}
              strokeLinejoin="round"
              onMouseEnter={() => {
                setActiveSlug(region.slug);
                setActiveMarkerId(null);
              }}
              onFocus={() => {
                setActiveSlug(region.slug);
                setActiveMarkerId(null);
              }}
              onBlur={() => setActiveSlug(null)}
              tabIndex={0}
              role="button"
              aria-label={regionsBySlug.get(region.slug) ?? region.slug}
            >
              <title>{regionsBySlug.get(region.slug) ?? region.slug}</title>
            </path>
          );
        })}

        {/* Logistics markers */}
        {UZBEKISTAN_MAP_MARKERS.map((marker) => {
          const label = marker.isOffice
            ? (officeLabel ?? OFFICE_LOCATION.address[locale])
            : (regionsBySlug.get(marker.regionSlug) ?? marker.id);
          const isActive = activeMarkerId === marker.id;
          const isPrimary = marker.isPrimary;
          const isOffice = marker.isOffice;
          const radius = isOffice ? 7 : isPrimary ? 6 : 4.5;
          const mapsHref = isOffice ? googleMapsSearchUrl() : undefined;

          return (
            <g
              key={marker.id}
              className={cn(isOffice && mapsHref && "cursor-pointer")}
              onMouseEnter={() => {
                setActiveMarkerId(marker.id);
                setActiveSlug(marker.regionSlug);
              }}
              onFocus={() => {
                setActiveMarkerId(marker.id);
                setActiveSlug(marker.regionSlug);
              }}
              onBlur={() => setActiveMarkerId(null)}
              tabIndex={isOffice ? 0 : -1}
              role={isOffice ? "link" : "img"}
              aria-label={label}
              {...(isOffice && mapsHref
                ? {
                    onClick: () => window.open(mapsHref, "_blank", "noopener,noreferrer"),
                    onKeyDown: (e: KeyboardEvent) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        window.open(mapsHref, "_blank", "noopener,noreferrer");
                      }
                    },
                  }
                : {})}
            >
              {(isPrimary || isOffice) && (
                <circle
                  cx={marker.x}
                  cy={marker.y}
                  r={isOffice ? 14 : 12}
                  className={cn(
                    "transition-opacity duration-200",
                    isOffice ? "fill-tertiary/25" : "fill-primary/20",
                    isActive ? "opacity-100" : "opacity-75",
                  )}
                />
              )}
              {isOffice ? (
                <path
                  d={`M ${marker.x} ${marker.y - 8} L ${marker.x + 2} ${marker.y - 1.5} L ${marker.x + 8} ${marker.y - 1.5} L ${marker.x + 3} ${marker.y + 2} L ${marker.x + 5} ${marker.y + 8} L ${marker.x} ${marker.y + 5} L ${marker.x - 5} ${marker.y + 8} L ${marker.x - 3} ${marker.y + 2} L ${marker.x - 8} ${marker.y - 1.5} L ${marker.x - 2} ${marker.y - 1.5} Z`}
                  className={cn(
                    "fill-tertiary stroke-surface-container-lowest stroke-[1.5] transition-transform duration-200",
                    isActive && "scale-110",
                  )}
                  style={{ transformOrigin: `${marker.x}px ${marker.y}px` }}
                  filter={`url(#${uid}-shadow)`}
                />
              ) : (
                <>
                  <circle
                    cx={marker.x}
                    cy={marker.y}
                    r={isActive ? radius + 1 : radius}
                    className={cn(
                      "stroke-surface-container-lowest transition-all duration-200",
                      isPrimary ? "fill-primary stroke-[2]" : "fill-secondary stroke-[1.25]",
                      isActive && !isPrimary && "fill-primary",
                    )}
                    filter={`url(#${uid}-shadow)`}
                  />
                  <circle
                    cx={marker.x}
                    cy={marker.y}
                    r={isPrimary ? 2.2 : 1.5}
                    className="fill-surface-container-lowest pointer-events-none"
                  />
                </>
              )}
              <title>{label}</title>
            </g>
          );
        })}
      </svg>

      <figcaption className="font-label text-on-surface mt-3 min-h-[1.25rem] text-center text-sm font-bold">
        {activeLabel ?? <span className="text-on-surface-variant font-normal">{ariaLabel}</span>}
      </figcaption>
    </figure>
  );
}
