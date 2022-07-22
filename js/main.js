//JavaScript Fundamentals – Part 1

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

const dolphinsData = (88 + 91 + 110)/3;
console.log(dolphinsData);
const koalasData = (88 + 91 + 310)/3;
console.log(koalasData);

if (dolphinsData > koalasData) {
    console.log('Dolphins won !')
} else if (dolphinsData < koalasData) {
    console.log('Koalas win !')
} else if (dolphinsData === koalasData) {
    console.log('It was a draw !')
} else {
    console.log('No one won, sorry !')
}

const winnerTeam = (dolphinsData === koalasData)
console.log(winnerTeam, dolphinsData);

if (dolphinsData > koalasData && dolphinsData >=100) {
    console.log('Dolphins won !')
} else if (dolphinsData < koalasData && koalasData >=100) {
    console.log('Koalas win !')
} else if (winnerTeam && dolphinsData >=100) {
    console.log('It was a draw !')
} else {
    console.log('No one won, sorry !')
}


//Coding challenge #4

// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
//     this. It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
//     operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”

// Test data:
//     § Data 1: Test for bill values 275, 40 and 430

// Hints:
//     § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 �

let bill = 40;
const tipCalc = bill >= 50 && bill <= 300 ? (bill * 0.15) : (bill * 0.2);

console.log(tipCalc);
const moneyReceived = tipCalc + bill
console.log(`The bill was ${bill}, the tip was ${tipCalc} and the total value was ${tipCalc + bill}`);



//JavaScript Fundamentals – Part 2

// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
//     gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
//      one average score per team).
// A team only wins if it has at least double the average score of the other team.
//     Otherwise, no team wins!
//     Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
//     Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
//     § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
//     § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
//     Apply this to the team's average scores

const calcAverage 