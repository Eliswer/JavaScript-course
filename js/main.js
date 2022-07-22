// Array Practice + Google Research <3
//
// 1.)
// - create an empty array called 'fruitsArr'
// - fill the array with 5 fruits by using the push method (arr.push)
// - loop through the array with forEach and print all of the fruits
//
// 2
// - use for loop to print the numbers from 1 to 10
// - use a second for loop to print the numbers from 10 to 1
//
// 2.1.)
// - create an empty array called 'numbersArr'
// - use a for loop to loop 10 times
// - add 10 randomly generated numbers to the array by using the push method inside the 'for' loop
// - print the array
// - print the single numbers using foreach or doing it inside the for loop
//                                                                     - print the number of elements the array contains by using .length
//
// 2.2)
// - create a new function that takes two parameters (from, to)
// - from is used for the starting number e.G. 1
// - to is used for the ending number e.G 10
// - use for loops and if statements to print the wanted result
//
// Example: from -> 5, to -> 15 then the function will print the numbers from 5 to 15, from -> 15 & to -> 5 then the function will print the numbers from 15 to 5
//
// 2.3)
// - replace the fixed values with user input

//1
let fruitsArr = [];
fruitsArr = ['apple', 'banana', 'orange', 'pomegranate', 'pear'];
const arrPush = fruitsArr.push('melon');

fruitsArr.forEach(function(printValues, index, arr){
    console.log(printValues);
})

console.log("Length of array: " + fruitsArr.length);

for (let i = 0; i <= fruitsArr.length - 1; i++) {
    console.log(fruitsArr[i]);
}
console.log("Length of array: " + fruitsArr.length);

for (let i = fruitsArr.length - 1; i >= 0; i--) {
    console.log(fruitsArr[i]);
}

//2
for (let i = 1; i <= 10; i += 2) {
    console.log(i);
}

for (let input = 10; input >= 0; input--) {
    console.log(input);
}

//2.1
let numbersArr = [];



for (let input = 0; input <= 10; input++) {
    numbersArr.push(Math.random());
}

fruitsArr.forEach(function (values, index, arr){
    console.log(values);
});

console.log(numbersArr);

let numberOfElemenents = numbersArr.length
console.log(numberOfElemenents);

//2.2

function numbers(from, to) {
    if (from < to) {
        for (let i = from; i <= to; i++) {
            console.log(i);
        }
    } else if (from > to) {
        for (let i = from; i >= to; i--) {
            console.log(i);
        }
    } else {
        console.log("Both values are equal");
    }
}


console.log('2.2 START')
numbers(15, 2);

console.log('2.2 END')

for (let j = 0; j < 5; j++) {
    consoleLogEli();
}

function consoleLogEli() {
    console.log('Eli');
}

function printName(times, name) {
    for (let i = 1; i <= times; i++) {
        console.log(name);
    }
}

printName(30, 'Georgi');

//////

const dolphinsData2 = calcAverage(85, 54, 41);
const koalasData2 = calcAverage(23, 34, 27);

checkWinner(dolphinsData2, koalasData2);

function calcAverage(data1, data2, data3) {
    return (data1 + data2 + data3) / 3;

}

function checkWinner(avgDolphins, avgKoalas) {
    console.log(avgDolphins, avgKoalas);
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins won ${avgDolphins} vs ${avgKoalas}!`)
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas won ${avgKoalas} vs ${avgDolphins}!`)
    } else {
        console.log(`Nobody won..`)
    }
}