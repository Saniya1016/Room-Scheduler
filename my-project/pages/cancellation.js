

//Initialize user-interaction with back-button
const backButton = document.getElementById("back_arrow");
backButton.addEventListener('click', goBack);

const confirmButton = document.getElementById("confirm_button");
confirmButton.addEventListener('click', confirmCancel);

function goBack() {
    window.location.href = "rooms.html";
    console.log("blah")
}

function confirmCancel() {
    
}
