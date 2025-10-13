//dates
let mydate = new Date()
console.log(mydate);
// console.log(typeof mydate);
// console.log(mydate.getDate());
// console.log(mydate.getDay());
// console.log(mydate.getFullYear());
// console.log(mydate.getHours());
// console.log(mydate.getMinutes());
// console.log(mydate.getMonth()); // month is 0 based index
//console.log(mydate.getDay()); // day is 0 based index

// console.log(mydate.toString()); 
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleTimeString());

let mydate2 = new Date("2020-05-01")
console.log(mydate2.toDateString());

let mydate3 = new Date(2020, 4, 1, 10, 33, 30, 0) // month is 0 based index
console.log(mydate3.toString());

let mydate4 = new Date(0) // epoch time
console.log(mydate4.toString()); // 1970-01-01T00:00:00.000Z

let mytimestamp = Date.now() // milliseconds since epoch time
console.log(mytimestamp);
console.log(mydate3.getTime()); // milliseconds since epoch time




//customise format  

console.log(mydate.toLocaleString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric", hour12: true }));

mydate3.toLocaleString('default',{
    weekday: 'long'
})