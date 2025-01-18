const input = document.querySelector('input');
const digits = document.querySelector('.container')
const operators = document.querySelectorAll('.operators');
const equals = document.querySelector('.equals');

let num1 = null;
let num2 = null;
let operator = null;



const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
}

digits.addEventListener('click', function(e) {
    if (e.target.classList.contains('numbers')) {
        // Append the number to the input field
        input.value += e.target.textContent;
    } else if (e.target.classList.contains('operators')) {
        // When an operator is clicked, store num1 and the operator, then clear input for num2
        if (num1 === null) {
            num1 = parseFloat(input.value);
            operator = e.target.textContent;
            input.value = ''; // Clear the input for the second number
        } else if (num2 !== null) {
            // If both num1 and num2 are already stored, perform operation
            num1 = operate(operator, num1, num2);
            operator = e.target.textContent;
            input.value = ''; // Clear the input for the next number
        }
    }
});


const operate = function(operatorButton, num1, num2) {

  
         if (operatorButton === '+') {
            return add(num1, num2)
        } else if (operatorButton === '-') {
            return subtract(num1, num2)
        } else if (operatorButton === '*') {
            return multiply(num1, num2)
        } else {
            return divide(num1, num2)
        }
 
}

operate('+', 3, 5);
