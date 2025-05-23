const numbers = document.querySelectorAll('.numbers')
const input = document.querySelector('#input')
const operatorBTN = document.querySelectorAll('.operator')
const clear = document.querySelector('.clear')

let firstNum = '';
let secondNum = '';
let operatorVar = '';

input.value = 0;

operatorBTN.forEach(btn => btn.disabled = true);
    

clear.addEventListener("click", () => {
        input.value = 0
        firstNum = '';
        secondNum = '';
        operatorVar = '';
        operatorBTN.forEach(btn => btn.disabled = true);
})


numbers.forEach(num => {
    num.addEventListener("click", (e) => {
        if (operatorVar === "") {
            firstNum += e.target.innerText
            input.value = firstNum
            operatorBTN.forEach(btn => btn.disabled = false);
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
            input.value = Number(result.toFixed(2))
            firstNum = input.value;
            secondNum = ''
            operatorVar = ''
        }
    
    })
});

function operate (operatorSign, num1, num2) {
    
    if (operatorSign === '+') {
        return num1 + num2
    } else if (operatorSign === '-') {
        return num1 - num2
    } else if (operatorSign === '*') {
        return num1 * num2
    } else if (operatorSign === '/') {
        if (num1 == '0' || num2 == '0') {
            return 'Can\'t divide by 0 you bum'
        } else {
            return num1 / num2
        }

    }
}

operate()

