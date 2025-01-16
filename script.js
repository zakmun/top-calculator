const input = document.querySelector('input');
const digits = document.querySelector('.container')

let firstNum;
let secondNum;
let operator = ['+', '-', '*', '/']


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

const operate = function() {
    // console.log(add());       
    // console.log(subtract());   
    // console.log(multiply());   
    // console.log(divide());     
}

operate();
