'use strict'; //reserves words and shows us bugs

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

function logger () { //=reusing code
    //function body
    console.log('My name is Eli :)')
}

logger(23); //calling / running / invoking / executing the function
logger(); //specifying parameters is useless sometimes
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples with ${oranges} oranges.`
    return juice; //result, can be reused anywhere in my code, outside my function, only when I return
}
                                    //arguments
const appleJuice = fruitProcessor(5, 0); //storing my return in a variable
console.log(appleJuice);
console.log(fruitProcessor(5,0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//// function declaration

function calcAge1 (birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

//// function expression
////anonymous function - expression produces value
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
} //this variable holds this functions value, functions are value, they produce value

const age2 = calcAge2(1991);
console.log(age1, age2);

////Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);


const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

////Functions calling other functions

function cutPieces(fruit2) {
    return fruit2 * 4;
}

function fruitProcessor2(apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`
    return juice;
}
console.log(fruitProcessor(2, 3));