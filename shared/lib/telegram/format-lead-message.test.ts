import { describe, expect, it } from "vitest";

import { formatLeadTelegramMessage } from "./format-lead-message";

describe("formatLeadTelegramMessage", () => {
  it("formats contact lead with all fields", () => {
    const text = formatLeadTelegramMessage({
      source: "contact",
      name: "Akmal",
      phone: "+998 90 123 45 67",
      categoryLabel: "Beton zavodlari",
      regionLabel: "Toshkent",
      budget: "50 000 USD",
      duration: "6 oy",
      callTime: "10:00",
      locale: "uz",
    });

    expect(text).toContain("Contact");
    expect(text).toContain("Akmal");
    expect(text).toContain("Beton zavodlari");
    expect(text).toContain("Toshkent");
  });

  it("formats lead-magnet with name and phone only", () => {
    const text = formatLeadTelegramMessage({
      source: "lead-magnet",
      name: "Dilnoza",
      phone: "+998 91 777 77 60",
    });

    expect(text).toContain("business plan");
    expect(text).toContain("Dilnoza");
    expect(text).not.toContain("Category");
  });

  it("escapes HTML in user input", () => {
    const text = formatLeadTelegramMessage({
      source: "lead-magnet",
      name: "<script>",
      phone: "+998 90 123 45 67",
    });

    expect(text).toContain("&lt;script&gt;");
    expect(text).not.toContain("<script>");
  });
});
