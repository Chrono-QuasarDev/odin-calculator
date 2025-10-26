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


/*---------------------------------------------------
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
  }
}
