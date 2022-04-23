import localeEN from './assets/locales/en.json';

const pkg = require('./package');

console.log('ENV', process.env.NODE_ENV);

module.exports = {
  ssr: false,
  target: 'static',
  router: {
    base: '/',
    linkExactActiveClass: 'active',
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'CashFlash Admin Panel',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Admin panel for CashFlash' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: 'favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700' },
      {
        rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css', integrity: 'sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/', crossorigin: 'anonymous',
      },
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#000' },

  /*
  ** Global CSS
  */
  css: [
    'assets/css/nucleo/css/nucleo.css',
    'assets/sass/argon.scss',
    'assets/custom/scss/mixins.scss',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/dashboard/dashboard-plugin',
    '~/plugins/api.js',
    { src: '~plugins/v-mask', ssr: false },
    { src: '@plugins/axios.js' },
    { src: '~/plugins/dashboard/full-calendar', ssr: false },
    { src: '~/plugins/dashboard/world-map', ssr: false },
    { src: '~plugins/clipboard.js', ssr: false },
    { src: '@plugins/vee-validate.js' },
    { src: '@plugins/axios.js' },
  ],
  components: true,
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-i18n',
    'bootstrap-vue/nuxt',
    'cookie-universal-nuxt',
  ],
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    vueI18n: {
      messages: {
        // ru: localeRU,
        en: localeEN,
      },
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
      fallbackLocale: 'en',
    },
  },
  build: {
    transpile: [
      'vee-validate/dist/rules',
    ],
    babel: {
      compact: false,
    },
  },
  axios: {
    baseURL: 'https://manage-test.cashflash.io/api/',
  },
};
