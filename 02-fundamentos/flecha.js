


function sumar(a,b){
    return a+b;
}

// let sumarFl = (a,b) => {
//     reutn a + b;
// }

let sumarFl = (a,b) =>  a+b;

// let saludar = () => 'Hola mundo';

let saludar = (nombre) => `Hola ${nombre}`;

console.log(sumar(10,7));
console.log(sumarFl(10,7));
console.log(saludar('Kevin'));


let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre() {
        return `${this.nombre} ${this.apellido} - Poder: ${this.poder}`
    }
}

console.log(deadpool.getNombre());