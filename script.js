const input = document.querySelector('input');
const digits = document.querySelector('.container')

let num1;
let num2;

digits.addEventListener('click', function(e) {
    if(e.target.classList.contains('numbers')) {
        input.value += e.target.textContent;
        displayNum = input.value;
        console.log(displayNum)
    } 
})

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

const operate = function(operator, num1, num2) {

   
        if (operator === '+') {
            return add(num1, num2)
        } else if (operator === '-') {
            return subtract(num1, num2)
        } else if (operator === '*') {
            return multiply(num1, num2)
        } else {
            return divide(num1, num2)
        }
 
}

operate('+', 3, 5);
