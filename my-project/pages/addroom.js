import Room_Database from "../server/room_crud.js";

const room_id = document.getElementById("room_info");
const capacity = document.getElementById("capacity_info");
// const date = document.getElementById("date_info");
const start_time = document.getElementById("start_time_info");
const end_time = document.getElementById("end_time_info");
// const building = document.getElementById("building_info");
const confirm_button = document.getElementById("confirm_button");

const data = new Room_Database();

confirm_button.addEventListener('click' , () => {
    //get info from page and save to database
    let id = room_id.value;
    let cap = Number(capacity.value);
    let start = Number(start_time.value);
    let end = Number(end_time.value);

    data.createRoom(id, cap, start, end);
});
