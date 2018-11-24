function numbers (n) {
    let fibNumber1 = 1, fibNumber2 = 1;
    let fibNumber3 = fibNumber1 + fibNumber2;
    console.log(fibNumber1);
    console.log(fibNumber2);
    for (i = 2; i < n; i++) {
        fibNumber1 = fibNumber2, fibNumber2 = fibNumber3;
        fibNumber3 = fibNumber1 + fibNumber2;
        console.log(fibNumber3);
    }
}

var fibonacci = numbers(10);