import PouchDb from "pouchdb";

//class for the rooms database
export default class Room_Database{

    constructor(){
        this.db = new PouchDb('rooms');
        
        //info about docs in database
        this.db.info(function(err, info) {
            if (err) {
                return console.log(err);
            } else {
                console.log(info);
            }
        });
    }

    //create a room with its attributes ex: capacity, start/end times
    async createRoom(id, capacity, start_time, end_time){
        let room = {_id: id, capacity: capacity, start_time: start_time, end_time: end_time, availability: []};
        await this.db.put(room).then(function (response) {
            // handle response
            console.log(room);
          }).catch(function (err) {
            console.log(err);
          });

    }

    //get information about a particular room input: id
    async readRoom(id){
        await this.db.get(id).then(function (doc) {
            // handle doc
            console.log(doc);
          }).catch(function (err) {
            console.log(err);
          });
    }

    //update the capacity for a room
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

    //add a booking to the availability array for a particular room
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

    //remove a booking time from the availability array for a particular room
    async removeTimeFromAvailability(id, time){
        let db = this.db;
        await this.db.get(id).then(function(doc) {
            let arr = doc.availability;
            let index = arr.findIndex((element) => element[0] === time[0] && element[1] === time[1]);
            if(index >= 0){
                arr.splice(index,1);
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

    //delete a room
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


//=============== TESTING ================= //

// let data = new Room_Database();

// await data.createRoom("5",4,9,10);
// await data.readRoom("5");
// await data.updateRoomCapacity("5", 33);
// await data.readRoom("5");
// await data.addTimeToAvailability("5", [9,12]);
// await data.removeTimeFromAvailability("5", [9,12]);
// await data.deleteRoom("5");
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

