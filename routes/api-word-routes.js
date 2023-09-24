const express = require('express');
const {
  getWords,
  addWord,
  getWord, 
  deleteWord,
  editWord,
} = require('../controllers/api-wopd-controller');

const router = express.Router();

// Get All Words
router.get('/api/words', getWords);
// Add New Word
router.post('/api/word/', addWord);
// Get Word by ID
router.get('/api/word/:id', getWord);
// Delete Word by ID
router.delete('/api/word/:id', deleteWord);
// Update Word by ID
router.put('/api/word/:id', editWord);

module.exports = router;
