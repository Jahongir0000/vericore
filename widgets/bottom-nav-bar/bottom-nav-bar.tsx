"use client";

import { Send, MessageCircle, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { SITE_CONFIG } from "@shared/config/site";

export function BottomNavBar() {
  const t = useTranslations("bottomNav");

  return (
    <nav
      role="navigation"
      aria-label="Quick contact"
      className="bg-surface-container-lowest border-outline-variant/30 fixed right-0 bottom-0 left-0 z-40 rounded-t-2xl border-t shadow-[0_-8px_24px_rgba(10,18,32,0.08)] md:hidden"
    >
      <ul className="flex items-center justify-around px-4 py-3">
        <li className="flex-1">
          <a
            href={SITE_CONFIG.contact.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant flex flex-col items-center justify-center transition-transform active:scale-95"
          >
            <Send size={22} aria-hidden />
            <span className="font-body mt-1 text-[11px] font-bold tracking-wider uppercase">
              {t("telegram")}
            </span>
          </a>
        </li>
        <li className="flex-1">
          <a
            href={SITE_CONFIG.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant flex flex-col items-center justify-center transition-transform active:scale-95"
          >
            <MessageCircle size={22} className="text-trust-green" aria-hidden />
            <span className="font-body mt-1 text-[11px] font-bold tracking-wider uppercase">
              {t("whatsapp")}
            </span>
          </a>
        </li>
        <li className="flex-1">
          <a
            href={`tel:${SITE_CONFIG.contact.phoneDigits}`}
            className="bg-primary-container/10 text-primary flex flex-col items-center justify-center rounded-xl px-4 py-1 transition-transform active:scale-95"
          >
            <Phone size={22} aria-hidden />
            <span className="font-body mt-1 text-[11px] font-bold tracking-wider uppercase">
              {t("call")}
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
