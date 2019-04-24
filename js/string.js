// string data type
var str1 = "It's Tuesday"; //use double quotation to avoid breaking string due to punctuation
//console.log(str1);

var str2 = 'It\'s Tuesday'; //use single quotation to separate from code; use \ for punctuation
//console.log(str2);

console.log(str1, str2);

var firstName = "Priscilla"; //camelCase naming convention; use for main variable in project
console.log(firstName);

var last_name = "Presto"; //snake naming convention; use for object key names
console.log(last_name);


//string concatation
// var fullName = firstName + ' ' + last_name; //adding ' ' w/ a space creates space between names
// console.log(fullName);

//other way
// var fullName = firstName.concat(' ', last_name); 
// console.log(fullName);
var fullName = firstName.concat(' ').concat(last_name); 
console.log(fullName);
//either of these will create a space between names