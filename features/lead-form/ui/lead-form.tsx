"use client";

/* eslint-disable react-hooks/incompatible-library -- react-hook-form watch subscription cannot be statically memoized */

import { useEffect } from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale, useTranslations } from "next-intl";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@shared/ui/button";
import { FormField } from "@shared/ui/form-field";
import { Input } from "@shared/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@shared/ui/select";
import { toast } from "@shared/ui/toast";
import { submitLeadForm } from "@shared/lib/telegram";
import { formatPhoneDisplay, parsePhoneToDigits } from "@shared/hooks/use-uzbek-phone";
import { getAllCategories } from "@entities/category";
import { getAllRegions } from "@entities/region";
import type { Locale } from "@shared/config/locales";
import { applyPhoneMask } from "@shared/hooks/use-uzbek-phone";
import { leadFormSchema, type LeadFormData, leadFormStepFields } from "../model/schema";
import { useLeadDraftStore } from "../model/store";

const PHONE_INPUT_PLACEHOLDER = "+998 90 123 45 67";

export function LeadForm() {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const draft = useLeadDraftStore((s) => s.draft);
  const step = useLeadDraftStore((s) => s.step);
  const setStep = useLeadDraftStore((s) => s.setStep);
  const setDraft = useLeadDraftStore((s) => s.setDraft);
  const reset = useLeadDraftStore((s) => s.reset);

  const methods = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: draft,
    mode: "onChange",
  });
  const { register, handleSubmit, formState, watch, setValue, trigger, control } = methods;
  const errors = formState.errors;
  const category = watch("category");
  const region = watch("region");

  useEffect(() => {
    const subscription = watch((value) => {
      setDraft(value as Partial<LeadFormData>);
    });
    return () => subscription.unsubscribe();
  }, [watch, setDraft]);

  const categories = getAllCategories();
  const regions = getAllRegions();

  async function onNext() {
    const fields = leadFormStepFields[step];
    const valid = await trigger(fields);
    if (!valid) return;
    setStep((step + 1) as 1 | 2 | 3);
  }

  function onBack() {
    if (step > 1) setStep((step - 1) as 1 | 2 | 3);
  }

  async function onSubmit(data: LeadFormData) {
    const categoryItem = categories.find((c) => c.slug === data.category);
    const regionItem = regions.find((r) => r.slug === data.region);

    const result = await submitLeadForm({
      source: "contact",
      name: data.name.trim(),
      phone: formatPhoneDisplay(parsePhoneToDigits(data.phone)),
      locale,
      category: data.category,
      categoryLabel: categoryItem?.i18n[locale].name,
      region: data.region,
      regionLabel: regionItem?.i18n[locale],
      budget: data.budget,
      duration: data.duration,
      callTime: data.callTime,
    });

    if (!result.ok) {
      toast({
        title: t("errors.errorTitle"),
        description: t("errors.errorBody"),
        variant: "error",
      });
      return;
    }

    toast({ title: t("contact.formSuccess"), variant: "success", description: data.name });
    reset();
  }

  function getError(key: keyof LeadFormData): string | undefined {
    const code = errors[key]?.message;
    if (!code) return undefined;
    return t(`errors.validation.${code}`);
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-outline-variant/15 bg-surface-container-low shadow-soft space-y-8 rounded-[2rem] border p-6 lg:p-8"
      >
        <header className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-label text-primary text-sm font-bold tracking-widest uppercase">
            {t("contact.formTitle")}
          </h2>
          <span className="font-label text-on-surface-variant border-outline-variant/20 bg-surface-container-lowest rounded-md border px-2 py-1 text-xs">
            {t("contact.formStepLabel", { current: step, total: 3 })}
          </span>
        </header>

        <div
          className="bg-outline-variant/20 h-1.5 w-full overflow-hidden rounded-full"
          aria-hidden
        >
          <span
            className="bg-primary-container block h-full rounded-full transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        {step === 1 ? (
          <FormField label={t("contact.formStep1Title")} error={getError("category")}>
            <Select
              value={category ?? ""}
              onValueChange={(v) => setValue("category", v, { shouldValidate: true })}
            >
              <SelectTrigger>
                <SelectValue placeholder="…" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((c) => (
                  <SelectItem key={c.slug} value={c.slug}>
                    {c.i18n[locale].name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormField>
        ) : null}

        {step === 2 ? (
          <div className="space-y-4">
            <FormField label={t("contact.formRegionLabel")} error={getError("region")}>
              <Select
                value={region ?? ""}
                onValueChange={(v) => setValue("region", v, { shouldValidate: true })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="…" />
                </SelectTrigger>
                <SelectContent>
                  {regions.map((r) => (
                    <SelectItem key={r.slug} value={r.slug}>
                      {r.i18n[locale]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormField>

            <FormField label={t("contact.formBudgetLabel")}>
              <Input placeholder={t("contact.formBudgetPlaceholder")} {...register("budget")} />
            </FormField>

            <FormField label={t("contact.formDurationLabel")}>
              <Input placeholder={t("contact.formDurationPlaceholder")} {...register("duration")} />
            </FormField>
          </div>
        ) : null}

        {step === 3 ? (
          <div className="space-y-4">
            <FormField label={t("contact.formNameLabel")} error={getError("name")}>
              <Input
                placeholder={t("contact.formNameLabel")}
                hasError={!!errors.name}
                {...register("name")}
              />
            </FormField>

            <FormField label={t("contact.formPhoneLabel")} error={getError("phone")}>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <Input
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder={PHONE_INPUT_PLACEHOLDER}
                    hasError={!!errors.phone}
                    value={field.value ?? ""}
                    onChange={(e) => field.onChange(applyPhoneMask(e.target.value))}
                    onBlur={field.onBlur}
                    ref={field.ref}
                  />
                )}
              />
            </FormField>

            <FormField label={t("contact.formCallTimeLabel")}>
              <Input placeholder="…" {...register("callTime")} />
            </FormField>
          </div>
        ) : null}

        <footer className="flex items-center justify-between gap-3">
          <Button
            type="button"
            variant="ghost"
            onClick={onBack}
            disabled={step === 1 || formState.isSubmitting}
          >
            <ArrowLeft size={16} aria-hidden />
            {t("common.back")}
          </Button>
          {step < 3 ? (
            <Button type="button" variant="primary" onClick={onNext}>
              {t("common.next")}
              <ArrowRight size={16} aria-hidden />
            </Button>
          ) : (
            <Button type="submit" variant="primary" disabled={formState.isSubmitting}>
              {formState.isSubmitting ? t("common.loading") : t("contact.formSubmit")}
            </Button>
          )}
        </footer>
      </form>
    </FormProvider>
  );
}
