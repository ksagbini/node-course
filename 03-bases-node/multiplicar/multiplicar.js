let fs = require('fs');
const filePath = 'tablas/';


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if(!Number(base)){
            reject(`La base ${base} no es un numero.`);
            return;
        }

        let fileName = `${filePath}tabla-${base}.txt`; 
        let cont = '';
        for (let i = 1; i <= limite; i++) {
            cont += `${base} x ${i} = ${base * i}\n`;
        }

        fs.writeFile(fileName, cont, (err) => {
            if (err) 
                reject(err);
            else
                resolve(fileName);
        });
    });
};

let listarTabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++){
        console.log(`${base} x ${i} = ${base * i}`);
    }
};

let leerTabla = (base) => {

    return new Promise( (resolve, reject) =>{
        fs.readFile(`${filePath}tabla-${base}.txt`, 'utf-8', (err, data) =>{
            if(err) {
                reject(err); 
                return;
            }
            resolve(data);
        });
    });
};


module.exports = {
    crearArchivo,
    listarTabla,
    leerTabla
};