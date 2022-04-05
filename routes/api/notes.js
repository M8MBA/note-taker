const fs = require('fs');
const path = require('path');
const router = require('express').Router();

// create a uuid to give each note a unique id (npm)
const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

// get all notes
router.get('/api/notes', (req, res) => {
  fs.readFile('./db/db.json', 'utf-8', (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  })
});

// create a new note
router.post('/api/notes', (req, res) => {
  const newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4()
  }

  return fs.readFile('db/db.json', 'utf-8', (err, data) => {
    if (err) throw err;

    const notes = JSON.parse(data);
    notes.push(newNote);
  
    fs.writeFile('db/db.json', JSON.stringify(notes), () => {
      res.json(true);
    })

  })

})

// delete note
router.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;

  return fs.readFile('db/db.json', 'utf-8', (err, data) => {
    if (err) throw err;

    const notes = JSON.parse(data);
    const deleteNote = notes.filter(note => id !== note.id)

    fs.writeFile('db/db.json', JSON.stringify(deleteNote), () => {
      res.json(true);
    })

  })

})

module.exports = router;