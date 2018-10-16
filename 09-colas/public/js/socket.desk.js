var socket = io();

var params = new URLSearchParams(window.location.search);

if(!params.has('escritorio')){
    window.location('index.html');
    throw new Error('Escritorio necesario');
}

var desk = params.get('escritorio');
var smallLabel = $('small');
$('h1').text('Escritorio ' + desk);
console.log(desk);

$('button').on('click', function(){
    socket.emit('onTicket', {desk: desk}, function(resp){
        if(resp == 'No pending tickets'){
            alert(resp);
            return false;
        }
        console.log(resp);
        smallLabel.text(resp.number);
    });
});