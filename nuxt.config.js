import colors from "vuetify/es5/util/colors";

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    // titleTemplate: "%s - iClinDoctor",
    title: "iClinDoctor - Software de Gestão de Clinicas ",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "iClinDoctor - Software de Gestão de Cínicas"
      },
      {
        hid: "robots",
        name: "robots",
        content: "index,follow"
      }
    ],
    script: [
      {
        src: "/zoho.js"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=PT+Sans:400,700&display=swap"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "~/assets/main.css"
    // 'video.js/dist/video-js.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "plugins/preview.client.js",
    { src: "~/plugins/Vuelidate" },
    { src: "~/plugins/vue-plyr", mode: "client" },
    { src: "~plugins/vue-cookie", ssr: false, injectAs: "cookie" },
    {
      src: "~/plugins/GoogleAnalytics.js",
      mode: "client"
    }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    "@nuxtjs/moment"
  ],

  moment: {
    locales: ["pt-br"]
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxt/content",
    [
      "nuxt-facebook-pixel-module",
      {
        /* module options */
        track: "PageView",
        pixelId: "your pixel id",
        autoPageView: true,
        disabled: false
      }
    ],
    "vuetify-dialog/nuxt",
    "@nuxtjs/sitemap"
  ],

  sitemap: {
    // path: "/iclindoctor.techaboutdev.xml",
    hostname: "http://www.iclindoctor.techaboutdev.com.br",
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    // generate: false,
    routes: ["/", "/precos", "/funcionalidades"].map(route => ({
      url: route,
      changefreq: "monthly",
      priority: 1,
      lastmodISO: new Date().toISOString().split("T")[0]
    }))
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    //baseURL: `${API_BASE_URL()}/api`,
    timeout: 30000,
    withCredentials: false
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    treeShake: true,
    defaultAssets: {
      font: false
    },
    theme: {
      dark: false,
      themes: {
        light: {
          primary: "#42a5f6",
          secondary: "#050b1f",
          accent: "#204165"
        },
        dark: {}
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
