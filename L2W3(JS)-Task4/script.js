// Implement Promise inside Promise.
// The second Promise should call function from task #3, and you should use async and await.


const eating = {
    spoonsOfBorsch(count) {
        var promise = new Promise(function(resolve, reject){
            var oneSpoon = 3000;
            if(!count) {
                reject();
                return;
            } else if (count > 30) {
                reject();
                return;
            }
            setTimeout(function() {
                console.log("Борща больше нет.");
                resolve();
            }, oneSpoon * count);
            console.log("Начинаю есть борщ!");
        });
        return promise;
    },

    rice(count) {
        var promise = new Promise(function (resolve, reject) {
            var oneFork = 7000;
            if (!count) {
                reject();
                return;
            } else if (count > 25) {
                reject();
                return;
            }
            setTimeout(function () {
                console.log("Риса больше нет.");
                resolve();
            }, oneFork * count);
            console.log("Начинаю есть рис!");
        });
        return promise;
    },

    desert(count) {
        var promise = new Promise(function (resolve, reject) {
            var onePiece = 7000;
            if (!count) {
                reject();
                return;
            } else if (count > 1) {
                reject();
                return;
            }
            setTimeout(function () {
                console.log("Десерта нет.");
                resolve();
            }, onePiece * count);
            console.log("Приступаю к десерту!");
        });
        return promise;
    }
}

eating.spoonsOfBorsch(1)
    .then(() => {
        return eating.rice(1);
    })
    .then(() => {
        return eating.desert(2);
    })
    .catch((err) => {
        console.log("Слишком много еды!");
    })