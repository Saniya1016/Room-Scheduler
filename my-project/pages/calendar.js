const loginButton = document.getElementById("login_page");
const homeButton = document.getElementById("home_page");
const roomButton = document.getElementById("rooms_page");
const chooseButton = document.getElementById("choose_page")
const monthElement = document.getElementById("month");
const backButton = document.getElementById("backButton");
const forwardButton = document.getElementById("forwardButton");
const numToMonth = {1:"January", 2: "February", 3: "March", 4: "April" , 5: "May", 6 :"June", 7: "July", 8:"August", 10: "October", 9:"September", 11:"November" , 12: "December"};
let todayElement = document.getElementById("today");
// Managing date
const currentDate = new Date();
let date = currentDate;
let day = currentDate.getDay();
let month = currentDate.getMonth() + 1;
//For navbar

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


// Assigning month
monthElement.innerHTML = numToMonth[month];
let year = currentDate.getFullYear();


backButton.addEventListener("click", ()=>{
    month = month - 1;
    if(month===0){
        month = 12
    }
    monthElement.innerHTML = numToMonth[month];
})
forwardButton.addEventListener("click", ()=>{
    month = month + 1;
    if(month===13){
        month = 1
    }
    monthElement.innerHTML = numToMonth[month];
})

const changeDayToToday = document.getElementById("changeDayToToday");
changeDayToToday.addEventListener("click", ()=>{
    todayElement.month = todayElement.month;
})

const changeDayForward = document.getElementById("changeDayForward");
changeDayForward.addEventListener("click", ()=>{
    todayElement.month = todayElement.month+1;
})