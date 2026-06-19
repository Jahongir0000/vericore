import type { LeadFormTelegramPayload } from "./types";

function escapeHtml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function line(label: string, value: string | undefined): string | null {
  const trimmed = value?.trim();
  if (!trimmed) return null;
  return `<b>${escapeHtml(label)}:</b> ${escapeHtml(trimmed)}`;
}

export function formatLeadTelegramMessage(payload: LeadFormTelegramPayload): string {
  const sourceTitle =
    payload.source === "contact" ? "Contact — project request" : "Home — business plan request";

  const rows = [
    `<b>📩 ${escapeHtml(sourceTitle)}</b>`,
    line("Name", payload.name),
    line("Phone", payload.phone),
    line("Category", payload.categoryLabel ?? payload.category),
    line("Region", payload.regionLabel ?? payload.region),
    line("Budget", payload.budget),
    line("Timeline", payload.duration),
    line("Call time", payload.callTime),
    line("Locale", payload.locale),
  ].filter((row): row is string => row !== null);

  return rows.join("\n");
}
