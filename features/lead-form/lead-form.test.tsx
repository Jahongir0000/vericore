import { describe, expect, it } from "vitest";
import { leadFormSchema } from "./model/schema";

describe("lead form schema", () => {
  it("rejects empty name", () => {
    const result = leadFormSchema.safeParse({
      category: "beton-zavodlari",
      region: "tashkent-city",
      name: "",
      phone: "+998991234567",
    });
    expect(result.success).toBe(false);
  });

  it("rejects bad phone", () => {
    const result = leadFormSchema.safeParse({
      category: "beton-zavodlari",
      region: "tashkent-city",
      name: "Akmal",
      phone: "abc",
    });
    expect(result.success).toBe(false);
  });

  it("rejects invalid Uzbek operator", () => {
    const result = leadFormSchema.safeParse({
      category: "beton-zavodlari",
      region: "tashkent-city",
      name: "Akmal",
      phone: "+998 00 123 45 67",
    });
    expect(result.success).toBe(false);
  });

  it("accepts valid input", () => {
    const result = leadFormSchema.safeParse({
      category: "beton-zavodlari",
      region: "tashkent-city",
      name: "Akmal",
      phone: "+998 91 777 77 60",
    });
    expect(result.success).toBe(true);
  });
});
