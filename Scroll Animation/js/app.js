// Define Variables
const boxes = document.querySelectorAll(".box");

let vpHeight = window.innerHeight - 100;

function basicBoxes() {
  boxes.forEach((box) => {
    let boxTop = box.getBoundingClientRect().top;
    if (boxTop < vpHeight) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

basicBoxes();

// Function
function showBox() {
  basicBoxes();
}

window.addEventListener("scroll", showBox);
