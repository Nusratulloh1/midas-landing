// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  spaLoadingTemplate: './app-loading.html',
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
    '@nuxt/devtools',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    'nuxt-swiper',
    'nuxt-lazyimages'
  ],
  lazyimages: {
    // Default configuration:
    lazyClass: 'lazyload',
    preloadAfterLoad: false,
    loadedClass: 'lazyloaded',
    loadingClass: 'lazyloading',
    preloadClass: 'lazypreload',
    errorClass: 'lazyerror',
    autosizesClass: 'lazyautosizes',
    fastLoadedClass: 'ls-is-cached',
    iframeLoadMode: 0,
    srcAttr: 'data-src',
    srcsetAttr: 'data-srcset',
    sizesAttr: 'data-sizes',
    minSize: 40,
    customMedia: {},
    expFactor: 1.5,
    hFac: 0.8,
    loadMode: 2,
    loadHidden: true,
    ricTimeout: 0,
    throttleDelay: 125
},
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