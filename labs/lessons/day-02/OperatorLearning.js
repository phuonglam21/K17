let myNum1 = 1;
let myNum2 = 2;

//1. Right openrand and left operand
let result = myNum1 + myNum2;
console.log(`total value:` + result);
console.log(`total value:`.result);
// String litteral/ template: backstick

console.log(`5/2: ${5 / 2}`);
console.log(`4/2: ${4 / 2}`);
console.log(`10/3: ${10 / 3}`);

//Rounding  nearest  (Làm tròn xuống)
let roundingNearest = Math.round(9 / 2);
console.log(`9/2(Rounding  nearest): ${roundingNearest}`);

//Rounding  floor (Làm tròn lên)
let roundingFloor = Math.floor(9 / 2);
console.log(`9/2(Rounding  floor): ${roundingFloor}`);

//Rounding  ceiling (Làm tròn gần nhất)
let roundingCeiling = Math.ceil(10 / 3);
console.log(`10/3 (Rounding Ceiling): ${roundingCeiling}`);

// To fixed number 
let anotherResult = 10 / 3;
let MAX_FLOATING_NUMBER = 2;
let toFixednumber = anotherResult.toFixed(MAX_FLOATING_NUMBER);
console.log(`10/3(To Fix number): ${toFixednumber}`);

//Square up a number
let squareNumber = 9 ** 3;
console.log(`total value: ${squareNumber}`);

//console.log(squareNumber);

