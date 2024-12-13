let currentDate = new Date()

let lastDay= localStorage.getItem("lastday")
let lastMonth= localStorage.getItem("lastmonth")
let lastYear= localStorage.getItem("lastyear")

let day = String(currentDate.getDate()).padStart(2, '0'); 
let month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
let year = currentDate.getFullYear();

let streak, steakCon = 1;

console.log( "LAST day: "+lastDay)
console.log( "LAST month: "+lastMonth)
console.log( "LAST year: "+lastYear)

if(lastDay == day || lastMonth == month || lastYear == year){
    steakCon = 0
}

if (Number(lastDay) <  Number(day)-1|| Number(lastMonth) < Number(month) || Number(lastYear) < Number(year)) streak = 0
else streak = localStorage.getItem("streak")
if (streak == undefined) streak = 0

document.getElementById("BtStart").addEventListener("click", () =>{ 

    localStorage.setItem("streak", Number(Number(streak)+Number(steakCon)))

    localStorage.setItem("lastday", day)
    localStorage.setItem("lastmonth", month)
    localStorage.setItem("lastyear", year)
})

console.log(streak)

document.getElementById("streak").textContent = streak
