// define variables
const textarea = document.getElementById("choices");
const choicesPicker = document.getElementById("picker");

//* focusing on the textarea when loading the pages
textarea.focus();

// functions
function makeBoxes(e) {
  let choices = e.target.value
    .split(",")
    .map((p) => p.trim())
    .filter((p) => p.trim() !== "");

  choicesPicker.innerHTML = "";

  choices.forEach((choice) => {
    const pick = document.createElement("span");
    pick.classList.add("pick");
    pick.innerText = choice;
    choicesPicker.appendChild(pick);
  });

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 1000);

    var chosePick = setInterval(() => {
      randomHighlight();
    }, 200);

    setTimeout(() => {
      clearInterval(chosePick);

      const randomPick = randomSelect();
      highLightChosen(randomPick);
    }, 5000);
  }
}

function randomHighlight() {
  let randomPick = randomSelect();

  highLightChosen(randomPick);

  setTimeout(() => {
    randomPick.classList.remove("chosen");
  }, 100);
}

function randomSelect() {
  const pickers = document.querySelectorAll("#picker>.pick");
  return pickers[Math.floor(Math.random() * pickers.length)];
}

function highLightChosen(pick) {
  pick.classList.add("chosen");
}

//* add keyup event on textarea (it fires up when you let out each button in keyboard)
textarea.addEventListener("keyup", makeBoxes);
