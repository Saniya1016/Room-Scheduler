const rows = document.querySelectorAll("tr");
rows.forEach(row => {
    row.addEventListener("click", () => {
        const roomNo = row.querySelector("td:first-child").textContent;
        const maxCapacity = row.querySelector("td:nth-child(2)").textContent;
        const availableFrom = row.querySelector("td:nth-child(3)").textContent;
        const availableTill = row.querySelector("td:nth-child(4)").textContent;

        //takes the user to the confirmation
        //room details in the url
        const url = new URL("confirmation.html", window.location.href);
        url.searchParams.set("roomNo", roomNo);
        url.searchParams.set("maxCapacity", maxCapacity);
        url.searchParams.set("availableFrom", availableFrom);
        url.searchParams.set("availableTill", availableTill);
        window.location.href = url.toString();
    });
});

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