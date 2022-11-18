export const state = () => ({
  items: [
    {
      img: 'bodyandsoultherapy.jpg',
      alt: 'Body & Soul Therapy website',
      live: 'https://bodyandsoultherapypeterborough.com',
      title: 'Body & Soul Therapy website',
      description: 'Website for a local clinic, built with Nuxt.js and BootstrapVue, using Netlify functions.',
      long_description: '<p>The website has been deployed with Netlify. It uses its functions, e.g., the integration with Mailchimp and a serverless contact form.</p><p>Will use a CMS at a later stage.</p>',
      front_end: 'Nuxt.js, BootstrapVue, SCSS',
      back_end: 'Netlify',
      db: null
    },
    {
      img: 'nuxt-blog.jpg',
      alt: 'Nuxt Blog',
      live: 'https://ll-blog-task.netlify.app/',
      code: 'https://github.com/LukaszLuminski/NuxtBlog',
      title: 'Nuxt Blog',
      description: 'A simple Nuxt blog, using Vue Router, Vuex, Storybook and Jest, consuming API from mockapi.io.',
      long_description: '<p>A simple blog, built as a (passed) technical test, with some of its components added to Storybook and tested. It was an interesting exercise, utilising Vue Router, Vuex, Axios and from the visual side – a great library <a href="https://bootstrap-vue.org/" target= \'_blank\'>BootstrapVue</a>. Built in one day.</p>',
      front_end: 'Nuxt.js, BootstrapVue, Storybook, SCSS',
      back_end: 'mockapi.io',
      db: null
    },
    {
      img: 'portfolio-new.jpg',
      alt: 'Portfolio',
      live: null,
      code: 'https://github.com/LukaszLuminski/NuxtPortfolio',
      title: 'Portfolio',
      description: 'This very website, built with Nuxt.js and Vuetify.',
      long_description: '<p>Portfolio website, built in 2020 with Nuxt.js and Vuetify. Deployed to Netlify, using its serverless contact form.</p>',
      front_end: 'Nuxt.js, Vuetify, SCSS',
      back_end: null,
      db: null
    },
    {
      img: 'converter.jpg',
      alt: 'Vue Currency Converter',
      live: 'https://l-luminski-vue-currency-converter.netlify.app/',
      code: 'https://github.com/LukaszLuminski/Vue-Currency-Converter/',
      title: 'Vue Currency Converter',
      description: 'A Vue.js application, built with Vuetify, using Vuex, Vue Router and RESTful API endpoints.',
      long_description: '<p>An app made over a weekend in February 2020, deployed to Netlify.</p><p>A simple currency converter partially inspired by the Google one. Styling time was singificantly reduced thanks to using Vuetify.</p><p>I wanted to create a simple Vue.js app, that would use Vue Router, persistent Vuex and would consume an API.</p><p>Vue router is used to provide navigation - with transitions - between the two available pages. Vuex store object is saved to a browser\'s localStorage and is utilised to keep the history of all conversions, which records can be deleted.</p><p>The API used is Float Rates (<a href="https://www.floatrates.com/" target= \'_blank\'>https://www.floatrates.com/</a>).</p><p>There is a full data validation and error handling implemented.</p>',
      front_end: 'Vue.js, Vuex, Vue Router, Vuetify, SCSS',
      back_end: null,
      db: null
    }
  ]
})
