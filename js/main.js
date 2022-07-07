let js = 'amazing';
//if (js === 'amazing') alert('JavaScript is fun');
console.log(40 + 8 + 2 + 20);

console.log('Jonas');
console.log(23);

//let firstName = 'Eli';
//console.log(firstName);

/*Data types
NUMBERS - let age = 23;
STRINGS - sequence of characters - let name = 'Jonas';
BOOLEAN - true or false

More data types
UNDEFINED - variable without a value - let children;
NULL - empty value
SYMBOL - unique and cannot be changed
BIGINT - another type of numbers

in js u do not have to define the data type, js determines that automatically
variable stores values that has a type !!!!!!, we can later assign different value to the same variable
*/

let JavaScriptIsFun = true;
console.log(JavaScriptIsFun);

console.log(typeof '4');
console.log(typeof true);
console.log(typeof 20);
console.log(typeof JavaScriptIsFun);

JavaScriptIsFun = 'YES!' //new value to a variable assigned before
console.log(typeof JavaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2003;
console.log(typeof year);

//Three different ways how to declare variables
let age = 20;
age = 21; //we mutate the age variable, we reassign it

const birth = 2000;
//birth = 2001; //this variable cant be mutated
//const job; //this varibale cant be empty, we need an initial value
//better to use const

let job = 'programmer';
job = 'teacher';
//similar to let, older version, don't use it

//OPERATORS
//math operators
const now = 2037;
const ageEli = now - 1991;
const ageSarah = now - 2013;
console.log(ageEli, ageSarah);
//two values
console.log(ageEli * 2, ageEli / 2, 2 ** 3)
//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

//putting two strings together = +
const firstName = 'Elis';
const lastName = 'Bond';
console.log(firstName + ' ' + lastName); // ' ' creating a space

//another operator is typeof - gives us the type of the value

//assigment operators
let x = 10 + 5;
x += 10; //x = x + 10; or x = 15 + 10; =25
x *= 4; //x = 25 * 4 = 100;
x++; //100+1 = 101
x--; //100 - 1 = 99
//there is no equal sign, so this result is not 100 again
console.log(x);

//Comparison operators = to make boolean
console.log(ageEli > ageSarah);
//is the Elis age greater than Sarah's age ? Yes = TRUE
// <, >, <=, =>
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);