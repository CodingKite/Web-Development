// Print
greet = "Hello jii";
console.log(greet);

// Declare variable
// undefined by default
let a;
console.log(a);

// Intializing an Variable
a = 10;

// Find data type in JavaScript -- Ways of concatenating in JS
console.log("Variable type: " + typeof a + " praticing JS basics");
console.log("Variable type: ", typeof a, " praticing JS basics");
let result = greet.concat(" ", "Hello");
console.log(result);

console.log(a);

// Javscript is dynamically type programming language --> JS tells us it an variable not its type(while declaring an vairable)

a = 10.1;
console.log(a);
a = "Hellooo...";
console.log(a);

// Data type in  JS --> Primitive
/*
String,
Number,
BigInt(an integer with arbitrary precision -> use n at the end => const b = 256n --> can not be mixed with int data type -> 256n + 5 //WRONG),
Boolean,
undefined(a data type whose variable is not initialized),
null(denotes a null value->  represents empty or unknown value),
Symbol(data type whose instances are unique and immutable),
Object(key-value pairs of collection of data)

*/

// Loops
let number = 10;
for (let i = 1; i <= number; i++) {
  console.log("Number is ", i);
}

// isPrime or not
let numb = 50;
let flag = true;
for (let i = 2; i * i <= numb; i++) {
  if (numb % i == 0) {
    flag = false;
    break;
  }
}

if (flag) {
  console.log(numb + " Number is Prime");
} else {
  console.log(numb + " Number is NOT Prime");
}
