// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages : https://equinoxya.github.io/SitePortfolio
// Sur Netlify ou un domaine perso : mettre base à "/" et changer site.
export default defineConfig({
  site: "https://equinoxya.github.io",
  base: "/SitePortfolio",
  // Anglais à la racine, français sous /fr/
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
