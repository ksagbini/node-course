const yargs = require('yargs')
    .command('listar')
    .argv;

// const multiplicar = require('./multiplicar/multiplicar');
const {crearArchivo} = require('./multiplicar/multiplicar');



let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];

// crearArchivo(base)
//     .then((archivo) => console.log(`Archivo creado --> ${archivo}`))
//     .catch((err) => console.log(`Error al crear el archivo`, err));
