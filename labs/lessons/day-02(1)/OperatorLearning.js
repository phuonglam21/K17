let myNum1 = 1;
let myNum2 = 2;

// 1. Right openrand and left operand
let result = myNum1 + myNum2;
console.log('Toal value :' + result);
console.log('Total value :', result);

//String literal/template: backstick

console.log(`5/2: ${5 / 2}`);
console.log(`4/2: ${4 / 2}`);
console.log(`10/3: ${10 / 3}`)

//Rounding nearest làm tròn gần 
let roundingNerest = Math.round(10 / 3);
console.log(` 10/3 ${roundingNerest}`);

//Rounding floor làm tròn lên 
let roundingFloor = Math.floor(9 / 2);
console.log(` 9/2 ${roundingFloor}`);

// Rounding ceiling làm tròn xuống
let roundingCeil = Math.ceil(10/3);
console.log(` 10/3(Rounding ceiling ): ${roundingCeil}`);

// T fixed number 
let anotherResult = 10 /3; 
let MAX_FLOATING_NUMBER = 2;
let toFixedNumber = anotherResult.toFixed(MAX_FLOATING_NUMBER);
console.log(` 10/3 to fixed number : ${toFixedNumber}`);

//Square  up a number
let squareNumber = 9 ** 3;
console.log(squareNumber);