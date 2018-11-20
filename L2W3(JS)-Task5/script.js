// Implement recursing to print only PRIME numbers from n to 1. I would like to run function func(10) and see 7, 5, 3, 2, 1.


function primeNumbers(startNumber) {
    if (startNumber === 1) {
        console.log(startNumber);
    } else if (startNumber === 2) {
        console.log(startNumber);
    } else {
        for (var x = 2; startNumber > 2; startNumber--) {
            if(startNumber % x !== 0)
            {
                console.log(startNumber);
            }
        }
        console.log(2);
        console.log(1);
    }
}
var startNumber = primeNumbers(10);
