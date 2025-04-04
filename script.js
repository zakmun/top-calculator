const numbers = document.querySelectorAll('.numbers')
const input = document.querySelector('#input')
const operators = document.querySelector('.operator')
const equals = document.querySelector('.equals')
const clear = document.querySelector('.clear')

let displayValue;

let firstNum = '';
let secondNum = '';
let operator = '';

numbers.forEach(btn => {
    btn.addEventListener("click", (e) => {
        
        input.value += e.target.innerText
        displayValue = Number(input.value)
           

    })
});

function add (num1, num2) {
    return num1 + num2
}

function subtract (num1, num2) {
    return num1 - num2
}

function multiply (num1, num2) {
    return num1 * num2
}

function divide (num1, num2) {
    return num1 / num2
}

function operate (operatorSign, num1, num2) {
    if (operatorSign === '+') {
        return add(num1, num2)
    } else if (operatorSign === '-') {
        return subtract(num1, num2)
    } else if (operatorSign === '*') {
        return multiply(num1, num2)
    } else if (operatorSign === '/') {
        return divide(num1, num2)
    } else {
        return NaN
    }
}

operate()