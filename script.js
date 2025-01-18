const input = document.querySelector('input');
const digits = document.querySelector('.container')
const operators = document.querySelectorAll('.operators');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');


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

equals.addEventListener('click', function() {
    if (num1 !== null && operator !== null && input.value !== '') {
        num2 = parseFloat(input.value);
        const result = operate(operator, num1, num2);
        input.value = result; // Show the result in the input field
        num1 = result; // Update num1 to the result for further operations
        num2 = null; // Reset num2 for the next calculation
        operator = null; // Reset operator
    }
});


clear.addEventListener('click', function() {
    input.value = ''; // Clear the input
    num1 = null; // Reset num1
    num2 = null; // Reset num2
    operator = null; // Reset operator
});