// define variables
const container = document.querySelector(".cnotainer");
const keys = document.querySelectorAll(".key");

keys[0].style.display = "none";
keys[1].style.display = "none";

// function
function showKey(e) {
  keys[2].style.display = "none";
  keys[0].innerHTML = e.key;
  keys[0].style.display = "inline-flex";
  keys[1].innerHTML = e.code;
  keys[1].style.display = "inline-flex";
}

window.addEventListener("keydown", showKey);
