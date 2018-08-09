let fs = require('fs');

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        if(!Number(base)){
            reject(`La base ${base} no es un numero.`);
            return;
        }

        let fileName = `tablas/tabla-${base}.txt`; 
        let cont = '';
        for (let i = 1; i <= 10; i++) {
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


module.exports = {
    crearArchivo
};