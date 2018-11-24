let arr = [1, 4, 2];

const reducer = (accumulator, currentValue) => accumulator + currentValue;

let sumNumbers = arr.reduce(reducer);
let averageNumber = sumNumbers/arr.length;

console.log("Average number is: " + averageNumber);
alert ("Average number is: " + averageNumber);