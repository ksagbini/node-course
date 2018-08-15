const yargs = require('./config/yargs').yargs;
const colors = require('colors');
const toDo = require('./todo/todo');


let comando = yargs._[0];


switch (comando) {
    case 'crear':
        console.log('Funcion crear tareas', toDo.crear(yargs.descripcion));
        break;
    case 'listar':

        let listado = toDo.getListado();
        for(let tarea of listado){
            console.log('=================='.green);
            console.log(`Tarea: ${tarea.descripcion}`);
            console.log(`Completado: ${tarea.completado}`);
            
            console.log('=================='.green);
        }

        console.log('Funcion listar tareas');
        break;
    case 'actualizar':
        console.log('Funcion actualizar tareas');
        break;
    default:
        console.log(`Comando ${comando} no reconocido`);
        break;
}
 