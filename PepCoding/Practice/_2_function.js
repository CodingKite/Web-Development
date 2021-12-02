// Non-primitive data types => Arrays, Function, Objects

// Function Defination
function firstFunction() {
  console.log("Function Called");
}

function secondFunction(param) {
  console.log("Function With Parraa Called");
  console.log("Parameter REceived:", param, "\n");
}

function thirdFun(param) {
  //   console.log("Function with Return", param);
  return "I got returned bro";
}

// Function Call
firstFunction();
secondFunction("Hello");
secondFunction(35);
secondFunction([1, 23, 54, 62, 45, 78]);
let gotit = thirdFun(99);
console.log(gotit);
