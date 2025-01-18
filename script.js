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
        input.value += e.target.textContent;
    } else if (e.target.classList.contains('operators')) {
        if (num1 === null) {
            num1 = parseFloat(input.value);
            operator = e.target.textContent;
            input.value = ''; 
        } else if (num2 === null && input.value !== '') {
            num2 = parseFloat(input.value); 
            const result = operate(operator, num1, num2); 
            input.value = result;
            num1 = result; 
            num2 = null;
            operator = e.target.textContent;
        }
    }
});

equals.addEventListener('click', function() {
    if (num1 !== null && operator !== null && input.value !== '') {
        num2 = parseFloat(input.value);
        const result = operate(operator, num1, num2);
        input.value = result;
        num1 = result; 
        num2 = null; 
        operator = null; 
    }
});


clear.addEventListener('click', function() {
    input.value = ''; 
    num1 = null; 
    num2 = null; 
    operator = null; 
});