module.exports = {
  content: [
    './assets/**/*.{vue,js,css}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    fontFamily: {
      'gilroy': ['Gilroy'],
      'stapel': ['Stapel'],
      'inter': ['Inter'],
      'muller': ['Muller']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};