        function myFunction() {
  var text = document.getElementById("text");
  var showText = document.getElementById("show");
  var btnText = document.getElementById("myBtn");

  if (text.style.display === "none") {
    text.style.display = "inline";
    btnText.innerHTML = "Show portfolio"; 
   showText.style.display = "none";
  } else {
   text.style.display = "none";
    btnText.innerHTML = "Close portfolio"; 
    showText.style.display = "inline";
  }
    

}