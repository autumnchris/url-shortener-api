const express = require('express');
const ShortURL = require('.././models/shorturl.js');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', {title: ''});
});

router.get('/:shorturl', (req, res, next) => {
  ShortURL.findOne({alias: req.params.shorturl}).then(data => {
    res.redirect(data.url);
  }).catch(err => {
    res.render('404', {title: 'Page not found | '});
  });
});

module.exports = router;
