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