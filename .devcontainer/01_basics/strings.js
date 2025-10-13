const name = "anshul"
const value = 50
console.log(name + " has " + value + " apples") // outdated way
console.log(`${name} has ${value} apples`) // updated way using template literals
console.log(name.charAt(2)) // returns char at index 2
console.log(name.indexOf("s")) // returns index of first occurence of s
console.log(name.lastIndexOf("h")) // returns index of last occurence of h
console.log(name.slice(1, 4)) // returns string from index 1 to 4-1
console.log(name.replace("anshul", "hitesh")) // replaces anshul with hitesh


const gamename = new String("chess") // creates a string object
console.log(gamename);
console.log(typeof gamename);
console.log(gamename[0]); // accessing char at index 0
console.log(gamename.__proto__) 



const newname = gamename.substring(1, 4) // returns string from index 1 to 4-1
console.log(newname);
const anothername = gamename.slice(-4, -1) // returns string from index -4 to -1-1
console.log(anothername);

console.log(gamename.trim()) // removes whitespace from both ends
console.log(gamename.startsWith("ch")) // returns true if string starts with ch

const url = "https://anshul.com/anshul%20yadav"
console.log(url.replace("%20", "-")) // replaces %20 with -

console.log(url.includes("anshul")) // returns true if string contains anshul   
console.log(url.split("/")) // splits string into array at each / meaning it will return array of 3 elements i.e ["https:","","anshul.com","anshul%20yadav"]