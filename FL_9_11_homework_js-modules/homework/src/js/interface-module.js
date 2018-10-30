import { addition } from './calculating-module';
import { subtraction } from './calculating-module';
import { multiplication } from './calculating-module';
import { division } from './calculating-module';

export const calculate = (n1, operator, n2) => {
    let result = '';
    if (operator === 'add') {
        result = addition(n1, n2)
    } else if (operator === 'subtract') {
        result = subtraction(n1, n2)
    } else if (operator === 'multiply') {
        result = multiplication(n1,n2)
    } else if (operator === 'divide') {
        result = division(n1,n2)
    }
    return result
}
//think about validation 