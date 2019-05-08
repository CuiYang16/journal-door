module.exports = {
  router: {
    routes: [
      { name: "index", path: "/", component: "pages/index.vue" },
      {
        name: "journalList",
        path: "/journalList",
        component: "pages/journalList/index.vue"
      },
      {
        name: "journalInfo",
        path: "/journalInfo",
        component: "pages/journalInfo/index.vue"
      },
      {
        name: "fairInfo",
        path: "/fairInfo",
        component: "pages/fairInfo/index.vue"
      },
      ,
      {
        name: "borrowInfo",
        path: "/borrowInfo",
        component: "pages/borrowInfo/index.vue"
      },
      {
        name: "searchResultInfo",
        path: "/searchResultInfo",
        component: "pages/searchResultInfo/index.vue",
        meta: { requiresAuth: true }
      },
      {
        name: "fairList",
        path: "/fairList",
        component: "pages/fairList/index.vue",
      }
    ]
  },
  /*
   ** Headers of the page
   */
  head: {
    title: "journal-door",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "{{escape description }}"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  plugins: [
    { src: "~plugins/iview", ssr: true },
    { src: "~/plugins/localStorage.js", ssr: false },
    {
      src: "~/plugins/axios",
      ssr: false
    },
    {
      src: "~/plugins/common",
      ssr: false
    },
    { src: "~/plugins/localStorage.js", ssr: false }
  ],
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   */
  build: {
    assetsSubDirectory: "static",
    assetsPublicPath: "/",
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios",
    "@nuxtjs/proxy"
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    proxy: true,
    prefix: "/api", // baseURL
    credentials: true
  },
  proxy: {
    "/api/": {
      target: "http://127.0.0.1:8888", // 代理地址
      changeOrigin: true,
      pathRewrite: {
        "^/api": ""
      }
    }
  }
};
