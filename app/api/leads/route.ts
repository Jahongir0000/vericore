import { NextResponse } from "next/server";

import { leadFormTelegramPayloadSchema } from "@shared/lib/telegram/lead-payload-schema";
import {
  isTelegramConfigured,
  sendLeadToTelegram,
} from "@shared/lib/telegram/send-lead-to-telegram";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const parsed = leadFormTelegramPayloadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "validation" }, { status: 400 });
  }

  if (!isTelegramConfigured()) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  try {
    await sendLeadToTelegram(parsed.data);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[api/leads] Telegram send failed:", error);
    return NextResponse.json({ error: "telegram_failed" }, { status: 502 });
  }
}
