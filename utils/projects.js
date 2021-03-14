const projects = [
  {
    img: 'converter.jpg',
    alt: 'Vue.js, Vuex and Vue Router app',
    live: 'https://l-luminski-vue-currency-converter.netlify.app/',
    code: 'https://github.com/LukaszLuminski/Vue-Currency-Converter/',
    title: 'Vue Currency Converter',
    description: 'A Vue.js application, built with Vuetify, using Vuex, Vue Router and RESTful API endpoints.',
    long_description: 'An app made over a weekend in February 2020, deployed to Netlify. A simple currency converter partially inspired by the Google one. Styling time was singificantly reduced thanks to using Vuetify. I wanted to create a simple Vue.js app, that would use Vue Router, Vuex and would consume an API. Vue router is used to provide navigation - with transitions - between the two available pages. Vuex store object is saved to a browser\'s localStorage and is utilised to keep the history of all conversions, which records can be deleted. The API used is Float Rates (http://www.floatrates.com/). There is a full data validation and error handling implemented.',
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
    long_description: 'An app I\'ve built in April 2020 to learn more about Node.js and saving validated data in a database, accessible only for authenticated users. I\'ve created a fictional bakery\'s contact page with a contact form that uses Google reCAPTCHA v3 for spam prevention. Before submission, a form is validated from both the client and the server side, with the list of possible errors ready to be displayed. Submitted forms are saved in a MongoDB database. To view and edit them, user needs to navigate to \'admin\' route and log in with the following credentials: \'admin\' as the login, \'admin\' as the password and \'treats\' in the bottom field. If logged in successfully, user will be redirected to the last available route, \'/forms\'. From there all the submitted forms can be viewed, temporarily hidden or permanently removed from the database.',
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
    long_description: 'My first app consuming APIs, two different ones in this case. These are the OpenWeatherMap (https://openweathermap.org/) and Google Autocomplete, for places\' names. Any possible errors are displayed to user, data is validated prior to an API call. This project taught me more about APIs and using Google Developers Console.',
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
    long_description: 'A technical task, which I received while applying for my first frontend developer role. Successfully passed, it allowed me to eventually get the role. I was supposed to design and build a landing page of a fictional restaurant, using Bootstrap. All in all it was a great exercise, extending my knowledge about this toolkit\'s potential to create beautiful and modern websites.',
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
    long_description: 'I\'ve designed and built this website from scratch, in December 2019, for a local sports therapy clinic. It was my first such a complex project and in the process I\'ve also learnt about SEO best practices. Since the client wanted to possibly add more features in the future, with time I migrated the website to WordPress.',
    front_end: 'HTML5, jQuery, CSS3',
    back_end: 'WordPress',
    db: null
  }
]

export default projects
