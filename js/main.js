const day = 'thursday';
switch(day) { //then we define cases
    case 'monday': // day === monday, then this code is executed
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break; //without the break code stops executing, so I have to put it when we wanna stop it
    case 'tuesday':
        console.log('Prepare for coding');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write some code examples');
        break;
    case 'friday':
        console.log('record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day');
}

//when the number of conditions is large, switch is faster, other than that if / else is fine

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare for coding');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write some code examples')
} else if (day === 'friday') {
    console.log('record videos')
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D')
} else {
    console.log('Not a valid day')
}

//expressions X statements / operators
//expression = piece of code that produces a value e.g. 3+4, 1991, true && false && !false
//statements performs an action but does not provide a value e.g. if (23 > 10) {const str = '23 is bigger'}
//statements end with semicolon ;

const me = 'Eli'
console.log(`I'm ${2037 - 1991} years old ${me}`) //this is an expression, just like 'me'. if is a statement


//deternary operator, if the conditions are met, console log wine, else console log water
const ageMine = '19';
// ageMine >= 18 ? console.log('I like to drink wine') :
//     console.log('I like to drink water');

const drink = ageMine >= 18 ? 'wine' : 'water';
console.log(drink);

let drinkMine2; //deternary operator is faster and shorter, for fast and short decisions and expressions
if(ageMine >= 18) {
    drinkMine2 = 'wine';
} else {
    drinkMine2 = 'water'
}
console.log(drinkMine2);

console.log(`I like to drink ${ageMine >= 18 ? 'wine' : 'water'}`)