// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Midas',
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/icon.png',
        },
      ],
    },
  },
  modules: [
    '@pinia/nuxt',
    '@nuxt/devtools',
    '@vueuse/nuxt'
  ],
  css: [
    '~/assets/styles/css/tailwind.css',
    '~/assets/styles/scss/main.scss'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

});
