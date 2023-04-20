export default class User{

    constructor(id, capacity, start_time, end_time){
        this.id = id;
        this.capacity = capacity;
        this.start_time = start_time;
        this.end_time = end_time;
    }

    get_id = () => this.id;
    set_id = (new_id) => {this.id = new_id};

    get_capacity = () => this.capacity;
    set_capacity = (new_capacity) => {this.capacity = new_capacity;}

    get_start_time = () => this.start_time;
    set_start_time = (new_time) => this.start_time = new_time;

    get_end_time = () => this.end_time;
    set_end_time = (new_time) => this.end_time = new_time;
}

// let user1 = new User(4, 3, 4, 6);
// console.log(user1.get_capacity());