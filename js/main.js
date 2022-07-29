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

const calcAverage = (data1, data2, data3) => {
    return (data1 + data2 + data3) / 3;
}

const dolphinsData2 = calcAverage(85, 54, 41);
const koalasData2 = calcAverage(23, 34, 27);

const checkWinner = (avgDolphins, avgKoalas) => {
    console.log(avgDolphins, avgKoalas);
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins won ${avgDolphins} vs ${avgKoalas}!`)
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas won ${avgKoalas} vs ${avgDolphins}!`)
    } else {
        console.log(`Nobody won..`)
    }
}

checkWinner(dolphinsData2, koalasData2);


// Coding challenge #2

// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
//     1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
//      2. And now let's use arrays! So create an array 'bills' containing the test data
// below
//      3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
//      4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array)

const calculateTip = function(bill) {
 return bill >= 50 && bill <= 300 ? (bill * 0.15) : (bill * 0.2);
}

// const calculateTip = bill => bill >= 50 && bill <= 300 ? (bill * 0.15) : (bill * 0.2);

const bills = [125, 555, 44];
const tips = [calculateTip(bills[0]), calculateTip(bills[1]), calculateTip(bills[2])];
console.log(bills, tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);


// Coding challenge #3

// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
//     / (height * height) (mass in kg and height in meter)
// Your tasks:
//     1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
//      2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
//      3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
       this.bmi = this.mass / this.height **2;
       return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

mark.calcBMI(); //we need to explicitly call the function
john.calcBMI(); //we need to explicitly call the function
console.log(john.bmi, mark.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}s BMI ${mark.bmi} is higher than ${john.fullName}s BMI ${john.bmi}`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}s BMI ${john.bmi} is higher than ${mark.fullName}s BMI ${mark.bmi}`)
};


// Coding challenge #4

// Let's improve Steven's tip calculator even more, this time using loops!
//     Your tasks:
//     1. Create an array 'bills' containing all 10 test bill values
//     2. Create empty arrays for the tips and the totals ('tips' and 'totals')
//     3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
//     loop to perform the 10 calculations!
//     Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays �
// Bonus:

const billsArray = [
    22,
    295,
    176,
    440,
    37,
    105,
    10,
    1100,
    86,
    52
];

const tipsArray = [];
const totalsArray = [];

const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? (bill * 0.15) : (bill * 0.2);
};

for (let i = 0; i < billsArray.length; i++) {
    const tip = calcTip(billsArray[i]);
    tipsArray.push(tip);
    totalsArray.push(tip + billsArray[i]);
}
console.log(billsArray, tipsArray, totalsArray);