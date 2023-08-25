let number1 = 0;
let number2 = 0;
let operator = "";

let displayValue = 0;
let display = document.querySelector('.display');
let numberButtons = document.querySelectorAll('.number');

numberButtons.forEach(button =>
    button.addEventListener('click', (e) =>
    {
        display.textContent += e.target.textContent;
        // displayValue = Number(display.textContent);
    })
)

let operators = document.querySelectorAll('.operator');
operators.forEach(operatorKey =>
    operatorKey.addEventListener('click', (e) =>
    {
        number1 = Number(display.textContent);
        operator = operatorKey.textContent;
        display.textContent = "0";
    })
)

let equalsKey = document.querySelector('.equals');
equalsKey.addEventListener('click', () =>
{
    number2 = Number(display.textContent);
    display.textContent = operate(number1, number2, operator);
})

let clearKey = document.querySelector('.clear');
clearKey.addEventListener('click', () => 
{
    display.textContent = "0";
    number1 = 0;
    number2 = 0;
    operator = "";
})

function operate(num1, num2, operator)
{
    let result = 0;
    switch (operator)
    {
        case '+':
            result = add(num1, num2);
            break;

        case '-':
            result = subtract(num1, num2);
            break;

        case '*':
            result = multiply(num1, num2);
            break;

        case '/':
            result = divide(num1, num2);
            break;

        default:
            console.log("Wrong operator")
            break;
    }
    return result;
}

function add(a, b)
{
    return a + b;
}

function subtract(a, b)
{
    return a - b;
}

function multiply(a, b)
{
    return a * b;
}

function divide(a, b)
{
    return a / b;
}