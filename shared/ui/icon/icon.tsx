import type { LucideIcon, LucideProps } from "lucide-react";
import { cn } from "@shared/lib/cn";

interface IconProps extends LucideProps {
  icon: LucideIcon;
}

export function Icon({ icon: IconComponent, className, ...props }: IconProps) {
  return <IconComponent className={cn("shrink-0", className)} aria-hidden {...props} />;
}
