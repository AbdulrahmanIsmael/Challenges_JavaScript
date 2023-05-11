// Define Variables
const progress = document.querySelector(".progress-bar");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");

// Functions
/* Function to set the active class to the circles, change the width of the progress bar & set the disabled to the buttons */
function updateStep() {
  circles.forEach((e, i) => {
    if (i < countActive) {
      e.classList.add("active");
    } else {
      e.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width = `${
    ((actives.length - 1) / (circles.length - 1)) * 100
  }%`;

  if (countActive === 1) {
    prev.disabled = true;
  } else if (countActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}

// Event Listeners
/* 
- countActive variable is the number of active circles
- it is used to set the width of the progress bar too
*/
let countActive = 1;

next.addEventListener("click", () => {
  /* when pressing next btn => the active circles increase by 1 */
  countActive++;

  /* making sure that the countActive is in the range between 1 and the number of the circles */
  if (countActive > circles.length) {
    countActive = circles.length;
  }

  updateStep();
});

prev.addEventListener("click", () => {
  /* when pressing previous btn => the active circles decrease by 1 */
  countActive--;

  /* making sure that the countActive is in the range between 1 and the number of the circles */
  if (countActive < 1) {
    countActive = 1;
  }

  updateStep();
});
