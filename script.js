let prevValue = "";
let currentValue = "";
let operator = "";

document.addEventListener("DOMContentLoaded", function(){
    let numbers = document.querySelectorAll('.numButton')
    let decimal = document.querySelector('.dotButton')
    let operators = document.querySelectorAll('.operation')

    let previousDisplay = document.querySelector('.previous')
    let currentDisplay = document.querySelector('.current')

    numbers.forEach((number) => number.addEventListener("click", function(n){
        handleNumber(n.target.textContent)
        currentDisplay.textContent = currentValue;
    }))

    operators.forEach((op) => op.addEventListener("click", function(o){
        handleOperator(o.target.textContent)
        previousDisplay.textContent = prevValue + " " + operator;
        currentDisplay.textContent = currentValue; 
    }))

    clear.addEventListener("click",function(){
        prevValue = " ";
        currentValue = " ";
        operator = " ";
        previousDisplay.textContent = currentValue;
        currentDisplay.textContent = currentValue;
    })

    equals.addEventListener("click", function(){
        prevValue = Number(prevValue);
        currentValue = Number(currentValue);
        operate(operator,prevValue,currentValue)
        previousDisplay.textContent = ' ';
        currentDisplay.textContent = prevValue;
    })

    decimal.addEventListener("click", function(){
        addDecimal();
    })
})

function add(a, b) {
    return a + b
}
  
function substract(a, b) {
    return a - b
}
  
function multiply(a, b) {
    return a * b
}
  
function divide(a, b) {
    return a / b
}

function operate(operator,a,b) {
    if (operator == "/" && b == 0) {
        prevValue = "cant divide by 0"
    } else {
        if (operator=="+") {
            prevValue = add(a,b);
        } else if (operator =="-"){
            prevValue = substract(a,b)
        } else if (operator =="x"){
            prevValue = multiply(a,b)
        } else {
            prevValue = divide(a,b)
        }
        prevValue = prevValue.toString();
        currentValue = prevValue.toString();
    }
}

function handleNumber(num) {
    currentValue += num;
}
function handleOperator(op) {
    operator = op;
    prevValue =  currentValue;
    currentValue = ' ';
}
function addDecimal() {
    if (!currentValue.includes(".")) {
        currentValue += '.';
    }
}