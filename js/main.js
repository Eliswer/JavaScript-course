// Loops
// Loops allow programs to perform repetitive tasks, such as iterating through an array

// For loop, it has a counter

// console.log('Lifting weights repetition 1')
// console.log('Lifting weights repetition 2')
// console.log('Lifting weights repetition 3')
// console.log('Lifting weights repetition 4')
// console.log('Lifting weights repetition 5')
// console.log('Lifting weights repetition 6')
// console.log('Lifting weights repetition 7')
// console.log('Lifting weights repetition 8')
// console.log('Lifting weights repetition 9')
// console.log('Lifting weights repetition 10')

//creating a value and telling it where to start
//rep++ is the same as rep = rep + 1;
for (let rep = 1; rep <= 10; rep++) { //as soon as this condition is false the loop stops = rep <=10 aka for loop keeps running while condition is TRUE
    console.log(`Lifting weights repetition ${rep}`)
};

const eliArray = [
    'Eli',
    'Bond',
    2022 - 2003,
    'programmer',
    ['Denisa', 'Ivana', 'Clare'],
    true
];

const types = []; //empty array

// console.log(eliArray[0]);
// console.log(eliArray[1]);
// --------
// console.log(eliArray[4]);
//eliArray[5] does not exist

for (let i = 0; i < eliArray.length; i++ ) {
    //reading from eliArray array
    console.log(eliArray[i], typeof eliArray[i]);

    //filling types array
    types[i] = typeof eliArray[i];
    types.push(typeof eliArray[i]);
}

console.log(types);

////

const years = [
    1991,
    2007,
    1969,
    2020
];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2022 - years[i]); //2022 - 1991, then 2022 - 2007 and so on, thanks to the years[i] = stored in ages
}
console.log(ages);

// continue and break
// The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.
// The break statement ends the loop ("breaks" the loop) when there is a met condition
console.log('---- ONLY STRINGS ----');
for (let i = 0; i < eliArray.length; i++ ) {
    if (typeof eliArray[i] !== 'string') continue;

    console.log(eliArray[i], typeof eliArray[i]);
}

console.log('---- BREAK WITH NUMBER ----');
for (let i = 0; i < eliArray.length; i++ ) {
    if (typeof eliArray[i] == 'number') break;

    console.log(eliArray[i], typeof eliArray[i]);
}

////
console.log('---- LOOPING BACKWARDS ----')

const eli = [
    'Eli',
    'Bond',
    2022 - 2003,
    'programmer',
    ['Denisa', 'Ivana', 'Clare'],
    true
];

//looping through an array backwards
for (let i = eli.length - 1; i >= 0; i--) {
    console.log(i, eli[i]);
}

////
for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`--- Starting exercise ${exercise}`);

    for (let rep2 = 1; rep2 < 6; rep2++) {
        console.log(`Exercise ${exercise} lifting weight repetition ${rep2}`)
    }
}

// While loop

for (let rep3 = 1; rep3 <= 10; rep3++) {
    console.log(`FOR: Lifting weights repetition ${rep3}`)
};


let rep = 1;
while (rep <= 10) { //it will run while this condition is true
    console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++
};

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end !')
};