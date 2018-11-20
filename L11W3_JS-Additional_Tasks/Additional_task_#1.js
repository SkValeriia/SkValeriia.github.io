// Задача #1
// Описать функцию конструктор для автосалона.
// Mark(Toyota), Volume(2.5L), Price(30000$), Year(2016)

// Цена всегда одинаковая
// getTax() -> (price * 0.2) + ((0.01) * 2.5L *  price);
// функция должна расчитывать налог от объема двигателя, то есть,
// если объем двигателя больше, то и налог больше


// Task #1

function carShowroom(mark, volume, price, year) {
    var newObj = {};
    newObj.getTax = (price * 0.2) + ((0.01) * volume *  price);
    console.log(newObj);
    return newObj;
}

var Tax = carShowroom("Toyota", 2.5, 30000, 2016);