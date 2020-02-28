const express = require('express');
const shorturlController = require('../controllers/shorturl-controller');
const router = express.Router();

router.post('/', shorturlController.createAlias);

module.exports = router;
