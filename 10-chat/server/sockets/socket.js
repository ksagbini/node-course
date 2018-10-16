const { io } = require('../server');


io.on('connection', (client) => {

    client.on('enterChat', (data, callback) => {
        console.log(data);
        callback(`Hello ${data.user}`);
        
    });




});