export const HOW_WE_WORK_ILLUSTRATION_IDS = [
  "analysisConsultation",
  "solutionQuote",
  "contractPayment",
  "deliveryLogistics",
  "installationCommissioning",
] as const;

export type HowWeWorkIllustrationId = (typeof HOW_WE_WORK_ILLUSTRATION_IDS)[number];

export interface HowWeWorkStep {
  step: "01" | "02" | "03" | "04" | "05";
  /** SVG scene for the card hero, matched to the step title meaning */
  illustrationId: HowWeWorkIllustrationId;
  i18nTitleKey: string;
  i18nBodyKey: string;
  i18nDurationKey: string;
  badgeKey?: string;
}

export const HOW_WE_WORK_STEPS: HowWeWorkStep[] = [
  {
    step: "01",
    illustrationId: "analysisConsultation",
    i18nTitleKey: "howWeWork.step01Title",
    i18nBodyKey: "howWeWork.step01Body",
    i18nDurationKey: "howWeWork.step01Duration",
    badgeKey: "howWeWork.step01Free",
  },
  {
    step: "02",
    illustrationId: "solutionQuote",
    i18nTitleKey: "howWeWork.step02Title",
    i18nBodyKey: "howWeWork.step02Body",
    i18nDurationKey: "howWeWork.step02Duration",
  },
  {
    step: "03",
    illustrationId: "contractPayment",
    i18nTitleKey: "howWeWork.step03Title",
    i18nBodyKey: "howWeWork.step03Body",
    i18nDurationKey: "howWeWork.step03Duration",
  },
  {
    step: "04",
    illustrationId: "deliveryLogistics",
    i18nTitleKey: "howWeWork.step04Title",
    i18nBodyKey: "howWeWork.step04Body",
    i18nDurationKey: "howWeWork.step04Duration",
  },
  {
    step: "05",
    illustrationId: "installationCommissioning",
    i18nTitleKey: "howWeWork.step05Title",
    i18nBodyKey: "howWeWork.step05Body",
    i18nDurationKey: "howWeWork.step05Duration",
  },
];
