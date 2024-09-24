
const calculatorScreen = document.getElementById('screen');
const buttons = document.querySelectorAll('.calculator-keys button');
let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = '';
            calculatorScreen.value = '';
        } else if (value === '=') {
            if (operator && previousInput !== '' && currentInput !== '') {
                currentInput = eval(previousInput + operator + currentInput);
                calculatorScreen.value = currentInput;
                operator = '';
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput !== '') {
                operator = value;
                previousInput = currentInput;
                currentInput = '';
            }
        } else {
            currentInput += value;
            calculatorScreen.value = currentInput;
        }
    });
});
