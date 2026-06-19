import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@shared/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_CONFIG.name,
    short_name: "Verikore",
    description: SITE_CONFIG.description,
    start_url: "/uz",
    scope: "/",
    display: "standalone",
    background_color: "#0a1220",
    theme_color: "#006875",
    orientation: "portrait",
    icons: [
      {
        src: "/brand/vericore-logo-light.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/brand/vericore-logo-light.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/brand/vericore-logo-dark.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: ["business", "productivity"],
    lang: "uz",
  };
}
