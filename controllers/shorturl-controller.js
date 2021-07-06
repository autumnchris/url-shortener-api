const validURL = require('valid-url');
const randomstring = require('randomstring');
const ShortURL = require('../models/shorturl');

exports.createAlias = (req, res, next) => {
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
      res.send(error);
    });
  }
  else {
    res.send(`The submittted URL is invalid.`);
  }
}

exports.redirect = (req, res, next) => {
  ShortURL.findOne({
    alias: req.params.shorturl
  }).then(data => {
    res.redirect(data.url);
  }).catch(err => {
    res.render('404', {title: 'Page not found | '});
  });
}
