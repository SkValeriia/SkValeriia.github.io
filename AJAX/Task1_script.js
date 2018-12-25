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
    let getParse = JSON.stringify(response);
    const CREATE_DIV = document.createElement("div");
    let parentElement = document.body;
    CREATE_DIV.innerText = getParse;
    let Str = CREATE_DIV.innerText;
    let clearStr = Str.replace(/[\\().']/g, '');
    parentElement.append(clearStr);
    return (`https://test-users-api.herokuapp.com/users/${clearStr}`);
});