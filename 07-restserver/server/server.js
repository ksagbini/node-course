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

/**
 * REST Services
 */

app.get('/', (req, res) => {
  res.json({text:'Home'});
});

app.use(require('./routes/user'));

/**
 * DATABASE CONNECTION
 */
mongoose.connect('mongodb://coffe_user:rQ4GcYnSxXmmFkv@ds261072.mlab.com:61072/coffe_db',
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