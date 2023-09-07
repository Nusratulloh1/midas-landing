// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
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
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    'nuxt-swiper',
    '@vee-validate/nuxt'
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
