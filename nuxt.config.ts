// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts', '@nuxtjs/color-mode'],

  // https://google-fonts.nuxtjs.org/
  googleFonts: {
    display: 'swap',
    preload: true,
    overwriting: true,
    subsets: ['cyrillic', 'latin'],
    families: {
      Roboto: [400],
      Jost: [300, 400, 500]
    }
  },

  //https://color-mode.nuxtjs.org/
  colorMode: {
    preference: 'dark',
    fallback: 'dark'
  }
})
