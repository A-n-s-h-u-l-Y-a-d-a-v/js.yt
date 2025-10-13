//Arrays
const Myarray = [1, 2, 3, 4, 5];
console.log(Myarray);
console.log(typeof Myarray);

console.log(Myarray[0]); // accessing first element

Myarray.push(6); // adding element at the end
Myarray.pop(); // removing element from the end     
Myarray.unshift(0); // adding element at the beginning but is slower than push because it shifts all elements
Myarray.shift(); // removing element from the beginning but is slower than pop because it shifts all elements

console.log(Myarray.includes(3)); // checks if element is present in array or not
console.log(Myarray.indexOf(3)); // returns index of element in array or -1 if not present
console.log(Myarray.indexOf(9)); // returns -1 if element is not present in array

const newarr = Myarray.join() // converts array to string
console.log(newarr);
console.log(typeof newarr);

const Myarray2 = [6, 7, 8, 9, 10];
const Myarray3 = Myarray.concat(Myarray2) // concatenates two arrays
console.log(Myarray3);

//splice,slice

console.log("A", Myarray);

console.log("B", Myarray.splice(2, 2, 11, 12)); // removes 2 elements from index 2 and adds 11,12 at index 2
console.log("c", Myarray.slice(2, 4)) ;// returns elements from index 2 to 4 but does not modify original array
console.log("D", Myarray.splice(2,4)) ;// does not modify original array


const a1 = Myarray.splice(2,2);
const a2 = Myarray.slice(2,4);
const a3 = Myarray.splice(2,4,11,12);
console.log(a1,a2,a3);