const fs = require('fs')


class TicketControl {

    constructor() {
        this.last = 0;
        this.today = new Date().getDay();
        let data = require('../data/data.json');

        if (data.today === this.today) {
            this.last = data.last;
        }
        else{
            this.reset();
        }
    }

    next(){
        this.saveFile({last: this.last += 1, today: this.today});
        return `Ticket #${this.last}`;
    }


    reset(){
        let jsonData = {
            last: this.last,
            today: this.today
        };
        this.saveFile(jsonData);
    }

    saveFile(data){
        fs.writeFileSync('./server/data/data.json', JSON.stringify(data));
    }

}


module.exports = {
    TicketControl
};