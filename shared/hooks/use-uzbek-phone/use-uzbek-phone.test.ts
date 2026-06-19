import { describe, expect, it } from "vitest";

import {
  applyPhoneMask,
  formatPhoneDisplay,
  isValidUzbekPhoneDigits,
  parsePhoneToDigits,
} from "./use-uzbek-phone";

describe("isValidUzbekPhoneDigits", () => {
  it("returns true for valid 12-digit Uzbek phone", () => {
    expect(isValidUzbekPhoneDigits("998901234567")).toBe(true);
    expect(isValidUzbekPhoneDigits("998331234567")).toBe(true);
  });

  it("returns false for wrong length", () => {
    expect(isValidUzbekPhoneDigits("99890123456")).toBe(false);
    expect(isValidUzbekPhoneDigits("9989012345678")).toBe(false);
    expect(isValidUzbekPhoneDigits("")).toBe(false);
  });

  it("returns false when first national digit is 0", () => {
    expect(isValidUzbekPhoneDigits("998001234567")).toBe(false);
  });
});

describe("parsePhoneToDigits", () => {
  it("returns empty for undefined/empty", () => {
    expect(parsePhoneToDigits(undefined)).toBe("");
    expect(parsePhoneToDigits("")).toBe("");
  });

  it("strips non-digits", () => {
    expect(parsePhoneToDigits("+998 90 123 45 67")).toBe("998901234567");
  });

  it("handles leading 998", () => {
    expect(parsePhoneToDigits("998901234567")).toBe("998901234567");
  });

  it("handles 8 + 9 digits (local format)", () => {
    expect(parsePhoneToDigits("8901234567")).toBe("998901234567");
  });

  it("adds 998 for 9 or fewer digits", () => {
    expect(parsePhoneToDigits("901234567")).toBe("998901234567");
  });

  it("takes last 9 digits when more than 9", () => {
    expect(parsePhoneToDigits("123456789012345")).toBe("998789012345");
  });
});

describe("formatPhoneDisplay", () => {
  it("formats as +998 XX XXX XX XX", () => {
    expect(formatPhoneDisplay("998901234567")).toBe("+998 90 123 45 67");
  });

  it("returns empty for empty input", () => {
    expect(formatPhoneDisplay("")).toBe("");
  });

  it("returns partial for short input", () => {
    expect(formatPhoneDisplay("998")).toBe("+998");
  });
});

describe("applyPhoneMask", () => {
  it("formats digits with Uzbek phone format", () => {
    const result = applyPhoneMask("998901234567");
    expect(result).toContain("998");
    expect(result).toContain("90");
    expect(result).toContain("123");
  });

  it("returns empty for empty input", () => {
    expect(applyPhoneMask("")).toBe("");
  });

  it("handles partial input", () => {
    expect(applyPhoneMask("90")).toContain("90");
  });
});
