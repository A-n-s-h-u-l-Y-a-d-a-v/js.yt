"use strict" // treats all js code as a newer version
//alert(3+3) //  we are using node js not browser
let name = "anshul"
let age = 19
let ispossible = true

//number =>2 to power 53
// bigint
// string =>""
// boolean => true/false
// null => standalone value
// undefined => unassigned value
//symbol =>unique


//object
console.log(typeof "anshul")
console.log(typeof null)
console.log(typeof ispossible)

const Myfunc = function() {
    console.log("Hello world");

}
console.log(typeof Myfunc);

const my_obj = {
    message: "Hello world" // object property
}
// in an object we cant use console log, duplicate keys and all values are stored in pair form of key value pairs
// 7 data types in js NUmber, String, Boolean, Null, Undefined, Symbol, BigInt
// object types are  array, date, object literals, functions, etc


console.log(typeof my_obj);
console.log(my_obj.message);
console.log(my_obj["message"]);

let constid = 234
let constid2 = constid
constid2 = 345
console.log(constid);
console.log(constid2);
// primitive data types are stored in stack memory and are copied by their value

let obj1 = {
    name: "anshul",
    age: 19
}
let obj2 = obj1
obj2.name = "hitesh"
console.log(obj1.name);
console.log(obj2.name);
// non primitive data types are stored in heap memory and are copied by their reference