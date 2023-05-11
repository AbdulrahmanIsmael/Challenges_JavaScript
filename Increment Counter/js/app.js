/*
  TODO 1. set initial value for each container-counter
  TODO 2. get the last number in data-num attribute
  TODO 3. make the initial number increase untill reach to the last number and then stop  
*/

const counters = document.querySelectorAll(".container-counter");

counters.forEach((counter) => {
  counter.innerText = 0;

  increaseCounter(counter);
});

function increaseCounter(c) {
  const counterInnerText = +c.innerText;

  const lastNumber = +c.dataset.number;

  const amountOfIncrease = lastNumber / 100;

  if (counterInnerText < lastNumber) {
    c.innerText = `${counterInnerText + amountOfIncrease}`;

    setTimeout(() => {
      increaseCounter(c);
    }, 5);
  }
}
