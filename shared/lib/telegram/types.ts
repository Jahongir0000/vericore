export type LeadFormSource = "contact" | "lead-magnet";

export interface LeadFormTelegramPayload {
  source: LeadFormSource;
  name: string;
  phone: string;
  locale?: string;
  category?: string;
  categoryLabel?: string;
  region?: string;
  regionLabel?: string;
  budget?: string;
  duration?: string;
  callTime?: string;
}

export type SubmitLeadFormError = "network" | "server" | "validation" | "not_configured";

export type SubmitLeadFormResult = { ok: true } | { ok: false; error: SubmitLeadFormError };
