var socket = io();


socket.on('connect', function(){
    console.log('Server connected');
});

socket.on('disconnect', function(){
    console.log('Server disconnected');
});






$('button').on('click', function(){

    socket.emit('nextTicket');

});



