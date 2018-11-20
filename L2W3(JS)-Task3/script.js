// Implement function, that will return result after 10 second.

alert("The FIRST stage");
console.log("The FIRST stage");

setTimeout(function() {
  alert("The THIRD stage");
  console.log("The THIRD stage");
}, 10000);

alert("The SECOND stage");
console.log("The SECOND stage");
