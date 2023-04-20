import User from './user.js'
import {Heap} from 'heap-js';
import PriorityQueue from 'js-priority-queue';

export default class Room{

    constructor(id, capacity, start_time, end_time){
        this.id = id;
        this.capacity = capacity;
        this.start_time = start_time;
        this.end_time = end_time;
        //set availabilty based on time
        this.availability = new PriorityQueue({comparator: (a, b) => a[0] - b[0]});
        this.availability.queue([0,start_time]);
        this.availability.queue([11, 13]);
        this.availability.queue([15,16]);
        this.availability.queue([16,17]);
        this.availability.queue([18,20]);
        this.availability.queue([end_time, 1000]);

    }

    get_id = () => this.id;
    set_id = (new_id) => {this.id = new_id};

    get_capacity = () => this.capacity;
    set_capacity = (new_capacity) => {this.capacity = new_capacity;}

    get_availability = () => this.availability;
    set_availability = (new_availability) => {this.availability = new_availability;}
    
    get_start_time = () => this.start_time;
    set_start_time = (new_time) => this.start_time = new_time;

    get_end_time = () => this.end_time;
    set_end_time = (new_time) => this.end_time = new_time;

    book_room = (user) => this.availability.queue([user.get_start_time() , user.get_end_time()]);

    is_compatible = (user) => {
        return (user.get_capacity() <= this.capacity && this.start_time <= user.get_start_time() && this.end_time >= user.get_end_time());
    }

    merge_availabilities = () => {
        // [2,5],[5,6] => [2,6]
        let new_availability = new PriorityQueue({comparator: (a, b) => a[0] - b[0]});
        while(this.availability.length > 0){
            let curr = this.availability.dequeue();
            while(this.availability.length > 0 && curr[1] >= this.availability.peek()[0]){
                curr[1] = this.availability.dequeue()[1];
            }
            new_availability.queue(curr);
        }
        this.availability = new_availability;
    }

    detect_clash = (user) => {
        //sort availability array based on start time => done by priority queue
        let clone_availability = new PriorityQueue({comparator: (a, b) => a[0] - b[0]});
        
        this.availability.priv.data.forEach(element => {
            clone_availability.queue([element[0] , element[1]]);
        });

        clone_availability.queue([user.get_start_time() , user.get_end_time()]);
        while(clone_availability.length > 0){
            let curr = clone_availability.dequeue();
            if(clone_availability.length > 0 && curr[1] > clone_availability.peek()[0]){
                return false;
            }
        }
        this.availability.queue([user.get_start_time() , user.get_end_time()]);
        this.merge_availabilities();
        return true;
    }

    next_availability = (user) => {
        //suggest next availability for that duration that user inputs
        //iterate queue => difference between current end and next start
        let duration = user.get_end_time() - user.get_start_time();
        let i = 0;
        let arr = this.availability.priv.data;
        console.log(arr);
        for (let i = 0; i < arr.length-1; ++i){
            let diff =  arr[i+1][0] - arr[i][1];
            console.log("diff: " , diff);
            if(diff >= duration){
                return arr[i][1];
            }
        }
        return -1;
    }
}


let room1 = new Room(0 , 4 , 8, 24);
let user1 = new User(4, 3, 8, 10);
console.log(room1.get_availability().priv.data);
// room1.merge_availabilities();
console.log(room1.next_availability(user1));
console.log(room1.detect_clash(user1));
console.log(room1.get_availability().priv.data);
// console.log(room1.get_capacity());
// console.log(room1.is_compatible(user1));




// def detect_clash(self , array):
        // array.sort(key = lambda x:x[0])
        // heap = []
        // max_len = 0
        // for i in range (len(array)):
        //     curr = array[i]
        //     if(len(heap) == 0 or heap[0] > curr[0]):
        //         hq.heappush(heap , curr[1])
        //     else:
        //         hq.heappop(heap)
        //         hq.heappush(heap , curr[1])
        //     if(len(heap) > max_len):
        //         max_len = len(heap)
        // return max_len

