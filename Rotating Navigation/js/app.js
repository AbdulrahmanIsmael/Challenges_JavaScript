const bars = document.querySelector(".bars");
const close = document.querySelector(".close");
const container = document.querySelector(".container");
const circle = document.querySelector(".circle");
const nav = document.querySelector("#nav");

bars.addEventListener("click", () => {
  container.classList.add("rotate");
});

close.addEventListener("click", () => {
  container.classList.remove("rotate");
});
