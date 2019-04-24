//Array data type
var arr1 = []; //empty array (arrays defined by square brackets)
var arr2 = [1, 2]; //has 2 elements 
console.log(arr2);//shows both elements in their position starting at 0, so 0:1 and 1:2
console.log(arr2[1]); //inside brakets target the position, so this would be targeting 1:2

var arr3 = ['hi', 'hello', 'there'];
//display/output arr3
console.log(arr3);
//display/output 'there'
console.log(arr3[2]); //'there is in position 2
console.log(arr3[arr3.length - 1]); //'there' is last on list, so do length - 1 to target it

arr3.push('welcome');
console.log(arr3); //inserts 'welcome' to the very end of arr3
console.log(arr3[arr3.length-1]); //displays/outputs 'welcome' now that it's last

arr3.unshift('greeting');//inserts 'greeting' to beginning of arr3
console.log(arr3);

// arr3.splice(2, 1, 'Priscilla'); //(position, how many to delete, 'what to insert' instead)
// console.log(arr3);

// arr3.splice(2, 2); //removes two items in position 2 (inserting something else is optional)
// console.log(arr3);

arr3.splice(2, 2, 'Priscilla', 'Presto'); //removes two items in position 2 (inserts two items)
console.log(arr3);

arr3.splice(2,0,'hola'); //position 2 and does not delete anything, adds 'hola' text
console.log(arr3);

var arr4 = [10,40,'abc','xyz',true]; //not recommended to do this
console.log(arr4);

arr4.pop(); //removes last item of arr4
console.log(arr4);

arr4.shift();//removes first item of arr4
console.log(arr4);

var arr5 = arr4.slice(); //made a copy of arr4 at current state and will not alter arr5 any longer
console.log(arr5);

var arr6 = arr4;//equals arr4 and will change whenever arr4 changes

arr4.push(false);
console.log(arr4);
console.log(arr5);
console.log(arr6);

var arr7 = arr4.slice(1,3);//copies (start position, end position [must be position after the item wanted])
console.log(arr7);