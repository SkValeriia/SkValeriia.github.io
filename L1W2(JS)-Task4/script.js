let str = "";

function printing (symb, len) {
    for (let i = 0; i < len; i++) {
        str += symb;
        console.log(str);
    }
}
let symbol = printing("#", 8);