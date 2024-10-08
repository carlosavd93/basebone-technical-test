import { resolve } from "path";
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: [
    ["@pinia/nuxt", { autoImports: ["defineStore"] }],
    ["@vee-validate/nuxt", { autoImports: true }],
    "@nuxtjs/tailwindcss",
  ],
  alias: {
    "@": resolve(__dirname, "/"),
  },
  devtools: { enabled: true },
  imports: {
    dirs: ["stores"],
  },
  compatibilityDate: "2024-08-11",
});
