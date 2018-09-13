const express = require('express')
const app = express()
 
app.use(express.static( __dirname + '/public'));

app.get('/', (req, res) => {
    let data = {
        name: 'Kevin',
        lastname: 'Tellez',
        age: 27,
        url: req.url
    };
    res.send(data)
});
 
app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});