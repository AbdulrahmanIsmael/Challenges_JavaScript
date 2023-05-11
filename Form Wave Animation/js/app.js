// define variables
const labels = document.querySelectorAll("label");
const inputs = document.querySelectorAll("input");

//functions
function labelSpan() {
  labels.forEach((label) => {
    label.innerHTML = label.innerText
      .split("")
      .map((letter, ind) => {
        return `<span style="transition-delay: ${ind * 50}ms">${letter}</span>`;
      })
      .join("");
  });
}

labelSpan();
