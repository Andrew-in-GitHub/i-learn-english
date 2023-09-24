const Word = require('../models/word');

const handleError = (res, error) => {
  res.status(500).send(error.message);
}

const getWords = (req, res) => {
  Word
    .find()
    .sort({ createdAt: -1 })
    .then((words) => res.status(200).json(words))
    .catch((error) => handleError(res, error));
}

const addWord = (req, res) => {
  const { words_en, activ, words_ua } = req.body;
  const word = new Word({ words_en, activ, words_ua });
  word
    .save()
    .then((word) => res.status(200).json(word))
    .catch((error) => handleError(res, error));
}

const getWord = (req, res) => {
  Word
    .findById(req.params.id)
    .then((word) => res.status(200).json(word))
    .catch((error) => handleError(res, error));
}

const deleteWord = (req, res) => {
  const { id } = req.params;
  Post
    .findByIdAndDelete(id)
    .then((word) => res.status(200).json(id))
    .catch((error) => handleError(res, error));
}

const editWord = (req, res) => {
  const { words_en, activ, words_ua } = req.body;
  const { id } = req.params;
  Word
    .findByIdAndUpdate(id, { words_en, activ, words_ua }, { new: true })
    .then((post) => res.json(post))
    .catch((error) => handleError(res, error));
}

module.exports = {
  getWords,
  addWord,
  getWord,
  deleteWord,
  editWord,
};
