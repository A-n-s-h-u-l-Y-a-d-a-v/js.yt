function sayMyname(){
    console.log("A")
    console.log("N")
    console.log("S")
    console.log("H")
    console.log("U")
    console.log("L")
}//fucntion

sayMyname() // function call
sayMyname // reference

function addTwoNumbers(num1, num2){
    console.log(num1 + num2)
} 

addTwoNumbers(10, 20) // prints 30
addTwoNumbers(3,"a")// prints 3a
addTwoNumbers(3)// prints NaN
addTwoNumbers()// prints NaN
addTwoNumbers(3,4,5,6,7,8,9)// prints 7


const result = addTwoNumbers(10, 20) // prints 30 and stores undefined in result variable
console.log(result) // prints undefined

function addTwoNumbersReturn(num1, num2){
    let sum = num1 + num2
    return sum
    return num1 + num2 // unreachable code
}

const result2 = addTwoNumbersReturn(10, 20) // stores 30 in result2 variable
console.log(result2) // prints 30

function loginUserMessage(username = "Anshul"){ // will never be undefined it will atleast hold value Anshul
    if(!username){
        console.log("Please enter a valid username")
        return 
    }
    return `${username} just logged in`//  `` is used for string interpolation means to embed variables in string
}
console.log(loginUserMessage("Anshul")) // Anshul just logged in
loginUserMessage("Anshul") // returns the string but we are not printing it anywhere



function calculateCartPrice(val1, val2, ...prices){
    return prices
} // rest operator
console.log(calculateCartPrice(100,200,300,400,500))// prints [ 300, 400, 500 ]
console.log(calculateCartPrice(100,200))// prints []
console.log(calculateCartPrice(100,200,300))// prints [ 300 ]
// taking object as input

const user = {
    username: "Anshul",
    price: 300
}
 function takingobject(anyobject){
    console.log("username is ${anyobject.username} and price is ${anyobject.price}")
 }
takingobject(user)// username is Anshul and price is 300