import '../styles/styles.css';
import {calculate} from './interface-module';

const calcTemplate = `
<div class= "calculator">
  <div class="calculator__display">0</div>
  <div class="calculator__keys">
  <button class="key--operator" data-action="add">+</button>
  <button class="key--operator" data-action="subtract">-</button>
  <button class="key--operator" data-action="multiply">&times;</button>
  <button class="key--operator" data-action="divide">÷</button>
  <button>7</button>
  <button>8</button>
  <button>9</button>
  <button>4</button>
  <button>5</button>
  <button>6</button>
  <button>1</button>
  <button>2</button>
  <button>3</button>
  <button>0</button>
  <button data-action="decimal">.</button>
  <button data-action="clear">AC</button>
  <button class="key--equal" data-action="calculate">=</button>
  </div>
</div> `;

const root = document.querySelector('.root');
root.insertAdjacentHTML('afterBegin', calcTemplate);

const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const display = document.querySelector('.calculator__display')

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent

        const previousKeyType = calculator.dataset.previousKeyType

        if (action === 'clear') {
            display.textContent = 0
            key.textContent = 'AC'
            calculator.dataset.previousKeyType = 'clear'
        }
        //to works with numbers
        if (!action) {
            if (displayedNum === '0') {
                display.textContent = keyContent
            } else {
                display.textContent = displayedNum + keyContent
            }
        }
        //to display decimal
        if (action === 'decimal') {
            display.textContent = displayedNum + '.'
        }

        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayedNum
            
            if (firstValue && operator) {
                display.textContent = calculate(firstValue, operator, secondValue)
            }
//added to fix 2d param
            if (
                firstValue &&
                operator &&
                previousKeyType !== 'operator'
            ) {
                const calcValue = calculate(firstValue, operator, secondValue)
                display.textContent = calcValue
                // Update calculated value as firstValue
                calculator.dataset.firstValue = calcValue
            } else {
                // set displayedNum as the firstValue
                calculator.dataset.firstValue = displayedNum
            }

            calculator.dataset.previousKeyType = 'operator'
            calculator.dataset.firstValue = displayedNum
            calculator.dataset.operator = action

        }

        if (!action) {
            if (displayedNum === '0' || previousKeyType === 'operator') {
                display.textContent = keyContent
            } else {
                display.textContent = displayedNum + keyContent
            }
        }

        if (action === 'calculate') {
            console.log('calc action');
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;

            display.textContent = calculate(firstValue, operator, secondValue)
        }

    }
})


