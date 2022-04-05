const fs = require('fs');
const express = require('express');
const path = require('path');
// instantiate the server, then tell it to listen for requests
const app = express();

const { notes } = require('./db/db.json')

const PORT = process.env.PORT || 3001;

app.get('/api/notes', (req, res) => {
  res.send('Hello!');
});

app.listen(PORT, () => {
  console.log(`API server is now on port ${PORT}!`);
});