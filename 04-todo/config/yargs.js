const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la tarea'
};

const completado = {
    alias: 'c',
    default: true
};

const yargs = require('yargs')
    .command('crear', 'Crea una nueva tarea', {
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea', {
        descripcion,
        completado
    })
    .command('listar', 'Lista todas las tareas')
    .command('eliminar', 'Elimina una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    yargs
};