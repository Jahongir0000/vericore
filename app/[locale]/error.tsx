"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@shared/ui/button";
import { RefreshCw } from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  const t = useTranslations("errors");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center space-y-6 px-6 py-24 text-center">
      <h1 className="font-display text-error text-7xl font-black">!</h1>
      <h2 className="font-headline text-2xl font-extrabold">{t("errorTitle")}</h2>
      <p className="text-on-surface-variant max-w-sm">{t("errorBody")}</p>
      <Button onClick={reset} variant="primary" size="lg">
        <RefreshCw size={18} aria-hidden />
        {t("tryAgain")}
      </Button>
    </main>
  );
}
