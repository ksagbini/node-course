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


let empleadoById = (id, callback) => {
    let empleadoDb = empleados.find( empleado => empleado.id === id );
    if(!empleadoDb){
        callback(`Empleado ${id} no existe en la base de datos`);
    }
    else{
        callback(null, empleadoDb);
    }
};

let getSalario = (empleado, callback) => {
    let salario = salarios.find(salario => salario.id === empleado.id );
    if(!salario){
        callback(`El empleado ${ empleado.nombre } no tiene salario asignado`);
    }
    else{
        empleado.salario = salario.salario;
        callback(null, empleado);
    }
};


empleadoById(3, (err, empleado) => {
    if(err){
        return console.log(err);
    }

    getSalario(empleado, (err, salario) => {
        if(err){
            return console.log(err);
        }
        console.log(`El salario de ${ salario.nombre} es de $${salario.salario}`);
    });
});


