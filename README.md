# URL Shortener API

An Express.js API that takes a submitted URL and creates an alias URL that, if navigated to, will redirect to the original URL.

Inspired by the [URL Shortener Microservice challenge](https://learn.freecodecamp.org/apis-and-microservices/apis-and-microservices-projects/url-shortener-microservice) as part of the curriculum for the [Back End Development and APIs Certification](https://www.freecodecamp.org/learn/back-end-development-and-apis) on [freeCodeCamp](https://www.freecodecamp.org).

---

## Built With
* [Express.js](https://expressjs.com)
* [Node.js](https://nodejs.org/en)
* [Mongoose](https://mongoosejs.com)
* [MongoDB](https://www.mongodb.com)
* [EJS](https://ejs.co)
* HTML5
* CSS3
* JavaScript
* Vanilla JS
* [randomstring](https://github.com/klughammer/node-randomstring)
* [valid-url](https://github.com/ogt/valid-url)
* [dotenv](https://github.com/motdotla/dotenv)
* [Normalize.css](https://necolas.github.io/normalize.css)
* [Google Fonts](https://fonts.google.com)
* [FontAwesome](https://fontawesome.com)
* [nodemon](https://nodemon.io)

## Demo

View project demo at [https://autumnchris-url-shortener-api.onrender.com/api](https://autumnchris-url-shortener-api.onrender.com/api).

## Instructions

After forking and cloning, navigate to the repository in your command line and install the NPM packages:
```
npm install
```

Create a `.env` file in the root of the repository and add the following environment variables:
```
MONGO_URI=<your-mongodb-uri>
```

Run the following script in your command line if starting the repository in development mode:
```
npm run dev
```

Run the following script in your command line if starting the repository in production mode:
```
npm start
```

Once the server is running, go to `http://localhost:3000` in your browser.
