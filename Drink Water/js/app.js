// define Dom variables
const smallCups = document.querySelectorAll(".small-cup");
const bigCupFull = document.querySelector(".big-cup-full");
const bigCupEmpty = document.querySelector(".big-cup-empty");
const bigCupEmptyp = document.querySelector(".big-cup-empty > p");
const remained = document.querySelector(".remained");

updateBigCup();

// functions
function clickOnSmallCups() {
  smallCups.forEach((cup, index) => {
    cup.addEventListener("click", () => {
      addClassFull(index);
    });
  });
}

function addClassFull(ind1) {
  if (
    smallCups[ind1].classList.contains("full") &&
    !smallCups[ind1 + 1].classList.contains("full")
  ) {
    /* means that if the element i click on has full class and the next element has not full class */
    ind1--; //* means that the number of elements that the next forEach will deal with will decrease by 1
  }

  smallCups.forEach((item, ind2) => {
    if (ind2 <= ind1) {
      item.classList.add("full");
    } else {
      item.classList.remove("full");
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fullSmallCups = document.querySelectorAll(".small-cup.full").length;
  bigCupFull.style.height = `${fullSmallCups * 12.5}%`;
  bigCupFull.innerText = `${fullSmallCups * 12.5}%`;
  remained.innerText = `${2 - fullSmallCups * 0.25} Liters`;
  bigCupEmptyp.innerText = "Remained";

  if (fullSmallCups === smallCups.length) {
    bigCupEmpty.style.height = "0";
    bigCupEmpty.visibility = "hidden";
  }
}

// functions invokation
clickOnSmallCups();
