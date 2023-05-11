/*
  TODO (1) move the written words into the cards below the textarea 
  TODO (2) when pressing "enter", make the random highlighting by adding the highlighting class
  TODO (3) after some specific time stop the auto highliting
  TODO (4) then make one of the cards has the highlight class 
*/

// define variables
const textarea = document.getElementById("choices");
const cardsHolder = document.getElementById("card-container");
const cards = document.querySelectorAll(".card");

//? How to make JS understand that each (,) means new word coming ?????

//* add keyword event to make the array while writing
textarea.addEventListener("keyup", pickCard);

// functions
function pickCard(e) {
  //TODO(1) => start

  //* create an array of the textarea value and its item will be seperated by that (,) & making sure that it will store the right words without white spaces or empty word
  let choices = textarea.value
    .split(",")
    .map((element) => element.trim())
    .filter((element) => element.trim() !== "");

  cardsHolder.innerHTML = "";

  //* adding each word from the array to a new div (with class card) inside (cardsHolder)
  choices.forEach((element) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerText = element;
    cardsHolder.appendChild(card);
  });

  //TODO(1) => done

  //TODO(2)(3)(4) => start

  //* make pressing "Enter" do random highlighting on the cards
  if (e.key === "Enter") {
    textarea.value = "";

    const repeatHighlighting = setInterval(() => {
      highlightingCards();
    }, 150);

    setTimeout(() => {
      clearInterval(repeatHighlighting);

      cards.forEach((element) => {
        element.classList.remove("highlighted-card");
      });

      const randomCard = choseRandomCard();

      addHighlight(randomCard);
    }, 5000);
  }

  //TODO(2)(3)(4) => done
}

//* make the cards highlighted randomly
function highlightingCards() {
  let randomCard = choseRandomCard();

  addHighlight(randomCard);

  setTimeout(() => {
    removeHighlight(randomCard);
  }, 100);
}

//* chose random card
function choseRandomCard() {
  const cards = document.querySelectorAll(".card");
  return cards[Math.floor(Math.random() * cards.length)];
}

//* add highlight to the random card
function addHighlight(c) {
  c.classList.add("highlighted-card");
}

function removeHighlight(d) {
  d.classList.remove("highlighted-card");
}
