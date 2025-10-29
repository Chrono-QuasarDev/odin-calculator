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
  if (num2 === 0) {
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

function operate(sign, number1, number2) {
  number1 = Number(number1);
  number2 = Number(number2);

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
const equalsButton = document.querySelector('.equals');

digitButton.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    currentInput += event.target.textContent;
    displayArea.textContent = currentInput;
    
  });
});

operatorButton.forEach((symbol) => {
  symbol.addEventListener('click', (event) => {
    const clickedOperator = event.target.textContent;

    if (firstNumber === '') {
      firstNumber = currentInput;
      console.log('First number', currentInput);
  
      operator = clickedOperator;
      currentInput = '';
      
    } else if (operator && currentInput) {
      secondNumber = currentInput;
      const result = operate(operator, firstNumber, secondNumber);
      displayArea.textContent = result;

      firstNumber = result;
      operator = clickedOperator;
      currentInput = '';
      
    } else {
      operator = clickedOperator;
    }

  })
});

equalsButton.addEventListener('click', (event) => {
  secondNumber = currentInput;

  
  if (firstNumber && secondNumber && operator) {
    const result = operate(operator, firstNumber, secondNumber);
    displayArea.textContent = result;
    firstNumber = result;
    currentInput = '';
    operator = '';

  }

  console.log(`Second number: ${secondNumber}`);
  console.log(`Now calculating ${firstNumber} ${operator} ${secondNumber}`);
});