// Async convierte una funcion normal en una funcion asincrona que retorna una Promise

let getNombre = async() => {
    return 'Kevin';
};


// Funcion que retorna una promesa
let getNombre2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve('Kevin');
        }, 3000);
    });
};

// Para usar el await es necesario que la funcion sea declarada como async
let saludo = async () => {
    let nombre = await getNombre2();
    return `Hola ${nombre}`;
};

// console.log(getNombre());

getNombre()
    .then( nombre => console.log(nombre))
    .catch(e=> console.log('Error async', e));


saludo().then(mensaje => console.log(mensaje))