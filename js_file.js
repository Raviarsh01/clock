// let time=document.getElementById("time")
// function iTime(){
//     time.innerHTML=Date()
// }
// setInterval(() => {
//     iTime()
// }, 1000);
const time = new Date();

let date = document.getElementById("date");
let tim = document.getElementById("time");

function iDate() {
  let d = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  let day = time.getDay();
  let dat = time.getDate();
  let mon = ["Jan","Feb","Mar","Apr","May","June","JUly","Aug","Sep","Oct","Nov","Dec",];
  let month = time.getMonth();
  date.innerHTML = `${d[day]} , ${dat} ${mon[month]}`;
}

function iTime() {
  const time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let unit=""
  if(hour>12){
    hour=hour-12; 
    unit="PM"   
  } 
  else{
    unit="AM"
  } 
  tim.innerHTML = `${hour} : ${min} : ${sec} ${unit}`;
}

setInterval(() => {
  iDate();  
  iTime();
}, 1000);
