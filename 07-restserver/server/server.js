require('./config/config');
const express = require('express');
const mongoose = require('mongoose');

const app = express();


//Librery to get data from post request
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use( express.static(__dirname + '/../public'));


/**
 * REST Services
 */

app.get('/', (req, res) => {
  res.json({ text: 'Home' });
});

app.use(require('./routes/index'));

/**
 * DATABASE CONNECTION
 */
mongoose.connect(process.env.URL_DB,
  { useCreateIndex: true, useNewUrlParser: true },
  (err, res) => {
    if (err) throw err;
    console.log('Database connected');
  }
);


//Run server
app.listen(process.env.PORT, () => {
  console.log(`Running server, port ${process.env.PORT}`);
});