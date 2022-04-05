const { response } = require('express');
const fs = require('fs');
const path = require('path');
const router = require('express').Router();

// retrieve main page
router.get ('/', (req, res) => {
  res.sendFile(path.join(_dirname, '../../public/index.html'))
})

// retrieve notes page
router.get ('/notes', (req, res) => {
  res.sendFile(path.join(_dirname, '../../public/notes.html'))
})

module.exports = router;

