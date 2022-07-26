// Loops

//for loop, it has a counter

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
for (let rep = 1; rep <=10; rep++) { //as soon as this condition is false the loop stops = rep <=10 aka for loop keeps running while condition is TRUE
    console.log(`Lifting weights repetition ${rep}`)
}

const eliArray = [
    'Eli',
    'Bond',
    2022 - 2003,
    'programmer',
    ['Denisa', 'Ivana', 'Clare'],
    true
];

// console.log(eliArray[0]);
// console.log(eliArray[1]);
// --------
// console.log(eliArray[4]);
//eliArray[5] does not exist

for (let i = 0; i < eliArray.length; i++ ) {
    console.log(eliArray[i], typeof eliArray[i]);
}