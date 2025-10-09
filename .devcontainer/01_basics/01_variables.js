const accId = 2233
let accemail = "anshy@gmail.com"
var accpass = "12345"
acccity = "Jaipur"
let accstate;
// changes in const is not acceptable
// var is not used because of scope incompatibility
//else can be changed

accemail = "anshul@ghmaio.com"
accpass = "13124321"
acccity = "bengluru"
//print single varibale/element
console.log(accId)
//print multiple in tabular form
console.table([accId,accemail,accpass,acccity])
//if variable is left declared and not initialised then it will show undefined when we print it
console.log(accstate);