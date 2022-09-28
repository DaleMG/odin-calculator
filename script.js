const addBtn = document.querySelector('#add')
const subtractBtn = document.querySelector('#subtract')
const multiplyBtn = document.querySelector('#multiply')
const divideBtn = document.querySelector('#divide')
const clearBtn = document.querySelector('#clear')
const equalsBtn = document.querySelector('#equals')

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
    switch (operator) {
        case '+':
          return add(a, b)
        case '-':
          return substract(a, b)
        case 'x':
          return multiply(a, b)
        case '÷':
          if (b === 0) return null
          else return divide(a, b)
        default:
          return null
    }
}

function add2Screen() {

}

function clear() {

}

function equals() {

}

addBtn.addEventListener('click', () => {
    add()
})
subtractBtn.addEventListener('click', () => {
    subtract()
})
multiplyBtn.addEventListener('click', () => {
    multiply()
})
divideBtn.addEventListener('click', () => {
    divide()
})
clearBtn.addEventListener('click', () => {
    clear()
})
equalsBtn.addEventListener('click', () => {
    equals()
})
