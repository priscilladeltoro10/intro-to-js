//boolean data type
var a = true; //equals value 1
var b = false; //equals value 0
//only two values boolean can have; no quotations

console.log(12 == '12');
console.log(24 === '24');

//isNaN = is Not a Number
console.log(isNaN(2000));//false
console.log(isNaN("'2000'")); //turns out true
console.log(isNaN('04/23/2019'));//true ('/' makes it not a number)
console.log(isNaN('abc'));//true
console.log(isNaN(true));//false (true equals 1)
//want to figure out what it's not before figuring out what it is, have to figure out the false first
