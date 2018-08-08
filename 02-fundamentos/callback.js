// setTimeout( () => {
//     console.log("Hola mundo"); 
// }, 3000);

let getUserById = (id, callback) => {
    let user = {
        nombre: 'Kevin',
        id
    };   
    callback(user);
};


getUserById(10, (user) => {
    console.log('Usuario de base de datos', user); 
});