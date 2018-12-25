// Task #2 (Get user by random id)

function httpGet(url) {
    return new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function() {
            if (this.status === 200) {
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
        let randomIndex = Math.floor(Math.random() * getParse.data.length - 1);
        console.log('Random index is: ' + randomIndex);
        let userID = getParse.data[randomIndex].id;
        console.log('User ID is: ' + userID);
        const CREATE_DIV_ID = document.createElement("div");
        const CREATE_DIV_NAME = document.createElement("div");
        const CREATE_DIV_AGE = document.createElement("div");
        let parentElement = document.body;
        parentElement.append(CREATE_DIV_ID);
        CREATE_DIV_ID.innerText = 'User ID is: ' + getParse.data[randomIndex].id;
        parentElement.append(CREATE_DIV_NAME);
        CREATE_DIV_NAME.innerText = 'User name is: ' + getParse.data[randomIndex].name;
        parentElement.append(CREATE_DIV_AGE);
        CREATE_DIV_AGE.innerText = 'User age is: ' + getParse.data[randomIndex].age;
        console.log(`https://test-users-api.herokuapp.com/users/${userID}`);
        return (`https://test-users-api.herokuapp.com/users/${userID}`);
    });