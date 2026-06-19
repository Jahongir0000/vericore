export interface TrustStat {
  value: string;
  i18nKey: string;
}

export const TRUST_STATS: TrustStat[] = [
  { value: "14+", i18nKey: "yearsExperience" },
  { value: "10+", i18nKey: "ownFactories" },
  { value: "0%", i18nKey: "zeroCommission" },
  { value: "15", i18nKey: "warranty" },
];
