import PouchDb from "pouchdb";

export default class Database{
    constructor(){
        this.db = new PouchDb('rooms');
        
        this.db.info(function(err, info) {
            if (err) {
                return console.log(err);
            } else {
                console.log(info);
            }
        });
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

    async updateRoomCapacity(id, capacity){
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

    async addTimeToAvailability(id, time){
        let db = this.db;
        await this.db.get(id).then(function(doc) {
            doc.availability.push(time);
            return db.put(doc);
          }).then(function(response) {
            // handle response
            // console.log(doc);
          }).catch(function (err) {
            console.log(err);
          });
    }

    async removeTimeFromAvailability(id, time){
        let db = this.db;
        await this.db.get(id).then(function(doc) {
            let arr = doc.availability;
            let index = arr.findIndex(element => element[0] === time[0] && element[1] === time[1]);
            if(index > 0){
                delete arr[index];
            }
            else{
                console.log("Time range not found");
            }
            return db.put(doc);
          }).then(function(response) {
            // handle response
            // console.log(doc);
          }).catch(function (err) {
            console.log(err);
          });
    }

    async deleteRoom(id){
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

let data = new Database();

// await data.createRoom("5",4,9,10);
// await data.readRoom("5");
// await data.updateRoomCapacity("5", 33);
// await data.readRoom("5");



//delete all docs in constructor

// this.db.allDocs()
// .then(docs => {
//     // use Promise.all() to delete each document
//     return Promise.all(
//     docs.rows.map(row => {
//         return this.db.remove(row.id, row.value.rev);
//     })
//     );
// })
// .then(responses => {
//     console.log('All documents deleted successfully:', responses);
// })
// .catch(error => {
//     console.error('Failed to delete documents:', error);
// });

