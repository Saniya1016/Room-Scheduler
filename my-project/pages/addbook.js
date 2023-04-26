
//Initialize user-interaction with back-button
const backButton = document.getElementById("back_arrow");
backButton.addEventListener('click', goBack);

function loadData() {

}

function confirmBooking() {

}

function goBack() {
    window.location.href = "rooms.html";
    console.log("blah")
}
