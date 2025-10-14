//singleton means one instance

//object literals 

const mysymbol = Symbol("key1") //symbol is a unique identifier what it does is it creates a unique identifier which cannot be accessed outside the object that is now it is accessible outside the object

Object.create(null) // creates an empty object with no prototype    
const Anshul = {
    "full name": "Anshul",
    age: 19,
    mysymbol: "myvalue", // if i have to use it as a symbol ***i have to use bracket notation***
    location: "India",
    Email : "anshul@gmail.com "
}

// console.log(Anshul.Email)
// console.log(Anshul["Email"])
// console.log(typeof mysymbol)
// console.log(Anshul[mysymbol]) //undefined
// // console.log(Anshul.full name) //error
// console.log(typeof Anshul.mysymbol)
// console.log(Anshul["full name"])//bracket notation

// *****Object.freeze(Anshul)***** // it will not allow to change the object
// Anshul.age = 20 // it will not change the age
// Anshul.country = "India" // it will not add the country
// delete Anshul.location // it will not delete the location
// console.log(Anshul)


Anshul.greeting = function() { // method{
    console.log("hello user ${this.['full name']}")
}
console.log(Anshul) // prints as follows
/*
{
  'full name': 'Anshul',
  age: 19,
  mysymbol: 'myvalue',
  location: 'India',
  Email: 'anshul@gmail.com ',
  greeting: [Function (anonymous)]
}
*/
Anshul.greeting() // hello user
    
// ********Object.seal(Anshul)********* // it will allow to change the object but not add or delete the properties