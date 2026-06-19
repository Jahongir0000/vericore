"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CompareState {
  items: string[];
  toggle: (slug: string) => void;
  remove: (slug: string) => void;
  clear: () => void;
}

const MAX_ITEMS = 3;

export const useCompareStore = create<CompareState>()(
  persist(
    (set, get) => ({
      items: [],
      toggle: (slug) => {
        const { items } = get();
        if (items.includes(slug)) {
          set({ items: items.filter((s) => s !== slug) });
        } else if (items.length < MAX_ITEMS) {
          set({ items: [...items, slug] });
        }
      },
      remove: (slug) => set((state) => ({ items: state.items.filter((s) => s !== slug) })),
      clear: () => set({ items: [] }),
    }),
    {
      name: "vc-compare",
      version: 1,
    },
  ),
);

export const COMPARE_MAX = MAX_ITEMS;
