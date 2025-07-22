
// ++, --
// let a =1 ;

//Prefix  thực thi trước  từ trái sang phải
// let myNumber = ++a;
// console.log(myNumber);
// console.log(a);


// //Postfix
// let myNumber = a++;
// console.log(myNumber);
// console.log(a);

let a = 1;
let b = 2;
let c = ++a + b++;
console.log(c);
console.log(a);
console.log(b);
console.log(`a = ${a}, b = ${b}, c = ${c}`);

//Dien tich hinh vuong
let length = 10;
let width = 5;
let S = length * width;
console.log(`length = ${length}, width = ${width},S = ${S}`);
console.log(` Dien tich hinh chu nhat = ${length * width}`);

// Chu vi hinh tron
let radius = 7;
let PI = Math.PI;
console.log(`chu vi hinh tron la ${(2 * PI * radius).toFixed(3)}`);



