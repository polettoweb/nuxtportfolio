const pkg = require("./package");
const axios = require('axios');

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
  modules: [
    ['@nuxtjs/google-analytics']
  ],
  'google-analytics': {
    id: 'UA-61997681-5',
    disabled: this.load
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {}
  },
  generate: {
    routes: function() {
      return axios("https://marcopolettouk.firebaseio.com/articles/.json")
      .then(res => {
        const routes = [];
        res.data.map(item => routes.push('/blog/' + item.slug))
        return routes;
      })
    }
  }
};
