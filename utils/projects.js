const projects = [
  {
    img: 'converter.jpg',
    alt: 'Vue.js, Vuex and Vue Router app',
    live: 'https://l-luminski-vue-currency-converter.netlify.app/',
    code: 'https://github.com/LukaszLuminski/Vue-Currency-Converter/',
    title: 'Vue Currency Converter',
    description: 'A Vue.js application, built with Vuetify, using Vuex, Vue Router and RESTful API endpoints.',
    long_description: 'An app made over a weekend in February 2020, deployed to Netlify. A simple currency converter partially inspired by the Google one. Styling time was singificantly reduced thanks to using Vuetify. I wanted to create a simple Vue.js app, that would use Vue Router, Vuex and would consume an API. Vue router is used to provide navigation - with transitions - between the two available pages. Vuex store object is saved to a browser\'s localStorage and is utilised to keep the history of all conversions, which records can be deleted. The API used is Float Rates (http://www.floatrates.com/). There is a full data validation and error handling implemented',
    front_end: 'Vue.js, Vuex, Vue Router, Vuetify, SCSS',
    back_end: null,
    db: null
  },
  {
    img: 'tastytreats.jpg',
    alt: 'Data validation and user authorisation app',
    live: 'https://tastytreats.herokuapp.com/',
    code: 'https://github.com/LukaszLuminski/TastyTreats/',
    title: 'Tasty Treats',
    description: 'A Node.js and Express app with data validation, user authentication and database. Full info and instructions can be found in GitHub README.',
    front_end: 'HTML5, JavaScript ES6+, jQuery, SCSS',
    back_end: 'Node.js, Express.js',
    db: 'MongoDB'
  },
  {
    img: 'weather.jpg',
    alt: 'Node.js Weather application',
    live: 'https://weather-app-ll.herokuapp.com/',
    code: 'https://github.com/LukaszLuminski/WeatherApp/',
    title: 'Weather App',
    description: 'A simple Node.js, Express and Handlebars app consuming API from OpenWeatherMap, handling route and data errors.',
    front_end: 'HTML5, JavaScript ES6+, jQuery, SCSS',
    back_end: 'Node.js, Express.js',
    db: null
  },
  {
    img: 'burger.jpg',
    alt: 'Fictional burger restaurant website',
    live: 'https://lukaszluminski.github.io/BurgerRestaurant/',
    code: 'https://github.com/LukaszLuminski/BurgerRestaurant/',
    title: 'Burger Restaurant',
    description: 'Landing page of a fictional restaurant, developed mostly with Bootstrap and jQuery.',
    front_end: 'HTML5, JavaScript ES6+, jQuery, Bootstrap, SCSS',
    back_end: null,
    db: null
  },
  {
    img: 'portfolio.jpg',
    alt: 'Lukasz Luminski Portfolio website',
    live: 'https://lukaszluminski.github.io/Portfolio/',
    code: 'https://github.com/LukaszLuminski/Portfolio/',
    title: 'Previous Portfolio',
    description: 'First version of this website, built in 2019 just with HTML5, SCSS and JavaScript ES6.',
    front_end: 'HTML5, JavaScript ES6+, SCSS',
    back_end: null,
    db: null
  },
  {
    img: 'euphoria.png',
    alt: 'Euphoria Sports Therapy Website',
    live: 'https://www.euphoriasportstherapy.com',
    title: 'Euphoria Sports Therapy',
    description: 'My first website made for a client, in 2019. Designed and built by myself from a scratch, then migrated to WordPress.',
    front_end: 'HTML5, jQuery, CSS3',
    back_end: 'WordPress',
    db: null
  }
]

export default projects
