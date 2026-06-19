"use client";

import { Send, Globe, PlayCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@shared/i18n/navigation";
import { FOOTER_NAV } from "@shared/config/nav";
import { SITE_CONFIG } from "@shared/config/site";

export function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-dark w-full pt-10 pb-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-7 px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-headline text-2xl font-black tracking-tighter text-white">
            {t("common.brand")}
          </h2>
          <div className="flex flex-col items-center gap-1">
            {SITE_CONFIG.contact.phones.map((p) => (
              <a
                key={p.digits}
                href={`tel:${p.digits}`}
                className="font-label hover:text-secondary-container text-lg font-bold text-white transition-colors"
              >
                {p.display}
              </a>
            ))}
          </div>
          <a
            href={`mailto:${SITE_CONFIG.contact.email}`}
            className="font-body text-sm text-slate-400 transition-colors hover:text-white"
          >
            {SITE_CONFIG.contact.email}
          </a>
          <p className="max-w-[260px] text-[11px] leading-relaxed text-slate-500">
            {t("footer.copyright", { year })}
          </p>
        </div>

        <ul className="flex flex-wrap justify-center gap-6">
          {FOOTER_NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="font-body hover:text-secondary-container text-sm text-slate-400 transition-colors"
              >
                {t(item.labelKey)}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex gap-4">
          <li>
            <a
              href={SITE_CONFIG.social.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary-container flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-colors"
              aria-label="Telegram"
            >
              <Send size={18} aria-hidden />
            </a>
          </li>
          <li>
            <a
              href={SITE_CONFIG.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary-container flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-colors"
              aria-label="Facebook"
            >
              <Globe size={18} aria-hidden />
            </a>
          </li>
          <li>
            <a
              href={SITE_CONFIG.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary-container flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-colors"
              aria-label="YouTube"
            >
              <PlayCircle size={18} aria-hidden />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
