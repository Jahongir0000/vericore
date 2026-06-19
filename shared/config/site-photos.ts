/**
 * On-site photography under /public/newimages (sorted for stable assignments).
 * Paths use encodeURIComponent so spaces in filenames work everywhere.
 */
export const SITE_PHOTO_FILES = [
  "photo_2026-05-02 10.21.29.jpeg",
  "photo_2026-05-02 10.21.37.jpeg",
  "photo_2026-05-02 10.21.41.jpeg",
  "photo_2026-05-02 10.21.42.jpeg",
  "photo_2026-05-02 10.21.44.jpeg",
  "photo_2026-05-02 10.21.45.jpeg",
  "photo_2026-05-02 10.21.48.jpeg",
  "photo_2026-05-02 10.21.49.jpeg",
  "photo_2026-05-02 10.21.57.jpeg",
  "photo_2026-05-02 10.21.59.jpeg",
  "photo_2026-05-02 10.22.04.jpeg",
  "photo_2026-05-02 10.22.07.jpeg",
  "photo_2026-05-02 10.22.09.jpeg",
  "photo_2026-05-02 10.22.11.jpeg",
  "photo_2026-05-02 10.22.12.jpeg",
  "photo_2026-05-02 10.22.13.jpeg",
  "photo_2026-05-02 10.22.15.jpeg",
] as const;

export const SITE_PHOTO_COUNT = SITE_PHOTO_FILES.length;

export function photoAt(index: number): string {
  const file = SITE_PHOTO_FILES[index % SITE_PHOTO_COUNT]!;
  return `/newimages/${encodeURIComponent(file)}`;
}

/** Open Graph / social default — absolute URL required for social media scrapers */
export const DEFAULT_OG_IMAGE =
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/og/og-default.png";
