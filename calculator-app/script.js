let num1 = document.getElementById("num1-el").innerText = 8;
let num2 = document.getElementById("num2-el").innerText = 2;

let resultEl = document.getElementById("sum-el");

function add() {
    let result = num1 + num2;
    resultEl.innerText = num1 + " + " + num2 + " = " + result;
}

function subtract() {
    let result = num1 - num2;
    resultEl.innerText = num1 + " - " + num2 + " = " + result;
}

function divide() {
    let result = num1 / num2;
    resultEl.innerText = num1 + " : " + num2 + " = " + result;
}

function multiply() {
    let result = num1 * num2;
    resultEl.innerText = num1 + " x " + num2 + " = " + result;
}

