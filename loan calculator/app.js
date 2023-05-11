//Define Vars
//inputs
const container = document.querySelector('.container');
const heading = document.querySelector('.heading')
const mainForm = document.querySelector('.inputs');
const  loan = document.querySelector('#loan');
const interest = document.querySelector('#interest');
const years = document.querySelector('#years');
//results
const monthlyPay = document.querySelector('#monthly');
const totalPay = document.querySelector('#total');
const totalInt = document.querySelector('#tinterest');

//Events
mainForm.addEventListener('submit' , showHide);

//functions
function showHide(e){
  //show loading
  document.getElementById('loading').style.display = 'inline-block';
  //show the results
  setTimeout(calculate,2000)

  e.preventDefault();
}

function calculate() {
  const l = parseFloat(loan.value);
  const x = parseFloat(interest.value) / 100 / 12;
  const y = parseFloat(years.value)*12;

  const z = Math.pow(1+x , y);
  const h = (l*z*x)/(z-1);    
  //if there is a dividing operation then you have to make sure if the result will be finite or not
  if(isFinite(h)){
    monthlyPay.value = h.toFixed(1);
    totalPay.value = (h*y).toFixed(1);
    totalInt.value = ((h*y) - l).toFixed(1);
    document.getElementById('loading').style.display = 'none';
    document.querySelector('.results').style.display = 'block';
  } else {
    document.getElementById('loading').style.display = 'none';
    document.querySelector('.results').style.display = 'none';
    const errorMsg = document.createElement('div');
    errorMsg.className = 'error';
    errorMsg.appendChild(document.createTextNode('Please make sure that the values you entered is right'));
    container.insertBefore(errorMsg , heading);
    setTimeout(function clear(){
      errorMsg.remove();
    } , 2500)
  }
}