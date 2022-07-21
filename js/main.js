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
console.log(yearsUntilRetirement(1950, `Mike`));