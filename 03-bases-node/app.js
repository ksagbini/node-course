const yargs = require('./config/yargs').yargs;

// const multiplicar = require('./multiplicar/multiplicar');
const { crearArchivo, listarTabla, leerTabla } = require('./multiplicar/multiplicar');

// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// crearArchivo(base)
//     .then((archivo) => console.log(`Archivo creado --> ${archivo}`))
//     .catch((err) => console.log(`Error al crear el archivo`, err));

let comando = yargs._[0];
switch (comando) {
 
    case 'listar':
        listarTabla(yargs.base, yargs.limite);
        break;
    case 'leer':
        leerTabla(yargs.base, yargs.limite)
            .then(data => console.log(data))
            .catch(err => console.log('Error al crear el archivo', err)); break;
    case 'crear':
        crearArchivo(yargs.base, yargs.limite)
            .then(archivo => console.log(`Archivo ${archivo} creado.`))
            .catch(err => console.log('Error al crear el archivo', err));
        break;
    default:
        console.log(`Comando '${comando}' no reconocido`);
}