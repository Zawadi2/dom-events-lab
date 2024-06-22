/*-------------------------------- Constants --------------------------------*/

const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');
const operators = document.querySelectorAll('.operator');

/*-------------------------------- Variables --------------------------------*/

let num1 = '';
let num2 = '';
let operation = '';

/*------------------------ Cached Element References ------------------------*/



/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
   const target = event.target;
   if (target.classList.contains('number')) {
    handleNumber(target.innerText);
   } else if (target.classList.contains('operator')) {
    handleOperator(target.innerText);
   } else if (target.classList.contains('clear')) {
    console.log('clear')
    handleClear();
   } else if (target.classList.contains('equals')) {
    handleEquals();
   }
  });
 });

// /*-------------------------------- Functions --------------------------------*
function handleNumber(number) {
  if (operation === '') {
    num1 += number;
    display.innerText = num1;
   } else {
    num2 += number;
    display.innerText = num2;
   }

}
function handleOperator(operator) {
  if (num1 === '') return;
  operation = operator;
  display.innerText = '';

}

function handleClear() {
    num1 = '';
    num2 = '';
    operation = '';
    display.innerText = '0'; // Reset display to 0
   

}
function handleEquals() { if (num1 === ''|| num2 === '' || operation === '') return; 
  const result = calculate(num1, num2, operation);
  display.innerText = result;
  num1 = result.toString();
  num2 = '';
  operation = "";
 }

function calculate(num1, num2, operation) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  switch (operation) {
    case '+':
      return num1+ num2;
    case '-':
      return num1 - num2;
    case 'x':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return 'Error';
  }
}
