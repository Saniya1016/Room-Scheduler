
const confirmButton = document.getElementById("confirm_button");
confirmButton.addEventListener('click', confirmRoom);


function confirmRoom() {
    const roomOpenTime = document.getElementById("open_info");
    const roomCloseTime = document.getElementById("close_info");
    const roomID = document.getElementById("room_info");
    const roomCapacity = document.getElementById("capacity_info");
    
    let newOpen = roomOpenTime.value;
    let newClose = roomCloseTime.value;
    let newID = roomID.value;
    let newCapacity = roomCapacity.value;

    if (confirm("Please confirm your details: \n" +
                "Open time: " + newOpen + "\n" +
                "Close Time: " + newClose + "\n" +
                "Room Number: " + newID + "\n" + 
                "Room Capacity: " + newCapacity)) {
        console.log("ok")
    }

}


