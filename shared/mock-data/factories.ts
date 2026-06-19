const U = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`;

export interface OwnedFactory {
  id: string;
  image: string;
  yearStarted: number;
  i18n: {
    uz: { name: string; location: string };
    ru: { name: string; location: string };
    en: { name: string; location: string };
  };
}

export const OWN_FACTORIES: OwnedFactory[] = [
  {
    id: "tashkent-industrial-park",
    image: U("1666219462105-2909c2d72d01"),
    yearStarted: 2014,
    i18n: {
      uz: { name: "Toshkent sanoat parki", location: "Toshkent shahri" },
      ru: { name: "Ташкентский индустриальный парк", location: "г. Ташкент" },
      en: { name: "Tashkent Industrial Park", location: "Tashkent city" },
    },
  },
  {
    id: "samarkand-block-plant",
    image: U("1777793919255-bf476007ea61"),
    yearStarted: 2016,
    i18n: {
      uz: { name: "Samarqand blok zavodi", location: "Samarqand viloyati" },
      ru: { name: "Самаркандский блок-завод", location: "Самаркандская обл." },
      en: { name: "Samarkand Block Plant", location: "Samarkand region" },
    },
  },
  {
    id: "fergana-concrete",
    image: U("1746733808258-122f66ee1e17"),
    yearStarted: 2018,
    i18n: {
      uz: { name: "Farg'ona beton zavodi", location: "Farg'ona viloyati" },
      ru: { name: "Ферганский бетонный завод", location: "Ферганская обл." },
      en: { name: "Fergana Concrete Plant", location: "Fergana region" },
    },
  },
  {
    id: "namangan-tile-line",
    image: U("1777278226493-99236c20708b"),
    yearStarted: 2019,
    i18n: {
      uz: { name: "Namangan kafel liniyasi", location: "Namangan viloyati" },
      ru: { name: "Наманганская плиточная линия", location: "Наманганская обл." },
      en: { name: "Namangan Tile Line", location: "Namangan region" },
    },
  },
  {
    id: "andijan-aac",
    image: U("1763665814043-6ee9926e4f04"),
    yearStarted: 2020,
    i18n: {
      uz: { name: "Andijon gazobeton liniyasi", location: "Andijon viloyati" },
      ru: { name: "Андижанский газобетон", location: "Андижанская обл." },
      en: { name: "Andijan AAC line", location: "Andijan region" },
    },
  },
  {
    id: "bukhara-metal",
    image: U("1618598827591-696673ab0abe"),
    yearStarted: 2021,
    i18n: {
      uz: { name: "Buxoro metall konstruksiya", location: "Buxoro viloyati" },
      ru: { name: "Бухарские металлоконструкции", location: "Бухарская обл." },
      en: { name: "Bukhara Metal Construction", location: "Bukhara region" },
    },
  },
  {
    id: "kashkadarya-cement",
    image: U("1628460213789-0768b3db678f"),
    yearStarted: 2022,
    i18n: {
      uz: { name: "Qashqadaryo sement", location: "Qashqadaryo viloyati" },
      ru: { name: "Кашкадарьинский цемент", location: "Кашкадарьинская обл." },
      en: { name: "Kashkadarya Cement", location: "Kashkadarya region" },
    },
  },
  {
    id: "khorezm-brick",
    image: U("1680595848057-66631ee6fd1f"),
    yearStarted: 2023,
    i18n: {
      uz: { name: "Xorazm g'isht zavodi", location: "Xorazm viloyati" },
      ru: { name: "Хорезмский кирпичный", location: "Хорезмская обл." },
      en: { name: "Khorezm Brick Factory", location: "Khorezm region" },
    },
  },
  {
    id: "navoi-aggregates",
    image: U("1762010231754-74e647a4631d"),
    yearStarted: 2023,
    i18n: {
      uz: { name: "Navoiy inert materiallar", location: "Navoiy viloyati" },
      ru: { name: "Навоийские инертные", location: "Навоийская обл." },
      en: { name: "Navoiy Aggregates", location: "Navoiy region" },
    },
  },
  {
    id: "surkhandarya-tile",
    image: U("1651983795694-4b4b1f860f58"),
    yearStarted: 2024,
    i18n: {
      uz: { name: "Surxondaryo kafel zavodi", location: "Surxondaryo viloyati" },
      ru: { name: "Сурхандарьинская плитка", location: "Сурхандарьинская обл." },
      en: { name: "Surkhandarya Tile Plant", location: "Surkhandarya region" },
    },
  },
];
