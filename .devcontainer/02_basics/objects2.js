const tinderuser  = new Object()//one way

const tinderuser1 = {} //object literal way

tinderuser1.id = "1234"
tinderuser1.name = "Anshul"
tinderuser1.isLoggedIn = false
// console.log(tinderuser1)

//nested objects
const tinderuser2 = {
    id : "1234",
    name : "Anshul",
    isLoggedIn : false,
    fullname : {
        userfullname : {
            firstname : "Anshul",
            lastname : "yadav"
        }
    }
}
console.log(tinderuser2.fullname.userfullname.firstname) //Anshul // if fullname does not exist we sometimes put ? after fullname like this fullname?.userfullname?.firstname it will not give error instead it will give undefined

const obj1 = {
    1 : "a",
    2 : "b"
}
const obj2 = { 3: "a" , 4: "b"}

const obj3 = {obj1 , obj2} // it will create a nested object and it'll print as follows
console.log(obj3) // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
const newobj = Object.assign({}, obj1, obj2) // it will merge the two objects

const obj4 = {...obj1, ...obj2} // spread operator it will also merge the two objects

// what === do is it checks the reference not the content of the object

const target = {a : "a" }
const source = {b : "b" }

const returnedtarget = Object.assign(target, source) // it will merge the two objects and return the target object
console.log(target) // { a: 'a', b: 'b' }
console.log(returnedtarget) // { a: 'a', b: 'b' }
console.log(target === returnedtarget) // true because both are pointing to the same reference

console.log(newobj) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const user = [
    {userid : "1234" , name : "Anshul"},
    {userid : "5678", name : "John"},
    {userid : "91011", name : "Doe"}
]
user[1].name // leaving it like this will not print anything
// console.log(user[1].name) // John
 console.log(Object.keys(tinderuser2))
    console.log(Object.values(tinderuser2))
    console.log(Object.entries(tinderuser2)) // it will give an array of arrays 
    // for example [ [ 'id', '1234' ], [ 'name', 'Anshul' ], [ 'isLoggedIn', false ], [ 'fullname', { userfullname: [Object] } ] ]
    console.log(tinderuser2.hasOwnProperty("name")) // true
    console.log(tinderuser2.hasOwnProperty("country")) // false

const course = {
    coursename : "javascript",
    price : "999",
    courseInstructor : "Anshul",  
}
const {coursename : courseName} = course // destructuring and renaming it
console.log(courseName) // javascript


// {
//     "coursename" :  "Anshul",
//     "price" : "999",
//     "courseInstructor" : "Anshul",//synactically correct but semantically incorrect i.e it will give error in other languages
// }//it is json format

// [
//     {
//         "coursename" :  "Anshul",
//         "price" : "999",
//         "courseInstructor" : "Anshul",
//     }
// ]

// Api is a way to communicate between two softwares 