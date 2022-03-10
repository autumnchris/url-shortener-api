const express = require('express');
const shorturlController = require('../controllers/shorturl-controller');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.redirect('/api');
});

router.get('/alias/:shortURLCode', shorturlController.redirectToLongURL);

module.exports = router;