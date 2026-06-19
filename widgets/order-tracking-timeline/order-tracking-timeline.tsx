"use client";

import {
  Headset,
  CreditCard,
  Factory,
  Truck,
  Wrench,
  GraduationCap,
  CheckCircle2,
  Loader2,
  Circle,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { ORDER_STAGES } from "@shared/mock-data";
import { getStageStatus } from "@entities/order";
import { cn } from "@shared/lib/cn";

const ICON_MAP = {
  headset: Headset,
  "credit-card": CreditCard,
  factory: Factory,
  truck: Truck,
  wrench: Wrench,
  "graduation-cap": GraduationCap,
} as const;

interface OrderTrackingTimelineProps {
  currentStep: number;
  variant?: "vertical" | "horizontal";
}

export function OrderTrackingTimeline({
  currentStep,
  variant = "vertical",
}: OrderTrackingTimelineProps) {
  const t = useTranslations("order");

  if (variant === "horizontal") {
    return (
      <ol className="hide-scrollbar flex gap-3 overflow-x-auto py-4">
        {ORDER_STAGES.map((stage) => {
          const Icon = ICON_MAP[stage.iconName];
          const status = getStageStatus(currentStep, stage);
          return (
            <li
              key={stage.key}
              className={cn(
                "flex min-w-[120px] flex-col items-center gap-2 rounded-2xl p-3 text-center",
                status === "completed" && "bg-tertiary-container/15",
                status === "in-progress" && "bg-primary-container/15 ring-primary-container ring-2",
                status === "pending" && "bg-surface-container-low",
              )}
            >
              <Icon
                size={20}
                aria-hidden
                className={cn(
                  status === "completed" && "text-tertiary-container",
                  status === "in-progress" && "text-primary",
                  status === "pending" && "text-outline",
                )}
              />
              <span className="font-label text-on-surface-variant text-[10px] font-bold tracking-wider uppercase">
                #{stage.step}
              </span>
              <span className="text-xs leading-tight font-bold">{t(`stages.${stage.key}`)}</span>
            </li>
          );
        })}
      </ol>
    );
  }

  return (
    <ol className="relative space-y-3 pl-8">
      <span className="bg-outline-variant absolute top-3 bottom-3 left-3 w-px" aria-hidden />
      {ORDER_STAGES.map((stage) => {
        const Icon = ICON_MAP[stage.iconName];
        const status = getStageStatus(currentStep, stage);
        return (
          <li key={stage.key} className="relative flex items-center gap-3">
            <span
              aria-hidden
              className={cn(
                "absolute -left-8 flex h-6 w-6 items-center justify-center rounded-full",
                status === "completed" && "bg-tertiary-container text-on-tertiary-container",
                status === "in-progress" && "bg-primary text-on-primary",
                status === "pending" && "bg-surface-container-high text-outline",
              )}
            >
              {status === "completed" ? (
                <CheckCircle2 size={12} aria-hidden />
              ) : status === "in-progress" ? (
                <Loader2 size={12} className="animate-spin" aria-hidden />
              ) : (
                <Circle size={10} aria-hidden />
              )}
            </span>
            <div
              className={cn(
                "flex flex-1 items-center gap-3 rounded-xl p-3",
                status === "completed" && "bg-tertiary-container/10",
                status === "in-progress" && "bg-primary-container/10",
                status === "pending" && "bg-surface-container-low",
              )}
            >
              <Icon size={18} aria-hidden className="text-on-surface-variant" />
              <div className="min-w-0 flex-1">
                <p className="font-label text-outline text-xs font-bold tracking-wider uppercase">
                  Step {stage.step}
                </p>
                <p className="text-on-surface font-bold">{t(`stages.${stage.key}`)}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
