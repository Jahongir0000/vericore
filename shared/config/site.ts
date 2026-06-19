import { DEFAULT_OG_IMAGE } from "./site-photos";
import { OFFICE_LOCATION } from "./office-location";

export const SITE_CONTACT_PHONES = [
  { display: "+998 91 777 77 40", digits: "+998917777740" },
  { display: "+998 98 170 00 01", digits: "+998981700001" },
] as const;

export const SITE_WHATSAPP_NUMBERS = [
  { display: "+998 91 230 34 55", digits: "+998912303455" },
] as const;

/** Default tel: for quick-action CTAs (bottom bar, FAB, price card) */
const PRIMARY_PHONE = SITE_CONTACT_PHONES[1];

function whatsappUrlFromDigits(digits: string): string {
  const n = digits.replace(/\D/g, "");
  return `https://wa.me/${n}`;
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.verikoreglobal.uz";

export const SITE_CONFIG = {
  name: "Verikore Global",
  legalName: "Verikore Global LLC",
  domain: "verikoreglobal.uz",
  url: SITE_URL,
  /** Default SEO copy (Uzbek) — used in JSON-LD and fallbacks */
  description:
    "Хитойнинг ишончли заводларидан тўғридан-тўғри саноат ускуналарини 0% комиссия билан сотиб олинг. 2012-йилдан бери Тошкентда.",
  founded: 2012,
  ownFactoriesCount: 10,
  warrantyMonths: 15,
  serviceFeePercent: 0,
  contact: {
    phones: SITE_CONTACT_PHONES,
    whatsapps: SITE_WHATSAPP_NUMBERS,
    phone: PRIMARY_PHONE.display,
    phoneDigits: PRIMARY_PHONE.digits,
    phoneSecondary: SITE_CONTACT_PHONES[0].display,
    phoneSecondaryDigits: SITE_CONTACT_PHONES[0].digits,
    email: "verikoreglobal@gmail.com",
    telegram: "verikore",
    telegramUrl: "https://t.me/verikore",
    whatsappUrl: whatsappUrlFromDigits(SITE_WHATSAPP_NUMBERS[0].digits),
    workingHours: "Mon–Sat 9:00–18:00",
  },
  address: {
    country: "UZ",
    region: "Tashkent",
    locality: "Tashkent",
    district: "Yunusobod",
    addressLine: OFFICE_LOCATION.address.en,
    postalCode: OFFICE_LOCATION.postalCode,
    geo: { lat: OFFICE_LOCATION.lat, lng: OFFICE_LOCATION.lng },
  },
  office: OFFICE_LOCATION,
  social: {
    telegram: "https://t.me/verikore",
    instagram: "https://instagram.com/vericoreglobal",
    youtube: "https://youtube.com/@vericoreglobal",
    facebook: "https://facebook.com/vericoreglobal",
  },
  ogImage: DEFAULT_OG_IMAGE,
} as const;

export type SiteConfig = typeof SITE_CONFIG;
