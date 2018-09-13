const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});

    let saluda = {
        nombre: 'Kevin',
        apellido: 'Tellez',
        edad: 27,
        url: req.url
    };

    res.write(JSON.stringify(saluda));
    res.end();
}).listen(8080);


console.log('Escuchando el puerto 8080');