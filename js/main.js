//type conversion
const inputYear = `1991`;
console.log(typeof inputYear);

console.log(Number(inputYear), inputYear) //inputYear still holds the string value
console.log(inputYear + 18); //thats why this doesnt work
console.log(Number(inputYear) + 18) //this works

console.log(String(23));

//type coercion
console.log('I am ' + 23 + ' years old'); //number converted to a string by js, by +
console.log(`I am ${23} years old`) //Template literals, used with backticks
console.log('23' - '10' - 3 ); //is a number
console.log('23' * '10'); //converted to a number
console.log('23' + 5); //is a STRING thx to + sign

let n = `1` + 1;
n++;
console.log(n); //12 because we have a string so 1 + 1 here is 11, n++ means n+1

//5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0; //falsy value, if it's a different number, its truthy
if(money) {
    console.log("Don't spend it all")
} else {
    console.log('You should get a job')
};

let height; //= 0 would also be undefined
if (height) {
    console.log('Yay height is defined')
} else {
    console.log('Oh no, height is undefined')
};

const age = 18;
if (age === 18) console.log('You just became an adult'); //dont need the block {} if we have one line of code
//age === 18 - true
//18 === 18

// const favNumber = prompt('Whats your favourite number ?')
// console.log(favNumber);
// console.log(typeof favNumber);
// if (favNumber == 23) {
//     console.log('Coooool !')
// } //loose

const favNumber2 = parseInt(prompt('Whats your favourite number ?'));
console.log(favNumber2);
console.log(typeof favNumber2);
if (favNumber2 === 23) {
    console.log('Coooool !')
} else if (favNumber2 === 20) {
    console.log('Thats my favorite number !')
} else if (favNumber2 === 2) {
    console.log('My second favourite number !')
} else {
    console.log("That's awesome !")
} //strict

if (favNumber2 !== 20) console.log('Why not 20 ? That is MY favourite number !') //its also strict because I have !== not !

const hasDriversLicence = true; //A
const hasGoodVision = false; //B

console.log(hasDriversLicence && hasGoodVision); //A && B (and)
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasGoodVision);

const shouldDrive = hasDriversLicence && hasGoodVision;
if (shouldDrive) {
    console.log('Sarah is abe to drive')
} else {
    console.log('Someone else should drive!')
}

const isTired = true;
console.log(hasDriversLicence && hasGoodVision && isTired)

if (hasDriversLicence && hasGoodVision && !isTired ) {
    console.log('Sarah is able to drive')
} else {
    console.log('Someone else should drive');
}