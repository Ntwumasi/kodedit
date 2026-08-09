import type { MetadataRoute } from "next";
import { SITE } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kodedit — AI studio and venture lab",
    short_name: "Kodedit",
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0B",
    theme_color: "#0A0A0B",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
