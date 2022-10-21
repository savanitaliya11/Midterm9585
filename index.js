function myFunction() {
    alert("Order Succesfully!");
  }


var modal = document.getElementById("popup");
var btn = document.getElementById("pbtn");

btn.onclick = function() {
  modal.style.display = "block";
}

var okBtn = document.getElementById("okb");

okBtn.onclick = function() {
    modal.style.display = "none";
}