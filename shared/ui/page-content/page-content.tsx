import type { ReactNode } from "react";
import { cn } from "@shared/lib/cn";

interface PageContentProps {
  children: ReactNode;
  className?: string;
}

/** Canonical horizontal rhythm for marketing pages (matches Stitch desktop shells). */
export function PageContent({ children, className }: PageContentProps) {
  return <div className={cn("mx-auto w-full max-w-7xl px-6 lg:px-8", className)}>{children}</div>;
}
