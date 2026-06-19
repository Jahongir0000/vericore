import { photoAt } from "@shared/config/site-photos";

export interface Manager {
  id: string;
  name: string;
  role: string;
  photo: string;
  phone: string;
  telegram: string;
  whatsapp: string;
  yearsAtCompany: number;
  specialties: string[];
}

export const MANAGERS: Manager[] = [
  {
    id: "akmal-karimov",
    name: "Akmal Karimov",
    role: "Senior project consultant",
    photo: photoAt(15),
    phone: "+998 91 777 77 60",
    telegram: "@verikoreglobal",
    whatsapp: "+998917777760",
    yearsAtCompany: 9,
    specialties: ["concrete plants", "cement", "logistics"],
  },
  {
    id: "shaxnoza-tursunova",
    name: "Shaxnoza Tursunova",
    role: "Tile & ceramics specialist",
    photo: photoAt(14),
    phone: "+998 91 777 77 40",
    telegram: "@verikoreglobal",
    whatsapp: "+998917777740",
    yearsAtCompany: 4,
    specialties: ["ceramic tile", "AAC", "brick"],
  },
  {
    id: "rustam-saidov",
    name: "Rustam Saidov",
    role: "Logistics manager",
    photo: photoAt(13),
    phone: "+998 98 170 00 01",
    telegram: "@verikoreglobal",
    whatsapp: "+998981700001",
    yearsAtCompany: 6,
    specialties: ["customs", "regional delivery", "installation"],
  },
];

export const DEFAULT_MANAGER = MANAGERS[0]!;
