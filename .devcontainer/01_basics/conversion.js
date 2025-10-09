let score = "33"

console.log(typeof score)
console.log(typeof(score))

let valueInnum = Number(score)

console.log(typeof valueInnum)

// Now lets say score = "33abc" then what will print as a type of valueinNum

score = "33abc"

valueInnum = Number(score)

//console.log(typeof valueInnum)
// still shows number but 33abc is not a number so lets see what is valueinNum
//console.log(valueInnum)
//it is NaN (not a number)

// if we convert like this from score to valueInnum then bool will become 0/1 null will become 0
// "33" => 33
// "hitesh" => NaN
// "true" => 1
let islog = 1
let islogged = Boolean(islog)
//console.log(islogged)
//empty string equivalent to false

let num = 33
let stringn = String(num)
console.log(stringn)
console.log(typeof stringn)