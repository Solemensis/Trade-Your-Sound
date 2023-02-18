// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/supabase", "@nuxt/image-edge", "@vueuse/nuxt"],

  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  // nitro: {
  //   prerender: {
  //     routes: ["/"],
  //   },
  //   routeRules: { "/*": { cors: true } },
  // },
});
