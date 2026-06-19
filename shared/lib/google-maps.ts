import { OFFICE_LOCATION } from "@shared/config/office-location";

/** Open location in Google Maps (works on mobile app and desktop). */
export function googleMapsSearchUrl(options?: { query?: string }): string {
  const query = options?.query ?? OFFICE_LOCATION.mapsQuery;
  const encoded = encodeURIComponent(query);
  return `https://www.google.com/maps/search/?api=1&query=${encoded}`;
}

/** Turn-by-turn directions to the office (uses device location as origin when allowed). */
export function googleMapsDirectionsUrl(options?: { query?: string }): string {
  const query = options?.query ?? OFFICE_LOCATION.mapsQuery;
  const destination = encodeURIComponent(query);
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}&travelmode=driving`;
}

/** Embedded map iframe (no API key; may show “open in Maps” overlay on some browsers). */
export function googleMapsEmbedUrl(options?: {
  lat?: number;
  lng?: number;
  zoom?: number;
  query?: string;
}): string {
  const lat = options?.lat ?? OFFICE_LOCATION.lat;
  const lng = options?.lng ?? OFFICE_LOCATION.lng;
  const zoom = options?.zoom ?? 16;
  return `https://www.google.com/maps?q=${lat},${lng}&hl=en&z=${zoom}&output=embed`;
}
