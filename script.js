const numbers = document.querySelectorAll('.numbers')
const input = document.querySelector('#input')
const operatorBTN = document.querySelectorAll('.operator')
const clear = document.querySelector('.clear')

let firstNum = '';
let secondNum = '';
let operatorVar = '';

function clearDisplay() {
    clear.addEventListener("click", () => {
        input.value = ''
        firstNum = '';
        secondNum = '';
        operatorVar = '';
    })
}
clearDisplay()


numbers.forEach(num => {
    num.addEventListener("click", (e) => {
        if (operatorVar === "") {
            firstNum += e.target.innerText
            input.value = firstNum
        } else {
            secondNum += e.target.innerText
            input.value = secondNum
        }
   

    })
});

operatorBTN.forEach(ops => {
    ops.addEventListener("click", (e) => {

        if (e.target.innerText !== "=") {
            operatorVar = e.target.innerText
            input.value = operatorVar
        } else {
            const result = operate(operatorVar, Number(firstNum), Number(secondNum))
            input.value = result

            firstNum = result;
            secondNum = ''
            operatorVar = ''
            input.value = result
        }

    
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
    if (num1 == '0' || num2 == '0') {
        return 'Can\'t divide by 0 you bum'
    } else {
        return num1 / num2
    }

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

