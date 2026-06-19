"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, MessageCircle, Phone, MessageSquare, X } from "lucide-react";
import { SITE_CONFIG } from "@shared/config/site";
import { cn } from "@shared/lib/cn";

const xRoll = {
  initial: { rotate: -360, opacity: 0, scale: 0.88 },
  animate: { rotate: 0, opacity: 1, scale: 1 },
  exit: { rotate: 160, opacity: 0, scale: 0.88 },
};

const xRollTransition = {
  duration: 0.42,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

const messageRoll = {
  initial: { rotate: 140, opacity: 0, scale: 0.88 },
  animate: { rotate: 0, opacity: 1, scale: 1 },
  exit: { rotate: -140, opacity: 0, scale: 0.88 },
};

const messageRollTransition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 24,
  mass: 0.65,
};

export function FloatingContactFab() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-4 bottom-[max(1.5rem,calc(0.5rem+env(safe-area-inset-bottom,0px)))] z-30">
      <div className={cn("flex flex-col items-end gap-2 transition-all", open ? "mb-2" : "")}>
        <a
          href={SITE_CONFIG.contact.telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "shadow-soft flex h-12 w-12 items-center justify-center rounded-full bg-[#229ED9] text-white transition-all",
            open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-12 opacity-0",
          )}
          aria-label="Telegram"
        >
          <Send size={20} aria-hidden />
        </a>
        <a
          href={SITE_CONFIG.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "shadow-soft flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white transition-all",
            open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-12 opacity-0",
          )}
          aria-label="WhatsApp"
        >
          <MessageCircle size={20} aria-hidden />
        </a>
        <a
          href={`tel:${SITE_CONFIG.contact.phoneDigits}`}
          className={cn(
            "bg-primary text-on-primary shadow-soft flex h-12 w-12 items-center justify-center rounded-full transition-all",
            open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-12 opacity-0",
          )}
          aria-label="Phone"
        >
          <Phone size={20} aria-hidden />
        </a>
      </div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="bg-secondary-container text-on-secondary-container shadow-soft relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full transition-transform hover:scale-105"
        aria-expanded={open}
        aria-label={open ? "Close quick contacts" : "Open quick contacts"}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="fab-close"
              className="absolute inset-0 flex items-center justify-center"
              initial={xRoll.initial}
              animate={xRoll.animate}
              exit={xRoll.exit}
              transition={xRollTransition}
            >
              <X size={22} aria-hidden strokeWidth={2.25} />
            </motion.span>
          ) : (
            <motion.span
              key="fab-message"
              className="absolute inset-0 flex items-center justify-center"
              initial={messageRoll.initial}
              animate={messageRoll.animate}
              exit={messageRoll.exit}
              transition={messageRollTransition}
            >
              <MessageSquare size={22} aria-hidden strokeWidth={2.25} />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
