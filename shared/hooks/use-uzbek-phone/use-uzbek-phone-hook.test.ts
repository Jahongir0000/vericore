import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { UZBEK_PHONE_I18N } from "./validation";
import { useUzbekPhone } from "./use-uzbek-phone";

describe("useUzbekPhone hook", () => {
  it("returns formatForDisplay, formatForInput, toDigits, validation", () => {
    const { result } = renderHook(() => useUzbekPhone());
    expect(typeof result.current.formatForDisplay).toBe("function");
    expect(typeof result.current.formatForInput).toBe("function");
    expect(typeof result.current.toDigits).toBe("function");
    expect(typeof result.current.validation).toBe("function");
  });

  it("formatForDisplay formats phone", () => {
    const { result } = renderHook(() => useUzbekPhone());
    expect(result.current.formatForDisplay("998901234567")).toBe("+998 90 123 45 67");
  });

  it("toDigits extracts digits", () => {
    const { result } = renderHook(() => useUzbekPhone());
    expect(result.current.toDigits("+998 90 123 45 67")).toBe("998901234567");
  });

  it("validation(required=true) returns phoneRequired for empty", () => {
    const { result } = renderHook(() => useUzbekPhone());
    const opts = result.current.validation(true);
    expect(opts.validate?.("")).toBe(UZBEK_PHONE_I18N.required);
  });

  it("validation returns phoneInvalid for invalid phone", () => {
    const { result } = renderHook(() => useUzbekPhone());
    const opts = result.current.validation(false);
    expect(opts.validate?.("123")).toBe(UZBEK_PHONE_I18N.invalid);
  });

  it("validation returns true for valid phone", () => {
    const { result } = renderHook(() => useUzbekPhone());
    const opts = result.current.validation(false);
    expect(opts.validate?.("+998 90 123 45 67")).toBe(true);
  });
});
