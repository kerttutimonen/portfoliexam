// Get references to element and controlling button
var element = document.querySelector(".move"), button = document.querySelector(".buttonForMove"); 
// toggle the paused class! 
button.onclick = function () {
  element.classList.toggle("paused")
}