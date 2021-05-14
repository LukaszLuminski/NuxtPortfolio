export const state = () => ({
  items: [
    {
      img: 'tastytreats.jpg',
      alt: 'Data validation and user authorisation app',
      live: 'https://tastytreats.herokuapp.com/',
      code: 'https://github.com/LukaszLuminski/TastyTreats/',
      title: 'Tasty Treats',
      description: 'A Node.js and Express app with data validation, user authentication and database. Full info and instructions can be found in GitHub README.',
      long_description: '<p>An app I\'ve built in April 2020 to learn more about Node.js and saving validated data in a database, accessible only for authenticated users.</p><p>I\'ve created a fictional bakery\'s contact page with a contact form that uses Google reCAPTCHA v3 for spam prevention. Before submission, a form is validated from both the client and the server side, with the list of possible errors ready to be displayed.</p><p>Submitted forms are saved in a MongoDB database. To view and edit them, user needs to navigate to \'admin\' route and log in with the following credentials: \'admin\' as the login, \'admin\' as the password and \'treats\' in the bottom field.</p><p>If logged in successfully, user will be redirected to the last available route, \'/forms\'. From there all the submitted forms can be viewed, temporarily hidden or permanently removed from the database.</p>',
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
      long_description: '<p>My first app consuming APIs, two different ones in this case. These are the OpenWeatherMap (<a href="https://openweathermap.org/" target="_blank">https://openweathermap.org/</a>) and Google Autocomplete, for places\' names.</p><p>Any possible errors are displayed to user, data is validated prior to an API call. This project taught me more about APIs and using Google Developers Console.</p>',
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
      long_description: '<p>A technical task, which I received while applying for my first frontend developer role. Successfully passed, it allowed me to eventually get the role.</p><p>I was supposed to design and build a landing page of a fictional restaurant, using Bootstrap. All in all it was a great exercise, extending my knowledge about this toolkit\'s potential to create beautiful and modern websites.</p>',
      front_end: 'HTML5, JavaScript ES6+, jQuery, Bootstrap, SCSS',
      back_end: null,
      db: null
    },
    {
      img: 'euphoria.png',
      alt: 'Euphoria Sports Therapy Website',
      live: 'https://www.euphoriasportstherapy.com',
      title: 'Euphoria Sports Therapy',
      description: 'My first website made for a client, in 2019. Designed and built by myself from a scratch, then migrated to WordPress.',
      long_description: '<p>I\'ve designed and built this website in December 2019, for a local sports therapy clinic.</p><p>It was my first such a complex project and in the process I\'ve also learnt about SEO good practices.</p><p>Since the client wanted to possibly add more features in the future, with time I migrated the website to WordPress.</p>',
      front_end: 'HTML5, jQuery, CSS3, Bootstrap',
      back_end: 'PHP',
      db: 'MySQL'
    }
  ]
})
