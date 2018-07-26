// var jsuserInput =  document.getElementById("js-userInput");
// const jsGooeyThing =  document.getElementById("js-gooey-thing");

// jsuserInput.addEventListener('focus', function(e) {
//   jsGooeyThing.classList.add('grow');
//   console.log("focus");
//   e.preventDefault();
// });

// jsuserInput.addEventListener('focusout', function(e) {
//   jsGooeyThing.classList.remove('grow');
//   console.log("focusout");
//   e.preventDefault();
// });

var year = new Date().getFullYear();
document.getElementById("js-printYear").innerHTML = year;