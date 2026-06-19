import { OWN_FACTORIES, type OwnedFactory } from "@shared/mock-data";

export function getAllFactories(): OwnedFactory[] {
  return OWN_FACTORIES;
}

export function getFactoriesPreview(limit = 6): OwnedFactory[] {
  return OWN_FACTORIES.slice(0, limit);
}

export type { OwnedFactory };
