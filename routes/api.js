const express = require('express');
const shorturlController = require('../controllers/shorturl-controller');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/shorturl/new', (req, res, next) => {
  res.render('form');
});

router.post('/shorturl/new', shorturlController.createShortURLCode);

router.get('/shorturls', shorturlController.fetchAllShortURLs);

module.exports = router;