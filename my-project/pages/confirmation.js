const logout_button = document.getElementById("log_out");
const loginButton = document.getElementById("login_page");
const homeButton = document.getElementById("home_page");
const roomButton = document.getElementById("rooms_page");
const chooseButton = document.getElementById("choose_page")

logout_button.addEventListener("click", ()=>{
    window.location.href = "home.html"
})

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