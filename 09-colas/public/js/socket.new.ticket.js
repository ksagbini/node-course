var socket = io();
var label = $('#lblNuevoTicket');

socket.on('connect', function(){
    console.log('Server connected');
});

socket.on('disconnect', function(){
    console.log('Server disconnected');
});

socket.on('currentTicket', function(resp) {
    console.log('Last ticket =>',resp);
    label.text(resp.ticket);
});


$('button').on('click', function(){
    socket.emit('nextTicket', function(resp) {
        console.log(resp);
        label.text(resp);
    });
});





