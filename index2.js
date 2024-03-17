const locations = ["India", "United States", "Vietnam", "France", "Australia", "Japan", "South Africa", "China", "Egypt"];
let index = 0;

function changeLocation() {
  document.getElementById('location').textContent = locations[index];
  index = (index + 1) % locations.length;
}

setInterval(changeLocation, 600); 


const howMany = document.getElementById("howMany");
const fromDateInput = document.getElementById("fromDate");
const toDateInput = document.getElementById("toDate");
const textArea = document.getElementById("textArea");
const form = document.querySelector("form");
const whereTo = document.getElementById("whereTo");

var todayDate = new Date();

var tDate = todayDate.getDate();
var month = todayDate.getMonth() + 1;
var year = todayDate.getFullYear();

if (month < 10) {
  month = "0" + month;
}
if (tDate < 10) {
  tDate = "0" + tDate;
}

var minDate = year + "-" + month + "-" + tDate;

fromDateInput.setAttribute("min", minDate);

function getDate() {
  var fromDate = fromDateInput.value;
  toDateInput.setAttribute("min", fromDate);
}
fromDateInput.addEventListener("input", function () {
  toDateInput.removeAttribute("disabled");
});

function onSubmit(event) {
  event.preventDefault();
  if (
    whereTo.value !== "" &&
    howMany.value !== "" &&
    fromDateInput.value !== "" &&
    toDateInput.value !== "" 
  ) {
    window.alert("Booking Successful");
    whereTo.value = "";
    howMany.value = "";
    fromDateInput.value = "";
    toDateInput.value = "";
    textArea.value = "";
  }
}
form.addEventListener("submit", onSubmit);
