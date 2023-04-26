



const confirmButton = document.getElementById("add_button");
confirmButton.addEventListener('click', goAdd);

const backButton = document.getElementById("book_button");
backButton.addEventListener('click', goBook);


function goBook() {
    window.location.href = "rooms.html";
}

function goAdd() {
    window.location.href = "addroom.html";
}