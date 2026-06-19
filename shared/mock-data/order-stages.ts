export type OrderStageStatus = "completed" | "in-progress" | "pending";

export interface OrderStage {
  step: number;
  key: "consultation" | "deposit" | "production" | "delivery" | "installation" | "commissioning";
  iconName: "headset" | "credit-card" | "factory" | "truck" | "wrench" | "graduation-cap";
}

export const ORDER_STAGES: OrderStage[] = [
  { step: 1, key: "consultation", iconName: "headset" },
  { step: 2, key: "deposit", iconName: "credit-card" },
  { step: 3, key: "production", iconName: "factory" },
  { step: 4, key: "delivery", iconName: "truck" },
  { step: 5, key: "installation", iconName: "wrench" },
  { step: 6, key: "commissioning", iconName: "graduation-cap" },
];

export interface DemoOrder {
  id: string;
  productSlug: string;
  customerName: string;
  startedAt: string;
  expectedDeliveryAt: string;
  currentStep: number;
}

export const DEMO_ORDERS: Record<string, DemoOrder> = {
  "vc-2026-001": {
    id: "vc-2026-001",
    productSlug: "hzs35",
    customerName: "Akmal Karimov",
    startedAt: "2026-03-12",
    expectedDeliveryAt: "2026-05-05",
    currentStep: 4,
  },
};
