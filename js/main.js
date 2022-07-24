const calcAge = function(birthYear) {
    return 2037 - birthYear;
} //1991 becomes a number for both birthYear parameters, although they are not related, they are passed the number inside them

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        //return retirement; - anything after return is ignored
        console.log(`${firstName} retires in ${retirement} years.`)
        return retirement;
    } else {
        console.log(`${firstName} has already retired.`)
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, `Jonas`));
console.log(yearsUntilRetirement(1950, `Mike `));


//// Arrays

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Peter', 'Steven']; //array with [] brackets, way more usual, literal syntax
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020); //instead of the brackets

console.log(friends[0]); //arrays start at 0, the first value is 0 aka Michael
console.log(friends[2]);

console.log(friends.length); //exact amount of elements in an array, not 0 based. we start at 1
console.log(friends[friends.length - 1]); //3 - 1 = 2 / Steven = position 2 in an array

friends[2] = 'Jay'; //changing data of Steven
console.log(friends);
// friends = ['Bob', 'Alice'] = cant do, I can change only value by value in an array

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends]; //array and other variables can be stored in arrays
console.log(jonas);
console.log(jonas.length);

////

const calcAge2 = function(birthYear) {
    return 2037 - birthYear;
}
const years2 = [1990, 1967, 2002, 2010, 2018];
// calcAge(years2); //not gonna work
const age1 = calcAge2(years[0]);
const age2 = calcAge2(years[1]);
const age3 = calcAge2(years[years.length-1]);
console.log(age1, age2, age3);

const ages = [calcAge2(years[0]), calcAge2(years[1]), calcAge2(years[years.length-1])]; //storing a value produces from my function into an array
////

//add elements
const bestFriends = ['Eli', 'Denisa','Ivana'];
const newLenght = bestFriends.push('Jay'); //adding a new element to the end of an array, push is a function, passing arguments into function
//we stored the result of a function push into a variable
console.log(bestFriends);
console.log(newLenght);

bestFriends.unshift('John'); //added new elements at the start of an array
console.log(bestFriends);

//remove elements
bestFriends.pop(); //removes the last elements
const popped = bestFriends.pop();
console.log(popped); //console logs me what the function does = Ivana = cuz she is being removed
console.log(bestFriends);

bestFriends.shift(); //remove an element from the start of an array
console.log(bestFriends);

console.log(bestFriends.indexOf('Denisa'));
console.log(bestFriends.indexOf('Steven')); //-1 cuz we dont have Steven in our array

console.log(bestFriends.includes('Steven')); //if Steven is included in bestFriends = false
console.log(bestFriends.includes('Eli')); //true

console.log('/////////')
//
bestFriends.push(230);
console.log(bestFriends.includes('230'));
console.log(bestFriends.includes(230));

if (bestFriends.includes('Peter')) { //only if this is true, if - works with booleans
    console.log('You have a friend named Peter !')
} else if (bestFriends.includes('Eli')) {
    console.log('You have a friend named Eli')
}