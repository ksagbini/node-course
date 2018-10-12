const fs = require('fs')


class Ticket {
    constructor(number, desk) {
        this.number = number;
        this.desk = desk;
    }
}

class TicketControl {

    constructor() {
        this.last = 0;
        this.today = new Date().getDay();
        let data = require('../data/data.json');
        this.tickets = [];
        this.lastFour = [];


        if (data.today === this.today) {
            this.last = data.last;
            this.tickets = data.tickets;
            this.lastFour = data.lastFour;
        }
        else {
            this.reset();
        }
    }

    next() {
        this.last += 1;
        this.tickets.push(new Ticket(this.last,null));
        this.saveFile({ last: this.last, today: this.today , tickets: this.tickets, lastFour: this.lastFour});
        return `Ticket #${this.last}`;
    }

    takeTicket(desk){

        if(this.tickets.length === 0){
            return 'No pending tickets';
        }

        let onTicket = new Ticket(this.tickets[0].number, desk);
        this.tickets.shift();
        this.lastFour.unshift(onTicket);

        if(this.lastFour.length > 4){
            this.lastFour.splice(-1,1);
        }

        this.saveFile({ last: this.last, today: this.today , tickets: this.tickets, lastFour: this.lastFour})
        return onTicket;

    }

    reset() {
        let jsonData = {
            last: this.last,
            today: this.today,
            tickets: this.tickets,
            lastFour: this.lastFour
        };

        this.tickets = [];
        this.saveFile(jsonData);
    }

    getLastTicket() {
        return `Ticket #${this.last}`;
    }

    saveFile(data) {
        fs.writeFileSync('./server/data/data.json', JSON.stringify(data));
    }

}


module.exports = {
    TicketControl
};