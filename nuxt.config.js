import defaultTheme from './themes/custom-theme'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/main.css',
    '~node_modules/vuetify/dist/vuetify.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~/plugins/axios',
    { src: '~/plugins/apex-charts.js', ssr: false }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  loading: {color: '#FF0000', height: '40px', duration: 4000},
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    'nuxt-i18n',
    '@nuxtjs/vuetify'
  ],
  axios: {
    baseURL: 'https://jsonplaceholder.typicode.com'
  },
  toast:{},
  i18n: {
    locales: ['en', 'fr', 'es'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome: 'Welcome',
          home: 'Home'
        },
        fr: {
          welcome: 'Bienvenue',
          home: 'Hogar en francés'
        },
        es: {
          welcome: 'Bienvenido',
          home: 'Inicio'
        }
      }
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  router: {
    extendedRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '/another',
        component: resolve(__dirname, 'pages/otro-lado.vue')
      })
    }
  },
  build: {
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  }
}
