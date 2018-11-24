let arr = [1, 4, 2];

const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(arr.reduce(reducer));

let sumNumbers = arr.reduce(reducer);
let averageNumber = sumNumbers/arr.length;

alert ("Average number is: " + averageNumber);