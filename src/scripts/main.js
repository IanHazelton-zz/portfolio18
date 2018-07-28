var currentYear = new Date().getFullYear();
var yearTarget = document.getElementsByClassName("yearTarget");
[...yearTarget].forEach(function(el){
  el.innerHTML = currentYear;
});