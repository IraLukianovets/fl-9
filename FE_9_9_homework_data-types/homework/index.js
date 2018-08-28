//1
function findType(argument) {
    return typeof argument;
}
//2
function forEach(array, consoleLogFunclion) {
    for(let i = 0; i < array.length; i++) {
        consoleLogFunclion(array[i]);
    }

}
//3
function transformedArray(array, consoleLogFunclion) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(consoleLogFunclion(array[i]));
    }
    return newArray;
}
//4
function myFilter(array, consoleLogFunclion) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (consoleLogFunclion(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
//5
function findAdultAppleLovers(obj) {
    let newArray = [];
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].age > 18 && obj[i].favoriteFruit === 'apple') {
            newArray.push(obj[i].name);
        }
    }
    return newArray;
}
//6
function getObjKeys(obj) {
    let newArray = [];
    for (let key in obj) {
        if(obj.hasOwnProperty(key)) {
            newArray.push(key);
        }
    }
    return newArray;
}
//7
function getObjValue(obj) {
    let newArray = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newArray.push(obj[key]);
        }
    }
    return newArray;
}
//8
function formattedDate(date) {
    let monthes = ['Jan', 'Feb', 'Mar',
        'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep',
        'Oct', 'Nov', 'Dec'];
    return console.log(`It is ${date.getDate()} of ${monthes[date.getMonth()]}, ${date.getFullYear()}`);
}