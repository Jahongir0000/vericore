export interface Faq {
  id: string;
  i18n: {
    uz: { question: string; answer: string };
    ru: { question: string; answer: string };
    en: { question: string; answer: string };
  };
}

export const FAQS: Faq[] = [
  {
    id: "warranty",
    i18n: {
      uz: {
        question: "Mahsulotlarga kafolat bormi?",
        answer:
          "Barcha muhandislik yechimlari va uskunalarimizga 12 oydan 36 oygacha rasmiy kafolat taqdim etiladi. HZS turkumi uchun standart kafolat — 15 oy.",
      },
      ru: {
        question: "Есть ли гарантия на оборудование?",
        answer:
          "На все инженерные решения и оборудование предоставляется официальная гарантия от 12 до 36 месяцев. Для серии HZS — 15 месяцев.",
      },
      en: {
        question: "Is there a warranty on the equipment?",
        answer:
          "Every engineering solution and piece of equipment comes with an official 12–36 month warranty. The HZS series ships with a standard 15 months.",
      },
    },
  },
  {
    id: "delivery",
    i18n: {
      uz: {
        question: "Yetkazib berish shartlari qanday?",
        answer:
          "30% oldindan to'lovdan so'ng ishlab chiqarish boshlanadi (15–25 ish kuni). So'ngra konteyner orqali Toshkentga yetkazib beriladi (3–4 hafta).",
      },
      ru: {
        question: "Каковы условия доставки?",
        answer:
          "После 30% предоплаты начинается производство (15–25 рабочих дней). Затем контейнерная доставка в Ташкент (3–4 недели).",
      },
      en: {
        question: "What are the delivery terms?",
        answer:
          "After a 30% deposit production starts (15–25 working days). Then container shipping to Tashkent (3–4 weeks).",
      },
    },
  },
  {
    id: "payment",
    i18n: {
      uz: {
        question: "To'lov qanday usulda amalga oshiriladi?",
        answer:
          "30% — shartnoma imzolanganda, 70% — yetkazib berishdan oldin. Bank o'tkazmasi yoki valyuta hisobi orqali.",
      },
      ru: {
        question: "Как осуществляется оплата?",
        answer:
          "30% — при подписании контракта, 70% — перед отгрузкой. Банковский перевод или валютный счёт.",
      },
      en: {
        question: "How is the payment made?",
        answer:
          "30% on contract signing, 70% before delivery. Bank transfer or foreign currency account.",
      },
    },
  },
  {
    id: "customs",
    i18n: {
      uz: {
        question: "Bojxona rasmiylashtirish kim hisobiga?",
        answer:
          "Standart EXW shartlarida — sotib oluvchi hisobiga. Lekin bizning logistika jamoamiz to'liq yordam beradi va kerakli hujjatlarni tayyorlab beradi.",
      },
      ru: {
        question: "Кто оформляет таможню?",
        answer:
          "По умолчанию EXW — на стороне покупателя. Но наша логистическая команда полностью помогает с оформлением и подготовкой документов.",
      },
      en: {
        question: "Who handles customs?",
        answer:
          "Under EXW terms it's the buyer's side, but our logistics team fully assists with documentation and clearance.",
      },
    },
  },
  {
    id: "installation",
    i18n: {
      uz: {
        question: "O'rnatish va ishga tushirish qanday amalga oshiriladi?",
        answer:
          "Biz 2 ta muhandisni Xitoydan yuborib, joyda 5–10 kun davomida o'rnatish, debugging va operatorlarni o'qitishni amalga oshiramiz.",
      },
      ru: {
        question: "Как происходит установка и пуск?",
        answer:
          "Мы отправляем 2 инженеров из Китая на 5–10 дней — установка, отладка и обучение операторов.",
      },
      en: {
        question: "How is installation and commissioning handled?",
        answer:
          "We send 2 engineers from China for 5–10 days on-site — installation, debugging and operator training.",
      },
    },
  },
  {
    id: "spare-parts",
    i18n: {
      uz: {
        question: "Ehtiyot qismlar mavjudmi?",
        answer:
          "Asosiy ehtiyot qismlar Toshkent ombor­imizda saqlanadi. Maxsus qismlar 7–14 kunda Xitoydan yetkazib beriladi.",
      },
      ru: {
        question: "Есть ли запасные части?",
        answer:
          "Основные запчасти хранятся на нашем складе в Ташкенте. Специальные — 7–14 дней из Китая.",
      },
      en: {
        question: "Are spare parts available?",
        answer:
          "Common spares are stocked at our Tashkent warehouse. Special parts arrive in 7–14 days from China.",
      },
    },
  },
];
