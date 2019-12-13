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

app.get('/:shorturl', (req, res) => {
  ShortURL.findOne({alias: req.params.shorturl}).then(data => {
    res.redirect(data.url);
  }).catch(err => {
    res.sendFile(`${__dirname}/public/404.html`);
  });
});

app.use((req, res) => {
  res.status(404).sendFile(`${__dirname}/public/404.html`);
});

app.listen(port, console.log(`Server is listening at port ${port}.`));
