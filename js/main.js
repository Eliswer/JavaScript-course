const eliArray = [
    'Eli',
    'Bond',
    2022-2003,
    'programmer',
    ['Denisa', 'Ivana']
];

//objects = keys and values - keys are variable names
//this object has 5 properties, property firstName with the value of Eli ... and so on
const eli = {
    firstName: 'Eli',
    lastName: 'Bond',
    age: 2022 - 2003,
    job: 'programmer',
    friends: ['Denisa', 'Ivana']
}; //in arrays order matters, in object does not, arrays - structured data
console.log(eli);

console.log(eli.lastName);
console.log(eli['lastName']); //we can compute it here within an operation, aka an expression

const nameKey = 'Name';
console.log(eli['first' + nameKey]); //first + nameKey aka firstName = is put together, creates a string and acces my object for firstName and lastName
console.log(eli['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Eli ? choose between firstName, lastName, age, job and friends');
console.log(eli[interestedIn]);

if (eli[interestedIn]) { //is true / exists
    console.log(eli[interestedIn])
} else if (!eli[interestedIn]) {
    console.log("Thats not a value I gave you to choose from :( !!")
};

//adding keys and values into objects
eli.location = 'Czech Republic'; //I CANNOT use this in my interestedIn
eli['instagram'] = '@_eliswer_';
console.log(eli);

console.log(`${eli.firstName} has ${eli.friends.length} friends, and her best friends is ${eli.friends[0]}`);
