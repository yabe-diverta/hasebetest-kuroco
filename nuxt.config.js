require('dotenv').config()
const { BASE_URL } = process.env
const { STATIC_ACCESS_TOKEN } = process.env

module.exports = {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'hasebetest-kuroco',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
//     script: [
//       {
//         src:
//           'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js',
//         integrity:
//           'sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p',
//        crossorigin: 'anonymous',
//      },
//     ],
     script: [
       {
         src:
           'https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js',
         integrity:
           'sha384-Qg00WFl9r0Xr6rUqNLv1ffTSSKEFFCDCKVyHZ+sVt8KuvG99nWw5RNvbhuKgif9z',
        crossorigin: 'anonymous',
      },
      {
        src:
          'https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js',
        integrity:
          'sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF',
       crossorigin: 'anonymous',
     },
     ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
//    link: [
//     {
//        rel: 'stylesheet',
//         integrity:
//           'sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3',
//         href:
//           'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
//         crossorigin: 'anonymous',
//       },
//     ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  //多言語対応 https://qiita.com/matsumana07384/items/4b9731d46c3698b464d8

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/axios',
          ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      'nuxt-i18n',
      {
        strategy: 'prefix_and_default',
        // 切り替える言語を定義
        locales: [
          { code: 'ja', file: 'ja.json' },
          { code: 'en', file: 'en.json' },
        ],
        // デフォルトの言語を↑で定義したcodeで記載
        defaultLocale: 'ja',
        vueI18n: {
          // ファイルが読めなかった場合の言語を定義
          fallbackLocale: 'en',
        },
        vueI18nLoader: true,
        lazy: true,
        // 言語ファイル(.json)のディレクトリを記載
        langDir: 'locales/',
      },
    ],
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/google-gtag',
    '@nuxtjs/axios',
  ],
  'google-gtag': {
    id: 'UA-151755087-5',
  },

  env: {
    BASE_URL,
    STATIC_ACCESS_TOKEN,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  axios: {
    baseURL: process.env.BASE_URL,
    credentials: true,
    withCredentials: true
  },

  privateRuntimeConfig: {
    apiSecret: process.env.API_SECRET
  },
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'https://nuxtjs.org',
    apiSecret: process.env.API_SECRET || '1111',
    baseOrigin: process.env.BASE_ORIGIN
  }
}
