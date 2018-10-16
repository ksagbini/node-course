

class Users {

    constructor(){
        this.users = [];
    }

    add(id, name){
        let user = {id, name};
        this.users.push(user);
        return this.users;
    }

    get(id){ 
        return this.users.filter(user => user.id === id )[0];
    }

    getAll() {
        return this.users;
    }

    delete(id){
        let user = this.get(id);
        this.users = this.users.filter(user => user.id != id);
        return user;
    }


}

module.exports = {Users};