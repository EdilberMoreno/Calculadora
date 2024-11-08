// Seleccionamos los elementos de la calculadora
const input = document.getElementById('input');
const operators = document.querySelectorAll('.operators div');
const numbers = document.querySelectorAll('.numbers div');
const clear = document.getElementById('clear');
const result = document.getElementById('result');

let currentInput = '';
let currentOperator = '';
let previousInput = '';
let isResultShown = false;

// Función para actualizar la pantalla
const updateDisplay = (value) => {
    if (isResultShown) {
        currentInput = '';
        isResultShown = false;
    }
    currentInput += value;
    input.innerHTML = currentInput;
};

// Función para realizar la operación
const calculate = () => {
    let resultValue = 0;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    
    switch (currentOperator) {
        case '+':
            resultValue = prev + curr;
            break;
        case '-':
            resultValue = prev - curr;
            break;
        case 'x': // Multiplicación
            resultValue = prev * curr;
            break;
        case '/': // División
            resultValue = prev / curr;
            break;
        default:
            return;
    }
    
    currentInput = resultValue.toString();
    input.innerHTML = currentInput;
    isResultShown = true;
};

// Añadir funcionalidad a los botones de números
numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        const value = e.target.innerHTML;
        updateDisplay(value);
    });
});

// Añadir funcionalidad a los operadores
operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        if (currentInput === '') return;
        previousInput = currentInput;
        currentOperator = e.target.innerHTML;
        currentInput = '';
    });
});

// Añadir funcionalidad al botón de igual
result.addEventListener('click', () => {
    if (currentInput === '' || previousInput === '') return;
    calculate();
});

// Añadir funcionalidad al botón de borrar (C)
clear.addEventListener('click', () => {
    currentInput = '';
    previousInput = '0';
    currentOperator = '0';
    input.innerHTML = '0';
});
