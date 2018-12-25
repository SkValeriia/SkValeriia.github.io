fetch('https://test-users-api.herokuapp.com/users', {
    method: 'POST',
    body: JSON.stringify({ name: "Steven", age: 27}),
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

function httpGet(url) {
    return new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function() {
            if (this.status == 200) {
                resolve(this.response);
            } else {
                let error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };
        xhr.onerror = function() {
            reject(new Error("Network Error"));
        };
        xhr.send();
    });
}

httpGet("https://test-users-api.herokuapp.com/users/")
    .then((response) => {
        let getParse = JSON.parse(response);
        let lastIndex = getParse.data.length - 1;
        console.log('Last index is: ' + lastIndex);
        const DIV_ID = document.createElement("div");
        const DIV_NAME = document.createElement("div");
				const DIV_AGE = document.createElement("div");
        const parentElement = document.body;
        parentElement.append(DIV_ID);
        DIV_ID.innerText = 'In new user ID is: ' + getParse.data[lastIndex].id;
        parentElement.append(DIV_NAME);
        DIV_NAME.innerText = 'In new user name is: ' + getParse.data[lastIndex].name;
        parentElement.append(DIV_AGE);
        DIV_AGE.innerText = 'In new user age is: ' + getParse.data[lastIndex].age;
        console.log(`https://test-users-api.herokuapp.com/users/${getParse.data[lastIndex].id}`);
    });
