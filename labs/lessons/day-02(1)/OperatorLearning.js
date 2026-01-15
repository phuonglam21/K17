let myNum1 = 1;
let myNum2 = 2;

//1. Right operand and left operand
let result = myNum1 + myNum2;
console.log('Total value' + result);
console.log('Total value:', result);
//String litteral /template: badsic 


console.log(`5/2: ${5 / 2}`);
console.log(`4/2: ${4 / 2}`);
console.log(`10/4: ${10 / 3}`);

//Rounding nearest
let roundingNearest = Math.round( 9 / 2);
console.log(`9/2(Rounding nearest): ${roundingNearest}`);

//Rounding floor
let roundingFloor = Math.floor( 9 / 2);
console.log(`9/2(Rounding floor): ${roundingFloor}`);

//Rounding ceil
let roundingCeil = Math.ceil( 9 / 2);
console.log(`9/2(Rounding ceil): ${roundingCeil}`);

//to fixed number 