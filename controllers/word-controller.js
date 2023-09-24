const Word = require('../models/word');
const createPath = require('../helpers/create-path');

const handleError = (res, error) => {
  console.log(error);
  res.render(createPath('error'), { title: 'Error' });
}

const getWord = (req, res) => {
  const title = 'Word';
  Word
    .findById(req.params.id)
    .then(word => res.render(createPath('word'), { word, title }))
    .catch((error) => handleError(res, error));
}

const deleteWord = (req, res) => {
  Word
    .findByIdAndDelete(req.params.id)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => handleError(res, error));
}

const getEditWord = (req, res) => {
  const title = 'Edit word';
  Word
    .findById(req.params.id)
    .then(word => res.render(createPath('edit-word'), { word, title }))
    .catch((error) => handleError(res, error));
}

const editWord = (req, res) => {
  const { words_en, activ, words_ua } = req.body;
  const { id } = req.params;
  Word
    .findByIdAndUpdate(id, { words_en, activ, words_ua })
    .then((result) => res.redirect(`/words/${id}`))
    .catch((error) => handleError(res, error));
}

const getWords = (req, res) => {
  const title = 'Words';
  Word
    .find()
    .sort({ createdAt: -1 })
    .then(words => res.render(createPath('words'), { words, title }))
    .catch((error) => handleError(res, error));
}

const getAddWord = (req, res) => {
  const title = 'Add Word';
  res.render(createPath('add-word'), { title });
}

const addWord = (req, res) => {
  const { words_en, activ, words_ua } = req.body;
  const word = new Word({ words_en, activ, words_ua });
  word
    .save()
    .then((result) => res.redirect('/words'))
    .catch((error) => handleError(res, error));
}

module.exports = {
  getWord,
  deleteWord,
  getEditWord,
  editWord,
  getWords,
  getAddWord,
  addWord,
};
