const express = require('express');
const hbs = require('hbs');
const app = express();
 
require ('./hbs/helpers');

app.use(express.static( __dirname + '/public'));

hbs.registerPartials( __dirname + '/views/partials');
app.set('view engine', 'hbs');



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
 
app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
}); 