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
let year = currentDate.getFullYear();
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
const clearDates =() =>{
    for(let i = 1; i<31; ++i){
        let currBut = document.getElementById("day"+i.toString());
        currBut.innerHTML = "";
    }
}
function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}
const assignDates = () =>{
    const firstDay = new Date(year, month-1, 1);
    let nameOfDay = firstDay.getDay();
    let numDaysInMonth= daysInMonth(month-1, year);
    let count = 0
    const today = new Date();
    for(let i = 1; i<39; ++i){
        let currBut = document.getElementById("day"+i.toString());
        if(i<nameOfDay || numDaysInMonth===0){
            count = count+1
        }
        else{
            currBut.innerHTML = i-count;
            if(i-count === today.getDay() && month-1 === today.getMonth()){
                currBut.setAttribute('role', 'link');
                currBut.setAttribute('tabindex', '0');
                currBut.classList.add('focus:outline-none', 'focus:ring-2', 'focus:ring-offset-2', 'focus:ring-indigo-700', 'focus:bg-indigo-500', 'hover:bg-indigo-500', 'text-base', 'w-8', 'h-8', 'flex', 'items-center', 'justify-center', 'font-medium', 'text-white', 'bg-indigo-700', 'rounded-full');
             //   <a  role="link" tabindex="0" class="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-500 hover:bg-indigo-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-indigo-700 rounded-full"></a>
            }
            numDaysInMonth = numDaysInMonth - 1;
        }
    }
}
assignDates();

backButton.addEventListener("click", ()=>{
    month = month - 1;
    if(month===0){
        month = 12
        year = year - 1;
    }
    monthElement.innerHTML = numToMonth[month];
    clearDates();
    assignDates();
})
forwardButton.addEventListener("click", ()=>{
    month = month + 1;
    if(month===13){
        month = 1
        year = year+1
    }
    monthElement.innerHTML = numToMonth[month];
    clearDates();
    assignDates();
})

 // create a new Date object with the first day of the current month and year




