import { z } from "zod";

import { uzbekPhoneSchema } from "@shared/hooks/use-uzbek-phone";

export const leadFormTelegramPayloadSchema = z
  .object({
    source: z.enum(["contact", "lead-magnet"]),
    name: z.string().trim().min(2),
    phone: uzbekPhoneSchema,
    locale: z.string().optional(),
    category: z.string().optional(),
    categoryLabel: z.string().optional(),
    region: z.string().optional(),
    regionLabel: z.string().optional(),
    budget: z.string().optional(),
    duration: z.string().optional(),
    callTime: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.source === "contact") {
      if (!data.category?.trim()) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["category"], message: "required" });
      }
      if (!data.region?.trim()) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["region"], message: "required" });
      }
    }
  });
