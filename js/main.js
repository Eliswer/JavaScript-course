// Coding Challenge #1

// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
//     BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

//     Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
//     GOOD LUCK �

//Data 1
const weightMark = 78;
const heightMark = 1.69;

const heightJohn = 1.95;
const weightJohn = 92;

let bmiMark = weightMark / heightMark **2;
let bmiJohn = weightJohn / heightJohn **2;
console.log(bmiMark, bmiJohn);

const markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

//Georgi`s task

// let userHeight = parseFloat(prompt('Whats your height in cm?'));
// let userWeight = parseFloat(prompt('Whats your weight in kg ?'));
// console.log(userWeight / userHeight ** 2);


//Coding challenge #2

// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
//     Your tasks:
//     1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
//      2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"

if (bmiJohn > bmiMark) {
    console.log(`John's BMI is higher than Mark's! his Bmi is ${bmiJohn}`)
} else {
    console.log(`Mark's BMI is higher than John's! His Bmi is ${bmiMark}`)
};

if (markHigherBMI === true) {
    console.log(`Mark's BMI is higher than John's! His Bmi is ${bmiMark}`)
} else {
    console.log(`John's BMI is higher than Mark's! his Bmi is ${bmiJohn}`)
}

//Coding challenge #3

const dolphinsData = (parseInt(96 + 108 + 89)/3);
console.log(dolphinsData);
const koalasData = (parseInt(88 + 91 + 110)/3);
console.log(koalasData);

if (dolphinsData > koalasData) {
    console.log('Dolphins won !')
} else if (dolphinsData < koalasData) {
    console.log('Koalas win !')
} else if (dolphinsData === koalasData) {
    console.log('It was a draw !')
} else {
    console.log('There was probably a mistake with the numbers :(')
}