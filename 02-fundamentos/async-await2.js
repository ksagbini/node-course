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


let empleadoById = async (id) => {
    let empleadoDb = empleados.find( empleado => empleado.id === id );
    if(!empleadoDb){
        throw new Error(`No existe un empleado con ID ${id}`);
    }
    else{
        return empleadoDb;
    }
}; 

let getSalario = async(empleado) => {
    let salario = salarios.find(salario => salario.id === empleado.id );
    if(!salario){
        throw new Error(`El empleado ${ empleado.nombre } no tiene salario asignado`);
    }
    else{
        empleado.salario = salario.salario;
        return empleado;
    }
};


let getInfo = async(id) => {
    let empleado = await empleadoById(id); 
    let salario = await getSalario(empleado);
    return `El salario del empleado ${salario.nombre} es de $${salario.salario}`;
};

getInfo(3)
    .then( (msg) => console.log(msg) )
    .catch(err => console.log(err));