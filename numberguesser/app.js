//Define the parameters of the game
let min = 1;
let max = 15;
let correctGuess = getRandomNum(min,max);
let guessNum = 3;

//Define the elements 
const minSpan = document.querySelector('.min');
const maxSpan = document.querySelector('.max');
const guessInput = document.querySelector('#guess-input');
const guessBtn = document.querySelector('#guess-btn');
const message = document.querySelector('.message');
minSpan.textContent = min;
maxSpan.textContent = max;

//Events
guessBtn.addEventListener('click' , gameResult);

//functions
function gameResult(){
  let guess = parseInt(guessInput.value);
  if(isNaN(guess) === true || guess < min || guess > max){
    gameMessage(`Please enter a number between the range ${min} & ${max}`,'red');
  }
  if(guess >= min && guess <= max){
    if(guess === correctGuess){
      guessInput.disabled = true;
      guessInput.style.borderColor = 'green'
      gameMessage(`${correctGuess} is the correct answer, YOU WIN!`, 'green')
      tryAgain();
    } else {
      guessInput.style.borderColor = 'red'
      guessNum-=1
      if(guessNum === 0){
        guessInput.disabled = true;
        gameMessage(`Game Over, the correct answer is ${correctGuess}, You Lost`, 'red')
        tryAgain();
      }else{
        gameMessage(`there are ${guessNum} guesses left, Try Again`, 'red')
      }
    }
  }
}

function gameMessage(msg,color){
  message.textContent = msg;
  message.style.color = color;
}

function tryAgain(){
  guessBtn.value = 'Try Again'
  guessBtn.addEventListener('mousedown' , reload)
  function reload(){
    location.reload();
  }
}

function getRandomNum(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);   
  //it is used to get a random number between 2 numbers (max & min) and the 2 numbers is included
}