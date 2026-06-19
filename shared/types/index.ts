export type WithChildren<P = unknown> = P & { children: React.ReactNode };

export type WithClassName<P = unknown> = P & { className?: string };

export type Currency = "USD" | "UZS";

export type StockStatus = "in-stock" | "preorder" | "made-to-order";
