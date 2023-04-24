//create, read, update, delete available rooms
//Room object => {id, capacity, available}
import {Room} from '../data/room.js';
import PouchDb from "pouchdb";

class Database{

    constructor(){
        this.db = new PouchDb('rooms');
    }

    async CreateRoom(response, id, capacity, start_time, end_time){
        if(id === undefined || capacity === undefined || start_time === undefined || end_time === undefined){
            response.status(404).send('Bad Request');
        }
        else{
            let room = new Room(id, capacity, start_time, end_time);
            await this.db.put(room).then(function (response) {
                // handle response
                response.json(room);
              }).catch(function (err) {
                response.status(404).send('Bad Request');
                console.log(err);
              });
        }
        response.end();
    }

    async ReadRoom(response, id){
        await this.db.get(id).then(function (doc) {
            // handle doc
            response.json(doc)
          }).catch(function (err) {
            response.status(404).send('Bad Request');
            console.log(err);
          });
          response.end();
    }

    async AddRoomAvailability(response, id , time){
        await this.db.get(id).then(function(doc) {
            doc.add_availability(time);
            return this.db.put({
              _id: id,
              _rev: doc._rev
            });
          }).then(function(response) {
            // handle response
            response.json(doc);
          }).catch(function (err) {
            response.status(404).send('Bad Request');
            console.log(err);
          });
        response.end();
    }

    async DeleteRoomAvailability(response, id, time){
        await this.db.get(id).then(function(doc) {
            doc.delete_availability(time);
            return this.db.put({
              _id: id,
              _rev: doc._rev
            });
          }).then(function(response) {
            // handle response
            response.json(doc);
          }).catch(function (err) {
            response.status(404).send('Bad Request');
            console.log(err);
          });
        response.end();
    }

    async DeleteRoom(response, id){
        await this.db.get(id).then(function(doc) {
            return this.db.remove(doc);
          }).then(function (response) {
            // handle result
            response.json(doc);
          }).catch(function (err) {
            response.status(404).send('Bad Request');
            console.log(err);
          });
          response.end();
    }

//Database information
// db.info(function(err, info) {
//     if (err) {
//        return console.log(err);
//     } else {
//        console.log(info);
//     }
//  });

//  let arr = await db.allDocs(function(err, docs) {
//     if (err) {
//        return console.group(err);
//     } else {
//        return console.log(docs.rows);
//     }
//  });

}