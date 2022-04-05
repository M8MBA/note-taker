const fs = require('fs');
const path = require('path');

const { notes } = require('')

// get all notes
app.get('/api/notes', (req, res) => {
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  })
});

// create a new note
