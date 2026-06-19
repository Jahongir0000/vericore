import type { LucideIcon } from "lucide-react";
import { cn } from "@shared/lib/cn";

interface KpiTileProps {
  label: string;
  value: string;
  icon?: LucideIcon;
  variant?: "default" | "compact" | "stat";
  className?: string;
}

export function KpiTile({
  label,
  value,
  icon: IconComponent,
  variant = "default",
  className,
}: KpiTileProps) {
  if (variant === "stat") {
    return (
      <div
        className={cn(
          "bg-surface-container-lowest border-outline-variant/10 min-w-[176px] rounded-2xl border p-6 shadow-sm",
          className,
        )}
      >
        <span className="font-label text-primary text-4xl font-bold">{value}</span>
        <p className="text-on-surface-variant mt-2 text-xs leading-tight font-medium">{label}</p>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div
        className={cn(
          "bg-surface-container-lowest flex flex-col items-center p-4 text-center",
          className,
        )}
      >
        <span className="text-outline mb-1 text-[10px]">{label}</span>
        <span className="font-label text-primary font-bold">{value}</span>
      </div>
    );
  }

  return (
    <div
      className={cn("bg-surface-container-low flex items-center gap-3 rounded-2xl p-3", className)}
    >
      {IconComponent ? (
        <IconComponent className="text-primary shrink-0" size={20} aria-hidden />
      ) : null}
      <div className="min-w-0">
        <p className="text-outline text-[10px] leading-none font-bold tracking-wider uppercase">
          {label}
        </p>
        <p className="font-label text-on-surface truncate text-sm font-bold">{value}</p>
      </div>
    </div>
  );
}
