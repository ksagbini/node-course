var socket = io();

socket.on('connect', function () {
    console.log('Conectado al servidor');
});

// escuchar
socket.on('disconnect', function () {
    console.log('Perdimos conexión con el servidor');
});


var params = new URLSearchParams(window.location.search);

if(!params.has('username')){
    window.location = 'index.html';
    throw new Error('Username required');
    
}

// Enviar información
socket.emit('enterChat', {
    user: params.get('username')
}, function (resp) {
    console.log('respuesta server: ', resp);
});


