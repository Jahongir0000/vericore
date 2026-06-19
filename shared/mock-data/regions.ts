export interface Region {
  slug: string;
  isCity: boolean;
  i18n: {
    uz: string;
    ru: string;
    en: string;
  };
}

export const REGIONS: Region[] = [
  {
    slug: "tashkent-city",
    isCity: true,
    i18n: { uz: "Toshkent shahri", ru: "г. Ташкент", en: "Tashkent city" },
  },
  {
    slug: "tashkent-region",
    isCity: false,
    i18n: { uz: "Toshkent viloyati", ru: "Ташкентская обл.", en: "Tashkent region" },
  },
  { slug: "andijan", isCity: false, i18n: { uz: "Andijon", ru: "Андижан", en: "Andijan" } },
  { slug: "bukhara", isCity: false, i18n: { uz: "Buxoro", ru: "Бухара", en: "Bukhara" } },
  { slug: "fergana", isCity: false, i18n: { uz: "Farg'ona", ru: "Фергана", en: "Fergana" } },
  { slug: "jizzakh", isCity: false, i18n: { uz: "Jizzax", ru: "Джизак", en: "Jizzakh" } },
  {
    slug: "kashkadarya",
    isCity: false,
    i18n: { uz: "Qashqadaryo", ru: "Кашкадарья", en: "Kashkadarya" },
  },
  { slug: "khorezm", isCity: false, i18n: { uz: "Xorazm", ru: "Хорезм", en: "Khorezm" } },
  { slug: "namangan", isCity: false, i18n: { uz: "Namangan", ru: "Наманган", en: "Namangan" } },
  { slug: "navoiy", isCity: false, i18n: { uz: "Navoiy", ru: "Навои", en: "Navoiy" } },
  { slug: "samarkand", isCity: false, i18n: { uz: "Samarqand", ru: "Самарканд", en: "Samarkand" } },
  {
    slug: "surkhandarya",
    isCity: false,
    i18n: { uz: "Surxondaryo", ru: "Сурхандарья", en: "Surkhandarya" },
  },
  { slug: "syrdarya", isCity: false, i18n: { uz: "Sirdaryo", ru: "Сырдарья", en: "Syrdarya" } },
  {
    slug: "karakalpakstan",
    isCity: false,
    i18n: { uz: "Qoraqalpog'iston", ru: "Каракалпакстан", en: "Karakalpakstan" },
  },
];
