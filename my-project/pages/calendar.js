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

let todayElement = document.getElementById("today");
const currentDate = new Date();
let date = currentDate;
let day = currentDate.getDay();
let month = currentDate.getMonth() + 1;
let year = currentDate.getFullYear();
todayElement.innerHTML = day + " , " + month
const changeDayBack = document.getElementById("changeDayBack");
changeDayBack.addEventListener("click", ()=>{
    todayElement.month = todayElement.month -1 ;
})

const changeDayToToday = document.getElementById("changeDayToToday");
changeDayToToday.addEventListener("click", ()=>{
    todayElement.month = todayElement.month;
})

const changeDayForward = document.getElementById("changeDayForward");
changeDayForward.addEventListener("click", ()=>{
    todayElement.month = todayElement.month+1;
})