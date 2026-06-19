import type { LeadFormTelegramPayload, SubmitLeadFormResult } from "./types";

/** Client-safe: POST lead data to `/api/leads` (Telegram is sent on the server). */
export async function submitLeadForm(
  payload: LeadFormTelegramPayload,
): Promise<SubmitLeadFormResult> {
  try {
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.status === 400) {
      return { ok: false, error: "validation" };
    }

    if (response.status === 503) {
      return { ok: false, error: "not_configured" };
    }

    if (!response.ok) {
      return { ok: false, error: "server" };
    }

    return { ok: true };
  } catch {
    return { ok: false, error: "network" };
  }
}
