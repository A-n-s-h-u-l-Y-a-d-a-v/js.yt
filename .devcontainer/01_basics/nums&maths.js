const score = 100.56789;

console.log(score.toFixed(2)); // rounds to 2 decimal places
console.log(typeof score);

const myNum = 1234;
console.log(myNum.toString().length);

const myNum2 = 1234.56789;
console.log(myNum2.toPrecision(6)); // rounds to 6 significant digits
const hundred = 1000000;
console.log(hundred.toLocaleString("en-IN")); // formats number according to locale


// ++++++++++++++++++++++++++++++ Math object
console.log(Math); // shows all properties and methods of Math object
console.log(Math.abs(-4)); // returns absolute value    
console.log(Math.round(4.6)); // rounds to nearest integer
console.log(Math.ceil(4.1)); // rounds up to nearest integer
console.log(Math.floor(4.9)); // rounds down to nearest integer
console.log(Math.min(0, 150, 30, 20, -8, -200)); // returns minimum value
console.log(Math.random()); // returns random value between 0 and 1
console.log((Math.random() * 10) + 1); // returns random value between 0 and 10
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // returns random value between min and max including both 