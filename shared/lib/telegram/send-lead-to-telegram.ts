import { formatLeadTelegramMessage } from "./format-lead-message";
import type { LeadFormTelegramPayload } from "./types";

function getTelegramConfig(): { botToken: string; chatId: string } {
  const botToken = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = process.env.TELEGRAM_CHAT_ID?.trim();

  if (!botToken || !chatId) {
    throw new Error("TELEGRAM_NOT_CONFIGURED");
  }

  return { botToken, chatId };
}

export function isTelegramConfigured(): boolean {
  return Boolean(process.env.TELEGRAM_BOT_TOKEN?.trim() && process.env.TELEGRAM_CHAT_ID?.trim());
}

/** Sends a formatted lead payload to the Telegram group (server-only). */
export async function sendLeadToTelegram(payload: LeadFormTelegramPayload): Promise<void> {
  const { botToken, chatId } = getTelegramConfig();
  const text = formatLeadTelegramMessage(payload);

  const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(`TELEGRAM_API_ERROR:${response.status}:${detail}`);
  }

  const data = (await response.json()) as { ok?: boolean };
  if (!data.ok) {
    throw new Error("TELEGRAM_API_ERROR:response_not_ok");
  }
}
