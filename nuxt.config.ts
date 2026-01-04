// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/supabase", "@nuxt/image", "@vueuse/nuxt"],

  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  supabase: {
    redirect: false,
  },

  nitro: {
    preset: "vercel",
  },

  compatibilityDate: "2026-01-04",
});
