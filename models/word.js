const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wordSchema = new Schema({
  words_ua: {
    type: String,
    required: true,
  },
  words_en: {
    type: String,
    required: true,
  },
  activ: {
    type: String,
    required: true,
  }
}, { timestamps: true });

const Word = mongoose.model('Word', wordSchema);
module.exports = Word;
