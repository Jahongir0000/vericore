export interface ClientDocument {
  /** Filename inside /public/docks */
  filename: string;
  titleKey: string;
  descriptionKey: string;
}

export const CLIENT_DOCUMENTS: ClientDocument[] = [
  {
    filename: "GP-Product Overview (1).pdf",
    titleKey: "resources.docGpOverviewTitle",
    descriptionKey: "resources.docGpOverviewDesc",
  },
  {
    filename: "200kw diesel generator price-Jet Power-Hellen.pdf",
    titleKey: "resources.docJetPowerTitle",
    descriptionKey: "resources.docJetPowerDesc",
  },
];

export function clientDocHref(filename: string): string {
  return `/docks/${encodeURIComponent(filename)}`;
}
