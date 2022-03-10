const mongoose = require('mongoose');

const ShortURLSchema = mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  alias: {
    type: String,
    required: true,
    unique: true
  }
});

const ShortURL = mongoose.model('ShortURL', ShortURLSchema);

module.exports = ShortURL;
