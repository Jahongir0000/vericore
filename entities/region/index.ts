import { REGIONS, type Region } from "@shared/mock-data";

export function getAllRegions(): Region[] {
  return REGIONS;
}

export function getRegionBySlug(slug: string): Region | undefined {
  return REGIONS.find((r) => r.slug === slug);
}

export type { Region };
