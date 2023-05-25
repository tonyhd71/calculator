let numbers = document.querySelectorAll(".num");
let ops = document.querySelectorAll(".operator");
let firstNum = document.querySelector('#firstNum');
let secondNum = document.querySelector('#secondNum');
let operator = document.querySelector("#operator");
let equals = document.querySelector("#equals");
let clear = document.querySelector("#c");
let del = document.querySelector("#del");
let numInputs = [];
let display = [];
let num1;
let num2;
let opInputs = [];
clear.addEventListener("click", clearScreen);
//del.addEventListener("click", delChar);
function getId(clickedNum){
    if (operator.textContent == '' || operator.textContent == undefined) {
        displayNumOne(clickedNum);
    } else {
        displayNumTwo(clickedNum);
    };
}
function displayNumOne(clickedNum) {
    firstNum.textContent+=clickedNum;
}
function displayNumTwo(clickedNum) {
    secondNum.textContent+=clickedNum;
}
function doMath() {
    num1 = parseInt(firstNum.textContent);
    num2 = parseInt(secondNum.textContent);
    numInputs.push(num1);
    numInputs.push(num2);
    opInputs.push(operator.textContent);
    operate(num1, operator.textContent, num2);
}
function displayOperator(clickedOperator) {
    if (operator.textContent == '') {
        operator.textContent = clickedOperator;
    }
    if (operator.textContent != '' && firstNum.textContent != '' && secondNum.textContent!= '') {
        doMath();
        operator.textContent =clickedOperator;

    }
}

function add(num1, num2, answer) {
    answer = num1 + num2;
    equals.textContent = answer;
    firstNum.textContent = answer;
    secondNum.textContent = '';
    operator.textContent = '';
    console.log(numInputs);
}
function subtract(num1, num2, answer) {
    answer = num1 - num2;
    equals.textContent = answer;
    firstNum.textContent = answer;
    secondNum.textContent = '';
    operator.textContent = '';
    console.log(numInputs);
}
function multiply(num1, num2, answer) {
    answer = num1 * num2;
    equals.textContent = answer;
    firstNum.textContent = answer;
    secondNum.textContent = '';
    operator.textContent = '';
    console.log(numInputs);
}
function divide(num1, num2, answer) {
    answer = num1 / num2;
    equals.textContent = answer;
    firstNum.textContent = answer;
    secondNum.textContent = '';
    operator.textContent = '';
    console.log(numInputs);
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
function clickEquals() {
    if (operator.textContent == '') {
        operator.textContent = clickedOperator;
    }
    if (operator.textContent != '' && firstNum.textContent != '' && secondNum.textContent!= '') {
        doMath();
    }
}
function pushNum1ToArray() {

}
function clearScreen() {
    firstNum.textContent = '';
    secondNum.textContent = '';
    operator.textContent ='';
    equals.textContent = '';
}
