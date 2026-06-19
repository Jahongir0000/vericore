"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { LeadFormData } from "./schema";

interface LeadDraftState {
  draft: Partial<LeadFormData>;
  step: 1 | 2 | 3;
  setDraft: (patch: Partial<LeadFormData>) => void;
  setStep: (step: 1 | 2 | 3) => void;
  reset: () => void;
}

export const useLeadDraftStore = create<LeadDraftState>()(
  persist(
    (set) => ({
      draft: {},
      step: 1,
      setDraft: (patch) => set((state) => ({ draft: { ...state.draft, ...patch } })),
      setStep: (step) => set({ step }),
      reset: () => set({ draft: {}, step: 1 }),
    }),
    { name: "vc-lead-draft", version: 1 },
  ),
);
