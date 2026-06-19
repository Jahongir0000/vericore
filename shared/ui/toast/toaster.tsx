"use client";

import * as ToastPrimitive from "@radix-ui/react-toast";
import { CheckCircle2, X, AlertCircle } from "lucide-react";
import { create } from "zustand";
import { cn } from "@shared/lib/cn";
import type { ReactNode } from "react";

type ToastVariant = "success" | "error" | "info";

interface ToastItem {
  id: string;
  title: string;
  description?: string;
  variant: ToastVariant;
}

interface ToastStore {
  toasts: ToastItem[];
  show: (toast: Omit<ToastItem, "id">) => void;
  dismiss: (id: string) => void;
}

export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  show: (toast) =>
    set((state) => ({
      toasts: [...state.toasts, { ...toast, id: crypto.randomUUID() }],
    })),
  dismiss: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id),
    })),
}));

export function toast(input: Omit<ToastItem, "id">) {
  useToastStore.getState().show(input);
}

const variantIcon: Record<ToastVariant, ReactNode> = {
  success: <CheckCircle2 size={20} className="text-tertiary-container" aria-hidden />,
  error: <AlertCircle size={20} className="text-error" aria-hidden />,
  info: <CheckCircle2 size={20} className="text-primary-container" aria-hidden />,
};

export function Toaster() {
  const toasts = useToastStore((s) => s.toasts);
  const dismiss = useToastStore((s) => s.dismiss);

  return (
    <ToastPrimitive.Provider swipeDirection="right">
      {toasts.map((t) => (
        <ToastPrimitive.Root
          key={t.id}
          duration={4000}
          onOpenChange={(open) => !open && dismiss(t.id)}
          className={cn(
            "bg-surface-container-lowest border-outline-variant/20 shadow-soft data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out flex items-start gap-3 rounded-2xl border p-4",
          )}
        >
          {variantIcon[t.variant]}
          <div className="min-w-0 flex-1">
            <ToastPrimitive.Title className="text-on-surface text-sm font-bold">
              {t.title}
            </ToastPrimitive.Title>
            {t.description ? (
              <ToastPrimitive.Description className="text-on-surface-variant mt-1 text-xs">
                {t.description}
              </ToastPrimitive.Description>
            ) : null}
          </div>
          <ToastPrimitive.Close className="text-outline hover:text-on-surface transition-colors">
            <X size={16} aria-hidden />
          </ToastPrimitive.Close>
        </ToastPrimitive.Root>
      ))}
      <ToastPrimitive.Viewport className="fixed right-4 bottom-24 z-[100] flex w-96 max-w-[calc(100vw-2rem)] flex-col gap-2 outline-none md:bottom-4" />
    </ToastPrimitive.Provider>
  );
}
