let arr = [125, -10, 3, 456, 56.25, 0, 6548, 2851];
let MaxNumber = arr[0];
let MinNumber = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (MaxNumber < arr[i]) {
        MaxNumber = arr[i];
    }
    if (MinNumber > arr[i]) {
        MinNumber = arr[i];
    }
}

alert ("Max number is: " + MaxNumber + " " + "Min number is: " + MinNumber);