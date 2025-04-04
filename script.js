const numbers = document.querySelectorAll('.numbers')
const input = document.querySelector('#input')
const operatorBTN = document.querySelectorAll('.operator')
const equals = document.querySelector('.equals')
const clear = document.querySelector('.clear')

let displayValue;

let firstNum = '';
let secondNum = '';
let operator = '';

numbers.forEach(num => {
    num.addEventListener("click", (e) => {
        if (operator === "") {
            firstNum += e.target.innerText
            console.log(firstNum)
        } else {
            secondNum += e.target.innerText
            console.log(secondNum)
        }
        // input.value += e.target.innerText
        // displayValue = Number(input.value)

    })
});

operatorBTN.forEach(ops => {
    ops.addEventListener("click", (e) => {
        operator = e.target.innerText
        console.log(operator)
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