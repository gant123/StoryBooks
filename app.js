const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

//Passport Config
require('./config/passport')(passport);

//Load Routes aka pages
const auth = require('./routes/auth');

const app  = express();

app.get('/', (req, res) => {
  res.sendFile("index.html", {"root": __dirname});
});

// Use routes
app.use('/auth', auth);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});