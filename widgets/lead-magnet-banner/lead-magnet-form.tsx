"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  applyPhoneMask,
  formatPhoneDisplay,
  isValidUzbekPhoneDigits,
  parsePhoneToDigits,
  UZBEK_PHONE_I18N,
} from "@shared/hooks/use-uzbek-phone";
import { submitLeadForm } from "@shared/lib/telegram";
import { Button } from "@shared/ui/button";
import { toast } from "@shared/ui/toast";

const PHONE_INPUT_PLACEHOLDER = "+998 90 123 45 67";

export function LeadMagnetForm() {
  const t = useTranslations();
  const [pending, setPending] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998 ");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) {
      toast({
        title: t("errors.validation.nameRequired"),
        variant: "error",
      });
      return;
    }
    const digits = parsePhoneToDigits(phone);
    if (!isValidUzbekPhoneDigits(digits)) {
      toast({
        title: t(`errors.validation.${UZBEK_PHONE_I18N.invalid}`),
        variant: "error",
      });
      return;
    }
    setPending(true);
    const result = await submitLeadForm({
      source: "lead-magnet",
      name: name.trim(),
      phone: formatPhoneDisplay(digits),
    });
    setPending(false);

    if (!result.ok) {
      toast({
        title: t("errors.errorTitle"),
        description: t("errors.errorBody"),
        variant: "error",
      });
      return;
    }

    setName("");
    setPhone("+998 ");
    toast({ title: t("contact.formSuccess"), variant: "success" });
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={t("contact.formNameLabel")}
        className="focus:ring-primary-container h-14 w-full rounded-xl border-none bg-white/5 px-4 text-white placeholder:text-white/40 focus:ring-2 focus:outline-none"
      />
      <input
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        value={phone}
        onChange={(e) => setPhone(applyPhoneMask(e.target.value))}
        placeholder={PHONE_INPUT_PLACEHOLDER}
        className="focus:ring-primary-container h-14 w-full rounded-xl border-none bg-white/5 px-4 text-white placeholder:text-white/40 focus:ring-2 focus:outline-none"
      />
      <Button type="submit" variant="primary" size="xl" block disabled={pending}>
        {pending ? t("common.loading") : t("home.leadMagnetSubmit")}
      </Button>
    </form>
  );
}
