// Define variables
const text = document.querySelector(".text");
const image = document.querySelector(".bg");

// Functions
let counter = 0;
let blurFactor = 50;
function blur() {
  text.style.opacity = opacity(counter);
  text.innerHTML = `${counter}%`;
  counter++;
  image.style.filter = `blur(${blurFactor}px)`;
  blurFactor--;

  if (counter === 100) {
    clearInterval(interval);
  }
}

function opacity(num) {
  return 1 - num / 100;
}

let interval = setInterval(blur, 30);
