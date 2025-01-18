const input = document.querySelector('input');
const digits = document.querySelector('.container')
const operators = document.querySelectorAll('.operators');

let num1;
let num2;



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

    digits.addEventListener('click', function(e) {
        if(e.target.classList.contains('numbers')) {
            input.value += e.target.textContent;
            num1 = input.value;
        } 
    })
    
    operators.forEach(function(operatorButton) {
        operatorButton.addEventListener('click', function(e) {
            console.log(e.target.textContent);
        });
    });

   
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
