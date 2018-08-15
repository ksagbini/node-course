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
    getListado
};