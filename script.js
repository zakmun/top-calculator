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
    if (operatorSign = '+') {
        return add()
    } else if (operatorSign = '-') {
        return subtract()
    } else if (operatorSign = '*') {
        return multiply()
    } else {
        return divide()
    }
}

operate()