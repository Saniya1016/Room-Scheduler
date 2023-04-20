import User from './user.js'
import Room from './room.js'

class Rooms{

    constructor(rooms, user){
        this.rooms = rooms;
        this.user = user
    }

    get_all_available_rooms = () => this.rooms.filter(room => room.is_compatible(this.user));

}

let room1 = new Room(0 , 4 , true, 3, 8);
let room2 = new Room(1 , 10 , false, 5, 6);
let room3 = new Room(2 , 5 , true, 4, 9);
let room4 = new Room(3 , 8 , true, 5, 7);
let user1 = new User(4, 3, 4, 6);

let r = new Rooms([room1,room2,room3,room4], user1);

console.log(r.get_all_available_rooms());