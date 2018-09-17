const express = require('express');
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

/**
 * USER SERVICES --------------------
 */
app.get('/user', (req, res) => {
  res.json({text:'Get users'});
});

app.post('/user', (req, res) => {
  let body = req.body;

  if(!body.name){
    res.status(400).json({status: false, msg: 'Name required'});
  } else{
    res.json({text:'Create users', body});
  }
  
});

app.put('/user/:id', (req, res) => {
  let id = req.params.id;
  res.json({text:`Update users ${id}`, body: req.body});
});

app.delete('/user', (req, res) => {
  res.json({text:'Delete users'});
});
/**
 * -----------------------------------
 */

//Run server
app.listen(3000, () => {
  console.log('Running server, port 3000');
});