require('dotenv').config();
const { BASE_URL } = process.env;
const { STATIC_ACCESS_TOKEN } = process.env;

module.exports = {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/axios'],

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
        strategy: 'prefix',
        // 切り替える言語を定義
        locales: [
          { code: 'ja', file: 'ja.json' },
          { code: 'en', file: 'en.json' },
        ],
        // デフォルトの言語を設定
        defaultLocale: 'ja',
        vueI18nLoader: true,
        lazy: true,
        // jsonファイルを保存したディレクトリを指定
        langDir: 'locales/',
      },
    ],
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/google-gtag',
    '@nuxtjs/axios'
  ],
  'google-gtag': {
    id: 'UA-151755087-5',
  },

  env: {
    BASE_URL, 
    STATIC_ACCESS_TOKEN
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
