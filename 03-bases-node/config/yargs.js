const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};


const yargs = require('yargs')
    .command('listar', 'Imrpime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea un archivo con la tabla de multiplicar', opts)
    .command('leer', 'Lee un archivo con la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        }
    })
    .help()
    .argv;

module.exports = {
    yargs
}