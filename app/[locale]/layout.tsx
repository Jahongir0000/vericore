import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@shared/i18n/routing";
import { HeaderAppBar } from "@widgets/header-app-bar";
import { FloatingContactFab } from "@features/contact-channels";
import { Toaster } from "@shared/ui/toast";
import { OrganizationJsonLd } from "@shared/seo/json-ld";
import "@shared/styles/globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="bg-surface text-on-surface min-h-dvh overflow-x-hidden antialiased">
        <a
          href="#main-content"
          className="focus:bg-primary focus:text-on-primary sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:rounded-md focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <NextIntlClientProvider>
          <OrganizationJsonLd />
          <HeaderAppBar />
          {children}
          <FloatingContactFab />
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
