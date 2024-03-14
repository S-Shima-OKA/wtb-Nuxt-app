// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Inter: '400..700',
      Roboto: true,
      'Noto+Sans+JP': '200..700',
    },
  },
  css: [
    '@/assets/css/tailwind.css',
    '@/assets/css/base.scss'
  ]
})
