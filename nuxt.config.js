import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'Lukasz Luminski | Portfolio',
    title: 'Lukasz Luminski | Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Vue.js Web and Mobile Developer. Nuxt.js, Vuetify, Quasar Framework.' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'Lukasz Luminski | Portfolio' },
      { hid: 'og:title', name: 'og:title', content: 'Lukasz Luminski | Portfolio' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Lukasz Luminski' },
      { hid: 'og:description', name: 'og:description', content: 'Vue.js Web and Mobile Developer. Nuxt.js, Vuetify, Quasar Framework.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { hid: 'shortcut-icon', rel: 'shortcut-icon', href: '/favicon.png' },
      { hid: 'apple-touch-icon', rel: 'apple-touch-icon', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        // href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap'
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/jarallax.scss',
    'aos/dist/aos.css', '~/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/jarallax.js', ssr: false }, { src: '~/plugins/aos.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/robots',
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/recaptcha',
    '@nuxtjs/dotenv'
  ],

  robots: {
    UserAgent: '*',
    Disallow: ''
  },

  recaptcha: {
    language: 'v2',
    siteKey: '6LdjLOgaAAAAAHbcG8yiHaSMSsXN-eAYv3WZ8gAx', // Site key for requests
    // siteKey: 'AIzaSyA8sTisx_Kz5vDRRUaUTQb3y7i7rtKGaoM',
    version: 2, // Version
    size: 'invisible'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://lukaszluminski.com/'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/scss/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
