import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Germina",
    short_name: "Germina",
    description:
      "Información sobre salud sexual y reproductiva para adolescentes de la región andina.",
    start_url: "/",
    display: "standalone",
    background_color: "#F1EADA",
    theme_color: "#F1EADA",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
