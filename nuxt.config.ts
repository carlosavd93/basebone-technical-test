import { resolve } from "path";
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: [["@pinia/nuxt", { autoImports: ["defineStore"] }]],
  alias: {
    "@": resolve(__dirname, "/"),
  },
  css: ["~/assets/main.scss"],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  imports: {
    dirs: ["stores"],
  },
  compatibilityDate: "2024-08-11",
});
