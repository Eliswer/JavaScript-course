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

//2
for (let input = 1; input <= 10; input++) {
    console.log(input);
}

for (let input = 10; input >= 1; input--) {
    console.log(input);
}

//2.1
let numbersArr = [];
numbersArr.push(Math.random());
numbersArr.push(Math.random());
numbersArr.push(Math.random());
numbersArr.push(Math.random());
numbersArr.push(Math.random());
numbersArr.push(Math.random());
numbersArr.push(Math.random());
numbersArr.push(Math.random());
numbersArr.push(Math.random());
numbersArr.push(Math.random());


fruitsArr.forEach(function (values, index, arr){
    console.log(values);
})
console.log(numbersArr);

let numberOfElemenents = numbersArr.length
console.log(numberOfElemenents);

//2.2

function numbers(from, to) {
    from = 1;
    to = 10;
    if (from === 1 && to === 10) {
        console.log(for (let input = from; input <= to; input++) {
            console.log(input);
        })
    }
}