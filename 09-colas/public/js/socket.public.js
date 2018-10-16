var socket = io();

socket.on('connect', function(){
    console.log('Server connected');
});

socket.on('disconnect', function(){
    console.log('Server disconnected');
});



socket.on('currentTicket', function(resp) {
    console.log('Last ticket =>',resp);
    buildDash(resp.lastFour);
});


socket.on('lastFourData', function(resp){
    console.log(resp);
    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();
    buildDash(resp.lastFour);
});


function buildDash(lastFour){
    for(var i = 0; i < lastFour.length; i++){
        $('#lblTicket' + (i+1)).text('Ticket #' + lastFour[i].number);
        $('#lblEscritorio' + (i+1)).text('Escritorio ' + lastFour[i].desk);
    }
}