const marvel_heros = ["Ironman", "Thor", "Spiderman"]
const dc_heros = ["Superman",  " Flash", "Batman"]

marvel_heros.push(dc_heros) // adds the entire dc_heros array as a single element
console.log(marvel_heros) // ["Ironman", "Thor", "Spiderman", Array(3)]

const all_heros = marvel_heros.concat(dc_heros) // merges the two arrays
console.log(all_heros) // ["Ironman", "Thor", "Spiderman", "Superman", " Flash", "Batman"]

const all_heros2 = [...marvel_heros, ...dc_heros] // merges the two arrays using spread operator
console.log(all_heros2) // ["Ironman", "Thor", "Spiderman", "Superman", " Flash", "Batman"]

const another_array = [1, 2, 3, [4,5],7,[8,9,[10,11]]]
const real_another_array = another_array.flat(Infinity) // flattens the array to a single level
console.log(real_another_array) // [1, 2, 3, 4, 5, 7, 8, 9, 10, 11]

// if flat(some number) is used, it flattens the array to that level only for example, flat(1) will flatten the array to one level only i.e

console.log(Array.isArray(Anshul)) // false
console.log(Array.from(Anshul)) // ['A', 'n', 's', 'h', 'u', 'l']
console.log(Array.from({name: "Anshul"})) // [] // as the object is not iterable interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // [100, 200, 300]