import { MANAGERS, DEFAULT_MANAGER, type Manager } from "@shared/mock-data";

export function getAllManagers(): Manager[] {
  return MANAGERS;
}

export function getDefaultManager(): Manager {
  return DEFAULT_MANAGER;
}

export function getManagerById(id: string): Manager | undefined {
  return MANAGERS.find((m) => m.id === id);
}

export type { Manager };
