// Задача
// Создать 20 элементов div, размерами 50х50,
// со случайным значением цвета.
// Автоматическая нумерация этих div.

function randomColor() {
    var color = Math.floor(Math.random() * 256);
    return color;
}
randomColor()

function createDIVs() {
    var t = 1;
    for (var i = 0; i < 20; i++) {
        var createDIV = document.createElement("div");
        var parentElement = document.body;
        parentElement.append(createDIV);
        createDIV.setAttribute("style", `display: flex; justify-content: space-around; 
                                                width: 50px; height: 50px; float: left;
                              background-color: rgb(${randomColor()}, ${randomColor()}, ${randomColor()});`)
        createDIV.innerText = t;
        t++;
    }
}
createDIVs();
