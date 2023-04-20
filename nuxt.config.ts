// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n"],
  i18n: {
    vueI18n: "./i18n.config.ts",
    locales: [
      { code: "de", file: "de.json" },
      { code: "nl", file: "nl.json" },
      { code: "at", file: "at.json" },
    ],
    defaultLocale: "de",
    langDir: "locales/",
    strategy: "no_prefix",
    lazy: true,
  },
});
