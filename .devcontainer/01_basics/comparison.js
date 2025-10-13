// console.log(2>1) //true
// console.log(2<1) //false
console.log("2" > 1)
console.log("02" > 1)

console.log(null == 0) // equality operators do not convert null to 0
console.log(null >= 0) // comparison operators convert  null to 0
console.log(null>0) 

console.log("2"===2) //false it also checks type
console.log("2"==2) //true it converts string to number and then compares

console.log(undefined==null) //true as both are considered empty values
console.log(undefined===null) //false

console.log(undefined>0) //false as it converts undefined to NaN
console.log(undefined<0) //false
console.log(undefined>=0) //false
console.log(undefined<=0) //false

console.log(NaN===NaN) //false as NaN is not equal to anything including itself
console.log(NaN==NaN) //false 

console.log(isNaN(NaN)) //true as it checks if value is NaN
console.log(isNaN("hello")) //true as it converts string to number and then checks
console.log(isNaN("123")) //false as it converts string to number and then checks
console.log(isNaN(123)) //false