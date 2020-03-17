const path = require("path");

var owner = { first: "Timothy", last: "Stello" }
var baseURL = process.env.BASE_URL || '/';
var withBase = function (s) { return baseURL + s; }
console.log('BaseURL: ' + baseURL);

module.exports = {
  title: owner.first + " " + owner.last,
  description: "A professional website",
  dest: './docs',
  base: baseURL,
  plugins: {
    'seo': {}
  },
  themeConfig: {
    logo: '/assets/img/logo.jpg',
    search: true,
    searchPlaceholder: 'Search...',
    searchMaxSuggestions: 5,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Contact', link: '/contact/' }
    ]
  },
  extendPageData ($page) {
    $page.owner = owner
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname,"../assets"),
        '@module': path.resolve(__dirname,"../../node_modules")
      }
    }
  }
}