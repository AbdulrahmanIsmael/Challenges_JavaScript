// Define Variables
const search = document.querySelector(".search");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

// Functions
function expand() {
  if (search.classList.contains("expand") === true) {
    search.classList.remove("expand");
  } else {
    search.classList.add("expand");
    input.focus(); // when the search input expands, it gets focus on it
  }
}

//Events
btn.addEventListener("click", expand);
