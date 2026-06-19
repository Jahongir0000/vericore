import { photoAt } from "@shared/config/site-photos";

export interface Testimonial {
  id: string;
  authorName: string;
  authorRole: string;
  videoThumb: string;
  i18n: {
    uz: { quote: string; business: string };
    ru: { quote: string; business: string };
    en: { quote: string; business: string };
  };
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "javlon-tashkent",
    authorName: "Javlon Yusupov",
    authorRole: "Asoschi",
    videoThumb: photoAt(2),
    i18n: {
      uz: {
        quote:
          "Verikore bilan ishlash juda oson kechdi. Zavod 18 kunda yetkazib berildi va 7 kunda ishga tushirildi. 11 oyda investitsiya qaytdi.",
        business: "G'isht zavodi, Toshkent",
      },
      ru: {
        quote:
          "Работать с Verikore было очень легко. Завод доставили за 18 дней и запустили за 7. Окупились за 11 месяцев.",
        business: "Кирпичный завод, Ташкент",
      },
      en: {
        quote:
          "Working with Verikore was incredibly smooth. The plant was delivered in 18 days and commissioned in 7. Paid back in 11 months.",
        business: "Brick factory, Tashkent",
      },
    },
  },
  {
    id: "dilshod-fergana",
    authorName: "Dilshod Akhmedov",
    authorRole: "Direktor",
    videoThumb: photoAt(1),
    i18n: {
      uz: {
        quote:
          "HZS50 sotib oldim. Hujjatlar barchasi rasmiy, narx zavod narxida edi. Boshqa joylarda 30% qimmat taklif qilishgan edi.",
        business: "Beton zavodi, Farg'ona",
      },
      ru: {
        quote:
          "Купил HZS50. Все документы официальные, цена — заводская. В других местах предлагали на 30% дороже.",
        business: "Бетонный завод, Фергана",
      },
      en: {
        quote:
          "I bought an HZS50. All paperwork official, price was at factory level. Other vendors quoted 30% more.",
        business: "Concrete plant, Fergana",
      },
    },
  },
  {
    id: "feruza-samarkand",
    authorName: "Feruza Mahmudova",
    authorRole: "Hammuassis",
    videoThumb: photoAt(4),
    i18n: {
      uz: {
        quote:
          "Kafel ishlab chiqarish liniyasini ishga tushirdik. 4 muhandis 12 kun davomida joyda turib o'rgatdi.",
        business: "Kafel liniyasi, Samarqand",
      },
      ru: {
        quote: "Запустили линию керамической плитки. 4 инженера обучали нас на месте 12 дней.",
        business: "Линия плитки, Самарканд",
      },
      en: {
        quote: "We launched a ceramic tile line. 4 engineers trained us on-site for 12 days.",
        business: "Tile line, Samarkand",
      },
    },
  },
];
