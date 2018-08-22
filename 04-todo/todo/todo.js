const fs = require('fs');

let listadoPorHacer = [];

let crear = (descripcion) => {
    cargarDb();
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDb();
    return porHacer;
};

let actualizar = (descripcion, completado = true) => {
    cargarDb();
    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);
    if(index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDb();
        return true;
    }
    else{
        return false;
    }
};

let eliminar = (descripcion) => {
    cargarDb();
    let nuevo = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if(nuevo.length === listadoPorHacer.length){
        return false;
    }
    else{
        listadoPorHacer = nuevo;
        guardarDb();
        return true;
    }
};

let guardarDb = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./db/data.json',data, (err) => {
        if(err) throw new Error('Error al guardar en la db', err);
    });
};

let cargarDb = () => {
    try{
        listadoPorHacer = require('../db/data.json');
    } catch(err){
        listadoPorHacer = [];
    }
};

let getListado = () => {
    cargarDb()
    return listadoPorHacer;
};


module.exports = {
    crear,
    getListado,
    actualizar,
    eliminar
};