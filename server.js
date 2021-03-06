const fs = require('fs');
const express = require('express');
const path = require('path');
const uuid = require('uuid');
const apiRoutes = require('./routes/api/notes');
const htmlRoutes = require('./routes/html/htmlRoutes');

// instantiate the server, then tell it to listen for requests
const app = express();
const PORT = process.env.PORT || 3001;


// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));

app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server is now on port ${PORT}!`);
});