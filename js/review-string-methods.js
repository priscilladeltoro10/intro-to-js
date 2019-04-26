// 3. in this file:
//     a. create a string variable & assign its value to be  `Hello World!`
//     b. output the variable to console.
//     c. output only the first word (i.e `Hello`)
//     d. output only the second word (i.e. `World`)
// 4. add, commit to this branch
// 5. continue working on same branch & file
// 6. create 2 string variables that store make & model of your car respectively
// 7. output the concatenated result of both of the above string variable using different ways
// 8. add, commit & push to GH

var str1 = 'Hello World!';
console.log(str1);

var str2 = str1.split(' '); //splits wherever there is a space
console.log(str2);
console.log(str2[0]);
console.log(str2[1].split('!')[0]);

//charAt 'character at'
console.log(str1.charAt(0)); //returns value at 0 index
console.log(str1.charAt(str1.length-1));

//substring
console.log(str1.substring(0));//outputs Hello World!
console.log(str1.substring(0,5));//outputs Hello (beginning index, end index)
console.log(str1.substring(6,11)); //outputs World
console.log(str1.substring(6, str1.length-1)); //outputs World

//substr
console.log(str1.substr(0));//outputs Hello World!
console.log(str1.substr(0,5)); //outputs Hello (beginning index, length from that index)

//text transform to upper case
console.log(str1.toUpperCase());
//text transform to lower case
console.log(str1.toLowerCase());

