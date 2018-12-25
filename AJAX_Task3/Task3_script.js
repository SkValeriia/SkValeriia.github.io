// Task #3 (Post with verify last string - Get response)

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
        let userID = getParse.data[lastIndex].id;
        console.log(`https://test-users-api.herokuapp.com/users/${userID}`);
        const parentElement = document.body;
        let pageShow = parentElement.append(getParse.data[lastIndex]);
        console.log('Result is: ' + pageShow);
    });