export const state = () => ({
  items: [
    {
      img: 'portfolio-new.jpg',
      alt: 'Nuxt.js and Vuetify app',
      live: null,
      code: 'https://github.com/LukaszLuminski/NuxtPortfolio',
      title: 'Portfolio',
      description: 'This very website, being built with Nuxt.js and Vuetify.',
      long_description: '<p>Portfolio website, with design based on its predecessor: <a href="https://lukaszluminski.github.io/Portfolio/" target= \'_blank\'>https://lukaszluminski.github.io/Portfolio/</a>. The first version was built just with HTML5, SCSS and Javascript / jQuery. Its code can be found here: <a href="https://github.com/LukaszLuminski/Portfolio/" target= \'_blank\'>https://github.com/LukaszLuminski/Portfolio/</a>.</p><p>The current portfolio build is still in progress.</p><p>It\'s being developed with Nuxt.js and Vuetify, and deployed to Netlify.</p>',
      front_end: 'Nuxt.js, Vuetify, SCSS',
      back_end: null,
      db: null
    },
    {
      img: 'converter.jpg',
      alt: 'Vue.js, Vuex and Vue Router app',
      live: 'https://l-luminski-vue-currency-converter.netlify.app/',
      code: 'https://github.com/LukaszLuminski/Vue-Currency-Converter/',
      title: 'Vue Currency Converter',
      description: 'A Vue.js application, built with Vuetify, using Vuex, Vue Router and RESTful API endpoints.',
      long_description: '<p>An app made over a weekend in February 2020, deployed to Netlify.</p><p>A simple currency converter partially inspired by the Google one. Styling time was singificantly reduced thanks to using Vuetify.</p><p>I wanted to create a simple Vue.js app, that would use Vue Router, Vuex and would consume an API.</p><p>Vue router is used to provide navigation - with transitions - between the two available pages. Vuex store object is saved to a browser\'s localStorage and is utilised to keep the history of all conversions, which records can be deleted.</p><p>The API used is Float Rates (<a href="https://www.floatrates.com/" target= \'_blank\'>https://www.floatrates.com/</a>).</p><p>There is a full data validation and error handling implemented.</p>',
      front_end: 'Vue.js, Vuex, Vue Router, Vuetify, SCSS',
      back_end: null,
      db: null
    }
  ]
})
