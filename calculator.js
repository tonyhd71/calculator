let numbers = document.querySelectorAll(".num");
let ops = document.querySelectorAll(".operator");
let firstNum = document.querySelector('#firstNum');
let secondNum = document.querySelector('#secondNum');
let operator = document.querySelector("#operator");
let equals = document.querySelector("#equals");

let numInputs = [];
let display = [];
let num1;
let num2;
let opInputs = [];
function getId(clickedNum){
    if (operator.textContent == '' || operator.textContent == undefined) {
        displayNumOne(clickedNum);
    } else {
        displayNumTwo(clickedNum);
    };
}
function displayNumOne(clickedNum) {
    firstNum.textContent+=clickedNum;
    //numInputs[0] = clickedNum;
}
function displayNumTwo(clickedNum) {
    secondNum.textContent+=clickedNum;
}
function displayOperator(clickedOperator) {
    if (operator.textContent == '') {
        operator.textContent = clickedOperator;
    }
    if (operator.textContent != '' && firstNum.textContent != '' && secondNum.textContent!= '') {
        alert("full");
        num1 = parseInt(firstNum.textContent);
        num2 = parseInt(secondNum.textContent);
        numInputs.push(num1);
        numInputs.push(num2);
        opInputs.push(operator.textContent);
        //operator.textContent = '';
        operate(num1, operator.textContent, num2);
    }

}
function add(num1, num2, answer) {
   // if (displayInput())
    answer = num1 + num2;
    equals.textContent = answer;
    firstNum.textContent = answer;
    secondNum.textContent = '';
    console.log(operator.textContent);
    operator.textContent = '';
}
function subtract(num1, num2, answer) {
    answer = num1 - num2;
    equals.textContent = answer;
    firstNum.textContent = answer;
    secondNum.textContent = '';
    operator.textContent = '';

}
function multiply(num1, num2, answer) {
    answer = num1 * num2;
    equals.textContent = answer;
    firstNum.textContent = answer;
    secondNum.textContent = '';
    operator.textContent = '';
}
function divide(num1, num2, answer) {
    answer = num1 / num2;
    equals.textContent = answer;
    firstNum.textContent = answer;
    secondNum.textContent = '';
    console.log(operator);
    operator.textContent = '';
}
function operate(num1, clickedOperator, num2) {
    if (clickedOperator == '-') {
        subtract(num1, num2, clickedOperator);
    } else if (clickedOperator == '+') {
        add(num1, num2, clickedOperator);
    } else if (clickedOperator == 'x') {
        multiply(num1, num2, clickedOperator);
    } else if (clickedOperator == '/') {
        divide(num1, num2, clickedOperator);
    }
}
function pushNum1ToArray() {

}