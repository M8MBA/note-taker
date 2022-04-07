const fs = require('fs');
const path = require('path');
const router = require('express').Router();

// retrieve notes page
router.get ('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// retrieve main page
router.get ('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// router.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../public/index.html'));
// });

module.exports = router;

