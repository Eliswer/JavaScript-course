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