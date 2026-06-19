"use client";

import { useId } from "react";
import type { HowWeWorkIllustrationId } from "@shared/mock-data/how-we-work-steps";
import { cn } from "@shared/lib/cn";

type Props = { id: HowWeWorkIllustrationId; className?: string };

/**
 * Decorative SVG scenes aligned with each “How we work” step (analysis → install).
 * Uses currentColor so parent can set `text-primary` / opacity.
 */
export function HowWeWorkIllustration({ id, className }: Props) {
  const gid = useId().replace(/:/g, "");
  const shell = "block h-full w-full max-h-full max-w-full [&_svg]:h-full [&_svg]:w-full";

  switch (id) {
    case "analysisConsultation":
      return (
        <div className={cn(shell, className)} data-illustration={id}>
          <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <defs>
              <linearGradient id={`${gid}-g1`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.12" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0.02" />
              </linearGradient>
            </defs>
            <rect width="480" height="360" fill={`url(#${gid}-g1)`} />
            {/* desk / horizon */}
            <path
              d="M40 280h400"
              stroke="currentColor"
              strokeOpacity="0.2"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* bar chart */}
            <rect
              x="88"
              y="168"
              width="36"
              height="112"
              rx="6"
              fill="currentColor"
              fillOpacity="0.22"
            />
            <rect
              x="140"
              y="132"
              width="36"
              height="148"
              rx="6"
              fill="currentColor"
              fillOpacity="0.32"
            />
            <rect
              x="192"
              y="188"
              width="36"
              height="92"
              rx="6"
              fill="currentColor"
              fillOpacity="0.18"
            />
            <rect
              x="244"
              y="152"
              width="36"
              height="128"
              rx="6"
              fill="currentColor"
              fillOpacity="0.28"
            />
            {/* laptop */}
            <rect
              x="300"
              y="188"
              width="140"
              height="88"
              rx="8"
              stroke="currentColor"
              strokeOpacity="0.35"
              strokeWidth="2"
              fill="currentColor"
              fillOpacity="0.06"
            />
            <path
              d="M292 284h156l-12 16H304l-12-16z"
              fill="currentColor"
              fillOpacity="0.12"
              stroke="currentColor"
              strokeOpacity="0.25"
              strokeWidth="1.5"
            />
            {/* magnifier */}
            <circle
              cx="156"
              cy="112"
              r="48"
              stroke="currentColor"
              strokeWidth="3"
              strokeOpacity="0.45"
            />
            <circle
              cx="156"
              cy="112"
              r="34"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeOpacity="0.2"
            />
            <path
              d="M192 148l36 36"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              strokeOpacity="0.45"
            />
            {/* speech / idea dots */}
            <path
              d="M360 96c18 0 32 14 32 32s-14 32-32 32h-22l-10 22 6-22h-8c-18 0-32-14-32-32s14-32 32-32h34z"
              fill="currentColor"
              fillOpacity="0.1"
              stroke="currentColor"
              strokeOpacity="0.28"
              strokeWidth="1.5"
            />
            <circle cx="332" cy="120" r="4" fill="currentColor" fillOpacity="0.35" />
            <circle cx="352" cy="120" r="4" fill="currentColor" fillOpacity="0.35" />
            <circle cx="372" cy="120" r="4" fill="currentColor" fillOpacity="0.35" />
          </svg>
        </div>
      );

    case "solutionQuote":
      return (
        <div className={cn(shell, className)} data-illustration={id}>
          <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <defs>
              <linearGradient id={`${gid}-g2`} x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.14" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0.03" />
              </linearGradient>
            </defs>
            <rect width="480" height="360" fill={`url(#${gid}-g2)`} />
            {/* main spec sheet */}
            <rect
              x="120"
              y="56"
              width="240"
              height="248"
              rx="12"
              fill="currentColor"
              fillOpacity="0.07"
              stroke="currentColor"
              strokeOpacity="0.35"
              strokeWidth="2"
            />
            <path
              d="M144 96h192M144 124h160M144 152h176M144 180h128M144 208h192M144 236h140"
              stroke="currentColor"
              strokeOpacity="0.22"
              strokeWidth="6"
              strokeLinecap="round"
            />
            {/* check row */}
            <path
              d="M144 268l20 20 44-52"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeOpacity="0.5"
            />
            {/* gear */}
            <circle
              cx="352"
              cy="112"
              r="40"
              stroke="currentColor"
              strokeOpacity="0.25"
              strokeWidth="2"
              fill="currentColor"
              fillOpacity="0.08"
            />
            <circle cx="352" cy="112" r="14" fill="currentColor" fillOpacity="0.2" />
            {[0, 45, 90, 135].map((deg) => (
              <rect
                key={deg}
                x="346"
                y="64"
                width="12"
                height="24"
                rx="3"
                fill="currentColor"
                fillOpacity="0.22"
                transform={`rotate(${deg} 352 112)`}
              />
            ))}
            {/* price tag */}
            <path
              d="M72 200l48-48 52 52-48 48z"
              fill="currentColor"
              fillOpacity="0.12"
              stroke="currentColor"
              strokeOpacity="0.35"
              strokeWidth="2"
            />
            <circle cx="108" cy="164" r="8" fill="currentColor" fillOpacity="0.35" />
          </svg>
        </div>
      );

    case "contractPayment":
      return (
        <div className={cn(shell, className)} data-illustration={id}>
          <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <rect width="480" height="360" fill="currentColor" fillOpacity="0.04" />
            {/* shield */}
            <path
              d="M240 48l112 48v88c0 72-48 112-112 144-64-32-112-72-112-144V96l112-48z"
              fill="currentColor"
              fillOpacity="0.08"
              stroke="currentColor"
              strokeOpacity="0.35"
              strokeWidth="2.5"
            />
            <path
              d="M200 172l28 28 56-72"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeOpacity="0.45"
            />
            {/* contract stack */}
            <rect
              x="56"
              y="200"
              width="160"
              height="112"
              rx="8"
              fill="currentColor"
              fillOpacity="0.06"
              stroke="currentColor"
              strokeOpacity="0.28"
              strokeWidth="2"
            />
            <rect
              x="72"
              y="220"
              width="96"
              height="8"
              rx="2"
              fill="currentColor"
              fillOpacity="0.18"
            />
            <rect
              x="72"
              y="240"
              width="120"
              height="8"
              rx="2"
              fill="currentColor"
              fillOpacity="0.14"
            />
            <rect
              x="72"
              y="260"
              width="88"
              height="8"
              rx="2"
              fill="currentColor"
              fillOpacity="0.12"
            />
            {/* pen */}
            <path
              d="M360 240l48-48 24 24-48 48-32 8 8-32z"
              fill="currentColor"
              fillOpacity="0.15"
              stroke="currentColor"
              strokeOpacity="0.35"
              strokeWidth="2"
            />
            <path
              d="M392 208l24 24"
              stroke="currentColor"
              strokeOpacity="0.4"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
      );

    case "deliveryLogistics":
      return (
        <div className={cn(shell, className)} data-illustration={id}>
          <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <defs>
              <linearGradient id={`${gid}-g4`} x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0.02" />
              </linearGradient>
            </defs>
            <rect width="480" height="360" fill={`url(#${gid}-g4)`} />
            {/* route arc */}
            <path
              d="M48 220c80-80 200-100 384-20"
              stroke="currentColor"
              strokeOpacity="0.18"
              strokeWidth="3"
              strokeDasharray="10 14"
              strokeLinecap="round"
              fill="none"
            />
            {/* globe hint */}
            <circle
              cx="96"
              cy="100"
              r="36"
              stroke="currentColor"
              strokeOpacity="0.22"
              strokeWidth="2"
              fill="currentColor"
              fillOpacity="0.05"
            />
            <path
              d="M60 100h72M96 64v72"
              stroke="currentColor"
              strokeOpacity="0.15"
              strokeWidth="1.5"
            />
            {/* truck */}
            <rect
              x="200"
              y="168"
              width="168"
              height="88"
              rx="10"
              fill="currentColor"
              fillOpacity="0.12"
              stroke="currentColor"
              strokeOpacity="0.38"
              strokeWidth="2"
            />
            <path
              d="M368 200h56l32 56H200v-56h168z"
              fill="currentColor"
              fillOpacity="0.1"
              stroke="currentColor"
              strokeOpacity="0.32"
              strokeWidth="2"
            />
            <circle
              cx="248"
              cy="268"
              r="28"
              fill="currentColor"
              fillOpacity="0.2"
              stroke="currentColor"
              strokeOpacity="0.35"
              strokeWidth="2"
            />
            <circle
              cx="328"
              cy="268"
              r="28"
              fill="currentColor"
              fillOpacity="0.2"
              stroke="currentColor"
              strokeOpacity="0.35"
              strokeWidth="2"
            />
            <circle cx="248" cy="268" r="10" fill="currentColor" fillOpacity="0.35" />
            <circle cx="328" cy="268" r="10" fill="currentColor" fillOpacity="0.35" />
            {/* crate */}
            <path
              d="M120 232l40-24 40 24-40 24-40-24z"
              fill="currentColor"
              fillOpacity="0.14"
              stroke="currentColor"
              strokeOpacity="0.3"
              strokeWidth="2"
            />
            <path
              d="M120 232v40l40 24v-40M200 232v40l-40 24"
              stroke="currentColor"
              strokeOpacity="0.22"
              strokeWidth="2"
            />
          </svg>
        </div>
      );

    case "installationCommissioning":
      return (
        <div className={cn(shell, className)} data-illustration={id}>
          <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <rect width="480" height="360" fill="currentColor" fillOpacity="0.035" />
            {/* machine / panel */}
            <rect
              x="200"
              y="72"
              width="200"
              height="200"
              rx="12"
              fill="currentColor"
              fillOpacity="0.07"
              stroke="currentColor"
              strokeOpacity="0.32"
              strokeWidth="2"
            />
            <rect
              x="224"
              y="96"
              width="152"
              height="56"
              rx="6"
              fill="currentColor"
              fillOpacity="0.1"
            />
            <circle cx="248" cy="124" r="10" fill="currentColor" fillOpacity="0.25" />
            <circle cx="280" cy="124" r="10" fill="currentColor" fillOpacity="0.15" />
            <circle cx="312" cy="124" r="10" fill="currentColor" fillOpacity="0.15" />
            <rect
              x="224"
              y="176"
              width="64"
              height="72"
              rx="6"
              fill="currentColor"
              fillOpacity="0.08"
              stroke="currentColor"
              strokeOpacity="0.2"
            />
            <rect
              x="304"
              y="176"
              width="72"
              height="40"
              rx="6"
              fill="currentColor"
              fillOpacity="0.06"
              stroke="currentColor"
              strokeOpacity="0.18"
            />
            {/* conveyor */}
            <path
              d="M48 264h384"
              stroke="currentColor"
              strokeOpacity="0.2"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <rect
              x="64"
              y="232"
              width="48"
              height="32"
              rx="4"
              fill="currentColor"
              fillOpacity="0.18"
            />
            <rect
              x="368"
              y="232"
              width="48"
              height="32"
              rx="4"
              fill="currentColor"
              fillOpacity="0.18"
            />
            {/* wrench */}
            <path
              d="M96 120l52 52c16-8 36-6 52 4l-28 28c10 16 12 36 4 52L96 120z"
              fill="currentColor"
              fillOpacity="0.12"
              stroke="currentColor"
              strokeOpacity="0.4"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <circle
              cx="120"
              cy="144"
              r="22"
              stroke="currentColor"
              strokeOpacity="0.35"
              strokeWidth="3"
              fill="currentColor"
              fillOpacity="0.08"
            />
            {/* hard hat */}
            <path
              d="M72 200c0-28 24-48 56-48s56 20 56 48v12H72v-12z"
              fill="currentColor"
              fillOpacity="0.15"
              stroke="currentColor"
              strokeOpacity="0.32"
              strokeWidth="2"
            />
            <path
              d="M64 212h144"
              stroke="currentColor"
              strokeOpacity="0.28"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
        </div>
      );

    default:
      return null;
  }
}
