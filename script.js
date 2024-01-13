//this goes at the top of the script to listen and load upon page load

//launch static background age verification modal upon page load - TP
document.addEventListener('DOMContentLoaded', function () {
    var ageVerify = new bootstrap.Modal(document.getElementById('staticBackdrop'));
    ageVerify.show();
  });


  //Logic for 21+ checker
var today = dayjs()
var date21YearsAgo = today.subtract(21, 'year');

console.log(today)
console.log(date21YearsAgo)

flatpickr("#datePicker", {
  maxDate: "today",
  dateFormat: "m/d/Y",
 
})

function getSelectedDate() {
  var selectedDate = document.getElementById("datePicker").value;
  console.log(selectedDate)
  
}

document.getElementById("submitBirthday").addEventListener("click", function() {
  getSelectedDate();
});