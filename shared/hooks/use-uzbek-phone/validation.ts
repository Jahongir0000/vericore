import { z } from "zod";

import { isValidUzbekPhoneDigits, parsePhoneToDigits } from "./use-uzbek-phone";

export const UZBEK_PHONE_I18N = {
  required: "phoneRequired",
  invalid: "phoneInvalid",
} as const;

export const uzbekPhoneSchema = z
  .string()
  .min(1, UZBEK_PHONE_I18N.required)
  .refine((value) => isValidUzbekPhoneDigits(parsePhoneToDigits(value)), {
    message: UZBEK_PHONE_I18N.invalid,
  });

export function validateUzbekPhone(
  value: string | undefined,
  required = true,
): true | (typeof UZBEK_PHONE_I18N)[keyof typeof UZBEK_PHONE_I18N] {
  const trimmed = value?.trim();
  if (!trimmed) {
    return required ? UZBEK_PHONE_I18N.required : true;
  }
  const digits = parsePhoneToDigits(trimmed);
  if (!isValidUzbekPhoneDigits(digits)) {
    return UZBEK_PHONE_I18N.invalid;
  }
  return true;
}
