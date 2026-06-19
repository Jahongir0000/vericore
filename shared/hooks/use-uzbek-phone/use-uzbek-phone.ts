import { useCallback } from "react";

import { UZBEK_PHONE_I18N, validateUzbekPhone } from "./validation";

const UZBEK_PHONE_PREFIX = "+998 ";

const UZBEK_PHONE_DIGITS_REGEX = /^998[1-9][0-9]{8}$/;

export function isValidUzbekPhoneDigits(digits: string): boolean {
  if (!digits || digits.length !== 12) return false;
  return UZBEK_PHONE_DIGITS_REGEX.test(digits);
}

export function parsePhoneToDigits(value: string | undefined): string {
  if (!value) return "";
  const digits = value.replace(/\D/g, "");
  if (digits.startsWith("998")) return digits.slice(0, 12);
  if (digits.startsWith("8") && digits.length === 9) return "998" + digits.slice(1);
  if (digits.length <= 9) return "998" + digits;
  return "998" + digits.slice(-9);
}

export function formatPhoneDisplay(value: string | undefined): string {
  const digits = parsePhoneToDigits(value);
  if (digits.length < 4) return digits ? `+${digits}` : "";
  const rest = digits.slice(3);
  const parts: string[] = [UZBEK_PHONE_PREFIX.trim()];
  if (rest.length > 0) parts.push(rest.slice(0, 2));
  if (rest.length > 2) parts.push(rest.slice(2, 5));
  if (rest.length > 5) parts.push(rest.slice(5, 7));
  if (rest.length > 7) parts.push(rest.slice(7, 9));
  return parts.filter(Boolean).join(" ");
}

export function applyPhoneMask(inputValue: string): string {
  const digits = inputValue.replace(/\D/g, "");
  if (digits.length === 0) return "";

  let national: string;
  if (digits.startsWith("998")) {
    national = digits.slice(3, 12);
  } else if (digits.startsWith("8") && digits.length <= 10) {
    national = digits.slice(1, 10);
  } else if (digits.length > 9) {
    national = digits.slice(-9);
  } else {
    national = digits;
  }

  const formatted: string[] = [UZBEK_PHONE_PREFIX];
  if (national.length > 0) formatted.push(national.slice(0, 2));
  if (national.length > 2) formatted.push(national.slice(2, 5));
  if (national.length > 5) formatted.push(national.slice(5, 7));
  if (national.length > 7) formatted.push(national.slice(7, 9));

  return formatted.join(" ").trim();
}

export function useUzbekPhone() {
  const validation = useCallback(
    (required: boolean) => ({
      validate: (value: string | undefined) => validateUzbekPhone(value, required),
    }),
    [],
  );

  return {
    formatForDisplay: formatPhoneDisplay,
    formatForInput: applyPhoneMask,
    toDigits: parsePhoneToDigits,
    validation,
    isValidUzbekPhoneDigits,
    i18nKeys: UZBEK_PHONE_I18N,
  };
}
