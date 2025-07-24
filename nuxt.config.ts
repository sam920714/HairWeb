// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   compatibilityDate: "2025-07-15",
   devtools: { enabled: true },
   runtimeConfig: {
      public: {
         databaseUrl: process.env.DATABASE_URL,
      },
   },
   modules: [
      "@nuxt/content",
      "@nuxt/image",
      "@nuxt/scripts",
      "@nuxt/test-utils",
      "@nuxt/ui",
   ],
});
