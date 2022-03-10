const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShortURLSchema = new Schema({
  longURL: {
    type: String,
    required: [true, 'The long URL must be included.']
  },
  shortURLCode: {
    type: String,
    required: [true, 'The short URL code must be included.'],
    unique: true
  },
  dateCreated: {
    type: Date,
    default: Date.now()
  }
});

// Virtual for the created short URL
ShortURLSchema.virtual('shortURL').get(function() {
  return `https://autumnchris-url-shortener.herokuapp.com/alias/${this.shortURLCode}`;
});

const ShortURL = mongoose.model('ShortURL', ShortURLSchema);

module.exports = ShortURL;
