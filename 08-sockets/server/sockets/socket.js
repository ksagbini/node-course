let { io } = require('../server');

io.on('connection', (client) => {
    console.log('Client connected', client);

    client.on('disconnect', () => {
        console.log('Client disconnected');
    });


    client.emit('sendMessage', {
        user: 'Admin Server',
        message: 'Welcome to the chat'
    });


    // Listening clmient
    client.on('sendMessage', (message, callback) => {
        console.log('Client message', message);

        client.broadcast.emit('sendMessage', message);

        // if(message.user)
        //     callback({resp: 'Request ok'});
        // else
        //     callback({resp: 'Request fail'});
    });

});