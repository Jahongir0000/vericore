"use client";

import { Menu, X } from "lucide-react";
import { Link, usePathname } from "@shared/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { PRIMARY_NAV } from "@shared/config/nav";
import { getAllCategories } from "@entities/category";
import type { Locale } from "@shared/config/locales";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@shared/lib/cn";
import { LanguageSwitcher } from "./language-switcher";

const MENU_CATEGORIES = getAllCategories();
const CONTACT_HREF = "/kontakt";
const DESKTOP_NAV_MEDIA = "(min-width: 1280px)";
const HOME_SCROLL_THRESHOLD = 48;

const MAIN_NAV = PRIMARY_NAV.filter((item) => item.href !== CONTACT_HREF);

function isNavActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function navLinkClass(active: boolean, onHero?: boolean) {
  return cn(
    "focus-visible:ring-primary-container rounded-lg font-bold whitespace-nowrap transition-colors duration-200 focus-visible:ring-2 focus-visible:outline-none",
    "px-2.5 py-2 text-sm xl:px-3",
    active
      ? onHero
        ? "bg-white/95 text-primary shadow-sm"
        : "bg-primary-container/14 text-primary shadow-sm shadow-black/5 dark:shadow-black/20"
      : onHero
        ? "text-white/90 hover:bg-white/15 hover:text-white"
        : "text-on-surface hover:bg-on-surface/[0.06] hover:text-primary-container",
  );
}

const MENU_BACKDROP_Z = 140;
const MENU_PANEL_Z = 141;

