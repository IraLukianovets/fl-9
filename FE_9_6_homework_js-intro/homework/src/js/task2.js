let sideA = parseFloat(prompt('Enter the length of side a ', '0'));
let sideB = parseFloat(prompt('Enter the length of side b ', '0'));
let angle = parseFloat(prompt('Enter angle', '0'));

const ANGLE_SUM = 180;
let output, sideC, perimeter, square;

if (typeof sideA !== 'number' || typeof sideB !== 'number' || typeof angle !== 'number') {
    output = 'Invalid data';
} else if (sideA <= 0 || sideB <= 0 || angle <= 0 || angle > ANGLE_SUM) {
    output = 'Invalid data';
}else {
    sideC = getSideС(sideA, sideB, angle).toFixed(2);
    perimeter = getPerimeter(sideA, sideB, sideC).toFixed(2);
    square = getSquare(perimeter, sideA, sideB, sideC).toFixed(2);
    output = `
    c length: ${sideC}
    Triangle square: ${square}
    Triangle perimeter:  ${perimeter}`
}
console.log(output);

function getSideС(sideA, sideB, angle) {
    let gamma = Math.PI / ANGLE_SUM * angle;
    return Math.sqrt(sideA * sideA + sideB * sideB - 2 * sideA * sideB * Math.cos(gamma));
}

function getPerimeter(sideA,sideB,sideC) {
    return parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC);
}

function getSquare(perimeter, sideA, sideB, sideC) {
    let halfPerimetr = perimeter / 2;
    return Math.sqrt(halfPerimetr * ((halfPerimetr - sideA) * (halfPerimetr - sideB) * (halfPerimetr - sideC)));
}
