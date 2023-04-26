
//Initialize user-interaction with back-button
const backButton = document.getElementById("back_arrow");
backButton.addEventListener('click', goBack);

//Load info data from the selected room to poplulate part of the UI
function loadData() {

}

function confirmBooking() {

}

function goBack() {
    window.location.href = "rooms.html";
    console.log("blah")
}
