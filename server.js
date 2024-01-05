const express = require('express');
const path = require('path');

const api = require('./routes/index');

const PORT = 3001;

const app = express();



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});