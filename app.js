const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const validURL = require('valid-url');
const randomstring = require('randomstring');
const ShortURL = require('./models/shorturl.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect(process.env.MONGO_URI);

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});

app.use(express.static(`${__dirname}/public`));

app.post('/api/shorturl/new', (req, res) => {
  let alias,
  shortURL;

  if (validURL.isUri(req.body.url)) {
    alias = randomstring.generate({
      length: 8,
      charset: 'alphanumeric'
    });
    shortURL = new ShortURL({
      url: req.body.url,
      alias
    });
    shortURL.save().then(url => {
      res.json({
        original_url: req.body.url,
        short_url: `https://autumnchris-url-shortener.herokuapp.com/${alias}`
      });
    }).catch(error => {
      res.json({ error });
    });
  }
  else {
    res.json({
      error: 'Invalid URL'
    });
  }
});

app.use((req, res) => {
  res.sendFile(`${__dirname}/views/404.html`, 404);
});

app.listen(port, console.log(`Server is listening at port ${port}.`));
