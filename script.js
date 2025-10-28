/* ----------------------------------------------------
 These are the fuctions for the basic math operators we'll use in this calculator
-------------------------------------------------------
*/

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num1 === 0 || num2 === 0) {
    return "You’re really testing my patience, aren’t you?"
  } else {
    return num1 / num2;
  }
}


/* ----------------------------------------------------
These are the variables that'll store the each part of the operation.
-------------------------------------------------------
*/

let firstNumber = '';
let operator = null;
let secondNumber = '';
let currentInput = '';


/*---------------------------------------------------
The operate fuction calls the correct math fuctions based on the operator
------------------------------------------------------
*/

function operate(number1, sign, number2) {
  if (sign === '+') {
    return add(number1, number2);

  } else if (sign === '-') {
    return subtract(number1, number2);

  } else if (sign === '*') {
    return multiply(number1, number2);

  } else if (sign === '/') {
    return divide(number1, number2);

  } else {
    return `${sign}? You think this is a scientific calculator?`;
  }

}


/* --------------------------------------------------
  Event listeners for digit buttons where when clicked, they show the corresponding number on the display 
-------------------------------------------------------*/


const digitButton = document.querySelectorAll('.digit');
const operatorButton = document.querySelectorAll('.operator');
const displayArea = document.querySelector('.displayArea');

digitButton.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    currentInput += event.target.textContent;
    displayArea.textContent = currentInput;
    
  });
});

operatorButton.forEach((symbol) => {
  symbol.addEventListener('click', (event) => {
    firstNumber = currentInput;
    operator = event.target.textContent;

    console.log('First number', currentInput);
    console.log(`Operator ${operator} was clicked`);
  })
});