export function HeaderAppBar() {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const menuTitleId = useId();
  const menuDescriptionId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const prevPathnameRef = useRef(pathname);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroScrolled, setHeroScrolled] = useState(false);
  const isHome = pathname === "/";
  const heroOverlay = isHome && !heroScrolled;
  const contactActive = isNavActive(pathname, CONTACT_HREF);

  const closeMenu = useCallback(() => setMobileMenuOpen(false), []);

  useEffect(() => {
    if (prevPathnameRef.current === pathname) return;
    prevPathnameRef.current = pathname;
    queueMicrotask(() => setMobileMenuOpen(false));
  }, [pathname]);

  useEffect(() => {
    if (!isHome) {
      queueMicrotask(() => setHeroScrolled(false));
      return;
    }
    const onScroll = () => setHeroScrolled(window.scrollY > HOME_SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const mq = window.matchMedia(DESKTOP_NAV_MEDIA);
    const onBreakpoint = () => {
      if (mq.matches) closeMenu();
    };
    mq.addEventListener("change", onBreakpoint);
    onBreakpoint();
    return () => mq.removeEventListener("change", onBreakpoint);
  }, [mobileMenuOpen, closeMenu]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileMenuOpen, closeMenu]);

  const mobileDrawer = mobileMenuOpen
    ? createPortal(
        <>
          <div
            className="bg-on-surface/60 fixed inset-0 backdrop-blur-sm"
            style={{ zIndex: MENU_BACKDROP_Z }}
            aria-hidden
            onClick={closeMenu}
          />
          <div
            id="site-mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-labelledby={menuTitleId}
            aria-describedby={menuDescriptionId}
            className="border-outline-variant/20 bg-surface-container-lowest fixed top-0 left-0 flex h-[100dvh] w-[min(100%,20rem)] max-w-[85vw] flex-col overflow-hidden rounded-br-3xl border-r shadow-xl"
            style={{ zIndex: MENU_PANEL_Z }}
          >
            <h2 id={menuTitleId} className="sr-only">
              {t("common.menu")}
            </h2>
            <p id={menuDescriptionId} className="sr-only">
              {t("nav.drawerHelp")}
            </p>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeMenu}
              className="text-outline hover:bg-surface-container-high hover:text-on-surface absolute top-4 right-4 z-10 rounded-lg p-2 transition-colors"
            >
              <X size={22} aria-hidden />
              <span className="sr-only">{t("common.close")}</span>
            </button>

            <nav
              className="flex min-h-0 flex-1 flex-col overflow-y-auto px-4 pt-14 pb-4"
              aria-label={t("common.menu")}
            >
              <ul className="flex flex-col gap-1">
                {PRIMARY_NAV.map((item) => {
                  const active = isNavActive(pathname, item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className={cn(
                          "font-headline block rounded-xl px-4 py-3 text-base font-bold transition-colors",
                          item.href === CONTACT_HREF
                            ? active
                              ? "bg-primary-container text-on-primary-container"
                              : "bg-primary-container/90 text-on-primary-container hover:bg-primary-container"
                            : active
                              ? "bg-primary-container/15 text-primary"
                              : "text-on-surface hover:bg-primary-container/15 hover:text-primary-container",
                        )}
                      >
                        {t(item.labelKey)}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="border-outline-variant/20 mt-4 border-t pt-4">
                <p className="font-label text-outline mb-2 px-4 text-xs tracking-widest uppercase">
                  {t("nav.equipmentCategories")}
                </p>
                <ul className="flex flex-col gap-1">
                  {MENU_CATEGORIES.map((category) => (
                    <li key={category.slug}>
                      <Link
                        href={`/katalog/${category.slug}`}
                        onClick={closeMenu}
                        className="font-headline text-on-surface-variant hover:bg-primary-container/15 hover:text-primary-container block rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors"
                      >
                        {category.i18n[locale].name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
            <div className="border-outline-variant/20 shrink-0 border-t px-6 pt-5 pb-[max(1rem,env(safe-area-inset-bottom))]">
              <p className="font-label text-outline mb-2 text-xs tracking-widest uppercase">
                {t("nav.language")}
              </p>
              <LanguageSwitcher />
            </div>
          </div>
        </>,
        document.body,
      )
    : null;

  return (
    <header
      role="banner"
      className={cn(
        "sticky top-0 z-50 overflow-hidden transition-[background-color,border-color,box-shadow] duration-300",
        heroOverlay
          ? "border-transparent bg-transparent shadow-none"
          : "glass-nav border-outline-variant/15 border-b bg-white/90 shadow-[0_1px_0_rgba(10,18,32,0.05)] backdrop-blur-xl dark:bg-slate-950/85",
      )}
    >
      {heroOverlay ? (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/45 via-black/15 to-transparent"
          aria-hidden
        />
      ) : null}

      <div className="relative mx-auto flex h-[4.25rem] w-full max-w-7xl min-w-0 items-center justify-between gap-3 px-4 sm:px-6 xl:h-[4.75rem] xl:gap-4 xl:px-8">
        {/* Left: menu + logo */}
        <div className="flex min-w-0 items-center gap-3">
          <button
            type="button"
            aria-label={t("common.menu")}
            aria-expanded={mobileMenuOpen}
            aria-controls={mobileMenuOpen ? "site-mobile-nav" : undefined}
            onClick={() => setMobileMenuOpen(true)}
            className={cn(
              "focus-visible:ring-primary-container rounded-full p-2 transition-colors focus-visible:ring-2 focus-visible:outline-none xl:hidden",
              heroOverlay
                ? "text-white hover:bg-white/15"
                : "text-on-surface hover:bg-on-surface/[0.06] hover:text-primary -m-0.5",
            )}
          >
            <Menu size={20} strokeWidth={2.25} aria-hidden />
          </button>
          <Link
            href="/"
            className={cn(
              "font-headline text-primary-container truncate text-lg font-extrabold tracking-tight sm:text-xl xl:text-2xl",
              heroOverlay && "drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]",
            )}
          >
            {t("common.brand")}
          </Link>
        </div>

        {/* Center: desktop nav */}
        <nav
          className="font-headline hidden min-w-0 flex-1 px-4 xl:block"
          aria-label={t("common.primaryNavigation")}
        >
          <ul className="flex flex-nowrap items-center justify-center gap-0.5 2xl:gap-1">
            {MAIN_NAV.map((item) => {
              const active = isNavActive(pathname, item.href);
              return (
                <li key={item.href} className="shrink-0">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={navLinkClass(active, heroOverlay)}
                  >
                    {t(item.labelKey)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right: contact (desktop) + languages — always visible */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            href={CONTACT_HREF}
            aria-current={contactActive ? "page" : undefined}
            className={cn(
              "font-headline hidden rounded-xl px-3 py-2 text-sm font-bold whitespace-nowrap transition-colors xl:inline-flex",
              "focus-visible:ring-primary-container focus-visible:ring-2 focus-visible:outline-none",
              heroOverlay
                ? contactActive
                  ? "bg-primary text-on-primary shadow-md"
                  : "text-primary-container bg-white/92 shadow-sm hover:bg-white"
                : contactActive
                  ? "bg-primary text-on-primary shadow-sm"
                  : "bg-primary-container text-on-primary-container hover:bg-primary-container/90",
            )}
          >
            {t("nav.contact")}
          </Link>
          <LanguageSwitcher variant={heroOverlay ? "onDark" : "default"} />
        </div>
      </div>
      {mobileDrawer}
    </header>
  );
}
