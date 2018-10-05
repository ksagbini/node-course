var socket = io();

/**
 * On connect event
 */
socket.on('connect', function () {
    console.log('Connect to the server.');
});

/**
 * On disconnect event
 */
socket.on('disconnect', function () {
    console.log('Connection lost');
});


/**
 * Send message to the socket server
 **/
socket.emit('sendMessage', {
    user: 'ktellez',
    message: 'Hello world'
}, function (response) {
    console.log('Server response', response);
});

/**
 * Listening to the server response
 */
socket.on('sendMessage', function (message) {
    console.log('Server message', message);
});