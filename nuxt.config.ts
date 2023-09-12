// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  spaLoadingTemplate: './app-loading.html',
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Midas',
      meta: [
        { name: 'description', content: 'My amazing site.' }
      ],
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
    'nuxt-lazyimages',
    '@nuxtjs/device'
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
    iframeLoadMode: 1,
    srcAttr: 'data-src',
    srcsetAttr: 'data-srcset',
    sizesAttr: 'data-sizes',
    minSize: 40,
    customMedia: {},
    expFactor: 4,
    hFac: 1.5,
    loadMode: 3,
    loadHidden: true,
    ricTimeout: 0,
    throttleDelay: 66
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