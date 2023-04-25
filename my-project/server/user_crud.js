import PouchDb from "pouchdb";

export default class User_Database{

    constructor(){
        this.db = new PouchDb('users');

        //info about docs in database
        this.db.info(function(err, info) {
            if (err) {
                return console.log(err);
            } else {
                console.log(info);
            }
        });

    }

    //create a user with its attributes
    async createUser(id, capacity, start_time, end_time){
        let user = {_id: id, capacity: capacity, start_time: start_time, end_time: end_time};
        await this.db.put(user).then(function (response) {
            // handle response
            console.log(user);
          }).catch(function (err) {
            console.log(err);
          });
    }

    //read user 
    async readUser(id){
        await this.db.get(id).then(function (doc) {
            // handle doc
            console.log(doc);
          }).catch(function (err) {
            console.log(err);
          });
    }

    //update user attributes
    async updateCapacity(id, capacity){
        let db = this.db;
        await this.db.get(id).then(function(doc) {
            doc.capacity = capacity;
            return db.put(doc);
          }).then(function(response) {
            // handle response
            // console.log(doc);
          }).catch(function (err) {
            console.log(err);
          });
    }

    //delete user id
    async deleteUser(id){
        let db = this.db;
        await this.db.get(id).then(function(doc) {
            return db.remove(doc);
          }).then(function (result) {
            // handle result
          }).catch(function (err) {
            console.log(err);
          });
    }
}

// ============= TESTING =========== //

// let data = new User_Database();
// await data.createUser("4", 5, 9, 12);
// await data.readUser("4");
// await data.updateCapacity("4", 3);
// await data.deleteUser("4");
// await data.readUser("4");