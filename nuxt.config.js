const pkg = require("./package");

module.exports = {
  mode: "universal",

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.description,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Titillium+Web"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Marck+Script"
      },
      {
        rel: "stylesheet",
        href:
          "https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#FFFFFF" },

  /*
  ** Global CSS
  */
  css: ["~assets/scss/app.css"],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {}
  }
};
