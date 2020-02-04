const express = require('express');
const hbs = require('hbs');
const app = express();

const port = process.env.PORT || 3000;

require ('./hbs/helpers');

app.use(express.static( __dirname + '/public'));

hbs.registerPartials( __dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://kdts-node-course.herokuapp.com/"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req, res) => {
    let data = {
        name: 'Kevin',
        lastname: 'Tellez Sagbini',
        age: 27
    };
    res.render('home',data);
});

app.get('/about', (req, res) => {
    let data = {
        name: 'Kevin',
        lastname: 'Tellez Sagbini',
        age: 27
    };
    res.render('about',data);
});
 
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
}); 