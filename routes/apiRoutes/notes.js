const fs = require('fs');
const path = require('path');
const router = express.Router();
// create a uuid to give each note a unique id (npm)
const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

// get all notes
route.get('/api/notes', (req, res) => {
  fs.readFile('./db/db.json', 'utf-8', (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  })
});

// create a new note
router.post('api/notes', (req, res) => {
  const newNote = {
    title:request.body.title,
    text: request.body.text,
    id: uuidv4()
  }

  return fs.readFile('db/db.json', 'utf-8', (err, data) => {
    if (err) throw err;
    const notes = JSON.parse(data);
    notes.push(newNote);
  
    fs.writeFile('db/db.json', JSON.stringify(notes), () => {
      response.json(true);
    })

  })

})

module.exports = router;