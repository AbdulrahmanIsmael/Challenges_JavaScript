// Define Variables
const cards = document.querySelectorAll(".card");

// functions
function removeActive() {
  cards.forEach((e) => {
    e.classList.remove("active");
  });
}

// Event Listeners
cards.forEach((e) => {
  e.addEventListener("click", () => {
    // remove the active class
    removeActive();
    e.classList.add("active");
  });
});
