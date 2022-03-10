const validURL = require('valid-url');
const randomstring = require('randomstring');
const ShortURL = require('../models/shorturl');

exports.createShortURLCode = (req, res, next) => {
  const longURLInput = req.body.url.trim();
  let shortURLCode;
  let shortURL;

  function generateShortURLCode() {

    if (validURL.isUri(longURLInput)) {
      shortURLCode = randomstring.generate({
        length: 8,
        charset: 'alphanumeric'
      }).toLowerCase();
  
      shortURL = new ShortURL({
        longURL: longURLInput,
        shortURLCode
      });
  
      shortURL.save().then(data => {
        res.json({
          longURL: shortURL.longURL,
          shortURL: shortURL.shortURL
        });
      }).catch(err => {
        
        if (err.code === 11000) {
          generateShortURLCode();
        }
        else {
          res.render('form', { errorMessage: 'Unable to create a shortened URL at this time.' });
        }
      });
    }
    else {
      res.render('form', { errorMessage: 'A valid URL is required to create a shortened URL.' });
    }
  }
  generateShortURLCode();
}

exports.redirectToLongURL = (req, res, next) => {
  ShortURL.findOne({
    shortURLCode: req.params.shortURLCode
  }).then(data => {
    res.redirect(data.longURL);
  }).catch(err => {
    res.render('404', { title: 'Page not found' });
  });
}

exports.fetchAllShortURLs = (req, res, next) => {
  ShortURL.find().then(data => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
}