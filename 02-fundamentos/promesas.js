let empleados = [
    {id: 1, nombre: 'Kevin'},
    {id: 2, nombre: 'Giannina'},
    {id: 3, nombre: 'Lizzeth'},
    {id: 4, nombre: 'Oscar'},
    {id: 5, nombre: 'Jack'}
];

let salarios = [
    {id: 1, salario: 1000},
    {id: 2, salario: 2500}
];

let empleadoById = (id) => {
    return new Promise( (resolve, reject) => {
        let empleadoDb = empleados.find( empleado => empleado.id === id );
        if(!empleadoDb){
            reject(`No existe un empleado con ID ${id}`);
        }
        else{
            resolve(empleadoDb);
        }
    });
}; 

let getSalario = (empleado) => {
    return new Promise( (resolve, reject) => {
        let salario = salarios.find(salario => salario.id === empleado.id );
        if(!salario){
            reject(`El empleado ${ empleado.nombre } no tiene salario asignado`);
        }
        else{
            empleado.salario = salario.salario;
            resolve( empleado);
        }    
    });
};


// Promesas simples
empleadoById(4).then(empleado => {
    getSalario(empleado).then( salario => {
        console.log(`El salario del empleado ${salario.nombre} es de $${salario.salario}`);
    }, err => {
        console.log(`No se encontro un salario para ${empleado.nombre}`);
    });
}, err => {
    console.log(err);
}); 


// Promesas anidadas
empleadoById(4).then(empleado => {
    return getSalario(empleado);
}).then(salario => {
    console.log(`El salario de ${salario.nombre} es de $${salario.salario}`);
}).catch(err => {
    console.log(err);
})