const yargs = require('yargs')
    .command('crear', 'Crea una nueva tarea', {
        descripcion: {
            alias: 'd',
            demand: true
        }
    })
    .command('actualizar', 'Actualiza una tarea', {
        descripcion: {
            alias: 'd',
            demand: true
        },
        completado: {
            alias: 'c',
            default: true
        }
    })
    .command('listar', 'Lista todas las tareas')
    .help()
    .argv;

module.exports = {
    yargs
};