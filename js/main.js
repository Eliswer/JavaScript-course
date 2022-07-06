const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25-10-5; //x = y = 10; x = 10;
console.log(x,y);
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

////////////////////////////////////////////////

//Template strings
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I`m " + firstName + ' a ' + (year - birthYear) + ' years old '
+ job + '!'
console.log(jonas);

const jonasNew = `Im ${firstName}, a ${year - birthYear} years old ${job}!`
console.log(jonasNew);
console.log(`This is a string with back ticks !`);

console.log(`String \n\
with \n\
multiple \n\
lines !`); //older version

console.log(`String
with
multiple
lines !`);

const age = 10;
const isOldEnough = age >=18; //boolean value
//control structure
if(isOldEnough === true) {
    console.log('You are old enough to have a driving license !')
} else {
    const yearsLeft = 18 - age;
    console.log(`You are not old enough to have a driving license ! Years left - ${yearsLeft}`)
}

const birthday = 1991;

let century;
if(birthday <=200) {
    century = 20;
} else {
    century = 21; //code block, this variable is not accessible outside this code block, if I dont created a variable outside like I did
}
console.log(century);