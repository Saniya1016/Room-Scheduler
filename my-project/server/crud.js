import PouchDb from "pouchdb";

export default class Database{
    constructor(){
        this.db = new PouchDb('rooms'); 

        // this.db.info(function(err, info) {
        //     if (err) {
        //         return console.log(err);
        //     } else {
        //         console.log(info);
        //     }
        // });
    }

    async createRoom(id, capacity, start_time, end_time){
        let room = {_id: id, capacity: capacity, start_time: start_time, end_time: end_time, availability: []};
        await this.db.put(room).then(function (response) {
            // handle response
            console.log(room);
          }).catch(function (err) {
            console.log(err);
          });

    }

    async readRoom(id){
        await this.db.get(id).then(function (doc) {
            // handle doc
            console.log(doc);
          }).catch(function (err) {
            console.log(err);
          });
    }

    async updateRoom(id, ){

    }


}

let data = new Database();
// data.createRoom("5",4,9,10);
data.readRoom("5");

