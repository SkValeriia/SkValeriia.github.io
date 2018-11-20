// Задача #2
// getDiscount -> (currentYear - year) * 0.1 * price
// в данной задаче, функция должна считать скидку в зависимости от
// года выпуска автомобиля. То есть, чем старше машина, тем больше
// скидка на автомобиль


// Task #2

function carShowroom2(mark, volume, price, year) {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var newObj = {};
    newObj.getDiscount = (currentYear - year) * 0.1 * price;
    console.log(newObj);
    return newObj;
}

var Discount = carShowroom2("Toyota", 2.5, 30000, 2016);