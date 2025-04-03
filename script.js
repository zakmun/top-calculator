const btns = document.querySelectorAll('.numbers')


btns.forEach(btns => {
    btns.addEventListener("click", () => {
        console.log(btns)
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