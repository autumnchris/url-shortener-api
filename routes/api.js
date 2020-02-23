const express = require('express');
const validURL = require('valid-url');
const randomstring = require('randomstring');
const ShortURL = require('../models/shorturl');
const router = express.Router();

router.post('/', (req, res, next) => {
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
        alias_url: `https://autumnchris-url-shortener.herokuapp.com/${alias}`
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

module.exports = router;
