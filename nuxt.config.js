export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'hasebetest-kuroco',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // 多言語設定利用のため追加 https://kuroco.app/ja/docs/tutorials/building-a-multi-language-site/
    [
      'nuxt-i18n',
      {
        strategy: 'prefix_and_default',
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
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL,
    // クロスオリジンでのcookieを有効化 https://kuroco.app/ja/docs/tutorials/integrate-login/
    credentials: true,
    withCredentials: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
