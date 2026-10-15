let display = document.getElementById('display');
let cancel = document.getElementById('cancel');
let deleteButton = document.getElementById('delete');
let numberButton = document.querySelectorAll('.number');
let dot = document.getElementById('dot');
let firstNumber = null;
let operator = null;
let secondNumber = null;
let add = document.getElementById('add');
let minus = document.getElementById('minus');
let divide = document.getElementById('divide');
let multiply = document.getElementById('multiply');
let equal = document.getElementById('equal');
let percent = document.getElementById('percent');
let resultDisplayed = false;

document.addEventListener('keydown', function(event) {
    if(event.key >= 0 && event.key <= 9 ){
        display.value = event.key;
    };

    if(display === 0){
        display.value = event.key;
    }else{
        display.value += event.key;
    }
});

cancel.addEventListener('click', function () {
    display.value = 0
    resultDisplayed = false;
});

deleteButton.addEventListener('click', function () {
    if(resultDisplayed){
        return;
    }
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1)
    }
    else {
        display.value = 0
    }
});

numberButton.forEach(function (button) {
    button.addEventListener('click', function () {
        if (resultDisplayed){
            return;
        };
        if (display.value === '0') {
            display.value = button.textContent;
        } else {
            display.value += button.textContent;
        }

    });
});

dot.addEventListener('click', function () {
    if (resultDisplayed){
            return;
        };
    if (!display.value.includes('.')) {
        display.value += '.';
    }
});


add.addEventListener('click', function () {
    firstNumber = Number(display.value);
    operator = '+';
    display.value = 0;
    resultDisplayed = false;
});

minus.addEventListener('click', function () {
    firstNumber = Number(display.value);
    operator = '-';
    display.value = 0;
    resultDisplayed = false;
});

multiply.addEventListener('click', function () {
    firstNumber = Number(display.value);
    operator = '*';
    display.value = 0;
    resultDisplayed = false;
});

divide.addEventListener('click', function () {
    firstNumber = Number(display.value);
    operator = '/';
    display.value = 0;
    resultDisplayed = false;
});

percent.addEventListener('click', function(){
    display.value = Number(display.value) /100;
    resultDisplayed = false;
});

equal.addEventListener('click', function () {
    secondNumber = Number(display.value)

    if (operator === '+') {
        display.value = firstNumber + secondNumber;
    } else if (operator === '-') {
        display.value = firstNumber - secondNumber;
    } else if (operator === '*') {
        display.value = firstNumber * secondNumber;
    } else if (operator === '/') {
        if (secondNumber === 0) {
            display.value = 'ERROR'
        } else {
            display.value = firstNumber / secondNumber;
        }
    }
    resultDisplayed = true;
});

