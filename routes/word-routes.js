const express = require('express');
const {
  getWord, 
  deleteWord,
  getEditWord,
  editWord,
  getWords,
  getAddWord,
  addWord
} = require('../controllers/word-controller');

const router = express.Router();

router.get('/words/:id', getWord);
router.delete('/words/:id', deleteWord);
router.get('/edit/:id', getEditWord);
router.put('/edit/:id', editWord);
router.get('/words', getWords);
router.get('/add-word', getAddWord);
router.post('/add-word', addWord);

module.exports = router;
