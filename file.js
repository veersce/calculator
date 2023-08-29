let firstOperand = 0;
let secondOperand = 0;
let firstOperator = "";
let displayValue = "";

const display = document.querySelector('.display');

window.addEventListener('keydown', (e) => {
    e.preventDefault();
    let button = document.querySelector(`button[data-key=${e.code}]`);
    button.click();
});

const periodButton = document.querySelector('.period');
periodButton.addEventListener('click', () => {
    if (!displayValue.includes('.')) {
        displayValue += periodButton.textContent;
        updateDisplay();
    }
})

const backspaceButton = document.querySelector('.backspace');
backspaceButton.addEventListener('click', () => {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
})

const signButton = document.querySelector('.sign');
signButton.addEventListener('click', () => {
    displayValue = String(displayValue * -1);
    updateDisplay();
})

function toFixedIfNecessary(value, dp) {
    return +parseFloat(value).toFixed(dp);
}

function updateDisplay() {
    if (String(displayValue.length) <= 15) {
        display.textContent = String(displayValue);
    }
}

const operators = document.querySelectorAll('.operator');
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        firstOperand = Number(displayValue);
        firstOperator = operator.textContent;
        displayValue = "";
        if (firstOperand) {
            secondOperand = Number(displayValue);
        }
    })
})

const equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', () => {
    if (!firstOperator)
        return;
    secondOperand = Number(displayValue);
    displayValue = calculate(firstOperand, secondOperand, firstOperator);
    updateDisplay();
})

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        displayValue += btn.textContent;
        updateDisplay();
    })
})

function clear() {
    firstOperand = 0;
    secondOperand = 0;
    firstOperator = "";
    displayValue = "0";
}

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    clear();
    updateDisplay();
})

function calculate(a, b, op) {
    let result = 0;
    switch (op) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            if (b === 0 || b === '0') {
                alert("Wait, that's illegal.");
                clear();
                return "0";
            }
            else {
                result = a / b;
            }
            break;
        default:
            break;
    }
    return String(toFixedIfNecessary(result, 3));
}