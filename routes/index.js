const express = require('express');
const shorturlController = require('../controllers/shorturl-controller');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/:shorturl', shorturlController.redirect);

module.exports = router;
