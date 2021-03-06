const { io } = require('../server');
const {TicketControl} = require('../classes/ticket-control')

const tck = new TicketControl();


io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('nextTicket', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });



    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente
    client.on('nextTicket', ( callback) => {
        let next = tck.next();
        console.log(next);
        callback(next);

    });

    client.on('onTicket', (data, callback) => {
        if(!data.desk){
            return callback(false);
        }

        let ticket = tck.takeTicket(data.desk);
        callback(ticket);
        client.broadcast.emit('lastFourData', {lastFour: tck.getLastFour()});
    });

    client.on('lastFour', (data, callback) => {
        console.log(tck.getLastFour())
        callback(tck.getLastFour());
    });

    client.emit('currentTicket', {ticket: tck.getLastTicket(), lastFour: tck.getLastFour()});

});