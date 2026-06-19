export interface Project {
  slug: string;
  year: number;
  regionSlug: string;
  categorySlug: string;
  featured: boolean;
  images: string[];
  i18n: Record<
    "uz" | "ru" | "en",
    {
      title: string;
      location: string;
      tagline: string;
      summary: string;
      challenge: string;
      solution: string;
      equipment: string;
      results: string;
    }
  >;
  stats: {
    capacityLabel: { uz: string; ru: string; en: string };
    capacityValue: string;
    durationDays: number;
    engineers: number;
  };
}

export const PROJECTS: Project[] = [
  {
    slug: "toshkent-beton-markazi",
    year: 2023,
    regionSlug: "tashkent-city",
    categorySlug: "beton-zavodlari",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1746733808258-122f66ee1e17?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1666219462105-2909c2d72d01?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1628460213789-0768b3db678f?auto=format&fit=crop&w=1200&q=80",
    ],
    stats: {
      capacityLabel: {
        uz: "Ishlab chiqarish quvvati",
        ru: "Производительность",
        en: "Production capacity",
      },
      capacityValue: "60 m³/soat",
      durationDays: 45,
      engineers: 2,
    },
    i18n: {
      uz: {
        title: "Toshkent Beton Markazi",
        location: "Toshkent shahri, Yunusobod tumani",
        tagline: "To'liq tsiklli beton zavodi — loyiha, yetkazib berish va ishga tushirish",
        summary:
          "Verikore Global jamoasi Toshkentda zamonaviy beton ishlab chiqarish markazini tashkil qilish uchun HZS seriyali beton zavodini tanlab, yetkazib berdi va ishga tushirdi.",
        challenge:
          "Mijoz qisqa muddatda barqaror sifatli beton ishlab chiqarishni boshlash va mahalliy qurilish bozoridagi talabni qondirishni maqsad qilgan.",
        solution:
          "Biz loyiha hajmini tahlil qildik, HZS50 liniyasini tanladik, logistika va bojxona jarayonlarini boshqarib, joyda o'rnatish va operatorlarni o'qitishni amalga oshirdik.",
        equipment:
          "HZS50 beton zavodi, JS1000 mikser, PLD1200 dозатор, nazorat xonasi va qo'shimcha filtr tizimi.",
        results:
          "Zavod reja bo'yicha ishga tushirildi, birinchi oyda 2 400 m³ dan ortiq beton ishlab chiqarildi, 15 oy kafolat xizmati boshlandi.",
      },
      ru: {
        title: "Ташкентский Бетонный Центр",
        location: "г. Ташкент, Юнусабадский район",
        tagline: "Полный цикл бетонного завода — проект, поставка и запуск",
        summary:
          "Команда Verikore Global подобрала, поставила и запустила линию HZS для современного бетонного производства в Ташкенте.",
        challenge:
          "Заказчику нужно было быстро выйти на стабильный выпуск бетона и закрыть спрос строительного рынка региона.",
        solution:
          "Мы провели анализ объёма, выбрали линию HZS50, организовали логистику и таможню, выполнили монтаж и обучение операторов на площадке.",
        equipment:
          "Бетонный завод HZS50, смеситель JS1000, дозатор PLD1200, пост управления и дополнительная фильтрация.",
        results:
          "Завод запущен по графику, за первый месяц произведено более 2 400 м³ бетона, стартовало 15-месячное гарантийное обслуживание.",
      },
      en: {
        title: "Tashkent Concrete Center",
        location: "Tashkent, Yunusabad district",
        tagline: "Full-cycle concrete plant — engineering, delivery, and commissioning",
        summary:
          "The Verikore Global team selected, delivered, and commissioned an HZS batching plant for a modern concrete production hub in Tashkent.",
        challenge:
          "The client needed to start reliable concrete output quickly and meet demand from the local construction market.",
        solution:
          "We sized the project, specified an HZS50 line, managed logistics and customs, then installed the plant and trained operators on site.",
        equipment:
          "HZS50 batching plant, JS1000 mixer, PLD1200 batcher, control room, and auxiliary filtration.",
        results:
          "The plant went live on schedule, producing over 2,400 m³ in the first month with 15-month warranty service started.",
      },
    },
  },
  {
    slug: "samarqand-gisht-zavodi",
    year: 2022,
    regionSlug: "samarkand",
    categorySlug: "gisht-zavodlari",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1680595848057-66631ee6fd1f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1712319163901-02dc72728c11?auto=format&fit=crop&w=1200&q=80",
    ],
    stats: {
      capacityLabel: {
        uz: "Kunlik chiqarish",
        ru: "Суточный выпуск",
        en: "Daily output",
      },
      capacityValue: "120 000 dona",
      durationDays: 38,
      engineers: 2,
    },
    i18n: {
      uz: {
        title: "Samarqand g'isht zavodi",
        location: "Samarqand viloyati",
        tagline: "Avtomatlashtirilgan g'isht ishlab chiqarish liniyasi",
        summary: "To'liq avtomat g'isht liniyasi — loyiha, montaj va ishga tushirish.",
        challenge: "Mavjud sexni zamonaviylashtirish va energiya sarfini kamaytirish.",
        solution: "Liniya konfiguratsiyasi, yetkazib berish va joyda sozlash.",
        equipment: "Press va quritish konveyeri, boshqaruv paneli.",
        results: "Ishlab chiqarish 28% ga oshdi, xodimlar xavfsizligi yaxshilandi.",
      },
      ru: {
        title: "Самаркандский кирпичный завод",
        location: "Самаркандская область",
        tagline: "Автоматизированная линия производства кирпича",
        summary: "Полный цикл — проектирование, поставка и запуск линии.",
        challenge: "Модернизация цеха и снижение энергопотребления.",
        solution: "Конфигурация линии, логистика и пусконаладка на объекте.",
        equipment: "Пресс, сушильный конвейер, панель управления.",
        results: "Выпуск вырос на 28%, улучшена безопасность персонала.",
      },
      en: {
        title: "Samarkand Brick Plant",
        location: "Samarkand region",
        tagline: "Automated brick production line",
        summary: "Turnkey brick line — engineering, delivery, and commissioning.",
        challenge: "Modernize the existing shop and cut energy use.",
        solution: "Line configuration, logistics, and on-site tuning.",
        equipment: "Press, drying conveyor, control panel.",
        results: "Output rose 28% with improved worker safety.",
      },
    },
  },
  {
    slug: "samarkand-asfalt-zavod",
    year: 2026,
    regionSlug: "samarkand",
    categorySlug: "asfalt-zavodlari",
    featured: true,
    images: [
      "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/projects/samarkand-asfalt-zavod/2026-05-21%2011.36.09.jpg",
      "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/projects/samarkand-asfalt-zavod/2026-05-21%2011.36.15.jpg",
      "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/projects/samarkand-asfalt-zavod/2026-05-21%2011.36.20.jpg",
      "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/projects/samarkand-asfalt-zavod/2026-05-21%2011.36.24.jpg",
      "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/projects/samarkand-asfalt-zavod/2026-05-21%2011.36.29.jpg",
      "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/projects/samarkand-asfalt-zavod/2026-05-21%2011.36.34.jpg",
    ],
    stats: {
      capacityLabel: {
        uz: "Ishlab chiqarish quvvati",
        ru: "Производительность",
        en: "Production capacity",
      },
      capacityValue: "80 t/soat",
      durationDays: 40,
      engineers: 2,
    },
    i18n: {
      uz: {
        title: "Samarqand Asfalt Zavodi",
        location: "Samarqand viloyati",
        tagline:
          "Zamonaviy asfalt ishlab chiqarish liniyasi — loyiha, yetkazib berish va ishga tushirish",
        summary:
          "Vericore Global jamoasi Samarqandda zamonaviy asfalt ishlab chiqarish zavodini tashkil qilish uchun uskunalar tanlash, yetkazib berish va ishga tushirish ishlarini amalga oshirdi.",
        challenge:
          "Mijoz mintaqadagi yo'l qurilishi talabini qondirish uchun yuqori quvvatli va energiya samarali asfalt zavodini qisqa muddatda ishga tushirishi kerak edi.",
        solution:
          "Biz loyiha hajmini tahlil qildik, mos uskunalar liniyasini tanladik, logistika va bojxona jarayonlarini boshqardik, joyda o'rnatish va operatorlarni o'qitishni amalga oshirdik.",
        equipment:
          "Asfalt aralashtirgich, quritish barabani, mineral to'ldiruvchi dozatori, bitum tanki va avtomatik nazorat tizimi.",
        results:
          "Zavod belgilangan muddatda ishga tushirildi, birinchi oyda 3 200 tonna asfalt ishlab chiqarildi va 15 oy kafolat xizmati boshlandi.",
      },
      ru: {
        title: "Самаркандский Асфальтный Завод",
        location: "Самаркандская область",
        tagline: "Современная линия производства асфальта — проект, поставка и запуск",
        summary:
          "Команда Vericore Global выполнила подбор, поставку и запуск оборудования для современного асфальтобетонного завода в Самаркандской области.",
        challenge:
          "Заказчику нужно было в короткие сроки запустить высокопроизводительный и энергоэффективный асфальтовый завод для обеспечения нужд дорожного строительства региона.",
        solution:
          "Мы провели анализ объёмов, подобрали линию оборудования, организовали логистику и таможенное оформление, выполнили монтаж и обучение операторов.",
        equipment:
          "Асфальтосмесительная установка, сушильный барабан, дозатор минерального наполнителя, битумный резервуар и автоматизированная система управления.",
        results:
          "Завод запущен в срок, в первый месяц произведено 3 200 тонн асфальта, начато 15-месячное гарантийное обслуживание.",
      },
      en: {
        title: "Samarkand Asphalt Plant",
        location: "Samarkand region",
        tagline: "Modern asphalt production line — engineering, delivery, and commissioning",
        summary:
          "The Vericore Global team selected, delivered, and commissioned equipment for a modern asphalt concrete plant in the Samarkand region.",
        challenge:
          "The client needed to quickly launch a high-capacity, energy-efficient asphalt plant to meet regional road construction demand.",
        solution:
          "We analyzed production volumes, specified the equipment line, managed logistics and customs clearance, then installed the plant and trained operators on site.",
        equipment:
          "Asphalt mixing plant, drying drum, mineral filler batcher, bitumen tank, and automated control system.",
        results:
          "The plant launched on schedule, producing 3,200 tonnes in the first month with 15-month warranty service started.",
      },
    },
  },
  {
    slug: "shifer-zavodi",
    year: 2026,
    regionSlug: "tashkent-city",
    categorySlug: "shifr-zavod",
    featured: true,
    images: [
      "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/projects/shifer-zavodi/photo_2026-05-25%2016.58.11.jpeg",
      "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/projects/shifer-zavodi/photo_2026-05-25%2016.58.12.jpeg",
      "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/projects/shifer-zavodi/photo_2026-05-25%2016.58.13.jpeg",
      "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/projects/shifer-zavodi/photo_2026-05-25%2016.58.14.jpeg",
      "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/projects/shifer-zavodi/photo_2026-05-25%2016.58.15.jpeg",
      "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/projects/shifer-zavodi/photo_2026-05-25%2016.58.16.jpeg",
    ],
    stats: {
      capacityLabel: {
        uz: "Kunlik chiqarish",
        ru: "Суточный выпуск",
        en: "Daily output",
      },
      capacityValue: "8 000 dona",
      durationDays: 35,
      engineers: 2,
    },
    i18n: {
      uz: {
        title: "Shifer zavodi",
        location: "Toshkent viloyati",
        tagline:
          "Fibratsiment shifer ishlab chiqarish liniyasi — loyiha, yetkazib berish va ishga tushirish",
        summary:
          "Vericore Global jamoasi mijoz uchun zamonaviy shifer ishlab chiqarish zavodini tashkil qilish uchun uskunalar tanlash, yetkazib berish va ishga tushirish ishlarini bajaradi.",
        challenge:
          "Mijoz mahalliy qurilish bozorida barqaror sifatli shifer yetkazib berish uchun qisqa muddatda ishlab chiqarishni boshlashni talab qildi.",
        solution:
          "Biz loyiha hajmini tahlil qildik, press va quritish liniyasini tanladik, logistika va bojxona jarayonlarini boshqardik, joyda montaj va operatorlarni o'qitishni amalga oshirdik.",
        equipment:
          "Shifer pressi, quritish konveyeri, kesish va qadoqlash bo'limi, avtomatik nazorat tizimi.",
        results:
          "Zavod belgilangan muddatda ishga tushirildi, birinchi oyda 180 000 dona shifer ishlab chiqarildi, 15 oy kafolat xizmati boshlandi.",
      },
      ru: {
        title: "Шиферный завод",
        location: "Ташкентская область",
        tagline: "Линия производства фиброцементного шифера — проект, поставка и запуск",
        summary:
          "Команда Vericore Global выполнила подбор, поставку и запуск оборудования для современного шиферного завода.",
        challenge:
          "Заказчику нужно было в короткие сроки запустить стабильный выпуск шифера для строительного рынка региона.",
        solution:
          "Мы провели анализ объёмов, подобрали линию пресса и сушки, организовали логистику и таможню, выполнили монтаж и обучение операторов.",
        equipment:
          "Пресс для шифера, сушильный конвейер, участок резки и упаковки, автоматизированная система управления.",
        results:
          "Завод запущен в срок, в первый месяц произведено 180 000 листов шифера, начато 15-месячное гарантийное обслуживание.",
      },
      en: {
        title: "Shifer Zavod",
        location: "Tashkent region",
        tagline: "Fiber-cement shifer (slate) line — engineering, delivery, and commissioning",
        summary:
          "The Vericore Global team selected, delivered, and commissioned equipment for a modern fiber-cement slate plant.",
        challenge:
          "The client needed to start reliable slate output quickly to serve regional construction demand.",
        solution:
          "We sized the project, specified the press and drying line, managed logistics and customs, then installed the plant and trained operators on site.",
        equipment:
          "Slate press, drying conveyor, cutting and packing section, automated control system.",
        results:
          "The plant launched on schedule, producing 180,000 sheets in the first month with 15-month warranty service started.",
      },
    },
  },
  {
    slug: "fargona-plastik-idish",
    year: 2024,
    regionSlug: "fergana",
    categorySlug: "plastik-idishlar",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1625465838283-36cec8a78e01?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590053324844-59cc582f139e?auto=format&fit=crop&w=1200&q=80",
    ],
    stats: {
      capacityLabel: {
        uz: "Sikl vaqti",
        ru: "Время цикла",
        en: "Cycle time",
      },
      capacityValue: "18 s",
      durationDays: 32,
      engineers: 1,
    },
    i18n: {
      uz: {
        title: "Farg'ona plastik idish sexi",
        location: "Farg'ona viloyati",
        tagline: "In'ektsiya molding liniyasi",
        summary: "Plastik idishlar uchun to'liq ishlab chiqarish liniyasi.",
        challenge: "Yangi mahsulot turini tez bozorga chiqarish.",
        solution: "Qoliplar, extruder va avtomatlashtirish tizimini jamlash.",
        equipment: "In'ektsiya presslari, sovitish konveyeri, robot manipulyator.",
        results: "3 ta yangi SKU ishlab chiqarishga chiqarildi.",
      },
      ru: {
        title: "Ферганский цех пластиковой тары",
        location: "Ферганская область",
        tagline: "Линия литья под давлением",
        summary: "Полный производственный цикл пластиковой тары.",
        challenge: "Быстрый вывод новой номенклатуры на рынок.",
        solution: "Подбор пресс-форм, экструдера и автоматизации.",
        equipment: "ТПА, конвейер охлаждения, робот-манипулятор.",
        results: "Запущены 3 новых SKU.",
      },
      en: {
        title: "Fergana Plastic Packaging Plant",
        location: "Fergana region",
        tagline: "Injection molding line",
        summary: "Full production line for plastic containers.",
        challenge: "Launch new SKUs to market quickly.",
        solution: "Integrated molds, extruder, and automation.",
        equipment: "Injection presses, cooling conveyor, robot arm.",
        results: "Three new SKUs brought into production.",
      },
    },
  },
];
