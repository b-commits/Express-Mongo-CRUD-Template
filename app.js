const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const cors = require('cors');
const fetch = require('node-fetch');

app.use(cors());
app.use(bodyParser.json());
app.set('view engine', 'ejs');

// Import routes
const todosRoute = require('./routes/todos');

app.use('/todos', todosRoute);

// ROUTES
app.get('/', (req, res) => {
  fetch('http://localhost:3000/todos')
    .then((response) => response.json())
    .then((data) => {});

  res.render('index');
});

// Connect to DB
mongoose.connect(
  'mongodb+srv://admin:admin@tin.ytdij.mongodb.net/<dbname>?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('Connected to DB');
  }
);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
