"use client";

import type { LucideIcon } from "lucide-react";
import { Mail, MessageCircle, Phone, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { SITE_CONFIG } from "@shared/config/site";

const cardClassName =
  "border-outline-variant/10 bg-surface-container-lowest hover:border-outline-variant/20 flex flex-col gap-4 rounded-xl border p-5 shadow-[0_12px_32px_rgba(10,18,32,0.04)] transition-transform active:scale-[0.99] lg:rounded-2xl lg:p-6";

type LinkChannel = {
  kind: "link";
  label: string;
  value: string;
  icon: LucideIcon;
  iconWell: string;
  href: string;
};

type MultiLineChannel = {
  kind: "phones" | "whatsapps";
  label: string;
  icon: LucideIcon;
  iconWell: string;
};

function whatsappHref(digits: string): string {
  const n = digits.replace(/\D/g, "");
  return `https://wa.me/${n}`;
}

export function ChannelCards() {
  const t = useTranslations("contact");

  const channels: (LinkChannel | MultiLineChannel)[] = [
    {
      kind: "link",
      label: t("channelTelegramLabel"),
      value: `@${SITE_CONFIG.contact.telegram}`,
      icon: Send,
      iconWell: "bg-sky-100 text-sky-600 dark:bg-sky-950/40 dark:text-sky-400",
      href: SITE_CONFIG.contact.telegramUrl,
    },
    {
      kind: "whatsapps",
      label: t("channelWhatsappLabel"),
      icon: MessageCircle,
      iconWell: "bg-green-100 text-green-600 dark:bg-green-950/40 dark:text-green-400",
    },
    {
      kind: "phones",
      label: t("channelPhoneLabel"),
      icon: Phone,
      iconWell:
        "bg-primary-container/25 text-primary dark:bg-cyan-950/40 dark:text-primary-container",
    },
    {
      kind: "link",
      label: t("channelEmailLabel"),
      value: SITE_CONFIG.contact.email,
      icon: Mail,
      iconWell: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
      href: `mailto:${SITE_CONFIG.contact.email}`,
    },
  ];

  return (
    <section
      className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4"
      aria-label="Contact channels"
    >
      {channels.map((channel) => {
        const Icon = channel.icon;

        if (channel.kind === "phones") {
          return (
            <div key={channel.label} className={cardClassName}>
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg lg:h-11 lg:w-11 lg:rounded-xl ${channel.iconWell}`}
              >
                <Icon size={22} aria-hidden className="shrink-0" />
              </span>
              <div className="space-y-2">
                <p className="font-label text-outline text-[11px] tracking-wider uppercase lg:text-xs">
                  {channel.label}
                </p>
                <div className="flex flex-col gap-2">
                  {SITE_CONFIG.contact.phones.map((p) => (
                    <a
                      key={p.digits}
                      href={`tel:${p.digits}`}
                      className="font-headline text-on-surface hover:text-primary text-sm leading-snug font-bold"
                    >
                      {p.display}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          );
        }

        if (channel.kind === "whatsapps") {
          return (
            <div key={channel.label} className={cardClassName}>
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg lg:h-11 lg:w-11 lg:rounded-xl ${channel.iconWell}`}
              >
                <Icon size={22} aria-hidden className="shrink-0" />
              </span>
              <div className="space-y-2">
                <p className="font-label text-outline text-[11px] tracking-wider uppercase lg:text-xs">
                  {channel.label}
                </p>
                <div className="flex flex-col gap-2">
                  {SITE_CONFIG.contact.whatsapps.map((w) => (
                    <a
                      key={w.digits}
                      href={whatsappHref(w.digits)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-headline text-on-surface hover:text-primary text-sm leading-snug font-bold"
                    >
                      {w.display}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          );
        }

        if (channel.kind === "link") {
          return (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={cardClassName}
            >
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg lg:h-11 lg:w-11 lg:rounded-xl ${channel.iconWell}`}
              >
                <Icon size={22} aria-hidden className="shrink-0" />
              </span>
              <div className="space-y-1">
                <p className="font-label text-outline text-[11px] tracking-wider uppercase lg:text-xs">
                  {channel.label}
                </p>
                <p className="font-headline text-on-surface text-sm leading-snug font-bold">
                  {channel.value}
                </p>
              </div>
            </a>
          );
        }

        return null;
      })}
    </section>
  );
}
