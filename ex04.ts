/*
    Add types to the inputs and outputs of the following functions:
    Do not remove any code.
    Do not use the "any" type.
*/


function average(input) {
    return input.reduce((x,y) => x + y, 0) / input.length;
}

function printNTimes(N, message) {
    for(let i = 0; i < N; i ++) {
        console.log(message);
    }
}

function getLength(words) {
    return words.reduce((x,y) => x + y.length, 0);
}

function isEven(N) {
    return N%2 == 0;
}

function canVote(person) {
    return person.age >= 18 && person.bornInStates;
}

// Use the following function calls to deduce the types:
console.log(average([1,2,3,4,5,6]));
printNTimes(5, "Hello!");
console.log(getLength(['apple', 'banana', 'strawberry']));
console.log(isEven(30));
console.log(isEven(31));
console.log(canVote({age: 19, bornInStates: true}));
console.log(canVote({age: 15, bornInStates: true}));
console.log(canVote({age: 19, bornInStates: false}));
console.log(canVote({age: 10, bornInStates: false}));
