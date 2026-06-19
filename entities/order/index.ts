import { DEMO_ORDERS, ORDER_STAGES, type DemoOrder, type OrderStage } from "@shared/mock-data";

export function getOrderById(id: string): DemoOrder | undefined {
  return DEMO_ORDERS[id];
}

export function getOrderStages(): OrderStage[] {
  return ORDER_STAGES;
}

export function getStageStatus(
  currentStep: number,
  stage: OrderStage,
): "completed" | "in-progress" | "pending" {
  if (stage.step < currentStep) return "completed";
  if (stage.step === currentStep) return "in-progress";
  return "pending";
}

export type { DemoOrder, OrderStage };
