


const currencies = new Map (
    ['USD', 'United States Dollar'],
    ['EUR', 'Euro'],
    ["CNY", 'Chinese yuan']
);

const transactions = [300, 250, 5000, 1500, -1000, 200];

/*

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'y', 'q'];
const slicedCopyLetters = letters.slice();
console.log(slicedCopyLetters);

//letters.slice(1, 5);
console.log(letters.slice(3));

const slicedLetters = letters.slice(-3);
console.log(slicedLetters);


*/

//const letters = ['a', 'b', 'c', 'd', 'e'];
//console.log(letters.splice(1, 3));
console.log(letters.splice(-1));
console.log(letters);


//const letters = ['a', 'b', 'c', 'd', 'e'];
//console.log(letters);
console.log(letters.reverse());
console.log(letters);


const letters1 = ['a', 'b', 'c', 'd', 'e'];
const letters2 = ['f', 'g', 'y', 'q', 'w'];

//console.log(letters1.concat(letters2));
//console.log(letters1);

const concatedLetters = letters1.concat(letters2);
console.log(concatedLetters);
console.log(letters1);