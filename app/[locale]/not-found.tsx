"use client";

import { useTranslations } from "next-intl";
import { Link } from "@shared/i18n/navigation";
import { Button } from "@shared/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  const t = useTranslations("errors");

  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center space-y-6 px-6 py-24 text-center">
      <h1 className="font-display text-primary-container text-7xl font-black">404</h1>
      <h2 className="font-headline text-2xl font-extrabold">{t("notFoundTitle")}</h2>
      <p className="text-on-surface-variant max-w-sm">{t("notFoundBody")}</p>
      <Button asChild variant="primary" size="lg">
        <Link href="/">
          <Home size={18} aria-hidden />
          {t("goHome")}
        </Link>
      </Button>
    </main>
  );
}
