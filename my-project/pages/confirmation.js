const params = new URLSearchParams(window.location.search);
const loginButton = document.getElementById("login_page");
const homeButton = document.getElementById("home_page");
const roomButton = document.getElementById("rooms_page");
const chooseButton = document.getElementById("choose_page")

loginButton.addEventListener("click", ()=>{
    window.location.href = "login.html"
})
homeButton.addEventListener("click", ()=>{
    window.location.href = "home.html"
})
roomButton.addEventListener("click", ()=>{
    window.location.href = "rooms.html"
})
chooseButton.addEventListener("click", ()=>{
    window.location.href = "choose_action.html"
})
const roomNo = params.get("roomNo");
const maxCapacity = params.get("maxCapacity");
const availableFrom = params.get("availableFrom");
const availableTill = params.get("availableTill");
document.getElementById("roomNo").textContent = roomNo;
document.getElementById("maxCapacity").textContent = maxCapacity;
document.getElementById("availableFrom").textContent = availableFrom;
document.getElementById("availableTill").textContent = availableTill;


        //logs the user out, takes the user to home page
document.querySelector("#LogOut").addEventListener( "click", () => {
    window.location.href = "home.html";
});
        // takes the user to reserve another room
document.querySelector("#ReserveAnotherRoom").addEventListener( "click", () => {
    window.location.href = "rooms.html";
});