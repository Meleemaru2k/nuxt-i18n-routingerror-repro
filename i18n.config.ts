export default defineI18nConfig((nuxt) => ({
  fallbackLocale: "de",
  legacy: false,
  globalInjection: true,
  locale: "de",
  numberFormats: {
    de: {
      currency: {
        style: "currency",
        currency: "EUR",
      },
      currencyNoCents: {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      },
      decimal: {
        style: "decimal",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
      percent: {
        style: "percent",
        useGrouping: false,
      },
    },
  },
}));
